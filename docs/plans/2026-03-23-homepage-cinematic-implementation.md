# Homepage Cinematic Scroll Story Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Replace the current homepage with a full-screen cinematic hero and a two-panel scroll-story project showcase that balances residential and commercial positioning.

**Architecture:** Keep the homepage as a composition layer in `app/page.tsx`, move the new hero and story sections into dedicated site components, and extend `lib/site-content.ts` with homepage-specific content so copy and media references stay centralized. Reuse the existing design system primitives and global theme, adding only a few focused utility classes for the new full-bleed sections.

**Tech Stack:** Next.js App Router, React 19, TypeScript, Tailwind CSS v4, existing shadcn/ui primitives

---

### Task 1: Add homepage content model

**Files:**
- Modify: `lib/site-content.ts`

**Step 1: Write the failing test**

There is no automated test harness in this repo today. For this UI-only homepage refactor, use TypeScript compilation through `next build` and static analysis through `npm run lint` as the verification boundary.

**Step 2: Run test to verify it fails**

Run: `npm run lint`
Expected: existing homepage-specific content fields do not exist yet, so any new component references would fail once added.

**Step 3: Write minimal implementation**

- Add types for hero video content and featured story items.
- Extend `siteContent` with homepage media and copy needed by the new sections.

**Step 4: Run test to verify it passes**

Run after implementation batch: `npm run lint`
Expected: no type or lint errors from the new content model.

**Step 5: Commit**

```bash
git add lib/site-content.ts
git commit -m "feat: add homepage cinematic content model"
```

### Task 2: Create cinematic homepage components

**Files:**
- Create: `components/site/home-hero-video.tsx`
- Create: `components/site/home-project-story-panel.tsx`
- Create: `components/site/home-project-story-rail.tsx`
- Create: `components/site/home-process-highlight.tsx`
- Create: `components/site/home-trust-strip.tsx`
- Create: `components/site/home-final-cta.tsx`

**Step 1: Write the failing test**

There is no component test runner configured. Verification will come from import resolution, linting, and production build.

**Step 2: Run test to verify it fails**

Run: `npm run lint`
Expected: once `app/page.tsx` imports these files before they exist, lint/build would fail on missing modules.

**Step 3: Write minimal implementation**

- Build the hero as a full-screen media section with overlay copy and CTA buttons.
- Build a reusable story panel for each featured project with alternating text alignment.
- Build a rail wrapper that renders the two approved featured stories.
- Extract the supporting process/trust/final CTA blocks into focused homepage components.

**Step 4: Run test to verify it passes**

Run after implementation batch: `npm run lint`
Expected: new components resolve cleanly and follow existing project conventions.

**Step 5: Commit**

```bash
git add components/site
git commit -m "feat: add cinematic homepage sections"
```

### Task 3: Recompose the homepage

**Files:**
- Modify: `app/page.tsx`

**Step 1: Write the failing test**

The current homepage does not match the approved cinematic structure.

**Step 2: Run test to verify it fails**

Run: `npm run build`
Expected: current build succeeds, but the rendered homepage still reflects the old composition and therefore fails the approved design requirements.

**Step 3: Write minimal implementation**

- Replace the current home section order with the new cinematic hero, two story panels, process highlight, split entry, trust strip, and final CTA.
- Keep existing navigation and shared site styles intact.

**Step 4: Run test to verify it passes**

Run: `npm run build`
Expected: production build succeeds with the new homepage composition.

**Step 5: Commit**

```bash
git add app/page.tsx
git commit -m "feat: recompose homepage around cinematic story flow"
```

### Task 4: Add homepage-specific styling support

**Files:**
- Modify: `app/globals.css`

**Step 1: Write the failing test**

The current global utilities do not provide the overlay, story panel, and scroll cue treatments needed by the new homepage.

**Step 2: Run test to verify it fails**

Run: `npm run build`
Expected: without new utility classes, the homepage can compile using inline classes, but the intended shared styling hooks do not exist.

**Step 3: Write minimal implementation**

- Add focused utility classes for hero overlay, story media treatment, floating copy panel, and scroll cue motion.
- Preserve the existing warm, refined visual system.

**Step 4: Run test to verify it passes**

Run: `npm run build`
Expected: build succeeds and the homepage has reusable style hooks for the new visual direction.

**Step 5: Commit**

```bash
git add app/globals.css
git commit -m "style: add cinematic homepage utilities"
```

### Task 5: Verify the integrated homepage

**Files:**
- Modify: `app/page.tsx`
- Modify: `lib/site-content.ts`
- Create: `components/site/home-hero-video.tsx`
- Create: `components/site/home-project-story-panel.tsx`
- Create: `components/site/home-project-story-rail.tsx`
- Create: `components/site/home-process-highlight.tsx`
- Create: `components/site/home-trust-strip.tsx`
- Create: `components/site/home-final-cta.tsx`
- Modify: `app/globals.css`

**Step 1: Write the failing test**

Run the full project verification after all edits are in place.

**Step 2: Run test to verify it fails**

If lint or build fails, fix the specific issue before claiming completion.

**Step 3: Write minimal implementation**

- Resolve any type, lint, or composition issues found during integrated verification.

**Step 4: Run test to verify it passes**

Run:

```bash
npm run lint
npm run build
```

Expected: both commands exit successfully.

**Step 5: Commit**

```bash
git add app/page.tsx app/globals.css lib/site-content.ts components/site
git commit -m "feat: launch cinematic homepage redesign"
```
