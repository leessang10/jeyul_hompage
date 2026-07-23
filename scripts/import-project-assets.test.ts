import { mkdtemp, mkdir, readFile, rm } from "node:fs/promises";
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
});
