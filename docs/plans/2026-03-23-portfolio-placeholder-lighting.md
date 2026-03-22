# Portfolio Placeholder Lighting Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** 포트폴리오 플레이스홀더에 호버 시 조명이 켜지는 듯한 대비를 추가한다.

**Architecture:** 기존 플레이스홀더 구조는 유지하고, 내부 사각 프레임과 그 안쪽 영역에만 hover-driven glow 레이어를 더한다. 포트폴리오 카드에서만 체감되도록 `group-hover` 기반의 비파괴 스타일을 사용한다.

**Tech Stack:** Next.js, React 19, TypeScript, Tailwind CSS v4

---

### Task 1: Placeholder glow layers

**Files:**
- Modify: `components/site/project-placeholder.tsx`

**Step 1: 프레임 hover 대상 유지**

- 기존 내부 사각 프레임 구조를 유지한다.

**Step 2: 조명 레이어 추가**

- 프레임 선 밝기 transition 추가
- 프레임 내부 소프트 화이트 glow 레이어 추가
- 카드 가장자리의 미세 bloom 레이어 추가

**Step 3: 검증**

Run: `npm run lint`
Expected: PASS

Run: `npm run build`
Expected: PASS
