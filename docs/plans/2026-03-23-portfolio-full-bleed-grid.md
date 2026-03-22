# Portfolio Full-Bleed Grid Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** 포트폴리오 페이지의 폭 제한을 풀어 그리드 구조는 유지한 채 화면 너비를 더 적극적으로 사용하게 만든다.

**Architecture:** `/portfolio` 페이지에서만 `max-w-7xl` 제한을 제거하고, 필터 바와 그리드 컨테이너를 viewport 기반 여백 구조로 바꾼다. 카드/컬럼 구조는 유지해 현재 IA와 상호작용은 바꾸지 않는다.

**Tech Stack:** Next.js App Router, React 19, TypeScript, Tailwind CSS v4

---

### Task 1: 포트폴리오 레이아웃 폭 확장

**Files:**
- Modify: `app/portfolio/page.tsx`
- Modify: `components/site/portfolio-filter-bar.tsx`

**Step 1: 기존 폭 제한 확인**

확인 대상:
- `app/portfolio/page.tsx`
- `components/site/portfolio-filter-bar.tsx`

**Step 2: 필터 바 폭 제한 제거**

- `max-w-7xl` 제거
- 좌우 패딩만 유지

**Step 3: 그리드 컨테이너 폭 제한 제거**

- `SectionShell` 의 기본 max width 대신, 포트폴리오 페이지에서만 `max-w-none` 또는 별도 wrapper 사용
- 기존 grid structure 유지

**Step 4: 검증**

Run: `npm run lint`
Expected: PASS

**Step 5: 빌드 검증**

Run: `npm run build`
Expected: PASS
