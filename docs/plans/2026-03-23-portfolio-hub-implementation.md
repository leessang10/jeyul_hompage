# Portfolio Hub Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** 제율 사이트에 `/portfolio` 단일 허브를 만들고, 기존 주거/기업 페이지를 필터 진입용 구조로 전환한다.

**Architecture:** 기존 분리 데이터(`residentialPortfolio`, `commercialProjectGroups`)를 통합 가능한 포트폴리오 컬렉션으로 재구성한 뒤, `/portfolio` 에서 쿼리 기반 필터와 그리드 렌더링을 수행한다. 기존 `/residential`, `/commercial` 는 직접 콘텐츠를 렌더링하지 않고 `/portfolio?type=...` 로 보내는 얇은 경로로 바꾼다.

**Tech Stack:** Next.js App Router, React 19, TypeScript, Tailwind CSS v4, existing site UI components

---

### Task 1: 통합 포트폴리오 데이터 모델 추가

**Files:**
- Modify: `lib/site-content.ts`

**Step 1: 기존 데이터 구조 확인**

확인 대상:
- `residentialPortfolio`
- `commercialProjectGroups`
- `navigation`

**Step 2: 공통 타입 정의 추가**

추가할 타입:
- `PortfolioType = "residential" | "commercial"`
- `PortfolioItem`

필드 초안:
- `slug`
- `title`
- `type`
- `category`
- `location`
- `date`
- `summary`
- `metaPrimary`
- `metaSecondary`
- `variant`

**Step 3: 통합 배열 생성**

- `portfolioItems` 상수를 추가한다.
- 기존 주거 데이터와 기업 데이터를 허브 카드에 맞는 구조로 정규화한다.
- 실제 썸네일이 없으므로 `variant` 만 저장해 placeholder 렌더링에 활용한다.

**Step 4: navigation 목적지 갱신**

- `주거 포트폴리오` -> `/portfolio?type=residential`
- `기업/오피스 실적` -> `/portfolio?type=commercial`

**Step 5: 검증**

Run: `npm run lint`
Expected: PASS

### Task 2: 포트폴리오 허브 UI 컴포넌트 작성

**Files:**
- Create: `components/site/portfolio-filter-bar.tsx`
- Create: `components/site/portfolio-grid.tsx`
- Create: `components/site/portfolio-card.tsx`
- Reuse: `components/site/project-placeholder.tsx`

**Step 1: 필터 바 컴포넌트 생성**

- 쿼리스트링 기반 활성 상태를 받는다.
- `전체 / 주거 / 기업·오피스` 탭을 렌더링한다.

**Step 2: 카드 컴포넌트 생성**

- 공통 카드 레이아웃을 만든다.
- `ProjectPlaceholder` 를 사용해 fallback 비주얼을 노출한다.
- `type` 에 따라 라벨과 메타 문구를 다르게 보여준다.

**Step 3: 그리드 컴포넌트 생성**

- 반응형 1/2/3열 레이아웃을 구현한다.
- 빈 결과 상태 문구도 포함한다.

**Step 4: 검증**

Run: `npm run lint`
Expected: PASS

### Task 3: `/portfolio` 페이지 생성

**Files:**
- Create: `app/portfolio/page.tsx`

**Step 1: 쿼리 파라미터 처리**

- `searchParams.type` 을 읽는다.
- 허용 값은 `residential`, `commercial`
- 없거나 잘못된 값이면 `all` 로 처리한다.

**Step 2: 페이지 상단 헤더 작성**

- `Portfolio` 제목
- 짧은 설명
- 현재 결과 개수 표시

**Step 3: 필터 + 그리드 연결**

- 필터 바에 현재 상태 전달
- 필터링된 배열을 그리드에 전달

**Step 4: 검증**

Run: `npm run build`
Expected: `/portfolio` route generated successfully

### Task 4: 기존 분리 페이지를 필터 진입용으로 전환

**Files:**
- Modify: `app/residential/page.tsx`
- Modify: `app/commercial/page.tsx`

**Step 1: 기존 콘텐츠 제거**

- 기존 히어로/섹션 렌더링 제거

**Step 2: redirect 적용**

- `/residential` -> `/portfolio?type=residential`
- `/commercial` -> `/portfolio?type=commercial`

**Step 3: 검증**

Run: `npm run build`
Expected: 기존 route 들이 문제 없이 빌드되고 리다이렉트 로직이 타입 에러 없이 통과

### Task 5: 홈 및 공통 링크 정리

**Files:**
- Modify: `components/site/home-project-story-panel.tsx`
- Modify: `components/site/home-split-entry.tsx`
- Modify: `components/site/site-footer.tsx`
- Modify: any other internal link sources found by search

**Step 1: 기존 분리 경로 참조 검색**

Run: `rg "/residential|/commercial" app components lib`

**Step 2: 홈/푸터 링크 정리**

- 홈 대표 프로젝트 CTA 는 필터 진입 링크로 변경
- 홈 분기 카드도 필터 진입 링크로 변경
- 푸터 링크도 새 구조를 따르도록 조정

**Step 3: 검증**

Run: `npm run lint`
Expected: PASS

### Task 6: 최종 QA

**Files:**
- Verify only

**Step 1: 정적 검증**

Run: `npm run lint`
Expected: PASS

**Step 2: 프로덕션 빌드 검증**

Run: `npm run build`
Expected: PASS and `/portfolio` listed in static routes

**Step 3: 수동 확인 포인트**

- `/portfolio`
- `/portfolio?type=residential`
- `/portfolio?type=commercial`
- `/residential`
- `/commercial`
- 홈과 푸터의 포트폴리오 링크

**Step 4: Commit**

```bash
git add lib/site-content.ts app/portfolio/page.tsx app/residential/page.tsx app/commercial/page.tsx components/site/portfolio-filter-bar.tsx components/site/portfolio-grid.tsx components/site/portfolio-card.tsx components/site/home-project-story-panel.tsx components/site/home-split-entry.tsx components/site/site-footer.tsx docs/plans/2026-03-23-portfolio-hub-design.md docs/plans/2026-03-23-portfolio-hub-implementation.md
git commit -m "feat: add unified portfolio hub"
```
