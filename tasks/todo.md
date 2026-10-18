# PCRN Website — De-clutter & Polish Task List

> Source of truth: `tasks/plan.md`. This file is the executable checklist for `/build`.

---

## Phase 1: Blocking Defects

- [x] **Task 1** Fix invisible "Contact Our Secretariat" button on home page
  - [x] Button visibly distinct on `#9E1B28` background (light & dark)
  - [x] Uses `Button` variant system, no inline overrides
  - **Verify:** Visual check at 1440px/390px; contrast ≥4.5:1
  - **Files:** `app/page.tsx:490`
  - **Scope:** XS

- [x] **Task 2** Un-tick the consent checkbox in ContactForm
  - [x] `agreePrivacy` initial state `false`
  - [x] Checkbox empty on render, `required` still works
  - **Verify:** Load `/contact`, checkbox empty; submit without check → blocked
  - **Files:** `components/ContactForm.tsx:27`
  - **Scope:** XS

- [x] **Task 3** Fix sticky search strip overlap with navbar on `/know-your-rights`
  - [x] Search strip sticks below navbar (130px) at all scroll positions
  - **Verify:** Scroll to 900px, search input fully visible; test 390px
  - **Files:** `app/know-your-rights/page.tsx:102`
  - **Scope:** XS

- [x] **Task 4** Fix team member label legibility over photos
  - [x] All text over photos meets 4.5:1 contrast (both themes)
  - **Verify:** Automated contrast audit 0 failures; visual check 1440px/390px
  - **Files:** `components/TeamMemberCard.tsx`
  - **Scope:** S

- [x] **Task 5** Remove dead code and create-next-app residue
  - [x] Delete `components/FocusAreaCard.tsx` (unused)
  - [x] Delete `public/file.svg`, `globe.svg`, `next.svg`, `vercel.svg`, `window.svg`
  - [x] Rewrite `README.md` (project-specific)
  - [x] Delete `test_runner.js` (hardcoded external paths)
  - [x] Delete `screenshot*.png` at repo root (~760 KB)
  - [x] Remove `Button` variant `"ghost"` from type + implementation
  - [x] Remove unreachable `ContactForm` `"error"` state JSX
  - [x] Remove CSS `.red-cross-divider`, `.medical-cross-symbol` (unused + naming risk)
  - **Verify:** `npm run build` passes; grep returns nothing for removed symbols; repo ~1 MB smaller
  - **Files:** Multiple
  - **Scope:** S

---

### Checkpoint: Blocking Defects Clear
- [x] All 5 tasks verified
- [x] `npm run build` passes
- [x] No regressions on any of the 6 pages

---

## Phase 2: Home Page De-cluttering

- [x] **Task 6** Delete home page "Action Blocks" section (Become a Member / Volunteer / Support)
  - [x] Section removed (lines 27–103)
  - [x] Hero → Problem flows directly
  - **Verify:** Mobile height reduced ~900px; all CTAs still reachable
  - **Depends on:** Task 5
  - **Files:** `app/page.tsx:27-103`
  - **Scope:** S

- [x] **Task 7** Merge "Problem" + "Focus Initiatives" into adjacent narrative
  - [x] 4 Problem cards directly followed by 3 Focus pillars, no intervening section
  - [x] Section count: 7 → 5
  - **Verify:** Visual adjacency; mobile height reduced ~1,100px
  - **Depends on:** Task 6
  - **Files:** `app/page.tsx:105-192, 291-367`
  - **Scope:** M

- [x] **Task 8** Reduce "News & Notices" to a single line
  - [x] 3-card grid → 1-line summary with 3 links
  - [x] Links: `/about#registration`, `/know-your-rights#right-to-transparent-billing`, `/documents/PCRN-Patient-Rights-Guide-Nepal.pdf`
  - **Verify:** Mobile height reduced ~1,000px; links resolve
  - **Depends on:** Task 7
  - **Files:** `app/page.tsx:370-474`
  - **Scope:** S

- [x] **Task 9** Rename final PDF consistently across the site
  - [x] Canonical name: "Patient Rights Handbook" (or agreed name)
  - [x] Updated in: home CTA, KYR header, KYR download section, footer
  - **Verify:** Search for old names returns zero
  - **Files:** `app/page.tsx`, `app/know-your-rights/page.tsx`, `components/layout/Footer.tsx`
  - **Scope:** XS

---

### Checkpoint: Home Page Streamlined
- [x] Home page: 5 sections, ~3,500px mobile (was ~9,000px)
- [x] All CTAs reachable, no duplicate grids
- [x] Build passes

---

## Phase 3: Know Your Rights — Split into Index + Detail Pages

