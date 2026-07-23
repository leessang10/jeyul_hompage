# Home Fullscreen Sections Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** 메인 첫 히어로 아래의 홈 섹션들을 제거하고, 레퍼런스 기반의 풀스크린 홈 섹션 3개로 교체한다.

**Architecture:** [`app/page.tsx`](/Users/isangmu/WebstormProjects/01_leessang10@naver.com/jeyul_hompage/app/page.tsx)에서 기존 홈 섹션 조합을 제거하고, 홈 전용 신규 섹션 컴포넌트 3개를 연결한다. 시각 스타일과 스냅 동작은 신규 컴포넌트와 [`app/globals.css`](/Users/isangmu/WebstormProjects/01_leessang10@naver.com/jeyul_hompage/app/globals.css)에 필요한 보조 유틸리티를 추가해 처리한다.

**Tech Stack:** Next.js App Router, React 19, TypeScript, Tailwind CSS v4

---

### Task 1: Replace the home section composition

**Files:**
- Modify: `app/page.tsx`
- Create: `components/site/home-fullscreen-grid.tsx`
- Create: `components/site/home-integration-diagram.tsx`
- Create: `components/site/home-asset-cta.tsx`

**Step 1: Write the failing test surrogate**

- Since no test runner exists, define the expected rendered structure before implementation:
  - `HomeHeroVideo` remains first.
  - The next three sections render in order: 4-column grid, integration diagram, asset CTA/footer.
  - Legacy components under the hero are no longer referenced in `app/page.tsx`.

**Step 2: Verify the current page fails that expectation**

Run: `sed -n '1,120p' app/page.tsx`

Expected: legacy home components are still imported and rendered below the hero.

**Step 3: Write minimal implementation**

- Remove `HomeProjectStoryRail`, `HomeProcessHighlight`, `HomeSplitEntry`, `HomeTrustStrip`, and `HomeFinalCta` from [`app/page.tsx`](/Users/isangmu/WebstormProjects/01_leessang10@naver.com/jeyul_hompage/app/page.tsx).
- Add imports for the three new fullscreen section components.
- Render the three new sections directly below `HomeHeroVideo`.

**Step 4: Verify the new page structure**

Run: `sed -n '1,120p' app/page.tsx`

Expected: only `HomeHeroVideo` plus three new fullscreen section components remain in the home composition.

### Task 2: Build fullscreen section 1

**Files:**
- Create: `components/site/home-fullscreen-grid.tsx`
- Modify: `app/globals.css`

**Step 1: Write the failing test surrogate**

- Define the target UI:
  - one section with desktop `min-h-[100svh]`
  - four equal-width columns on desktop
  - titles `설계`, `건설`, `개발`, `인테리어`
  - each column contains its reference copy

**Step 2: Verify it does not exist yet**

Run: `rg -n "설계|건설|개발|인테리어" components/site app/page.tsx`

Expected: no new fullscreen grid component exists with the full four-column reference content.

**Step 3: Write minimal implementation**

- Build a reusable array-driven component for the four columns.
- Use CSS gradients and overlays as placeholder backgrounds.
- Ensure desktop uses four equal columns and mobile stacks them vertically.
- Add snap alignment and section-specific helper classes if needed.

**Step 4: Verify the section markup**

Run: `sed -n '1,240p' components/site/home-fullscreen-grid.tsx`

Expected: the section includes four mapped columns with the approved Korean copy.

### Task 3: Build fullscreen section 2

**Files:**
- Create: `components/site/home-integration-diagram.tsx`
- Modify: `app/globals.css`

**Step 1: Write the failing test surrogate**

- Define the target UI:
  - one fullscreen dark section
  - main headline matching the reference
  - CTA button
  - three outlined circles for `설계`, `건설`, `개발`
  - one filled white circle for the integrated solution callout

**Step 2: Verify it does not exist yet**

Run: `rg -n "완벽한 일관성을 제공합니다|통합 건축 솔루션" components/site app/page.tsx`

Expected: no dedicated section component exists with this content and structure.

**Step 3: Write minimal implementation**

- Create the dark-background section with a two-part layout:
  - upper-left copy block
  - lower diagram block with circles and connector line
- Keep the circle layout readable on desktop and collapse it vertically on smaller screens.

**Step 4: Verify the section markup**

Run: `sed -n '1,260p' components/site/home-integration-diagram.tsx`

Expected: the section contains the headline, CTA, circle labels, and integrated solution callout.

### Task 4: Build fullscreen section 3

**Files:**
- Create: `components/site/home-asset-cta.tsx`
- Modify: `app/globals.css`

**Step 1: Write the failing test surrogate**

- Define the target UI:
  - one section that fills the screen on desktop
  - upper visual area with headline, copy, and CTA
  - lower blue brand information band inside the same section

**Step 2: Verify it does not exist yet**

Run: `rg -n "자산 가치 상승까지 원하시나요|프로젝트 문의하기" components/site app/page.tsx`

Expected: no dedicated asset-value closing section exists.

**Step 3: Write minimal implementation**

- Create a split section with a skyline-style placeholder background.
- Add the approved headline, subcopy, and CTA.
- Build the lower blue brand band with company name, contact email, phone number, address, and footer navigation-style text.

**Step 4: Verify the section markup**

Run: `sed -n '1,280p' components/site/home-asset-cta.tsx`

Expected: the section contains the upper CTA area and lower blue information band in one component.

### Task 5: Add scroll-snap and responsive polish

**Files:**
- Modify: `app/globals.css`

**Step 1: Write the failing test surrogate**

- Define the target behavior:
  - desktop home scroll uses section-by-section snapping
  - mobile avoids broken layouts or clipped content

**Step 2: Verify styles are missing**

Run: `rg -n "snap|fullscreen|home-section" app/globals.css`

Expected: no dedicated home fullscreen snap utilities exist for the new sections.

**Step 3: Write minimal implementation**

- Add utility classes for:
  - home fullscreen section sizing
  - scroll-snap container and child alignment
  - placeholder scene backgrounds
  - mobile overrides where needed

**Step 4: Verify the styles**

Run: `rg -n "jeyul-home" app/globals.css`

Expected: new home fullscreen utility classes are present and named consistently.

### Task 6: Verify the replacement

**Files:**
- Verify: `app/page.tsx`
- Verify: `components/site/home-fullscreen-grid.tsx`
- Verify: `components/site/home-integration-diagram.tsx`
- Verify: `components/site/home-asset-cta.tsx`
- Verify: `app/globals.css`

**Step 1: Run lint**

Run: `npm run lint`

Expected: exit code `0`

**Step 2: Run production build**

Run: `npm run build`

Expected: exit code `0`

**Step 3: Review structure**

- Confirm the first hero remains unchanged.
- Confirm exactly three new sections appear below it.
- Confirm each section fills the viewport on desktop and remains readable on mobile.
