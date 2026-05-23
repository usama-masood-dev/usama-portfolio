# Project images

**Export every screenshot at 1920×912 px** (width × height). Same ratio for:

- `cover` — project cards, bento, case study hero (`BrowserFrame`)
- All gallery files — case study carousel

Drop files in each project folder; update `src/lib/images.ts` if filenames change.

## Optima-CRM (`optima-crm/`)

- `cover.png`
- Gallery: `crm-1.jpg`, `crm-2.png` … `crm-9.png`

## Immosurance AML (`immosurance-aml/`)

- `cover.png`
- Gallery: `aml-1.png` … `aml-8.png`

## The Brand Vue (`thebrandvue/`)

- `cover.png`
- Gallery: `brand-1.png` … `brand-7.png`

## Panvika (`panvika-learning-system/`)

Add `cover` + gallery files at 1920×912, then wire paths in `src/lib/images.ts`.

## Site images (`public/images/`)

Hero/marketing shots also work best at **1920×912** for consistent framing:

- `profile.webp` — About page (square crop is OK; portrait only)
- `hero-dashboard.jpg` — Home hero (`BrowserFrame`)
- `hero-code.jpg` — Services page