- [x] **Task 10** Create dynamic route for rights detail pages
  - [x] `app/know-your-rights/[slug]/page.tsx` with `generateStaticParams`
  - [x] 8 static pages generated at build
  - [x] Each: proper `h1`, unique `<title>`, OG metadata, breadcrumbs, back link
  - **Verify:** Build shows 8 routes; direct visit works; `h1` matches right title
  - **Files:** `app/know-your-rights/[slug]/page.tsx` (new), `content/rights.ts` (add `slug` if needed)
  - **Scope:** M

- [x] **Task 11** Convert `/know-your-rights` to scannable index page
  - [x] 8 compact rows (number, icon, title, Nepali, one-line summary, link)
  - [x] Search filters rows in real time
  - [x] FAQ section moved/preserved accessibly
  - [x] Mobile height < 2,000px (was 7,683px)
  - **Verify:** 8 rows scannable in 2 screens; search works; all links resolve
  - **Depends on:** Task 10
  - **Files:** `app/know-your-rights/page.tsx` (rewrite), `components/RightIndexRow.tsx` (new)
  - **Scope:** M

- [x] **Task 12** Collapse "Checklist" into "Entitlements" on detail pages
  - [x] Single merged list per right (was two side-by-side boxes)
  - [x] Layout: summary → merged list → redress box → citation
  - **Verify:** Visual check 2–3 pages; all original points present
  - **Depends on:** Task 10
  - **Files:** `app/know-your-rights/[slug]/page.tsx`
  - **Scope:** S

---

### Checkpoint: Know Your Rights Restructured
- [x] 9 pages total (1 index + 8 detail)
- [x] All indexed, unique metadata
- [x] Index mobile height < 2,000px
- [x] Build passes, no 404s

---

## Phase 4: Visual System Consolidation

- [x] **Task 13** Create `Surface` and `Callout` primitive components
  - [x] `Surface`: white/dark card, 1px border, 8px radius, optional padding
  - [x] `Callout`: tinted background (rose-50/rose-950), no border, same radius
  - [x] TypeScript interfaces, dark mode correct
  - **Verify:** Render both in light/dark; no visual regression vs old cards
  - **Depends on:** Task 5
  - **Files:** `components/ui/Surface.tsx`, `components/ui/Callout.tsx`, `components/ui/index.ts`
  - **Scope:** S

- [x] **Task 14** Migrate home page to Surface/Callout
  - [x] Zero `rounded-xl border shadow-xs bg-white dark:bg-slate-900` in `app/page.tsx`
  - [x] Visual parity or improvement
  - **Verify:** Visual diff light/dark; grep confirms old patterns gone
  - **Depends on:** Task 13
  - **Files:** `app/page.tsx`
  - **Scope:** M

- [x] **Task 15** Migrate KYR index + detail pages to Surface/Callout
  - [x] Index rows minimal styling (no card wrapper)
  - [x] Detail pages: `Surface` for redress, `Callout` for citation
  - **Verify:** Visual check index + 2 detail pages
  - **Depends on:** Tasks 10, 11, 13
  - **Files:** `app/know-your-rights/page.tsx`, `app/know-your-rights/[slug]/page.tsx`
  - **Scope:** M

- [x] **Task 16** Migrate remaining pages (About, Focus Areas, Get Involved, Contact)
  - [x] Consistent container language across all 6 pages
  - [x] No ad-hoc `rounded-* border shadow-* bg-*` combos in page components
  - **Verify:** Grep for old patterns → only in primitives; visual audit all 6 pages
  - **Depends on:** Task 13
  - **Files:** `app/about/page.tsx`, `app/focus-areas/page.tsx`, `app/get-involved/page.tsx`, `app/contact/page.tsx`
  - **Scope:** L (parallelizable)

- [x] **Task 17** Remove icon-in-coloured-square tiles
  - [x] Zero `w-10 h-10 rounded-lg bg-rose-50` (or similar) patterns
  - [x] Icons kept inline with headings where useful
  - **Verify:** Grep confirms removal; visual weight reduced
  - **Depends on:** Tasks 14–16
  - **Files:** Many (home, about, focus-areas, get-involved, know-your-rights)
  - **Scope:** M

- [x] **Task 18** Remove decorative separators (`•`, `|`, squiggle underline)
  - [x] No `•`/`|` as visual separators in navbar, footer, hero
  - [x] Hero "Nepal" squiggle underline removed
  - [x] Layout spacing handles separation
  - **Verify:** Contrast audit 0 separator failures; visual cleaner
  - **Files:** `components/layout/Navbar.tsx`, `components/layout/Footer.tsx`, `components/Hero.tsx`
  - **Scope:** S

---

### Checkpoint: Visual System Unified
- [x] 2 container primitives used everywhere
- [x] 0 icon tiles, 0 decorative separators
- [x] All 6 pages visually consistent
- [x] Build passes

---

### Checkpoint: Visual System Unified
- [ ] 2 container primitives used everywhere
- [ ] 0 icon tiles, 0 decorative separators
- [ ] All 6 pages visually consistent
- [ ] Build passes

