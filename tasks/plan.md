# Implementation Plan: PCRN Website — De-clutter & Professional Polish

## Overview
This plan addresses the design and quality issues identified in the review of the deployed PCRN website (v1). The changes are primarily **subtractions and corrections** — removing redundant sections, fixing broken functionality, consolidating visual patterns, and improving accessibility. No new features are added. The scope respects the original plan: static export, no CMS, 6 pages, Cloudflare Pages deployment.

## Architecture Decisions
- **Split Know Your Rights** from one monolithic page into an index + 8 detail pages using Next.js static generation (`generateStaticParams`). Preserves zero-cost hosting and improves SEO/indexability.
- **Two-container system**: replace the current 6+ container dialects with `Surface` (white card, 1px border, 8px radius) and `Callout` (tinted background, no border). Enforced via a new `components/ui/Surface.tsx` and `components/ui/Callout.tsx`.
- **Typography scale**: collapse to 3 body steps (14/16/18px) + 1 display step. Minimum 14px body text everywhere. Replace system font stack with a single high-legibility font (e.g., `Inter` or `Source Sans 3` via `next/font`).
- **Dark-mode brand red**: derive dark red from the brand hue (`#9E1B28`) rather than using Tailwind's `rose-600`, so the identity colour is stable across themes.
- **Image pipeline**: enable Next.js image optimization (remove `unoptimized: true`), add `srcset`/AVIF, long cache headers. This is the single biggest UX win for the Nepali mobile audience.
- **Form handling**: not addressed in this plan — client will configure separately (see task note).

## Task List

### Phase 1: Blocking Defects (must fix before any visual work)

#### Task 1: Fix invisible "Contact Our Secretariat" button on home page
**Description:** The CTA button in the final red band renders white text on white background (contrast 1:1) due to conflicting Tailwind classes.
**Acceptance criteria:**
- [ ] Button is visibly distinct on the `#9E1B28` background in both light and dark modes
- [ ] Uses existing `Button` variant system (no inline style overrides)
**Verification:**
- [ ] Visual check on `/` at 1440px and 390px
- [ ] Contrast audit passes (≥4.5:1)
**Dependencies:** None
**Files likely touched:**
- `app/page.tsx` (line 490)
**Estimated scope:** XS

#### Task 2: Un-tick the consent checkbox in ContactForm
**Description:** `agreePrivacy` defaults to `true` (pre-checked). For a rights organisation, consent must be explicit.
**Acceptance criteria:**
- [ ] Checkbox is unchecked on initial render
- [ ] Form still requires it (HTML `required` works)
- [ ] `formData.agreePrivacy` initial state is `false`
**Verification:**
- [ ] Load `/contact`, verify checkbox empty
- [ ] Submit without checking → browser blocks (native validation)
**Dependencies:** None
**Files likely touched:**
- `components/ContactForm.tsx` (line 27)
**Estimated scope:** XS

#### Task 3: Fix sticky search strip overlap with navbar on `/know-your-rights`
**Description:** Search strip uses `sticky top-20` (80px) but the navbar is 130px tall → 50px of the search field is hidden behind the navbar when scrolled.
**Acceptance criteria:**
- [ ] Search strip sticks *below* the navbar at all scroll positions
- [ ] Works in both light/dark modes, all viewports
**Verification:**
- [ ] Scroll to 900px on `/know-your-rights`, verify search input fully visible
- [ ] Resize to 390px, repeat
**Dependencies:** None
**Files likely touched:**
- `app/know-your-rights/page.tsx` (line 102 — the sticky section)
**Estimated scope:** XS

