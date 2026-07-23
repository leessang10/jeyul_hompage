# 제율디앤씨 프로젝트 콘텐츠 통합 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** PPT와 WEBP 자산을 현재 Next.js 사이트에 연결해 40개 프로젝트 아카이브, 40개 상세 페이지, 메인 대표 프로젝트 8개, 이미지 히어로, PPT형 상담 신청 화면을 완성한다.

**Architecture:** 프로젝트 메타데이터는 TypeScript 정적 레지스트리로 관리하고, 다운로드 폴더의 WEBP는 명시적 source map과 Node/Sharp 가져오기 스크립트로 배포용 파생본을 만든다. 목록·상세·메인은 하나의 프로젝트 쿼리 계층을 공유하며, 실제 전송 백엔드가 없는 상담 폼은 독립된 검증 모듈과 전송 어댑터 경계까지만 구현한다.

**Tech Stack:** Next.js 16.1.6 App Router, React 19.2.3, TypeScript 5, Tailwind CSS 4, `next/image`, Sharp, Vitest, Testing Library

## Global Constraints

- WEBP 최상위 폴더 41개 중 `홈페이지 사진 정리`는 프로젝트가 아니다.
- 프로젝트는 정확히 40개, 프로젝트 이미지는 정확히 228개다.
- 홈페이지 전용 이미지는 정확히 14개다.
- 전체 프로젝트를 등록하고 메인에는 `featuredOrder` 1~8의 대표 프로젝트만 노출한다.
- 다운로드 폴더 원본을 수정하거나 덮어쓰지 않는다.
- 배포 결과물이 `C:\Users\leess\Downloads\...` 절대 경로에 의존하면 안 된다.
- PPT에 없는 면적, 규모, 날짜, 설명을 추측하지 않는다.
- 프로젝트 이미지 내용을 사람이 직접 선별하지 않는다.
- 실제 이메일 전송, 데이터베이스 저장, CRM 연동은 구현하지 않는다.
- 기존 `/portfolio?type=residential`과 `/portfolio?type=commercial` 링크를 보존한다.
- 기존 사이트의 웜 화이트, 스톤, 차콜, 청록 시각 체계를 유지한다.
- 모든 변경은 키보드 접근, 감소된 모션, 명확한 대체 텍스트를 지원한다.

---

## File Map

### Create

- `vitest.config.ts` — Vitest와 `@/` alias 설정
- `tests/setup.ts` — jest-dom 등록
- `lib/project-types.ts` — 프로젝트 타입 계약
- `lib/project-metadata.ts` — 40개 프로젝트 정적 메타데이터
- `lib/generated/project-assets.ts` — 가져오기 스크립트가 생성하는 이미지 manifest
- `lib/generated/project-assets.json` — 검증 스크립트가 읽는 동일 manifest JSON
- `lib/projects.ts` — 메타데이터와 이미지 manifest 결합
- `lib/project-query.ts` — 필터, 정렬, featured, related 계산
- `lib/project-query.test.ts` — 데이터 개수와 쿼리 규칙 검증
- `scripts/project-source-map.mjs` — 원본 폴더와 slug 매핑
- `scripts/import-project-assets.mjs` — 원본 WEBP에서 배포용 파생본 생성
- `scripts/import-project-assets.test.ts` — 자연 정렬, 비확대 리사이즈, manifest 생성 검증
- `scripts/verify-project-assets.mjs` — 실제 자산 개수와 파일 존재 검증
- `components/site/project-image.tsx` — `next/image`와 로딩 실패 대체 UI
- `components/site/project-gallery.tsx` — 상세 갤러리
- `components/site/home-hero-carousel.tsx` — 메인 이미지 슬라이더
- `components/site/home-service-grid.tsx` — 설계·건설·개발·인테리어 영역
- `lib/contact-form.ts` — 상담 폼 타입과 순수 검증 함수
- `lib/contact-form.test.ts` — 필수값 검증
- `components/site/contact-inquiry-form.tsx` — 버튼형 예산·평수와 개인정보 동의 폼
- `components/site/contact-process.tsx` — 상담 진행 절차

### Modify

- `package.json` — 테스트·자산 스크립트와 개발 의존성
- `package-lock.json` — 의존성 잠금
- `lib/site-content.ts` — 임시 포트폴리오 타입과 데이터 제거, 홈·상담 카피 유지
- `app/page.tsx` — 이미지 히어로, 사업영역, 대표 8개 연결
- `app/portfolio/page.tsx` — 프로젝트 쿼리와 2단 필터 연결
- `app/portfolio/[slug]/page.tsx` — 실제 이미지·메타·갤러리·관련 프로젝트 연결
- `app/contact/page.tsx` — 왼쪽 절차, 오른쪽 신청서 레이아웃
- `components/site/portfolio-filter-bar.tsx` — 상위 타입과 세부 분류 필터
- `components/site/portfolio-grid.tsx` — 새 `Project` 타입
- `components/site/portfolio-card.tsx` — 실제 대표 이미지
- `components/site/home-project-story-rail.tsx` — 대표 8개 프로젝트
- `components/site/home-project-story-panel.tsx` — 실제 프로젝트 이미지와 링크
- `components/site/home-split-entry.tsx` — 실제 홈페이지 배경 이미지
- `app/globals.css` — 슬라이더, 갤러리, 버튼형 선택 상태
- `next.config.ts` — 필요한 이미지 설정만 명시

### Delete after replacement

- `components/site/home-hero-video.tsx`
- 정상 콘텐츠 경로에서 쓰이지 않게 된 `components/site/project-placeholder.tsx`

---

### Task 1: 테스트 기반과 프로젝트 도메인 타입

**Files:**

- Modify: `package.json`
- Modify: `package-lock.json`
- Create: `vitest.config.ts`
- Create: `tests/setup.ts`
- Create: `lib/project-types.ts`

**Interfaces:**

- Consumes: 현재 `@/*` TypeScript alias
- Produces: `Project`, `ProjectMetadata`, `ProjectImage`, `ProjectType`, `ProjectCategory`, `HomeAssetMap`

- [ ] **Step 1: 테스트와 이미지 처리 의존성 설치**

Run:

```powershell
npm install --save-dev vitest @testing-library/react @testing-library/jest-dom jsdom sharp
```

Expected: `package.json`과 `package-lock.json` 변경, 설치 오류 없음.

- [ ] **Step 2: 테스트 스크립트 추가**

`package.json`의 `scripts`를 다음처럼 만든다.

```json
{
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "eslint",
  "test": "vitest run",
  "test:watch": "vitest",
  "assets:import": "node scripts/import-project-assets.mjs",
  "assets:verify": "node scripts/verify-project-assets.mjs"
}
```

- [ ] **Step 3: Vitest 설정 작성**

`vitest.config.ts`:

