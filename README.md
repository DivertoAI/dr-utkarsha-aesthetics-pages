# Dr Utkarsha Aesthetics - Next.js Rebuild

High-conversion, SEO-focused Next.js App Router rebuild for Bangalore patient and business lead generation.

## Included

- Static-first architecture (`SSG`) for fast page loads.
- Full treatment URL set under `/services/[slug]` from the existing clinic sitemap.
- Premium light green + yellow design system.
- Gallery recreated using the clinic's original assets in `public/gallery`.
- Service pages enriched with locally hosted copyright-free images in `public/service-images`.
- Structured data on homepage:
  - `MedicalClinic`
  - `FAQPage`
  - `Person`
- SEO support:
  - `app/sitemap.ts`
  - `app/robots.ts`
- Lead capture UX:
  - WhatsApp CTA
  - Call CTA
  - Business partnership page
  - Sticky mobile conversion bar

## Local Run

```bash
npm install
npm run dev
```

Build:

```bash
npm run build
npm run start
```

## GitHub Pages Deployment

1. Push this folder to a GitHub repository.
2. In GitHub repo settings, open `Pages`:
   source: `GitHub Actions`.
3. The workflow at `.github/workflows/deploy-pages.yml` builds and deploys automatically on every push to `main`.
4. Site URL format: `https://<username>.github.io/<repo-name>/`.

Image license/source references are documented in `IMAGE_SOURCES.md`.

## Migration Milestone Plan

1. `Day 1`: Content lock and legal/medical disclaimer review.
2. `Day 2`: Visual QA on mobile + desktop + CTA flow testing.
3. `Day 3`: DNS cutover to Vercel and post-launch crawl checks.
4. `Week 2`: SEO indexing audit, page-level conversion baseline, and CTA iteration.