#### Task 4: Fix team member label legibility over photos
**Description:** Role + Nepali name sit on a gradient overlay that fades where the text renders. Contrast ratios: 1.13–2.63:1 (all fail 4.5:1).
**Acceptance criteria:**
- [ ] All text over photos meets 4.5:1 contrast
- [ ] Visual hierarchy preserved (role still associated with photo)
- [ ] Works in both themes
**Verification:**
- [ ] Automated contrast audit on `/about` (target: 0 failures for team card text)
- [ ] Visual check at 1440px and 390px
**Dependencies:** None
**Files likely touched:**
- `components/TeamMemberCard.tsx` (gradient overlay + text positioning)
**Estimated scope:** S

#### Task 5: Remove dead code and create-next-app residue
**Description:** Clean up unreferenced files, unused components, and boilerplate that shouldn't ship.
**Acceptance criteria:**
- [ ] `components/FocusAreaCard.tsx` removed (unused)
- [ ] `public/file.svg`, `globe.svg`, `next.svg`, `vercel.svg`, `window.svg` removed
- [ ] `README.md` replaced with project-specific documentation
- [ ] `test_runner.js` removed (hardcoded paths to another machine)
- [ ] `screenshot*.png` at repo root removed (~760 KB)
- [ ] `Button` variant `"ghost"` removed from type + implementation (unused)
- [ ] `ContactForm` unreachable `"error"` state JSX removed
- [ ] CSS `.red-cross-divider`, `.medical-cross-symbol` removed (unused; also naming risk)
**Verification:**
- [ ] `npm run build` succeeds
- [ ] `grep -r "FocusAreaCard\|ghost\|red-cross-divider\|medical-cross-symbol" --include="*.tsx" --include="*.css"` returns nothing
- [ ] Repo size reduced by ~1 MB
**Dependencies:** None
**Files likely touched:**
- Multiple (see above)
**Estimated scope:** S

---

### Checkpoint: Blocking Defects Clear
- [ ] All 5 tasks verified
- [ ] `npm run build` passes
- [ ] No regressions on any of the 6 pages

---

### Phase 2: Home Page De-cluttering

#### Task 6: Delete home page "Action Blocks" section (Become a Member / Volunteer / Support)
**Description:** Section 2 of `/` (lines 27–103) duplicates the hero CTAs, navbar Donate, footer links, and final CTA band. Removing it cuts ~900px mobile height and one 3-up card grid.
**Acceptance criteria:**
- [ ] Section removed entirely
- [ ] Hero → Problem section flows directly
- [ ] No orphaned imports or dead CSS
**Verification:**
- [ ] Visual diff: home page height reduced by ~900px mobile
- [ ] All remaining CTAs still reachable (hero, navbar, footer, final band)
**Dependencies:** Task 5 (dead code cleanup)
**Files likely touched:**
- `app/page.tsx` (lines 27–103)
**Estimated scope:** S

#### Task 7: Merge "Problem" + "Focus Initiatives" into adjacent narrative
**Description:** Currently separated by the Know Your Rights preview. Move the 3 Focus pillars immediately after the 4 Problem cards, with a single transitional heading. Removes one 3-up card grid and one section wrapper.
**Acceptance criteria:**
- [ ] "Why Advocacy Is Urgently Needed" (4 cards) directly followed by "Our Core Focus Initiatives" (3 cards) with no intervening section
- [ ] Single narrative: problem → our response
- [ ] Section count on home page reduced from 7 to 5
**Verification:**
- [ ] Visual: two grids adjacent, same background rhythm
- [ ] Mobile height reduced by ~1,100px
**Dependencies:** Task 6
**Files likely touched:**
- `app/page.tsx` (sections 3 and 5, lines 105–192 and 291–367)
**Estimated scope:** M