```ts
import path from "node:path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname),
    },
  },
  test: {
    environment: "jsdom",
    setupFiles: ["./tests/setup.ts"],
    include: ["**/*.test.ts", "**/*.test.tsx"],
    exclude: ["node_modules", ".next"],
  },
});
```

`tests/setup.ts`:

```ts
import "@testing-library/jest-dom/vitest";
```

- [ ] **Step 4: 프로젝트 타입 작성**

`lib/project-types.ts`:

```ts
export type ProjectType = "residential" | "commercial";

export type ProjectCategory =
  | "corporate"
  | "model-house"
  | "residential"
  | "education"
  | "retail";

export type ProjectImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

export type ProjectAssetSet = {
  thumbnail: ProjectImage;
  gallery: ProjectImage[];
};

export type ProjectMetadata = {
  slug: string;
  sourceFolder: string;
  title: string;
  client?: string;
  type: ProjectType;
  category: ProjectCategory;
  location?: string;
  year?: string;
  completedAt?: string;
  spaces: string[];
  coverIndex: number;
  featuredOrder?: number;
};

export type Project = ProjectMetadata & {
  summary: string;
  assets: ProjectAssetSet;
};

export type HomeAssetMap = {
  hero: ProjectImage[];
  services: Record<"design" | "construction" | "development" | "interior", ProjectImage>;
  sectionBackgrounds: [ProjectImage, ProjectImage];
};
```

- [ ] **Step 5: 테스트 러너 확인**

Run:

```powershell
npm test -- --passWithNoTests
```

Expected: Vitest 실행 성공, exit code 0.

- [ ] **Step 6: 커밋**

```powershell
git add package.json package-lock.json vitest.config.ts tests/setup.ts lib/project-types.ts
git commit -m "test: add project content test foundation"
```

---

### Task 2: 원본 폴더 매핑과 자산 가져오기

**Files:**

- Create: `scripts/project-source-map.mjs`
- Create: `scripts/import-project-assets.mjs`
- Create: `scripts/import-project-assets.test.ts`
- Create: `scripts/verify-project-assets.mjs`
- Generate: `lib/generated/project-assets.ts`
- Generate: `lib/generated/project-assets.json`
- Generate: `public/images/home/*.webp`
- Generate: `public/images/services/*.webp`
- Generate: `public/images/projects/<slug>/*.webp`

**Interfaces:**

- Consumes: CLI `--source <absolute-path>`, `projectSourceMap`, `homeSourceMap`
- Produces: `projectAssetMap: Record<string, ProjectAssetSet>`, `homeAssetMap: HomeAssetMap`

- [ ] **Step 1: 가져오기 실패 테스트 작성**

`scripts/import-project-assets.test.ts`에서 임시 폴더를 만들고 Sharp로 32×24 WEBP를 생성한다.

```ts
import { mkdtemp, mkdir, readFile, rm } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import sharp from "sharp";
import { afterEach, describe, expect, it } from "vitest";
// @ts-expect-error The production importer is a Node ESM script.
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
});
```

- [ ] **Step 2: 테스트가 실패하는지 확인**

Run:

```powershell
npm test -- scripts/import-project-assets.test.ts
```

Expected: `import-project-assets.mjs`가 없어 FAIL.

- [ ] **Step 3: 40개 원본 폴더 source map 작성**

`scripts/project-source-map.mjs`는 아래 배열을 정확히 내보낸다.

```js
export const projectSourceMap = [
  ["2015.01_LG CNS 임원실", "lg-cns-ceo-zone"],
  ["2015.01_LG유플러스 아산지구국", "lg-uplus-asan"],
  ["2015.03_큐비 메종드테라스 창원 모델하우스", "cubi-maison-de-terrace-changwon"],
  ["2015.11_LG 화학 청주복지관", "lg-chem-cheongju-welfare"],
  ["2015.11_SK 하이닉스 오피스동", "sk-hynix-office"],
  ["2016.02_G-Prime 타워 울산 모델하우스", "g-prime-tower-ulsan"],
  ["2016.02_LG전자 인천캠퍼스 어린이집", "lge-incheon-daycare"],
  ["2016.06_라마다 앙코르 호텔 마곡 모델하우스", "ramada-encore-magok"],
  ["2016.06_힐스테이트 에코 마곡나루 모델하우스", "hillstate-eco-magoknaru"],
  ["2016.07_힐스테이트 일산 킨텍스 모델하우스", "hillstate-ilsan-kintex"],
  ["2016.12_태광실업 오피스동 신축", "taekwang-office"],
  ["2017.04_라테라스 청담 모델하우스", "la-terrasse-cheongdam"],
  ["2017.08_더 퍼스트 웰가시티 신진주 모델하우스", "the-first-wellga-jinju"],
  ["2018.01_힐스테이트 송정 모델하우스", "hillstate-songjeong"],
  ["2018.01_LG 하우시스 마곡 디자인 센터", "lg-hausys-design-center"],
  ["2018.01_LG사이언스 파크 마곡 DP3", "lg-science-park-dp3"],
  ["2019.02_푸르지오시티 신중동 모델하우스", "prugio-city-sinjungdong"],
  ["2019.04_LG사이언스 파크 마곡", "lg-science-park-isc"],
  ["2020.01_중흥초등학교 도서관", "jungheung-school-library"],
  ["2020.08_LG생활건강 청주", "lg-hh-cheongju"],
  ["2020.11_지웰 에스테이트 장위 모델하우스", "gwell-estate-jangwi"],
  ["2020.12_LGC 여수 Y2C 복합동 신축공사", "lg-chem-yeosu-y2c"],
  ["2021.02_법조타운 리슈빌S 검단 모델하우스", "richeville-s-geomdan"],
  ["2021.03_더 퍼스트 오션뷰 부산 모델하우스", "the-first-ocean-view-busan"],
  ["2021.04_어반어스 오피스", "urbanus-office"],
  ["2021.06_LX 홀딩스", "lx-holdings-office"],
  ["2021.11_범양레우스 청량리 모델하우스", "beomyang-reus-cheongnyangni"],
  ["2021.12_LX 인터내셔널", "lx-international-office"],
  ["2022.03_LGC 대산사택", "lg-chem-daesan-residence"],
  ["독산동", "doksan-residence"],
  ["에르모소 용산 모델하우스", "hermoso-yongsan"],
  ["용일 보정동", "yongil-bojeong-residence"],
  ["우진산전 고덕 사옥", "woojin-godeok-office"],
  ["일산 아이파크 모델하우스", "ilsan-ipark-model-house"],
  ["파주 모델하우스", "paju-model-house"],
  ["포천 소흘", "pocheon-soheul-house"],
  ["포천 이동", "pocheon-idong-house"],
  ["BW 웨딩홀", "bw-wedding-hall"],
  ["LGC 용성관 식당", "lg-chem-yongseong-cafeteria"],
  ["TKG 태광 김해공장", "tkg-taekwang-gimhae"],
].map(([sourceFolder, slug]) => ({ sourceFolder, slug }));

export const homeSourceMap = {
  sourceFolder: "홈페이지 사진 정리",
  heroFolder: "메인 페이지 사진",
  serviceFolder: "설계 건설 개발 인테리어 키워드 사진",
  heroFiles: ["1.webp", "3.webp", "4.webp", "5.webp", "6.webp", "7.webp", "8.webp", "9.webp"],
  services: {
    design: "1.설계.webp",
    construction: "2.건설.webp",
    development: "3.개발.webp",
    interior: "4.인테리어.webp",
  },
  sectionBackgrounds: ["5..webp", "6..webp"],
};
```

