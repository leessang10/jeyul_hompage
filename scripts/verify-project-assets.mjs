import { access, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { projectSourceMap } from "./project-source-map.mjs";

const EXPECTED_PROJECTS = 40;
const EXPECTED_PROJECT_IMAGES = 228;
const EXPECTED_HOME_IMAGES = 14;

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function collectManifestImages(projectAssetMap, homeAssetMap) {
  const projectImages = Object.values(projectAssetMap)
    .flatMap((assets) => [assets.thumbnail, ...assets.gallery]);
  const homeImages = [
    ...homeAssetMap.hero,
    ...Object.values(homeAssetMap.services),
    ...homeAssetMap.sectionBackgrounds,
  ];
  return [...projectImages, ...homeImages];
}

async function verifyAssets() {
  const repositoryRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
  const manifestFile = path.join(repositoryRoot, "lib", "generated", "project-assets.json");
  const { projectAssetMap, homeAssetMap } = JSON.parse(await readFile(manifestFile, "utf8"));

  assert(projectAssetMap && typeof projectAssetMap === "object", "Missing projectAssetMap");
  assert(homeAssetMap && typeof homeAssetMap === "object", "Missing homeAssetMap");

  const slugs = projectSourceMap.map(({ slug }) => slug);
  assert(new Set(slugs).size === slugs.length, "Duplicate project slug");
  assert(Object.keys(projectAssetMap).length === EXPECTED_PROJECTS,
    `Expected ${EXPECTED_PROJECTS} projects`);

  for (const { slug } of projectSourceMap) {
    const assets = projectAssetMap[slug];
    assert(assets, `Missing project assets: ${slug}`);
    assert(Array.isArray(assets.gallery) && assets.gallery.length > 0,
      `Project gallery is empty: ${slug}`);
  }

  const projectImageCount = Object.values(projectAssetMap)
    .reduce((sum, assets) => sum + assets.gallery.length, 0);
  assert(projectImageCount === EXPECTED_PROJECT_IMAGES,
    `Expected ${EXPECTED_PROJECT_IMAGES} project gallery images, got ${projectImageCount}`);

  assert(Array.isArray(homeAssetMap.hero) && homeAssetMap.hero.length === 8,
    `Expected 8 homepage hero images, got ${homeAssetMap.hero?.length ?? 0}`);
  assert(Object.keys(homeAssetMap.services ?? {}).length === 4,
    `Expected 4 service images, got ${Object.keys(homeAssetMap.services ?? {}).length}`);
  assert(Array.isArray(homeAssetMap.sectionBackgrounds)
    && homeAssetMap.sectionBackgrounds.length === 2,
  `Expected 2 section backgrounds, got ${homeAssetMap.sectionBackgrounds?.length ?? 0}`);

  const homeImageCount = homeAssetMap.hero.length
    + Object.keys(homeAssetMap.services).length
    + homeAssetMap.sectionBackgrounds.length;
  assert(homeImageCount === EXPECTED_HOME_IMAGES,
    `Expected ${EXPECTED_HOME_IMAGES} homepage images, got ${homeImageCount}`);

  for (const image of collectManifestImages(projectAssetMap, homeAssetMap)) {
    assert(typeof image?.src === "string" && image.src.startsWith("/images/"),
      `Invalid manifest image path: ${image?.src}`);
    await access(path.join(repositoryRoot, "public", image.src.slice(1)));
  }
}

verifyAssets()
  .then(() => process.stdout.write("verification=passed\n"))
  .catch((error) => {
    process.stderr.write(`${error instanceof Error ? error.message : String(error)}\n`);
    process.exitCode = 1;
  });