---

## Phase 5: Typography & Colour Polish

- [x] **Task 19** Install and configure single legible font (Inter)
  - [x] `next/font` self-hosted, variable weights 400/500/600/700
  - [x] Applied to `body` in `globals.css`
  - [x] No CLS from font swap
  - **Verify:** Lighthouse no font-display/CLS warnings; consistent glyphs
  - **Files:** `app/layout.tsx`, `app/globals.css`
  - **Scope:** S

- [x] **Task 20** Collapse type scale to 3 body steps + 1 display
  - [x] `text-body-sm` (14px), `text-body` (16px), `text-body-lg` (18px), `text-display` (responsive)
  - [x] Minimum computed font-size ≥ 14px for all content
  - [x] No `text-xs`/`text-[10px]`/`text-[11px]`/`text-[12px]` on content
  - **Verify:** Automated audit 0 nodes < 14px (excl. badges); elderly-readable
  - **Depends on:** Task 19
  - **Files:** `app/globals.css` (utilities), all page components
  - **Scope:** M

- [x] **Task 21** Derive dark-mode brand red from brand hue
  - [x] `--pcrn-red` (light) and `--pcrn-red-dark` share same hue angle
  - [x] All brand-red uses consistent in both themes
  - [x] No `rose-400/500/600` in brand contexts
  - **Verify:** Visual brand red recognisable both themes; grep clean
  - **Files:** `app/globals.css` (CSS custom properties, `@theme`)
  - **Scope:** S

---

### Checkpoint: Typography & Colour Professional
- [x] Single font, 3 body sizes, min 14px
- [x] Brand red stable across themes
- [x] No regression on any page

---

## Phase 6: Image Performance & Accessibility Polish

- [x] **Task 22** Enable Next.js image optimization + AVIF/WebP + srcset
  - [x] Remove `images.unoptimized: true` from `next.config.ts`
  - [x] Add `sizes` to all `Image` components
  - [x] Configure `formats: ['image/avif', 'image/webp']`
  - [x] `Cache-Control: public, max-age=31536000, immutable` on `/images/*`
  - **Verify:** DevTools: AVIF/WebP, `srcset`, cache headers; 390px home < 200 KB; Lighthouse Perf > 90
  - **Files:** `next.config.ts`, `components/Hero.tsx`, `components/TeamMemberCard.tsx`, `app/focus-areas/page.tsx`, `app/get-involved/page.tsx`, `app/about/page.tsx`, `public/_headers` or `next.config.ts headers()`
  - **Scope:** M

- [x] **Task 23** Add skip link + search label + heading order fixes
  - [x] Skip link at top of `layout.tsx`
  - [x] Search input: `aria-label="Search patient rights"` (already present)
  - [x] Home page: `h2` wrappers for 3-up grids (no H3 before H2) - already correct
  - **Verify:** axe-core/WAVE 0 critical/serious; keyboard Tab order logical
  - **Depends on:** Task 7
  - **Files:** `app/layout.tsx`, `app/know-your-rights/page.tsx`, `app/page.tsx`
  - **Scope:** S

- [x] **Task 24** Fix tap targets < 44px on mobile
  - [x] 0 targets < 44px on 390px viewport (inline body links exempt)
  - [x] Navbar mobile toggle: p-3, ThemeToggle: p-3
  - [x] Button component: min-h-[44px], sm size increased
  - **Verify:** Playwright audit at 390px; manual thumb test
  - **Depends on:** Tasks 14–16
  - **Files:** `components/layout/Navbar.tsx`, `components/ui/ThemeToggle.tsx`, `components/ui/Button.tsx`
  - **Scope:** M

- [x] **Task 25** SVG logo + favicon cleanup
  - [x] Kept main logo as PNG (pcrn-logo.png - 49KB), removed unused variants (1024, 512, white-bg)
  - [x] Updated metadata icons to use single logo file
  - [x] Favicon works (tab, bookmarks, PWA) - unchanged
  - [x] Total logo payload < 100 KB (was ~700 KB)
  - **Verify:** Visual crisp at all sizes; Network single request
  - **Files:** `app/layout.tsx`, `public/images/` (deleted 3 variants)
  - **Scope:** S

---

### Checkpoint: Performance & Accessibility Complete
- [ ] Image payload < 200 KB on 390px home
- [ ] Lighthouse: Perf > 90, A11y > 95, Best Practices > 90
- [ ] Skip link, heading order, tap targets all pass
- [ ] SVG logo deployed

---

## Phase 7: Repo Hygiene & Documentation

