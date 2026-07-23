import { mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import sharp from "sharp";
import { homeSourceMap, projectSourceMap } from "./project-source-map.mjs";

export function naturalImageSort(a, b) {
  return a.localeCompare(b, "ko", { numeric: true, sensitivity: "base" });
}

function comparablePath(value) {
  const resolved = path.resolve(value);
  return process.platform === "win32" ? resolved.toLowerCase() : resolved;
}

function isSameOrInside(candidate, parent) {
  const relative = path.relative(comparablePath(parent), comparablePath(candidate));
  return relative === "" || (!relative.startsWith(`..${path.sep}`) && relative !== "..");
}

async function cleanManagedOutput({ sourceRoot, publicRoot }) {
  if (!path.isAbsolute(publicRoot)) throw new Error("publicRoot must be an absolute path");
  const resolvedPublicRoot = path.resolve(publicRoot);
  if (comparablePath(resolvedPublicRoot) === comparablePath(path.parse(resolvedPublicRoot).root)) {
    throw new Error("Refusing to clean a filesystem root");
  }

  const managedDirectories = ["projects", "home", "services"]
    .map((name) => path.resolve(resolvedPublicRoot, name));
  for (const directory of managedDirectories) {
    if (comparablePath(path.dirname(directory)) !== comparablePath(resolvedPublicRoot)) {
      throw new Error(`Managed output escapes publicRoot: ${directory}`);
    }
    if (isSameOrInside(sourceRoot, directory) || isSameOrInside(directory, sourceRoot)) {
      throw new Error(`Managed output overlaps source: ${directory}`);
    }
  }

  await Promise.all(managedDirectories.map((directory) =>
    rm(directory, { recursive: true, force: true })));
}

async function listWebpFiles(directory, relativeDirectory = "") {
  const files = [];
  for (const entry of await readdir(path.join(directory, relativeDirectory), { withFileTypes: true })) {
    const relativePath = path.join(relativeDirectory, entry.name);
    if (entry.isDirectory()) {
      files.push(...await listWebpFiles(directory, relativePath));
    } else if (entry.isFile() && entry.name.toLowerCase().endsWith(".webp")) {
      files.push(relativePath);
    }
  }
  return files;
}

async function convertImage({ input, output, publicSrc, maxWidth, quality, alt }) {
  await mkdir(path.dirname(output), { recursive: true });
  const source = await readFile(input);
  const metadata = await sharp(source)
    .rotate()
    .resize({ width: maxWidth, fit: "inside", withoutEnlargement: true })
    .webp({ quality, effort: 4 })
    .toFile(output);
  if (!metadata.width || !metadata.height) {
    throw new Error(`Missing dimensions after conversion: ${output}`);
  }
  return {
    src: publicSrc,
    width: metadata.width,
    height: metadata.height,
    alt,
  };
}

async function buildProjectAssets({ sourceRoot, publicRoot, projectMap }) {
  const entries = {};
  for (const { sourceFolder, slug } of projectMap) {
    const sourceDir = path.join(sourceRoot, sourceFolder);
    const files = (await listWebpFiles(sourceDir)).sort(naturalImageSort);
    if (files.length === 0) throw new Error(`No WEBP files: ${sourceFolder}`);

    const gallery = [];
    for (const [index, file] of files.entries()) {
      const number = String(index + 1).padStart(2, "0");
      gallery.push(await convertImage({
        input: path.join(sourceDir, file),
        output: path.join(publicRoot, "projects", slug, `detail-${number}.webp`),
        publicSrc: `/images/projects/${slug}/detail-${number}.webp`,
        maxWidth: 2000,
        quality: 82,
        alt: `${slug} project image ${index + 1}`,
      }));
    }

    const coverSource = path.join(sourceDir, files[0]);
    const thumbnail = await convertImage({
      input: coverSource,
      output: path.join(publicRoot, "projects", slug, "thumbnail.webp"),
      publicSrc: `/images/projects/${slug}/thumbnail.webp`,
      maxWidth: 960,
      quality: 76,
      alt: `${slug} project thumbnail`,
    });
    entries[slug] = { thumbnail, gallery };
  }
  return entries;
}

async function buildHomeAssets({ sourceRoot, publicRoot, homeMap }) {
  if (!homeMap) return null;
  const base = path.join(sourceRoot, homeMap.sourceFolder);
  const hero = [];
  for (const [index, file] of homeMap.heroFiles.entries()) {
    const number = String(index + 1).padStart(2, "0");
    hero.push(await convertImage({
      input: path.join(base, homeMap.heroFolder, file),
      output: path.join(publicRoot, "home", `hero-${number}.webp`),
      publicSrc: `/images/home/hero-${number}.webp`,
      maxWidth: 2000,
      quality: 82,
      alt: `제율디앤씨 대표 공간 ${index + 1}`,
    }));
  }

  const services = {};
  for (const [key, file] of Object.entries(homeMap.services)) {
    services[key] = await convertImage({
      input: path.join(base, homeMap.serviceFolder, file),
      output: path.join(publicRoot, "services", `${key}.webp`),
      publicSrc: `/images/services/${key}.webp`,
      maxWidth: 2000,
      quality: 82,
      alt: `제율디앤씨 ${key} 사업영역`,
    });
  }

  const sectionBackgrounds = [];
  for (const [index, file] of homeMap.sectionBackgrounds.entries()) {
    const number = String(index + 1).padStart(2, "0");
    sectionBackgrounds.push(await convertImage({
      input: path.join(base, homeMap.serviceFolder, file),
      output: path.join(publicRoot, "home", `section-${number}.webp`),
      publicSrc: `/images/home/section-${number}.webp`,
      maxWidth: 2000,
      quality: 82,
      alt: "",
    }));
  }
  return { hero, services, sectionBackgrounds };
}

async function writeGeneratedManifest(generatedFile, projectAssetMap, homeAssetMap) {
  await mkdir(path.dirname(generatedFile), { recursive: true });
  const jsonFile = generatedFile.replace(/\.ts$/, ".json");
  const payload = { projectAssetMap, homeAssetMap };
  await writeFile(jsonFile, `${JSON.stringify(payload, null, 2)}\n`, "utf8");
  await writeFile(
    generatedFile,
    [
      'import data from "./project-assets.json";',
      'import type { HomeAssetMap, ProjectAssetSet } from "@/lib/project-types";',
      "",
      "export const projectAssetMap = data.projectAssetMap as Record<string, ProjectAssetSet>;",
      "export const homeAssetMap = data.homeAssetMap as HomeAssetMap;",
      "",
    ].join("\n"),
    "utf8",
  );
}

export async function buildAssetBundle({
  sourceRoot,
  publicRoot,
  generatedFile,
  projectMap,
  homeMap,
}) {
  if (!path.isAbsolute(sourceRoot)) throw new Error("--source must be an absolute path");
  await cleanManagedOutput({ sourceRoot, publicRoot });
  const projectAssetMap = await buildProjectAssets({ sourceRoot, publicRoot, projectMap });
  const homeAssetMap = await buildHomeAssets({ sourceRoot, publicRoot, homeMap });
  await writeGeneratedManifest(generatedFile, projectAssetMap, homeAssetMap);
  return { projectAssetMap, homeAssetMap };
}

function readSourceArg(argv) {
  const index = argv.indexOf("--source");
  if (index === -1 || !argv[index + 1]) throw new Error("Usage: --source <absolute-path>");
  return path.resolve(argv[index + 1]);
}

async function runCli() {
  const repositoryRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
  const sourceRoot = readSourceArg(process.argv.slice(2));
  const result = await buildAssetBundle({
    sourceRoot,
    publicRoot: path.join(repositoryRoot, "public", "images"),
    generatedFile: path.join(repositoryRoot, "lib", "generated", "project-assets.ts"),
    projectMap: projectSourceMap,
    homeMap: homeSourceMap,
  });
  const projectImages = Object.values(result.projectAssetMap)
    .reduce((sum, assets) => sum + assets.gallery.length, 0);
  const homeImages = result.homeAssetMap.hero.length
    + Object.keys(result.homeAssetMap.services).length
    + result.homeAssetMap.sectionBackgrounds.length;
  process.stdout.write(
    `projects=${Object.keys(result.projectAssetMap).length}\n`
    + `projectImages=${projectImages}\n`
    + `homeImages=${homeImages}\n`,
  );
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  runCli().catch((error) => {
    process.stderr.write(`${error instanceof Error ? error.message : String(error)}\n`);
    process.exitCode = 1;
  });
}
