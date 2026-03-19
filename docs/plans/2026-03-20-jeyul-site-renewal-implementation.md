# Jeyul Site Renewal Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Replace the current single-page site with a branded multi-page Next.js site for JEYUL D&C, using the approved IA, new copy direction, and PDF-derived company/portfolio structure.

**Architecture:** Keep the App Router structure and split the experience into route-level pages under `app/`. Move shared chrome into reusable components, centralize site content into a typed content module, and rebuild styles around a premium editorial visual system rather than the current default landing page layout.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript, Tailwind CSS v4, existing shadcn/base UI components

---

### Task 1: Define the site content model

**Files:**
- Create: `lib/site-content.ts`
- Reference: `docs/jeyul-pdf-analysis.json`
- Reference: `docs/plans/2026-03-20-jeyul-site-renewal-design.md`

**Step 1: Write the content module interface**

Create typed structures for:

- brand info
- navigation items
- home page sections
- process page steps
- residential portfolio items
- commercial project groups
- about page facts
- contact page metadata
- footer data

**Step 2: Run type check through build to verify the file is valid**

Run: `npm run build`
Expected: PASS with `Compiled successfully`

**Step 3: Populate the approved content**

Add the approved:

- official homepage URL `http://jeyuldnc.com/`
- address, phone, email
- menu labels
- hero copy direction
- ICM steps
- residential portfolio summaries
- commercial/client reference lists
- about page facts
- footer brand info

**Step 4: Run build again**

Run: `npm run build`
Expected: PASS

**Step 5: Commit**

```bash
git add lib/site-content.ts
git commit -m "feat: add jeyul site content model"
```

### Task 2: Build shared site chrome

**Files:**
- Create: `components/site/site-header.tsx`
- Create: `components/site/site-footer.tsx`
- Create: `components/site/page-hero.tsx`
- Create: `components/site/section-shell.tsx`
- Modify: `app/layout.tsx`

**Step 1: Write the shared component skeletons**

Create shared components for:

- desktop/mobile header navigation
- footer with brand info and secondary links
- reusable page hero block
- consistent section container wrapper

**Step 2: Integrate header/footer into the root layout**

Update `app/layout.tsx` to:

- keep metadata
- set `lang="ko"`
- render the shared header above page content
- render the shared footer below page content

**Step 3: Run build**

Run: `npm run build`
Expected: PASS

**Step 4: Refine responsive behavior**

Ensure the header works across:

- desktop horizontal nav
- compact mobile menu trigger or stacked nav

**Step 5: Run build again**

Run: `npm run build`
Expected: PASS

**Step 6: Commit**

```bash
git add components/site/site-header.tsx components/site/site-footer.tsx components/site/page-hero.tsx components/site/section-shell.tsx app/layout.tsx
git commit -m "feat: add shared site chrome"
```

### Task 3: Replace the global visual system

**Files:**
- Modify: `app/globals.css`
- Reference: `components/site/site-header.tsx`
- Reference: `components/site/site-footer.tsx`

**Step 1: Replace the default theme tokens**

Update the CSS variables to match the approved direction:

- warm background
- stone surfaces
- charcoal text
- muted neutrals
- teal accent

**Step 2: Add shared utility classes**

Add reusable styles for:

- editorial headline rhythm
- page section spacing
- grid textures or subtle framing
- image cards and stat blocks
- focus/hover states

**Step 3: Ensure typography aligns with the new tone**

Use the existing font setup or refine it so the brand no longer feels like the starter template.

**Step 4: Run build**

Run: `npm run build`
Expected: PASS

**Step 5: Commit**

```bash
git add app/globals.css
git commit -m "feat: add branded visual system"
```

### Task 4: Rebuild the home page as a multi-route hub

**Files:**
- Modify: `app/page.tsx`
- Reference: `components/site/page-hero.tsx`
- Reference: `components/site/section-shell.tsx`
- Reference: `lib/site-content.ts`

**Step 1: Remove the current one-page section stack**

Delete the old sections and replace them with the approved home structure:

- hero
- route entry cards
- representative project highlights
- ICM summary
- trust facts
- CTA

**Step 2: Add route entry panels**

Provide strong visual links to:

- `/process`
- `/residential`
- `/commercial`

**Step 3: Add concise new copy**

Write fresh homepage copy based on the approved tone. Do not reuse the current homepage text.

**Step 4: Run build**

Run: `npm run build`
Expected: PASS

**Step 5: Commit**

```bash
git add app/page.tsx
git commit -m "feat: rebuild home page hub"
```

### Task 5: Implement the process page

**Files:**
- Create: `app/process/page.tsx`
- Reference: `lib/site-content.ts`
- Reference: `components/site/page-hero.tsx`
- Reference: `components/site/section-shell.tsx`

