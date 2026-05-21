# Usama Masood — Portfolio

Personal portfolio site for **Usama Masood**, MERN / Next.js full stack developer.

Built with Next.js 16, Tailwind CSS v4, Framer Motion, and Embla Carousel.

## Project location

```
Personal Projects/
  usama-portfolio/     ← this site
  (future projects)/
```

## Getting started

```bash
cd usama-portfolio
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | Production URL for metadata |
| `NEXT_PUBLIC_FORMSPREE_ID` | Formspree form ID for contact form |
| `NEXT_PUBLIC_CALENDLY_URL` | Optional Calendly booking link |

## Before launch

1. Copy `.env.example` to `.env.local` and add your Formspree ID.
2. Add resume PDF: `public/resume.pdf` (MERN version).
3. Update `src/lib/site.ts` — LinkedIn, GitHub URLs if needed.
4. Deploy to Vercel (free): connect repo → set env vars → deploy.

## Pages

- `/` — Home (hero, catalog preview, project carousel)
- `/work` — Project grid
- `/work/[slug]` — Case studies
- `/services` — Services + full project catalog
- `/about` — Bio, timeline, resume download
- `/contact` — Form + Calendly
- `/privacy` — Privacy policy

## Customize branding

Edit CSS variables in `src/app/globals.css` (`:root` and `.dark`) to change colors site-wide.

Content lives in:

- `src/lib/site.ts`
- `src/lib/projects.ts`
- `src/lib/catalog.ts`

## Scripts

```bash
npm run dev      # development
npm run build    # production build
npm run start    # start production server
npm run lint     # ESLint
```