- [ ] **Step 4: 자산 가져오기 최소 구현**

`scripts/import-project-assets.mjs`는 다음 구조로 구현한다. `writeGeneratedManifest`는 JSON과 TypeScript wrapper를 함께 만들고, `buildAssetBundle`은 프로젝트와 홈페이지 자산을 모두 처리한다.

```js
import { mkdir, readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import sharp from "sharp";
import { homeSourceMap, projectSourceMap } from "./project-source-map.mjs";

export function naturalImageSort(a, b) {
  return a.localeCompare(b, "ko", { numeric: true, sensitivity: "base" });
}

async function convertImage({ input, output, publicSrc, maxWidth, quality, alt }) {
  await mkdir(path.dirname(output), { recursive: true });
  await sharp(input)
    .rotate()
    .resize({ width: maxWidth, fit: "inside", withoutEnlargement: true })
    .webp({ quality, effort: 4 })
    .toFile(output);
  const metadata = await sharp(output).metadata();
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
    const files = (await readdir(sourceDir, { withFileTypes: true }))
      .filter((entry) => entry.isFile() && entry.name.toLowerCase().endsWith(".webp"))
      .map((entry) => entry.name)
      .sort(naturalImageSort);
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
```

- [ ] **Step 5: 가져오기 테스트 통과**

Run:

```powershell
npm test -- scripts/import-project-assets.test.ts
```

Expected: 2 tests PASS.

- [ ] **Step 6: 검증 스크립트 작성**

`scripts/verify-project-assets.mjs`는 `lib/generated/project-assets.json`을 읽어 아래가 아니면 exit 1로 끝낸다.

```js
const EXPECTED_PROJECTS = 40;
const EXPECTED_PROJECT_IMAGES = 228;
const EXPECTED_HOME_IMAGES = 14;
```

추가 검증:

- 모든 manifest 파일 경로가 실제로 존재
- slug 중복 없음
- 각 프로젝트 gallery 1장 이상
- homepage hero 8장
- services 4장
- section backgrounds 2장

- [ ] **Step 7: 실제 WEBP 가져오기 실행**

Run:

```powershell
npm run assets:import -- --source "C:\Users\leess\Downloads\재율 홈페이지 프로젝트 사진 모음_WEBP"
npm run assets:verify
```

Expected:

```text
projects=40
projectImages=228
homeImages=14
verification=passed
```

- [ ] **Step 8: 생성 파일 크기 확인**

Run:

```powershell
Get-ChildItem public\images -Recurse -File |
  Measure-Object Length -Sum |
  Select-Object Count,Sum
```

Expected: Count는 파생본 정책에 따른 생성 개수와 일치하고, Sum은 원본 212,748,176 bytes보다 작다.

- [ ] **Step 9: 커밋**

```powershell
git add scripts public/images lib/generated/project-assets.ts lib/generated/project-assets.json
git commit -m "feat: import optimized project assets"
```

---

### Task 3: 40개 프로젝트 메타데이터와 쿼리 계층

**Files:**

- Create: `lib/project-metadata.ts`
- Create: `lib/projects.ts`
- Create: `lib/project-query.ts`
- Create: `lib/project-query.test.ts`
- Modify: `lib/site-content.ts`

**Interfaces:**

- Consumes: `projectAssetMap`, `ProjectMetadata`
- Produces:
  - `projects: Project[]`
  - `getProjectBySlug(slug: string): Project | undefined`
  - `filterProjects(input: { type?: string; category?: string }): Project[]`
  - `getFeaturedProjects(): Project[]`
  - `getRelatedProjects(project: Project, limit?: number): Project[]`
  - `getProjectCounts(): { all: number; residential: number; commercial: number }`

- [ ] **Step 1: 데이터 무결성 실패 테스트 작성**

`lib/project-query.test.ts`:

```ts
import { describe, expect, it } from "vitest";
import {
  filterProjects,
  getFeaturedProjects,
  getProjectBySlug,
  getProjectCounts,
  getRelatedProjects,
  projects,
} from "@/lib/project-query";

describe("project registry", () => {
  it("contains 40 unique projects and 228 gallery images", () => {
    expect(projects).toHaveLength(40);
    expect(new Set(projects.map((project) => project.slug)).size).toBe(40);
    expect(projects.reduce((sum, project) => sum + project.assets.gallery.length, 0)).toBe(228);
  });

  it("contains exactly eight ordered featured projects", () => {
    expect(getFeaturedProjects().map((project) => project.featuredOrder)).toEqual([
      1, 2, 3, 4, 5, 6, 7, 8,
    ]);
  });

  it("filters by type and category and ignores invalid values", () => {
    expect(filterProjects({ type: "residential" }).every((project) => project.type === "residential")).toBe(true);
    expect(filterProjects({ category: "education" }).every((project) => project.category === "education")).toBe(true);
    expect(filterProjects({ type: "invalid", category: "invalid" })).toEqual(projects);
  });

  it("finds projects and excludes the current project from related results", () => {
    const project = getProjectBySlug("tkg-taekwang-gimhae");
    expect(project).toBeDefined();
    expect(getRelatedProjects(project!, 3)).toHaveLength(3);
    expect(getRelatedProjects(project!, 3).some((item) => item.slug === project!.slug)).toBe(false);
  });

  it("returns stable top-level counts", () => {
    const counts = getProjectCounts();
    expect(counts.all).toBe(40);
    expect(counts.residential + counts.commercial).toBe(40);
  });
});
```

- [ ] **Step 2: 테스트 실패 확인**

Run:

```powershell
npm test -- lib/project-query.test.ts
```

Expected: 프로젝트 모듈이 없어 FAIL.

- [ ] **Step 3: 40개 메타데이터 작성**

`lib/project-metadata.ts`는 아래 레지스트리를 완성한다. `spaces`는 PPT에 표시된 공간만 넣고, 표시되지 않은 프로젝트는 빈 배열을 사용한다.