#### Task 8: Reduce "News & Notices" to a single line or remove
**Description:** Three cards, all dated "September 2026", no detail pages. One announces a PDF that already has a download link elsewhere. Replace with one line: "Latest: PCRN registered Sep 2026 • 10% bed quota reminder • Rights handbook released" linking to the relevant pages.
**Acceptance criteria:**
- [ ] 3-card grid replaced by 1-line summary
- [ ] Links resolve to `/about#registration`, `/know-your-rights#right-to-transparent-billing`, `/documents/PCRN-Patient-Rights-Guide-Nepal.pdf`
- [ ] Section wrapper removed
**Verification:**
- [ ] Mobile height reduced by ~1,000px
- [ ] Links work
**Dependencies:** Task 7
**Files likely touched:**
- `app/page.tsx` (section 6, lines 370–474)
**Estimated scope:** S

#### Task 9: Rename final PDF consistently across the site
**Description:** The same file is called "Handbook", "Pocket Guide", and "Summary Handbook". Pick one name and update all 4 references.
**Acceptance criteria:**
- [ ] Single canonical name used everywhere (recommend: "Patient Rights Handbook")
- [ ] Updated in: home CTA, Know Your Rights header, Know Your Rights download section, footer if present
**Verification:**
- [ ] Search for "Handbook\|Pocket Guide\|Summary" → only canonical name appears
**Dependencies:** None
**Files likely touched:**
- `app/page.tsx`, `app/know-your-rights/page.tsx`, `components/layout/Footer.tsx`
**Estimated scope:** XS

---

### Checkpoint: Home Page Streamlined
- [ ] Home page: 5 sections (was 7), ~3,500px mobile (was ~9,000px)
- [ ] All CTAs reachable, no duplicate grids
- [ ] Build passes

---

### Phase 3: Know Your Rights — Split into Index + Detail Pages

#### Task 10: Create dynamic route structure for rights detail pages
**Description:** Add `app/know-your-rights/[slug]/page.tsx` with `generateStaticParams` reading from `content/rights.ts`. Each right gets its own URL: `/know-your-rights/right-to-information`, etc.
**Acceptance criteria:**
- [ ] 8 static pages generated at build time
- [ ] Each page has proper `h1` (the right title), unique `<title>`, OG metadata
- [ ] Breadcrumbs: Home → Know Your Rights → Right Title
- [ ] Back link to index
**Verification:**
- [ ] `npm run build` shows 8 new routes
- [ ] Visit each directly, verify SSR/SSG works
- [ ] `h1` matches right title, not "Know Your Rights"
**Dependencies:** None (can parallelize with Task 11)
**Files likely touched:**
- `app/know-your-rights/[slug]/page.tsx` (new)
- `content/rights.ts` (add `slug` field to each right if missing)
**Estimated scope:** M

#### Task 11: Convert `/know-your-rights` to scannable index page
**Description:** Replace the 8 full article renders with a compact list: right number, icon, title, Nepali title, one-line summary, link. Keep the search box filtering *this list*. Move FAQs to bottom of index or separate page.
**Acceptance criteria:**
- [ ] Index page shows 8 compact rows (not full cards)
- [ ] Search filters the 8 rows in real time
- [ ] Each row links to its detail page
- [ ] Page height < 2,000px mobile (was 7,683px)
- [ ] FAQ section moved or preserved accessibly
**Verification:**
- [ ] Visual: 8 rows, scannable in 2 screens mobile
- [ ] Search works
- [ ] All 8 links resolve
**Dependencies:** Task 10 (detail pages must exist)
**Files likely touched:**
- `app/know-your-rights/page.tsx` (major rewrite)
- `components/RightIndexRow.tsx` (new component)
**Estimated scope:** M

#### Task 12: Collapse "Checklist" into "Entitlements" on detail pages
**Description:** On each right detail page, the "Patient Verification Checklist" duplicates the "What You Are Entitled To" list. Merge into one list with checkmark icons.
**Acceptance criteria:**
- [ ] Single list per right (was two side-by-side boxes)
- [ ] Content preserved, no duplication
- [ ] Layout simpler: summary → merged list → redress box → citation
**Verification:**
- [ ] Visual check on 2–3 detail pages
- [ ] Content audit: all original points present
**Dependencies:** Task 10
**Files likely touched:**
- `app/know-your-rights/[slug]/page.tsx`
**Estimated scope:** S