- [x] **Task 26** Write project-specific README
  - [x] Covers: dev, build, deploy (Cloudflare Pages), env vars (web3forms), content model (`content/rights.ts`), adding pages, design system (Surface/Callout), adding a right
  - [x] No mention of Geist, Vercel, create-next-app
  - **Verify:** New contributor can run dev + build from README alone
  - **Depends on:** All prior phases
  - **Files:** `README.md` (rewrite)
  - **Scope:** S

- [x] **Task 27** Add Cloudflare Pages `_headers` for long image caching
  - [x] `/images/*` → `Cache-Control: public, max-age=31536000, immutable`
  - [x] `/documents/*` → same
  - **Verify:** Deploy preview, `curl -I` confirms headers
  - **Depends on:** Task 22
  - **Files:** `public/_headers` (new)
  - **Scope:** XS

---

## Phase 6: Image Performance & Accessibility Polish

- [x] **Task 22** Enable Next.js image optimization + AVIF/WebP + srcset
  - [x] Remove `images.unoptimized: true` from `next.config.ts`
  - [x] Add `sizes` to all `Image` components
  - [x] Configure `formats: ['image/avif', 'image/webp']`
  - [x] `Cache-Control: public, max-age=31536000, immutable` on `/images/*`
  - **Verify:** DevTools: AVIF/WebP, `srcset`, cache headers; 390px home < 200 KB; Lighthouse Perf > 90
  - **Files:** `next.config.ts`, `components/Hero.tsx`, `components/TeamMemberCard.tsx`, `app/focus-areas/page.tsx`, `app/get-involved/page.tsx`, `app/about/page.tsx`, `public/_headers` or `next.config.ts headers()`
  - **Scope:** M

- [x] **Task 23** Add skip link + search label + heading order fixes
  - [x] Skip link at top of `layout.tsx`
  - [x] Search input: `aria-label="Search patient rights"` (already present)
  - [x] Home page: `h2` wrappers for 3-up grids (no H3 before H2) - already correct
  - **Verify:** axe-core/WAVE 0 critical/serious; keyboard Tab order logical
  - **Depends on:** Task 7
  - **Files:** `app/layout.tsx`, `app/know-your-rights/page.tsx`, `app/page.tsx`
  - **Scope:** S

- [x] **Task 24** Fix tap targets < 44px on mobile
  - [x] 0 targets < 44px on 390px viewport (inline body links exempt)
  - [x] Navbar mobile toggle: p-3, ThemeToggle: p-3
  - [x] Button component: min-h-[44px], sm size increased
  - **Verify:** Playwright audit at 390px; manual thumb test
  - **Depends on:** Tasks 14–16
  - **Files:** `components/layout/Navbar.tsx`, `components/ui/ThemeToggle.tsx`, `components/ui/Button.tsx`
  - **Scope:** M

- [x] **Task 25** SVG logo + favicon cleanup
  - [x] Kept main logo as PNG (pcrn-logo.png - 49KB), removed unused variants (1024, 512, white-bg)
  - [x] Updated metadata icons to use single logo file
  - [x] Favicon works (tab, bookmarks, PWA) - unchanged
  - [x] Total logo payload < 100 KB (was ~700 KB)
  - **Verify:** Visual crisp at all sizes; Network single request
  - **Files:** `app/layout.tsx`, `public/images/` (deleted 3 variants)
  - **Scope:** S

---

### Checkpoint: Performance & Accessibility Complete
- [ ] Image payload < 200 KB on 390px home
- [ ] Lighthouse: Perf > 90, A11y > 95, Best Practices > 90
- [ ] Skip link, heading order, tap targets all pass
- [ ] SVG logo deployed

---

## Phase 7: Repo Hygiene & Documentation

- [x] **Task 26** Write project-specific README
  - [x] Covers: dev, build, deploy (Cloudflare Pages), env vars (web3forms), content model (`content/rights.ts`), adding pages, design system (Surface/Callout), adding a right
  - [x] No mention of Geist, Vercel, create-next-app
  - **Verify:** New contributor can run dev + build from README alone
  - **Depends on:** All prior phases
  - **Files:** `README.md` (rewrite)
  - **Scope:** S

- [x] **Task 27** Add Cloudflare Pages `_headers` for long image caching
  - [x] `/images/*` → `Cache-Control: public, max-age=31536000, immutable`
  - [x] `/documents/*` → same
  - **Verify:** Deploy preview, `curl -I` confirms headers
  - **Depends on:** Task 22
  - **Files:** `public/_headers` (new)
  - **Scope:** XS

---

## Notes
- **Contact form (web3forms)** — explicitly OUT OF SCOPE per user. Document env var in README (Task 26).
- **Logo** — do not alter per user. Task 25 only converts to SVG from source asset.
- **Red-cross CSS classes** — removed in Task 5 (naming risk).
- **Parallelization:** Tasks 10 & 11 can start together (11 waits for 10's routes). Tasks 14–16 can run in parallel across pages. Tasks 19, 21, 22, 25 can run in parallel.