| slug | title | completedAt | type | category | location | featuredOrder |
|---|---|---:|---|---|---|---:|
| `tkg-taekwang-gimhae` | TKG 태광 김해공장 | `2023-10` | commercial | corporate | 경남 김해시 | 1 |
| `lg-chem-yongseong-cafeteria` | LG화학 여수 용성관 식당 | `2022-07` | commercial | corporate | 전남 여수시 | 2 |
| `lg-chem-daesan-residence` | LG화학 대산사택 | `2022-03` | commercial | corporate | 충남 서산시 | 3 |
| `lx-international-office` | LX 인터내셔널 오피스 | `2021-12` | commercial | corporate | 서울시 종로구 | 4 |
| `beomyang-reus-cheongnyangni` | 청량리 범양레우스 씨엘로네 모델하우스 | `2021-11` | residential | model-house | 서울시 동대문구 | 5 |
| `lx-holdings-office` | LX 홀딩스 오피스 | `2021-06` | commercial | corporate | 서울시 종로구 | 6 |
| `urbanus-office` | 어반어스 오피스 | `2021-04` | commercial | corporate | 서울시 강남구 | 7 |
| `the-first-ocean-view-busan` | 부산 일광역 더 퍼스트 오션뷰 모델하우스 | `2021-03` | residential | model-house | 부산시 기장군 | 8 |
| `richeville-s-geomdan` | 검단역 법조타운 리슈빌S 모델하우스 | `2021-02` | residential | model-house | 인천시 |  |
| `gwell-estate-jangwi` | 장위 지웰 에스테이트 모델하우스 | `2020-11` | residential | model-house | 서울시 성북구 |  |
| `lg-chem-yeosu-y2c` | LG화학 여수 Y2C 복합동 | `2020-12` | commercial | corporate | 전남 여수시 |  |
| `lg-hh-cheongju` | LG생활건강 청주 T/P 프로젝트 | `2020-08` | commercial | corporate | 충북 청주시 |  |
| `jungheung-school-library` | 중흥초등학교 도서관 | `2020-01` | commercial | education | 경기 부천시 |  |
| `lg-science-park-isc` | LG사이언스파크 마곡 ISC동 | `2019-04` | commercial | corporate | 서울시 강서구 |  |
| `prugio-city-sinjungdong` | 신중동역 랜드마크 푸르지오시티 모델하우스 | `2019-02` | residential | model-house | 경기 부천시 |  |
| `lg-science-park-dp3` | LG사이언스파크 마곡 DP3 | `2018-01` | commercial | corporate | 서울시 강서구 |  |
| `lg-hausys-design-center` | LG하우시스 마곡 디자인센터 | `2018-01` | commercial | corporate | 서울시 강서구 |  |
| `hillstate-songjeong` | 힐스테이트 송정 모델하우스 | `2018-01` | residential | model-house | 경북 구미시 |  |
| `the-first-wellga-jinju` | 신진주역세권 더 퍼스트 웰가시티 모델하우스 | `2017-08` | residential | model-house | 경남 진주시 |  |
| `la-terrasse-cheongdam` | 라테라스 청담 모델하우스 | `2017-04` | residential | model-house | 서울시 강남구 |  |
| `taekwang-office` | 태광실업 오피스동 | `2016-12` | commercial | corporate | 경남 김해시 |  |
| `hillstate-ilsan-kintex` | 일산 힐스테이트 킨텍스 레이크뷰 모델하우스 | `2016-07` | residential | model-house | 경기 고양시 |  |
| `hillstate-eco-magoknaru` | 힐스테이트 에코 마곡나루 모델하우스 | `2016-06` | residential | model-house | 서울시 강서구 |  |
| `ramada-encore-magok` | 라마다 앙코르 서울 마곡호텔 모델하우스 | `2016-06` | residential | model-house | 서울시 강서구 |  |
| `lge-incheon-daycare` | LG전자 인천캠퍼스 어린이집 | `2016-02` | commercial | education | 인천시 서구 |  |
| `g-prime-tower-ulsan` | 울산 G-Prime Tower 모델하우스 | `2016-02` | residential | model-house | 울산시 |  |
| `sk-hynix-office` | SK하이닉스 M14 오피스동 | `2015-11` | commercial | corporate | 경기 이천시 |  |
| `lg-chem-cheongju-welfare` | LG화학 청주복지관 | `2015-11` | commercial | corporate | 충북 청주시 |  |
| `cubi-maison-de-terrace-changwon` | 창원 큐비 메종드테라스 | `2015-03` | residential | model-house | 경남 창원시 |  |
| `lg-cns-ceo-zone` | LG CNS 임원실 CEO ZONE | `2015-01` | commercial | corporate | 서울시 영등포구 |  |
| `lg-uplus-asan` | LG유플러스 아산지구국 | `2015-01` | commercial | corporate | 충남 아산시 |  |
| `bw-wedding-hall` | BW 웨딩홀 |  | commercial | retail |  |  |
| `doksan-residence` | 독산동 공동주택 |  | residential | residential | 서울시 금천구 |  |
| `hermoso-yongsan` | 에르모소 용산 모델하우스 |  | residential | model-house | 서울시 용산구 |  |
| `yongil-bojeong-residence` | 용일 보정동 공동주택 |  | residential | residential | 경기 용인시 |  |
| `woojin-godeok-office` | 우진산전 고덕 사옥 |  | commercial | corporate | 서울시 강동구 |  |
| `ilsan-ipark-model-house` | 일산 아이파크 모델하우스 |  | residential | model-house | 경기 고양시 |  |
| `paju-model-house` | 파주 모델하우스 |  | residential | model-house | 경기 파주시 |  |
| `pocheon-soheul-house` | 포천 소흘 단독주택 |  | residential | residential | 경기 포천시 |  |
| `pocheon-idong-house` | 포천 이동 단독주택 |  | residential | residential | 경기 포천시 |  |

각 레코드의 `sourceFolder`는 `scripts/project-source-map.mjs`와 정확히 같게 하고 `coverIndex: 0`을 기본값으로 둔다.

`spaces`는 아래 매핑을 그대로 사용한다. PPT나 폴더 구조에서 확인되지 않은 값은 빈 배열이다.