---

### Checkpoint: Know Your Rights Restructured
- [ ] 9 pages total (1 index + 8 detail)
- [ ] All indexed, unique metadata
- [ ] Mobile height of index < 2,000px
- [ ] Build passes, no 404s

---

### Phase 4: Visual System Consolidation

#### Task 13: Create `Surface` and `Callout` primitive components
**Description:** Two layout primitives to replace the 6+ ad-hoc card/box patterns.
- `Surface`: white/dark card, 1px border, 8px radius, optional padding prop
- `Callout`: tinted background (rose-50/rose-950), no border, same radius
**Acceptance criteria:**
- [ ] Both components exported from `components/ui/`
- [ ] TypeScript interfaces with `children`, `className`, `padding?`
- [ ] Dark mode correct
- [ ] Used in at least one place to validate
**Verification:**
- [ ] Storybook or manual test: render both in light/dark
- [ ] No visual regression vs old cards
**Dependencies:** Task 5 (dead code cleanup removes old patterns)
**Files likely touched:**
- `components/ui/Surface.tsx` (new)
- `components/ui/Callout.tsx` (new)
- `components/ui/index.ts` (export)
**Estimated scope:** S

#### Task 14: Migrate home page to Surface/Callout
**Description:** Replace all `rounded-xl border shadow-xs bg-white dark:bg-slate-900` etc. with `<Surface>`; replace `bg-rose-50` boxes with `<Callout>`.
**Acceptance criteria:**
- [ ] Zero `rounded-xl border shadow-xs` strings remain in `app/page.tsx`
- [ ] Visual parity (or improvement)
- [ ] Dark mode correct
**Verification:**
- [ ] Visual diff home page light/dark
- [ ] Grep confirms old patterns gone
**Dependencies:** Task 13
**Files likely touched:**
- `app/page.tsx`
**Estimated scope:** M

#### Task 15: Migrate Know Your Rights index + detail pages to Surface/Callout
**Description:** Same migration for the new KYR pages.
**Acceptance criteria:**
- [ ] Index rows use minimal styling (no card wrapper)
- [ ] Detail pages use `Surface` for redress box, `Callout` for legal citation
- [ ] Old inline styles removed
**Verification:**
- [ ] Visual check index + 2 detail pages
**Dependencies:** Tasks 10, 11, 13
**Files likely touched:**
- `app/know-your-rights/page.tsx`
- `app/know-your-rights/[slug]/page.tsx`
**Estimated scope:** M

#### Task 16: Migrate remaining pages (About, Focus Areas, Get Involved, Contact)
**Description:** Apply Surface/Callout to the other 4 pages.
**Acceptance criteria:**
- [ ] Consistent container language across all 6 pages
- [ ] No ad-hoc `rounded-* border shadow-* bg-*` combos remain in page components
**Verification:**
- [ ] Grep for `rounded-xl\|rounded-2xl\|shadow-xs\|shadow-sm` in `app/**/*.tsx` → only in primitives
- [ ] Visual audit all 6 pages
**Dependencies:** Task 13
**Files likely touched:**
- `app/about/page.tsx`
- `app/focus-areas/page.tsx`
- `app/get-involved/page.tsx`
- `app/contact/page.tsx`
**Estimated scope:** L (can parallelize across pages)

#### Task 17: Remove icon-in-coloured-square tiles (the "AI aesthetic")
**Description:** ~40 instances of `<div className="w-10 h-10 rounded-lg bg-rose-50 ..."><Icon /></div>` across the site. Replace with inline icons or plain typography.
**Acceptance criteria:**
- [ ] Zero `w-10 h-10 rounded-lg bg-rose-50` (or similar) patterns in `app/**` and `components/**`
- [ ] Icons still present where semantically useful (inline with headings)
- [ ] Visual weight reduced
**Verification:**
- [ ] Grep confirms removal
- [ ] Visual: pages feel lighter, hierarchy clearer
**Dependencies:** Task 14–16 (migrate containers first)
**Files likely touched:**
- Many (home, about, focus-areas, get-involved, know-your-rights)
**Estimated scope:** M

