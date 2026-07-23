import { access, mkdtemp, mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import sharp from "sharp";
import { afterEach, describe, expect, it } from "vitest";
import { buildAssetBundle, naturalImageSort } from "./import-project-assets.mjs";

const cleanups: string[] = [];

afterEach(async () => {
  await Promise.all(cleanups.splice(0).map((dir) => rm(dir, { recursive: true, force: true })));
});

describe("naturalImageSort", () => {
  it("sorts numbered images naturally", () => {
    expect(["10.webp", "2.webp", "1.webp"].sort(naturalImageSort)).toEqual([
      "1.webp",
      "2.webp",
      "10.webp",
    ]);
  });
});

describe("buildAssetBundle", () => {
  it("creates thumbnail/detail files without enlarging the source", async () => {
    const root = await mkdtemp(path.join(os.tmpdir(), "jeyul-assets-"));
    cleanups.push(root);
    const source = path.join(root, "source", "샘플");
    const output = path.join(root, "public");
    const generated = path.join(root, "project-assets.ts");
    await mkdir(source, { recursive: true });
    await sharp({
      create: { width: 32, height: 24, channels: 3, background: "#777777" },
    }).webp().toFile(path.join(source, "1.webp"));

    await buildAssetBundle({
      sourceRoot: path.join(root, "source"),
      publicRoot: output,
      generatedFile: generated,
      projectMap: [{ sourceFolder: "샘플", slug: "sample" }],
      homeMap: null,
    });

    const manifest = await readFile(generated.replace(/\.ts$/, ".json"), "utf8");
    expect(manifest).toContain('"sample"');
    expect(manifest).toContain('"width": 32');
    expect(manifest).toContain('"height": 24');
  });

  it("includes WEBP files from nested project folders", async () => {
    const root = await mkdtemp(path.join(os.tmpdir(), "jeyul-assets-nested-"));
    cleanups.push(root);
    const source = path.join(root, "source", "샘플", "A");
    const output = path.join(root, "public");
    const generated = path.join(root, "project-assets.ts");
    await mkdir(source, { recursive: true });
    await sharp({
      create: { width: 32, height: 24, channels: 3, background: "#777777" },
    }).webp().toFile(path.join(source, "1.webp"));

    await buildAssetBundle({
      sourceRoot: path.join(root, "source"),
      publicRoot: output,
      generatedFile: generated,
      projectMap: [{ sourceFolder: "샘플", slug: "sample" }],
      homeMap: null,
    });

    const manifest = JSON.parse(await readFile(generated.replace(/\.ts$/, ".json"), "utf8"));
    expect(manifest.projectAssetMap.sample.gallery).toHaveLength(1);
  });

  it("removes stale files only from managed output directories", async () => {
    const root = await mkdtemp(path.join(os.tmpdir(), "jeyul-assets-stale-"));
    cleanups.push(root);
    const source = path.join(root, "source", "샘플");
    const output = path.join(root, "public");
    const generated = path.join(root, "project-assets.ts");
    await mkdir(source, { recursive: true });
    await sharp({
      create: { width: 32, height: 24, channels: 3, background: "#777777" },
    }).webp().toFile(path.join(source, "1.webp"));

    const staleFiles = [
      path.join(output, "projects", "sample", "detail-99.webp"),
      path.join(output, "projects", "obsolete", "detail-01.webp"),
      path.join(output, "home", "stale.webp"),
      path.join(output, "services", "stale.webp"),
    ];
    await Promise.all(staleFiles.map(async (file) => {
      await mkdir(path.dirname(file), { recursive: true });
      await writeFile(file, "stale");
    }));
    const unmanagedFile = path.join(output, "keep.txt");
    await writeFile(unmanagedFile, "keep");

    await buildAssetBundle({
      sourceRoot: path.join(root, "source"),
      publicRoot: output,
      generatedFile: generated,
      projectMap: [{ sourceFolder: "샘플", slug: "sample" }],
      homeMap: null,
    });

    expect(await readdir(path.join(output, "projects", "sample"))).toEqual([
      "detail-01.webp",
      "thumbnail.webp",
    ]);
    await expect(access(path.join(output, "projects", "obsolete"))).rejects.toThrow();
    await expect(access(path.join(output, "home", "stale.webp"))).rejects.toThrow();
    await expect(access(path.join(output, "services", "stale.webp"))).rejects.toThrow();
    await expect(readFile(unmanagedFile, "utf8")).resolves.toBe("keep");
  });

  it("rejects cleanup when the source overlaps a managed output directory", async () => {
    const root = await mkdtemp(path.join(os.tmpdir(), "jeyul-assets-overlap-"));
    cleanups.push(root);
    const output = path.join(root, "public");
    const sourceRoot = path.join(output, "projects");
    const source = path.join(sourceRoot, "샘플");
    const generated = path.join(root, "project-assets.ts");
    const sourceFile = path.join(source, "1.webp");
    await mkdir(source, { recursive: true });
    await sharp({
      create: { width: 32, height: 24, channels: 3, background: "#777777" },
    }).webp().toFile(sourceFile);

    await expect(buildAssetBundle({
      sourceRoot,
      publicRoot: output,
      generatedFile: generated,
      projectMap: [{ sourceFolder: "샘플", slug: "sample" }],
      homeMap: null,
    })).rejects.toThrow("overlaps source");

    await expect(access(sourceFile)).resolves.toBeUndefined();
  });
});