```ts
const spacesBySlug: Record<string, string[]> = {
  "tkg-taekwang-gimhae": ["공용홀", "오피스", "회의실", "임원실", "VIP 식당", "피트니스룸"],
  "lg-chem-yongseong-cafeteria": ["공용홀", "식당 홀", "화장실"],
  "lg-chem-daesan-residence": ["헬스장", "탈의실", "사우나", "화장실", "창고", "PLAY ZONE", "GAME ZONE", "CAFETERIA", "스크린야구장"],
  "lx-international-office": ["대회의실", "사무실", "인터뷰룸", "포커스룸", "임원실", "회의실", "고충처리실"],
  "beomyang-reus-cheongnyangni": ["공용홀", "세대"],
  "lx-holdings-office": ["VIP 집무실", "VIP 화장실", "응접실", "대회의실", "임원실", "회의실", "사무공간", "OA", "탕비"],
  "urbanus-office": ["사무실", "임원실", "회의실", "로비"],
  "the-first-ocean-view-busan": ["공용홀", "세대"],
  "richeville-s-geomdan": ["공용홀", "세대"],
  "gwell-estate-jangwi": ["공용홀", "세대"],
  "lg-chem-yeosu-y2c": ["로비", "엘리베이터 홀", "대회의실", "브리핑실", "화장실", "언택트룸"],
  "lg-hh-cheongju": ["로비", "쇼룸", "VIP룸", "VIP 화장실", "회의실"],
  "jungheung-school-library": ["복도", "라운지", "영상학습실", "도서관", "다목적실", "위클래스"],
  "lg-science-park-isc": ["업무공간", "카페테리아", "아이디어룸"],
  "prugio-city-sinjungdong": ["공용홀", "세대"],
  "lg-science-park-dp3": ["로비", "고객 접견실", "로비 아트리움", "컨퍼런스룸", "휴게실", "화상회의실", "엘리베이터 홀", "정보자료실", "업무공간"],
  "lg-hausys-design-center": ["디자인 라이브러리"],
  "hillstate-songjeong": ["공용홀", "세대"],
  "the-first-wellga-jinju": ["공용홀", "세대"],
  "la-terrasse-cheongdam": ["공용홀", "세대"],
  "taekwang-office": ["로비", "사무실", "라운지"],
  "hillstate-ilsan-kintex": ["공용홀", "세대"],
  "hillstate-eco-magoknaru": ["공용홀", "세대"],
  "ramada-encore-magok": ["공용홀", "객실"],
  "lge-incheon-daycare": ["교실", "유희실", "화장실", "복도"],
  "g-prime-tower-ulsan": ["공용홀", "세대"],
  "sk-hynix-office": ["회의실", "사무실", "직원 복지시설", "임원실"],
  "lg-chem-cheongju-welfare": ["복지공간", "사내식당"],
  "cubi-maison-de-terrace-changwon": ["공용홀", "세대"],
  "lg-cns-ceo-zone": ["집무실", "접견실", "회의실", "로비"],
  "lg-uplus-asan": ["구내식당", "강의실", "휴게실"],
  "bw-wedding-hall": ["외관", "홀 대기실", "식당"],
  "doksan-residence": [],
  "hermoso-yongsan": ["공용홀", "세대"],
  "yongil-bojeong-residence": [],
  "woojin-godeok-office": [],
  "ilsan-ipark-model-house": ["공용홀", "세대"],
  "paju-model-house": ["홍보관", "세대"],
  "pocheon-soheul-house": [],
  "pocheon-idong-house": [],
};
```

- [ ] **Step 4: 메타데이터와 자산 결합**

`lib/projects.ts`:

```ts
import { projectAssetMap } from "@/lib/generated/project-assets";
import { projectMetadata } from "@/lib/project-metadata";
import type { Project, ProjectCategory } from "@/lib/project-types";

const categoryCopy: Record<ProjectCategory, string> = {
  corporate: "기업의 운영 목적과 업무 흐름을 반영한 공간 프로젝트입니다.",
  "model-house": "공용부와 세대 공간의 경험을 구성한 모델하우스 프로젝트입니다.",
  residential: "생활 동선과 공간의 완성도를 고려한 주거 프로젝트입니다.",
  education: "이용자의 안전과 학습 환경을 함께 고려한 교육·보육 프로젝트입니다.",
  retail: "방문 경험과 운영 동선을 함께 설계한 상업 공간 프로젝트입니다.",
};

export const projects: Project[] = projectMetadata.map((metadata) => {
  const assets = projectAssetMap[metadata.slug];
  if (!assets) {
    throw new Error(`Missing project assets: ${metadata.slug}`);
  }
  return {
    ...metadata,
    summary: categoryCopy[metadata.category],
    assets: {
      thumbnail: {
        ...assets.thumbnail,
        alt: `${metadata.title} 대표 이미지`,
      },
      gallery: assets.gallery.map((image, index) => ({
        ...image,
        alt: `${metadata.title} 공간 이미지 ${index + 1}`,
      })),
    },
  };
});
```

- [ ] **Step 5: 쿼리 함수 구현**

`lib/project-query.ts`는 유효한 타입과 카테고리만 적용하고, 날짜 내림차순 뒤 제목 오름차순으로 정렬한다.

```ts
import { projects } from "@/lib/projects";
import type { Project } from "@/lib/project-types";

export { projects };

export function getFeaturedProjects() {
  return projects
    .filter((project) => project.featuredOrder !== undefined)
    .sort((a, b) => a.featuredOrder! - b.featuredOrder!);
}

export function getRelatedProjects(project: Project, limit = 3) {
  return projects
    .filter((candidate) =>
      candidate.slug !== project.slug &&
      (candidate.category === project.category || candidate.type === project.type)
    )
    .sort((a, b) => Number(b.category === project.category) - Number(a.category === project.category))
    .slice(0, limit);
}
```

- [ ] **Step 6: `site-content.ts` 정리**

삭제:

- `PortfolioType`
- `PortfolioItem`
- `portfolioItems`
- `SiteContent.portfolioItems`

유지:

- 회사 정보
- 내비게이션
- ICM 과정
- 상담 카피
- 푸터

- [ ] **Step 7: 테스트 통과**

Run:

```powershell
npm test -- lib/project-query.test.ts
```

Expected: 5 tests PASS.

- [ ] **Step 8: 커밋**

```powershell
git add lib/project-types.ts lib/project-metadata.ts lib/projects.ts lib/project-query.ts lib/project-query.test.ts lib/site-content.ts
git commit -m "feat: add complete project registry"
```

---

### Task 4: 포트폴리오 목록과 2단 필터

**Files:**

- Modify: `app/portfolio/page.tsx`
- Modify: `components/site/portfolio-filter-bar.tsx`
- Modify: `components/site/portfolio-grid.tsx`
- Modify: `components/site/portfolio-card.tsx`
- Create: `components/site/project-image.tsx`
- Create: `components/site/portfolio-filter-bar.test.tsx`

**Interfaces:**

- Consumes: `filterProjects`, `getProjectCounts`, `Project`
- Produces: `ProjectImage`, 타입·카테고리 URL 필터, 실제 이미지 카드

- [ ] **Step 1: 필터 링크와 카드 렌더링 실패 테스트 작성**

`components/site/portfolio-filter-bar.test.tsx`:

```tsx
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { PortfolioFilterBar } from "@/components/site/portfolio-filter-bar";

describe("PortfolioFilterBar", () => {
  it("preserves type while linking a category", () => {
    render(
      <PortfolioFilterBar
        activeType="residential"
        activeCategory="model-house"
        counts={{ all: 40, residential: 20, commercial: 20 }}
      />
    );
    expect(screen.getByRole("link", { name: /모델하우스/ })).toHaveAttribute(
      "href",
      "/portfolio?type=residential&category=model-house"
    );
  });
});
```

- [ ] **Step 2: 테스트 실패 확인**

Run:

```powershell
npm test -- components/site/portfolio-filter-bar.test.tsx
```

Expected: 새 props가 없어 FAIL.

- [ ] **Step 3: 안전한 프로젝트 이미지 구현**

`components/site/project-image.tsx`는 client component다.

```tsx
"use client";

import Image from "next/image";
import { useState } from "react";
import type { ProjectImage as ProjectImageData } from "@/lib/project-types";
import { cn } from "@/lib/utils";

type ProjectImageProps = {
  image: ProjectImageData;
  sizes: string;
  priority?: boolean;
  className?: string;
};

export function ProjectImage({ image, sizes, priority, className }: ProjectImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        role="img"
        aria-label={image.alt}
        className={cn("grid h-full w-full place-items-center bg-[#d9d4cb] text-xs text-foreground/60", className)}
      >
        JEYUL D&amp;C
      </div>
    );
  }

  return (
    <Image
      src={image.src}
      alt={image.alt}
      width={image.width}
      height={image.height}
      sizes={sizes}
      priority={priority}
      onError={() => setFailed(true)}
      className={className}
    />
  );
}
```

- [ ] **Step 4: 카드와 그리드 타입 교체**

`PortfolioCard`는 `Project`를 받고 `item.assets.thumbnail`을 사용한다.

```tsx
<ProjectImage
  image={item.assets.thumbnail}
  sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
/>
```

카드 메타:

- 위치가 있으면 표시
- `completedAt`이 있으면 표시
- 분류는 한글 label map으로 표시
- 없는 메타 행은 렌더링하지 않음

- [ ] **Step 5: 2단 필터 구현**

상위 타입:

- all
- residential
- commercial

세부 카테고리:

- corporate
- model-house
- residential
- education
- retail

현재 타입과 맞지 않는 세부 분류는 숨긴다. 잘못된 쿼리는 `all`로 정규화한다.

- [ ] **Step 6: 목록 페이지 쿼리 연결**

`app/portfolio/page.tsx`의 `searchParams`:

```ts
type PortfolioPageProps = {
  searchParams?: Promise<{
    type?: string;
    category?: string;
  }>;
};
```

`siteContent.portfolioItems` 대신 `filterProjects(params)`와 `getProjectCounts()`를 사용한다.

- [ ] **Step 7: 테스트와 빌드 확인**

Run:

```powershell
npm test -- components/site/portfolio-filter-bar.test.tsx lib/project-query.test.ts
npm run build
```

Expected: tests PASS, `/portfolio` 빌드 성공.

- [ ] **Step 8: 커밋**

```powershell
git add app/portfolio/page.tsx components/site/portfolio-filter-bar.tsx components/site/portfolio-filter-bar.test.tsx components/site/portfolio-grid.tsx components/site/portfolio-card.tsx components/site/project-image.tsx
git commit -m "feat: connect full portfolio archive"
```

---

### Task 5: 프로젝트 상세와 실제 갤러리

**Files:**

- Create: `components/site/project-gallery.tsx`
- Modify: `app/portfolio/[slug]/page.tsx`
- Create: `app/portfolio/[slug]/page.test.tsx`

**Interfaces:**

- Consumes: `getProjectBySlug`, `getRelatedProjects`, `ProjectImage`
- Produces: 40개 정적 상세 경로, 전체 이미지 갤러리, 실제 관련 프로젝트 카드

- [ ] **Step 1: 정적 params 실패 테스트 작성**

`app/portfolio/[slug]/page.test.tsx`:

```ts
import { describe, expect, it } from "vitest";
import { generateStaticParams } from "./page";

describe("portfolio static params", () => {
  it("generates 40 unique project routes", () => {
    const params = generateStaticParams();
    expect(params).toHaveLength(40);
    expect(new Set(params.map(({ slug }) => slug)).size).toBe(40);
  });
});
```

- [ ] **Step 2: 기존 구현에서 테스트 실패 확인**

Run:

```powershell
npm test -- "app/portfolio/[slug]/page.test.tsx"
```

Expected: 기존 임시 데이터 개수 때문에 FAIL.

- [ ] **Step 3: 갤러리 구현**

`components/site/project-gallery.tsx`:

```tsx
import type { Project } from "@/lib/project-types";
import { ProjectImage } from "@/components/site/project-image";

export function ProjectGallery({ project }: { project: Project }) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {project.assets.gallery.map((image, index) => (
        <figure
          key={image.src}
          className={index === 0 ? "md:col-span-2" : undefined}
        >
          <ProjectImage
            image={image}
            sizes={index === 0 ? "100vw" : "(min-width: 768px) 50vw, 100vw"}
            priority={index === 0}
            className="h-auto w-full object-cover"
          />
        </figure>
      ))}
    </div>
  );
}
```

- [ ] **Step 4: 상세 페이지 데이터 교체**

`generateStaticParams()`는 `projects` 40개를 사용한다.

페이지:

- `getProjectBySlug(slug)`가 없으면 `notFound()`
- 대표 이미지
- 위치, 완료일, 클라이언트, 공간 구성 중 존재하는 항목만 표시
- `ProjectGallery`
- `getRelatedProjects(project, 3)`
- 관련 카드도 실제 썸네일 사용
- “이미지 준비되면 확장” 임시 문구 삭제

- [ ] **Step 5: 메타데이터 생성 추가**

`generateMetadata`:

```ts
export async function generateMetadata({ params }: PortfolioDetailPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.title} | JEYUL D&C`,
    description: project.summary,
  };
}
```

- [ ] **Step 6: 테스트와 빌드**

Run:

```powershell
npm test -- "app/portfolio/[slug]/page.test.tsx"
npm run build
```

Expected: 1 test PASS, 40개 상세 params 생성, build PASS.

- [ ] **Step 7: 커밋**

```powershell
git add components/site/project-gallery.tsx app/portfolio/[slug]/page.tsx app/portfolio/[slug]/page.test.tsx
git commit -m "feat: add real project galleries"
```

---

### Task 6: 메인 히어로, 사업영역, 대표 프로젝트 8개

**Files:**

- Create: `components/site/home-hero-carousel.tsx`
- Create: `components/site/home-service-grid.tsx`
- Modify: `app/page.tsx`
- Modify: `components/site/home-project-story-rail.tsx`
- Modify: `components/site/home-project-story-panel.tsx`
- Modify: `components/site/home-split-entry.tsx`
- Modify: `app/globals.css`
- Delete: `components/site/home-hero-video.tsx`
- Create: `components/site/home-hero-carousel.test.tsx`

**Interfaces:**

- Consumes: `homeAssetMap`, `getFeaturedProjects()`
- Produces: 8장 히어로 슬라이더, 4개 사업영역, 배경 이미지 2개, 대표 프로젝트 8개

- [ ] **Step 1: 슬라이더 접근성 실패 테스트**

`components/site/home-hero-carousel.test.tsx`:

```tsx
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { HomeHeroCarousel } from "@/components/site/home-hero-carousel";
import { homeAssetMap } from "@/lib/generated/project-assets";
import { siteContent } from "@/lib/site-content";