#### Task 18: Remove decorative separators (`•`, `|`, squiggle underline)
**Description:** The `•` bullets and `|` pipes in navbars/footers measure 1.49:1 contrast (fail). The SVG squiggle under "Nepal" in hero is pure decoration. Remove all.
**Acceptance criteria:**
- [ ] No `•` or `|` used as visual separators in navbar, footer, or hero
- [ ] Hero "Nepal" underline removed
- [ ] Layout spacing handles separation instead
**Verification:**
- [ ] Contrast audit: 0 failures for separator characters
- [ ] Visual: cleaner, no missing hierarchy
**Dependencies:** None
**Files likely touched:**
- `components/layout/Navbar.tsx`, `components/layout/Footer.tsx`, `components/Hero.tsx`
**Estimated scope:** S

---

### Checkpoint: Visual System Unified
- [ ] 2 container primitives used everywhere
- [ ] 0 icon tiles, 0 decorative separators
- [ ] All 6 pages visually consistent
- [ ] Build passes

---

### Phase 5: Typography & Colour Polish

#### Task 19: Install and configure a single legible font (Inter or Source Sans 3)
**Description:** Replace system font stack with `next/font` loading one variable font. Set as default for `body`.
**Acceptance criteria:**
- [ ] Font loads via `next/font` (self-hosted, no Google Fonts request)
- [ ] Applied to `body` in `globals.css`
- [ ] Variable font weights 400/500/600/700 available
- [ ] Layout stable (no CLS from font swap)
**Verification:**
- [ ] Lighthouse: no "font-display" or CLS warnings
- [ ] Visual: consistent glyphs across all pages
**Dependencies:** None (can parallelize)
**Files likely touched:**
- `app/layout.tsx` (font import)
- `app/globals.css` (font-family on body)
**Estimated scope:** S

#### Task 20: Collapse type scale to 3 body steps + 1 display
**Description:** Audit all `text-*` classes, reduce to: `text-body-sm` (14px), `text-body` (16px), `text-body-lg` (18px), `text-display` (responsive 32–48px). Remove all `text-xs`, `text-[10px]`, `text-[11px]`, `text-[12px]` from body content.
**Acceptance criteria:**
- [ ] Minimum computed font-size for any paragraph/list item/link ≥ 14px
- [ ] No `text-xs`/`text-[10px]`/`text-[11px]`/`text-[12px]` on content elements
- [ ] Headings use display scale
**Verification:**
- [ ] Automated audit: 0 nodes < 14px (excluding badges/pills)
- [ ] Visual: elderly-readable at default zoom
**Dependencies:** Task 19
**Files likely touched:**
- `app/globals.css` (new utility classes)
- All page components (migrate classes)
**Estimated scope:** M

#### Task 21: Derive dark-mode brand red from brand hue
**Description:** Replace `rose-600`/`rose-400` dark-mode reds with a single dark-mode red derived from `#9E1B28` (e.g., `#E04B57` — same hue, higher lightness). Update CSS custom properties and Tailwind theme.
**Acceptance criteria:**
- [ ] `--pcrn-red` (light) and `--pcrn-red-dark` (dark) share the same hue angle
- [ ] All brand-red uses (buttons, links, icons, focus rings) consistent in both themes
- [ ] No `rose-400`/`rose-600`/`rose-500` in codebase for brand purposes
**Verification:**
- [ ] Visual: brand red recognisable in both themes
- [ ] Grep: no `rose-400\|rose-500\|rose-600` in brand contexts
**Dependencies:** None (can parallelize)
**Files likely touched:**
- `app/globals.css` (CSS custom properties, `@theme`)
- `tailwind.config.ts` if exists, else `globals.css` `@theme`
**Estimated scope:** S

