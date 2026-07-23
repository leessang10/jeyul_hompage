# Contact Reference Redesign Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** `contact` 상담 신청 페이지를 제거 후 레퍼런스와 거의 동일한 데스크톱/모바일 레이아웃으로 재구성한다.

**Architecture:** 기존 공용 섹션 컴포넌트를 버리고 [`app/contact/page.tsx`](/Users/isangmu/WebstormProjects/01_leessang10@naver.com/jeyul_hompage/app/contact/page.tsx)에 페이지 전용 레이아웃을 직접 작성한다. 로컬 데이터는 `siteContent`에서 필요한 브랜드 정보만 읽고, 나머지 UI는 레퍼런스 중심의 정적 폼 마크업과 Tailwind 유틸리티로 구현한다.

**Tech Stack:** Next.js App Router, React 19, TypeScript, Tailwind CSS v4

---

### Task 1: Replace contact page structure

**Files:**
- Modify: `app/contact/page.tsx`

**Step 1: Remove legacy page composition**

- Delete the current `PageHero`, `SectionShell`, contact cards, and lower metadata strip.

**Step 2: Build the new top-level layout**

- Create a page wrapper that uses a desktop split layout and a mobile stacked layout.
- Ensure the visual panel appears first in the DOM so the mobile order matches the reference.

**Step 3: Build the visual panel**

- Add branded overlay text, close-icon decoration, large headline, and project credit.
- Use a large room-scene style background treatment.

**Step 4: Build the form panel**

- Add all reference-style fields in the approved order.
- Match the thin underline inputs, pill buttons, upload block, consent row, and bottom CTA.

### Task 2: Align content and styling to the reference

**Files:**
- Modify: `app/contact/page.tsx`

**Step 1: Replace all brand references**

- Ensure every brand-facing label uses 제율디앤씨, not 릴스퀘어.

**Step 2: Tune spacing and typography**

- Match desktop and mobile spacing, line lengths, and section rhythm as closely as possible to the reference.

**Step 3: Tune responsive behavior**

- Confirm desktop keeps the two-column split.
- Confirm mobile collapses to image first, form second.

### Task 3: Verify the replacement

**Files:**
- Verify: `app/contact/page.tsx`

**Step 1: Run lint**

Run: `npm run lint`

Expected: exit code `0`

**Step 2: Run production build**

Run: `npm run build`

Expected: exit code `0`

**Step 3: Review rendered result**

- Check the changed page output against the reference image for obvious structural mismatches before reporting completion.