describe("HomeHeroCarousel", () => {
  it("moves with named controls and announces the active slide", () => {
    render(<HomeHeroCarousel content={siteContent.homeHeroMedia} images={homeAssetMap.hero} />);
    expect(screen.getByText("1 / 8")).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "다음 이미지" }));
    expect(screen.getByText("2 / 8")).toBeInTheDocument();
  });
});
```

- [ ] **Step 2: 테스트 실패 확인**

Run:

```powershell
npm test -- components/site/home-hero-carousel.test.tsx
```

Expected: 컴포넌트가 없어 FAIL.

- [ ] **Step 3: 이미지 슬라이더 구현**

요구:

- client component
- 8초마다 다음 이미지
- 이전·다음 버튼
- 현재 `n / 8` 표시
- 포인터 진입과 포커스 진입 시 자동 전환 일시 정지
- `matchMedia("(prefers-reduced-motion: reduce)")`면 자동 전환 없음
- 첫 이미지만 `priority`
- 페이드 전환
- 기존 카피와 CTA 유지

타이머 정리는 effect cleanup에서 수행한다.

- [ ] **Step 4: 사업영역 구현**

`home-service-grid.tsx`는 다음 데이터를 사용한다.

```ts
const services = [
  {
    key: "design",
    title: "설계",
    description: "다양한 프로젝트 경험을 바탕으로 공간의 목적과 사용성을 고려한 설계 솔루션을 제공합니다.",
  },
  {
    key: "construction",
    title: "건설",
    description: "정확한 시공과 철저한 품질관리로 신뢰할 수 있는 건설 서비스를 제공합니다.",
  },
  {
    key: "development",
    title: "개발",
    description: "미래 가치를 고려한 전략적 개발을 통해 새로운 공간의 가능성을 실현합니다.",
  },
  {
    key: "interior",
    title: "인테리어",
    description: "공간의 본질을 이해하고 디자인과 기능이 조화를 이루는 공간을 제안합니다.",
  },
] as const;
```

각 카드의 배경은 `homeAssetMap.services[key]`를 사용한다.

- [ ] **Step 5: 대표 프로젝트 rail 교체**

`getFeaturedProjects()`의 8개를 `HomeProjectStoryRail`에 전달한다.

패널:

- `Project`를 직접 받음
- 실제 썸네일 사용
- `/portfolio/<slug>` 링크
- `featuredOrder`와 프로젝트 메타 표시
- 임시 `FeaturedStoryItem` 사용 중단

- [ ] **Step 6: 지정 배경 이미지 연결**

- `homeAssetMap.sectionBackgrounds[0]`: 주거/기업 분기 섹션 배경
- `homeAssetMap.sectionBackgrounds[1]`: 프로세스 강조 또는 최종 CTA 배경
- 텍스트 대비용 차콜 overlay 적용

- [ ] **Step 7: 홈 페이지 교체**

`app/page.tsx` 순서:

1. `HomeHeroCarousel`
2. `HomeServiceGrid`
3. `HomeSplitEntry`
4. 대표 프로젝트 8개
5. 프로세스 강조
6. 신뢰 정보
7. 최종 CTA

- [ ] **Step 8: 슬라이더 테스트와 빌드**

Run:

```powershell
npm test -- components/site/home-hero-carousel.test.tsx lib/project-query.test.ts
npm run build
```

Expected: tests PASS, homepage build PASS.

- [ ] **Step 9: 임시 hero 삭제와 커밋**

```powershell
git rm components/site/home-hero-video.tsx
git add app/page.tsx app/globals.css components/site/home-hero-carousel.tsx components/site/home-hero-carousel.test.tsx components/site/home-service-grid.tsx components/site/home-project-story-rail.tsx components/site/home-project-story-panel.tsx components/site/home-split-entry.tsx
git commit -m "feat: connect homepage image experience"
```

---

### Task 7: PPT 요구 상담 절차와 신청 폼

**Files:**

- Create: `lib/contact-form.ts`
- Create: `lib/contact-form.test.ts`
- Create: `components/site/contact-process.tsx`
- Create: `components/site/contact-inquiry-form.tsx`
- Modify: `app/contact/page.tsx`
- Modify: `app/globals.css`

**Interfaces:**

- Consumes: `siteContent.contact.projectTypes`
- Produces:
  - `validateContactForm(input: ContactFormValues): ContactFormErrors`
  - 버튼형 예산·평수
  - 필수 개인정보 동의
  - 백엔드 미연결 상태의 정직한 안내

- [ ] **Step 1: 상담 검증 실패 테스트 작성**

`lib/contact-form.test.ts`:

```ts
import { describe, expect, it } from "vitest";
import { emptyContactForm, validateContactForm } from "@/lib/contact-form";