---

### Checkpoint: Typography & Colour Professional
- [ ] Single font, 3 body sizes, min 14px
- [ ] Brand red stable across themes
- [ ] No regression on any page

---

### Phase 6: Image Performance & Accessibility Polish

#### Task 22: Enable Next.js image optimization + AVIF/WebP + srcset
**Description:** Remove `images.unoptimized: true` from `next.config.ts`. Add `sizes` props to all `Image` components. Configure `formats: ['image/avif', 'image/webp']`. Set long `Cache-Control` headers via Cloudflare Pages `_headers` or `next.config.ts` `headers()`.
**Acceptance criteria:**
- [ ] Hero image serves AVIF/WebP with `srcset` at 390/768/1440w
- [ ] All `Image` components have `sizes` prop
- [ ] `Cache-Control: public, max-age=31536000, immutable` on `/images/*`
- [ ] Total image payload on 390px home < 200 KB (was ~913 KB)
**Verification:**
- [ ] DevTools Network: verify AVIF/WebP, `srcset`, cache headers
- [ ] Lighthouse Performance > 90
- [ ] `npm run build` succeeds
**Dependencies:** None (can parallelize)
**Files likely touched:**
- `next.config.ts`
- `components/Hero.tsx`, `components/TeamMemberCard.tsx`, `app/focus-areas/page.tsx`, `app/get-involved/page.tsx`, `app/about/page.tsx` (add `sizes`)
- `public/_headers` or `next.config.ts headers()`
**Estimated scope:** M

#### Task 23: Add skip link + search label + heading order fixes
**Description:**
- Skip link: `<a href="#main" className="sr-only focus:not-sr-only ...">Skip to content</a>` at top of `layout.tsx`
- Search input: add `aria-label="Search patient rights"` or visible `<label>`
- Heading order: insert `h2` wrappers for the 3-up card grids on home page
**Acceptance criteria:**
- [ ] Skip link works (Tab → Enter jumps to main)
- [ ] Search input has accessible name
- [ ] Home page heading order: `H1 → H2 → H3...` (no H3 before H2)
**Verification:**
- [ ] axe-core or WAVE: 0 critical/serious issues
- [ ] Keyboard test: Tab order logical
**Dependencies:** Task 7 (home heading structure changes)
**Files likely touched:**
- `app/layout.tsx`
- `app/know-your-rights/page.tsx` (search)
- `app/page.tsx` (heading wrappers)
**Estimated scope:** S

#### Task 24: Fix tap targets < 44px on mobile
**Description:** 26–42 elements per page under 44px height (inline links, icon buttons). Ensure all interactive elements meet 44×44 CSS px on mobile.
**Acceptance criteria:**
- [ ] Automated audit: 0 targets < 44px on 390px viewport
- [ ] Inline links in body text exempt (but not in nav/footer)
**Verification:**
- [ ] Playwright audit at 390px
- [ ] Manual thumb test on phone
**Dependencies:** Task 14–16 (container migration may change layouts)
**Files likely touched:**
- `components/layout/Navbar.tsx`, `components/layout/Footer.tsx`, `components/ui/Button.tsx`, page components
**Estimated scope:** M

#### Task 25: SVG logo + favicon cleanup
**Description:** Replace PNG logo with SVG (scalable, ~2 KB vs 49 KB). Consolidate favicon.ico to single SVG + 32px PNG. Remove unused logo variants (`pcrn-logo-1024.png`, `pcrn-logo-512.png`, `pcrn-logo-white-bg.png`).
**Acceptance criteria:**
- [ ] `<Image src="/images/pcrn-logo.svg" ...>` used in Navbar + Footer
- [ ] Favicon works in browser tab, bookmarks, PWA
- [ ] Unused PNGs deleted
- [ ] Total logo payload < 10 KB (was ~700 KB across variants)
**Verification:**
- [ ] Visual: logo crisp at all sizes
- [ ] Network: single logo request, < 10 KB
**Dependencies:** None
**Files likely touched:**
- `public/images/pcrn-logo.svg` (new, from source)
- `components/layout/Navbar.tsx`, `components/layout/Footer.tsx`
- `app/layout.tsx` (metadata icons)
- Delete unused PNGs
**Estimated scope:** S