**Step 1: Create the route page**

Add `app/process/page.tsx` with:

- intro hero
- 7-step ICM process
- supporting explanation blocks
- CTA to contact

**Step 2: Make the process readable as a sales page**

Do not dump bullets. Use visual grouping and short explanatory copy per step.

**Step 3: Run build**

Run: `npm run build`
Expected: PASS and route `/process` listed

**Step 4: Commit**

```bash
git add app/process/page.tsx
git commit -m "feat: add process page"
```

### Task 6: Implement the residential portfolio page

**Files:**
- Create: `app/residential/page.tsx`
- Reference: `lib/site-content.ts`
- Reference: `components/site/page-hero.tsx`
- Reference: `components/site/section-shell.tsx`

**Step 1: Create the route page**

Add:

- residential hero
- featured portfolio grid
- project metadata cards
- project approach section
- residential inquiry CTA

**Step 2: Structure portfolio items consistently**

Each item should support:

- title
- district/location
- date
- area/pyeong
- project type

**Step 3: Run build**

Run: `npm run build`
Expected: PASS and route `/residential` listed

**Step 4: Commit**

```bash
git add app/residential/page.tsx
git commit -m "feat: add residential portfolio page"
```

### Task 7: Implement the commercial projects page

**Files:**
- Create: `app/commercial/page.tsx`
- Reference: `lib/site-content.ts`
- Reference: `components/site/page-hero.tsx`
- Reference: `components/site/section-shell.tsx`

**Step 1: Create the route page**

Add:

- commercial hero
- major client/reference section
- grouped project lists
- execution scope section
- business inquiry CTA

**Step 2: Group projects by audience-friendly buckets**

Suggested groups:

- 오피스
- 생산/연구시설
- 리테일/상업
- 기타 수행 실적

**Step 3: Run build**

Run: `npm run build`
Expected: PASS and route `/commercial` listed

**Step 4: Commit**

```bash
git add app/commercial/page.tsx
git commit -m "feat: add commercial projects page"
```

### Task 8: Implement the about page

**Files:**
- Create: `app/about/page.tsx`
- Reference: `lib/site-content.ts`
- Reference: `components/site/page-hero.tsx`
- Reference: `components/site/section-shell.tsx`

**Step 1: Create the route page**

Add:

- company overview
- license and business facts
- history timeline
- organization summary
- contact facts

**Step 2: Present trust info clearly**

Use cards, tables, or timeline blocks rather than a raw PDF-style text dump.

**Step 3: Run build**

Run: `npm run build`
Expected: PASS and route `/about` listed

**Step 4: Commit**

```bash
git add app/about/page.tsx
git commit -m "feat: add about page"
```

### Task 9: Implement the contact page

**Files:**
- Create: `app/contact/page.tsx`
- Reference: `components/ui/input.tsx`
- Reference: `components/ui/textarea.tsx`
- Reference: `components/ui/select.tsx`
- Reference: `components/ui/button.tsx`
- Reference: `components/ui/field.tsx`
- Reference: `lib/site-content.ts`

**Step 1: Create the route page**

Add:

- contact hero
- short inquiry form
- project type selector
- direct phone/email/address block

**Step 2: Keep the form presentational unless backend handling is explicitly requested**

Use accessible labels and placeholders, but do not invent submission infrastructure.

**Step 3: Run build**

Run: `npm run build`
Expected: PASS and route `/contact` listed

**Step 4: Commit**

```bash
git add app/contact/page.tsx
git commit -m "feat: add contact page"
```

### Task 10: Final metadata and navigation polish

**Files:**
- Modify: `app/layout.tsx`
- Modify: `lib/site-content.ts`
- Reference: all route pages

**Step 1: Finalize site metadata**

Ensure title/description reflect the new positioning and official domain.

**Step 2: Verify navigation coverage**

Confirm every menu and footer link resolves to an existing route.

**Step 3: Run full production verification**

Run: `npm run build`
Expected: PASS with routes:

- `/`
- `/process`
- `/residential`
- `/commercial`
- `/about`
- `/contact`

**Step 4: Manual QA checklist**

Verify:

- no page still uses the old homepage copy
- footer uses `http://jeyuldnc.com/`
- about page does not use the discarded PDF homepage URL
- mobile header and footer remain usable
- Korean copy line breaks look intentional

**Step 5: Commit**

```bash
git add app/layout.tsx lib/site-content.ts app/page.tsx app/process/page.tsx app/residential/page.tsx app/commercial/page.tsx app/about/page.tsx app/contact/page.tsx components/site app/globals.css
git commit -m "feat: complete jeyul site renewal"
```

