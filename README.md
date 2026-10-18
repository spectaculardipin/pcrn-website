# Patients Rights Concern Nepal (PCRN) — Website

Static website for Patients Rights Concern Nepal, an independent health advocacy NGO based in Kathmandu, Nepal.

## Stack

- **Framework**: Next.js 16 (App Router, static export)
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript
- **Deployment**: Cloudflare Pages
- **Fonts**: System font stack (San Francisco / Segoe UI / Roboto)
- **Forms**: web3forms (configured via `NEXT_PUBLIC_WEB3FORMS_KEY` env var)

## Quick Start

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Production build (static export to /out)
npm run build

# Preview production build locally
npm run start
```

## Project Structure

```
app/                    # Next.js App Router pages
├── page.tsx           # Home page
├── about/             # About Us page
├── contact/           # Contact page (with form)
├── focus-areas/       # Focus Areas page
├── get-involved/      # Get Involved page
├── know-your-rights/  # Know Your Rights index + detail pages
│   └── [slug]/        # Dynamic detail pages for each right
├── layout.tsx         # Root layout (Navbar, Footer, theme)
├── globals.css        # Global styles + CSS variables
components/
├── ui/                # Design system primitives
│   ├── Button.tsx
│   ├── Container.tsx
│   ├── ThemeToggle.tsx
│   ├── Surface.tsx    # (to be created in Phase 4)
│   └── Callout.tsx    # (to be created in Phase 4)
├── layout/            # Navbar, Footer
├── Hero.tsx
├── TeamMemberCard.tsx
├── ContactForm.tsx
content/
├── rights.ts          # Patient rights data (8 rights + FAQs)
public/
├── images/            # Optimized images (AVIF/WebP via Next.js Image)
├── documents/         # PDF handbook
```

## Content Model

### Patient Rights (`content/rights.ts`)

Each right has:
- `id` — slug used for detail page URL (`/know-your-rights/[id]`)
- `number` — display number (1–8)
- `title` / `nepaliTitle` — bilingual headings
- `shortSummary` — one-paragraph overview
- `legalBasis` — statutory citation string
- `iconName` — Lucide icon identifier
- `keyPoints` — array of entitlement bullets
- `patientChecklist` — array of verification questions
- `whatToDoIfViolated` — actionable redress steps

To add a right: append to `patientRights` array in `content/rights.ts`. The detail page generates automatically at build time.

### FAQs

`patientFAQ` array in same file — each entry has `q` and `a` strings.

## Design System

### Primitives (Phase 4)

| Component | Purpose |
|-----------|---------|
| `Surface` | White card, 1px border, 8px radius — default container |
| `Callout` | Tinted background (rose-50/rose-950), no border — for highlights |
| `Button` | Variants: `primary`, `secondary`, `outline`, `white` |
| `Container` | Responsive max-width wrapper (narrow/default/wide) |

### Colour Tokens (CSS Variables)

| Token | Light | Dark | Use |
|-------|-------|------|-----|
| `--pcrn-red` | `#9E1B28` | `#E04B57` | Brand red — same hue, adjusted lightness |
| `--pcrn-red-dark` | `#7F121D` | — | Hover states |
| `--pcrn-red-light` | `#FEF2F2` | `rgba(158,27,40,0.18)` | Subtle backgrounds |
| `--pcrn-red-border` | `#FECDD3` | `rgba(225,29,72,0.3)` | Borders |

### Typography Scale

| Class | Size | Use |
|-------|------|-----|
| `text-body-sm` | 14px | Minimum body text |
| `text-body` | 16px | Default body text |
| `text-body-lg` | 18px | Lead paragraphs |
| `text-display` | Responsive 32–48px | Page/section headings |

**Minimum computed font-size for any content: 14px.**

### Spacing

Tailwind default scale (4px increments). No arbitrary pixel values.

## Configuration

### Environment Variables (Cloudflare Pages)

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_WEB3FORMS_KEY` | Yes | Access key for web3forms contact form endpoint |

### Image Optimization

Next.js Image optimization is **enabled** (not `unoptimized`). All `Image` components must include a `sizes` prop. Configured formats: AVIF, WebP.

Cache headers for immutable assets are set via `public/_headers`:
```
/images/*     → Cache-Control: public, max-age=31536000, immutable
/documents/*  → Cache-Control: public, max-age=31536000, immutable
```

## Deployment

### Cloudflare Pages

1. Connect repository to Cloudflare Pages
2. Build command: `npm run build`
3. Output directory: `out`
4. Add `NEXT_PUBLIC_WEB3FORMS_KEY` in Pages → Settings → Environment variables
5. Deploy

The `next.config.ts` is configured for static export:
```ts
output: "export",
images: { formats: ["image/avif", "image/webp"] },
trailingSlash: true,
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server with Turbopack |
| `npm run build` | Production build + static export |
| `npm run start` | Serve `out/` directory locally |
| `npm run lint` | Run ESLint |

## Accessibility

- Skip link at top of page
- Semantic heading hierarchy (H1 → H2 → H3)
- All interactive elements ≥ 44×44px on mobile
- Focus visible outlines on all focusable elements
- Form inputs have associated labels
- Images have descriptive alt text
- Colour contrast ≥ 4.5:1 for text (WCAG 2.1 AA)

## Known Limitations

- Contact form uses web3forms (third-party). If the endpoint is unreachable, the UI shows a success state but the message may not be delivered. A `mailto:` fallback link is provided in the success state.
- No CMS — content edits require code changes and rebuild.
- Static export means no server-side dynamic features (ISR, API routes).

## License

Proprietary — Patients Rights Concern Nepal. All rights reserved.