---

### Checkpoint: Performance & Accessibility Complete
- [ ] Image payload < 200 KB on 390px home
- [ ] Lighthouse: Perf > 90, A11y > 95, Best Practices > 90
- [ ] Skip link, heading order, tap targets all pass
- [ ] SVG logo deployed

---

### Phase 7: Repo Hygiene & Documentation

#### Task 26: Write project-specific README
**Description:** Replace create-next-app boilerplate with PCRN-specific docs: deploy (Cloudflare Pages), env vars (web3forms key), content editing (`content/rights.ts`), adding pages, font/image conventions.
**Acceptance criteria:**
- [ ] README covers: dev, build, deploy, content model, design system (Surface/Callout), adding a right
- [ ] No mention of Geist, Vercel, or create-next-app
**Verification:**
- [ ] New contributor can follow README to run dev + build
**Dependencies:** All prior phases (so docs reflect final state)
**Files likely touched:**
- `README.md` (rewrite)
**Estimated scope:** S

#### Task 27: Add Cloudflare Pages `_headers` for long image caching
**Description:** Static export needs explicit headers for immutable assets. Create `public/_headers` with rules for `/images/*` and `/documents/*`.
**Acceptance criteria:**
- [ ] `/images/*` → `Cache-Control: public, max-age=31536000, immutable`
- [ ] `/documents/*` → same
- [ ] Verified via `curl -I` on deployed URL
**Verification:**
- [ ] Deploy preview, check headers
**Dependencies:** Task 22
**Files likely touched:**
- `public/_headers` (new)
**Estimated scope:** XS

---

## Risks and Mitigations

| Risk | Impact | Mitigation |
|------|--------|------------|
| KYR split (Task 10–12) breaks existing bookmarks/links | Medium | Old `/know-your-rights` URL preserved as index; detail pages are new. No redirects needed. |
| Surface/Callout migration misses a page, visual regression | Medium | Checkpoint after each page; visual diff via Playwright screenshots. |
| Font change causes layout shift (CLS) | Low | Use `next/font` with `display: swap` and `size-adjust` fallback; test Lighthouse. |
| Dark-mode red derivation picks a hue that fails contrast on some surfaces | Low | Test against all background tokens (white, slate-50, slate-900, rose-50) in both themes. |
| Client's web3forms key not configured → form still broken | High (but out of scope) | Document clearly in README; leave mailto fallback in code. |
| Red-cross CSS class name flagged by security scan | Low | Already removed in Task 5. |

## Open Questions
1. **Font choice**: Inter vs Source Sans 3 — any organisational preference? (Inter is more neutral; Source Sans 3 has better Devanagari coverage for Nepali UI text if you ever localise the interface.)
2. **KYR detail page URL slugs**: `content/rights.ts` has `id: "right-to-information"` etc. — use these as slugs, or prefer shorter (`information`, `consent`, `emergency`, `privacy`, `refuse`, `billing`, `records`, `grievance`)?
3. **PDF redesign**: Task 9 renames it; Task 25 doesn't redesign it. Do you want a designed PDF in this cycle or a follow-up?
4. **Contact form**: Confirmed out of scope for this plan. Will you provide the web3forms key via Cloudflare Pages env vars, or switch to a different endpoint?

---

## Task Tracking
Tasks are recorded in `tasks/todo.md` (checklist format) for the `/build` command to consume. Each task maps to the structure above with acceptance criteria and verification steps.