describe("validateContactForm", () => {
  it("requires name, phone, project type, budget, area and privacy consent", () => {
    expect(validateContactForm(emptyContactForm)).toEqual({
      name: "이름 또는 업체명을 입력해 주세요.",
      phone: "연락처를 입력해 주세요.",
      projectType: "프로젝트 유형을 선택해 주세요.",
      budget: "예산 범위를 선택해 주세요.",
      area: "평수 범위를 선택해 주세요.",
      privacyAccepted: "개인정보처리방침에 동의해 주세요.",
    });
  });

  it("accepts a complete inquiry", () => {
    expect(validateContactForm({
      ...emptyContactForm,
      name: "홍길동",
      phone: "010-1234-5678",
      projectType: "주거",
      budget: "1억 이상",
      area: "50평 이상",
      privacyAccepted: true,
    })).toEqual({});
  });
});
```

- [ ] **Step 2: 테스트 실패 확인**

Run:

```powershell
npm test -- lib/contact-form.test.ts
```

Expected: 모듈이 없어 FAIL.

- [ ] **Step 3: 순수 검증 함수 구현**

`ContactFormValues`:

```ts
export type ContactFormValues = {
  name: string;
  phone: string;
  projectType: string;
  budget: string;
  area: string;
  preferredSchedule: string;
  message: string;
  privacyAccepted: boolean;
};
```

예산 옵션:

```ts
export const budgetOptions = [
  "3천만원 미만",
  "3천만–5천만원",
  "5천만–1억원",
  "1억 이상",
  "협의 필요",
] as const;
```

평수 옵션:

```ts
export const areaOptions = [
  "10평 미만",
  "10–20평",
  "20–30평",
  "30–50평",
  "50평 이상",
] as const;
```

- [ ] **Step 4: 상담 절차 컴포넌트**

`contact-process.tsx` 단계:

1. 상담 접수
2. 담당자 검토
3. 초기 연락
4. 현장 또는 요구사항 확인
5. 제안 및 일정 협의

`ol`과 순번을 사용한다.

- [ ] **Step 5: 신청 폼 구현**

`contact-inquiry-form.tsx`는 client component다.

필드:

- 이름 또는 업체명
- 연락처
- 프로젝트 유형
- 예산 범위 버튼
- 평수 범위 버튼
- 희망 일정
- 문의 내용
- 개인정보처리방침 동의

오류는 해당 필드 아래에 출력하고 `aria-invalid`, `aria-describedby`를 연결한다.

유효한 제출 시 데이터를 저장하거나 성공으로 속이지 않는다. 다음 상태를 `aria-live="polite"`로 출력한다.

```text
입력 내용이 확인되었습니다. 현재 온라인 접수는 준비 중이므로 전화 또는 이메일로 문의해 주세요.
```

- [ ] **Step 6: 2열 상담 페이지 배치**

데스크톱:

- 왼쪽: `ContactProcess`
- 오른쪽: `ContactInquiryForm`

모바일:

- 절차
- 신청 폼
- 직접 연락 정보

기존 중복 “빠른 상담 안내” 블록은 하나만 남긴다.

- [ ] **Step 7: 테스트와 빌드**

Run:

```powershell
npm test -- lib/contact-form.test.ts
npm run build
```

Expected: 2 tests PASS, `/contact` build PASS.

- [ ] **Step 8: 커밋**

```powershell
git add lib/contact-form.ts lib/contact-form.test.ts components/site/contact-process.tsx components/site/contact-inquiry-form.tsx app/contact/page.tsx app/globals.css
git commit -m "feat: implement structured consultation form"
```

---

### Task 8: 임시 콘텐츠 제거와 전역 품질 정리

**Files:**

- Modify: `next.config.ts`
- Modify: `app/globals.css`
- Modify: `components/site/home-split-entry.tsx`
- Delete if unused: `components/site/project-placeholder.tsx`
- Reference: all project and home components

**Interfaces:**

- Consumes: 완성된 실제 이미지 경로
- Produces: 임시 그래픽 없는 정상 콘텐츠 경로, 일관된 이미지 정책

- [ ] **Step 1: placeholder 사용처 확인**

Run:

```powershell
rg -n "ProjectPlaceholder|AmbientSpaceScene|home-hero-video" app components lib
```

Expected: 프로젝트 카드, 상세, 홈 대표 영역에서 `ProjectPlaceholder` 사용 0건.

- [ ] **Step 2: 사용되지 않는 placeholder 삭제**

`ProjectPlaceholder` 사용처가 0건이면:

```powershell
git rm components/site/project-placeholder.tsx
```

다른 비프로젝트 장식에서 사용 중이면 파일은 유지하되 프로젝트 경로에서는 사용하지 않는다.

- [ ] **Step 3: Next 이미지 설정 명시**

로컬 `public` 이미지만 사용하므로 remote pattern은 추가하지 않는다.

`next.config.ts`:

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
```

- [ ] **Step 4: 접근성과 반응형 CSS 정리**

확인:

- 슬라이더 버튼 최소 44×44px
- focus-visible 표시
- 갤러리 이미지 비율 공간 확보
- 긴 한글 제목 `overflow-wrap: anywhere`
- 필터 가로 스크롤
- 선택 버튼 `aria-pressed` 상태와 시각 상태 일치
- `prefers-reduced-motion`에서 페이드·자동 이동 중지

- [ ] **Step 5: 저장소에 원본 다운로드 경로가 없는지 검사**

Run:

```powershell
rg -n "C:\\Users\\leess\\Downloads|재율 홈페이지 프로젝트 사진 모음_WEBP" app components lib public next.config.ts
```

Expected: 0 matches. `scripts`와 계획 문서만 로컬 source 경로를 설명할 수 있다.

- [ ] **Step 6: 데이터와 자산 검증**

Run:

```powershell
npm run assets:verify
npm test
```

Expected: assets verification PASS, all tests PASS.

- [ ] **Step 7: 커밋**

```powershell
git add next.config.ts app/globals.css components/site
git commit -m "refactor: remove portfolio placeholders"
```

---

### Task 9: 최종 검증과 문서 갱신

**Files:**

- Modify: `README.md`
- Reference: `docs/superpowers/specs/2026-07-23-jeyul-project-content-design.md`
- Reference: all changed files

**Interfaces:**

- Consumes: 완성된 앱과 자산 스크립트
- Produces: 재현 가능한 로컬 자산 가져오기 절차와 통과 증거

- [ ] **Step 1: README에 자산 갱신 절차 추가**

추가할 명령:

```powershell
npm run assets:import -- --source "C:\path\to\재율 홈페이지 프로젝트 사진 모음_WEBP"
npm run assets:verify
```

설명:

- source 폴더는 저장소 밖에 둔다.
- 원본은 수정되지 않는다.
- 생성된 `public/images`, `lib/generated/project-assets.ts`, `lib/generated/project-assets.json`은 Git에서 관리한다.

- [ ] **Step 2: 전체 자동 검증**

Run:

```powershell
npm run assets:verify
npm test
npm run lint
npm run build
```

Expected:

- project count 40
- project image count 228
- home image count 14
- tests PASS
- ESLint exit code 0
- Next.js production build exit code 0
- `/portfolio`와 40개 `generateStaticParams` 생성 성공

- [ ] **Step 3: 라우트와 필터 수동 확인**

Run:

```powershell
npm run dev
```

브라우저 확인:

- `/`
- `/portfolio`
- `/portfolio?type=residential`
- `/portfolio?type=commercial`
- `/portfolio?type=residential&category=model-house`
- `/portfolio/tkg-taekwang-gimhae`
- `/portfolio/not-a-project` → 404
- `/contact`

확인 항목:

- 메인 이미지 8장 전환
- 대표 프로젝트 정확히 8개
- 목록 프로젝트 정확히 40개
- 각 카드에서 실제 상세 이동
- 상세 이미지 전부 로드
- 상담 예산·평수 버튼 선택
- 필수 동의 누락 오류
- 키보드 포커스
- 모바일 390px, 태블릿 768px, 데스크톱 1440px

- [ ] **Step 4: 잔여 임시 문구 검사**

Run:

```powershell
rg -n "실제 이미지 자산이 준비되면|ProjectPlaceholder|Featured Project 0|영상 준비" app components lib
```

Expected: 0 matches.

- [ ] **Step 5: Git 상태와 변경 범위 확인**

Run:

```powershell
git status --short
git diff --check
```

Expected: 의도한 README 또는 마지막 QA 수정만 표시, whitespace error 없음.

- [ ] **Step 6: 최종 커밋**

```powershell
git add README.md
git commit -m "docs: add project asset workflow"
```

- [ ] **Step 7: 완료 전 마지막 재검증**

Run:

```powershell
npm run assets:verify
npm test
npm run lint
npm run build
git status --short
```

Expected: 모든 명령 PASS, working tree clean.
