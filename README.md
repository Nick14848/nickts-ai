# nicktsai.me

Personal digital identity for **Nick Tsai / 蔡逸凯**.

This is not a résumé website. It is a quiet, dark, editorial product: a public operating system for how Nick thinks and what he actually builds across AI, finance, systems and product.

Primary positioning:

> Invest in yourself · Build systems · Long-termism. Stay Childish.

Live domain: [nicktsai.me](https://nicktsai.me)

## Why this is not a résumé website

A résumé lists credentials. This site is structured around four things:

1. **Identity** — a precise thesis in the first screen.
2. **Proof of work** — four systems, shown as architecture, not job bullets.
3. **Story** — photos, discipline, markets, the long game.
4. **Distribution** — GitHub, RedNote, Douyin, email, and the command palette as a product surface.

The first screen is a person, not an availability status.

## Design philosophy

Editorial minimalism × AI product × institutional quality × personal taste.

- Dark-first, near-black canvas
- Swiss typography with oversized headlines and tiny mono labels
- 12-column editorial grid, asymmetric composition, leftover space
- Cobalt `#3B6FFF` used at roughly 5–10% of the surface
- No purple AI gradients, no glassmorphism, no 3D, no fake terminals

Whitespace is a feature. Precision beats decoration.

## Tech stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS 4
- Motion (`motion/react`)
- Geist and Geist Mono, bundled locally via the `geist` package (no Google Fonts request at runtime)

No backend, database, CMS, auth or analytics in V1. The site is intentionally static and easy to extend.

Build path shown on the site:

`Cursor → GitHub → Vercel → nicktsai.me`

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other commands:

```bash
npm run lint
npm run typecheck
npm test
npm run test:e2e
npm run build
npm start
```

`npm run test:e2e` will install Playwright’s Chromium browser on first run if needed:

```bash
npx playwright install chromium
```

## Content structure

All editable personal information lives in `src/data/`. Do not hunt through components.

| File | What it owns |
| --- | --- |
| [`src/data/site.ts`](src/data/site.ts) | Domain, email, GitHub, RedNote, Douyin, résumé path, SEO strings |
| [`src/data/content.ts`](src/data/content.ts) | Project ids, tags, experience, photos, nav, lens order |
| [`src/data/translations.ts`](src/data/translations.ts) | English and 简体中文 copy |

Brand names and technology names stay untranslated.

Language and lens choices persist in `localStorage`.

## How to replace the important bits

### Email

In [`src/data/site.ts`](src/data/site.ts):

```ts
email: "nicktsai1221@gmail.com",
```

### GitHub

```ts
githubUrl: "https://github.com/Nick14848",
```

### RedNote / 小红书

```ts
REDNOTE_URL: "https://xhslink.com/m/8uQvbHfgDI6",
```

### Douyin / 抖音

Search page for 小菜Nick:

```ts
DOUYIN_URL: "https://www.douyin.com/search/%E5%B0%8F%E8%8F%9CNick",
```

### Résumé

The public résumé currently lives at [`public/resume.pdf`](public/resume.pdf), copied from `cv/Tsai_Yi_Kai_Nick_CV.pdf`. Replace that file to update the download.

### Bio, projects, availability

Edit copy in `src/data/translations.ts` and structural facts in `src/data/content.ts` / `src/data/site.ts`.

## Privacy

This is a public website. Never add:

- home address or exact Shenzhen neighborhood
- phone number
- family assets or structures
- private client names, deal names, or internal screenshots

Investing is shown as a way of thinking. Do not add extra numbers, net worth, or new holdings into the copy.

Investing is described only at a high level: long-term investor, index investing, asset allocation, compounding, CFA Level I.

Selected work uses abstract CSS/SVG system diagrams on purpose. There are no fake dashboards and no confidential data.

## Deploy through GitHub → Vercel

1. Create a GitHub repository and push this project.
2. Import the repo in [Vercel](https://vercel.com).
3. Framework preset: Next.js. Build command: `npm run build`. Output: default.
4. Deploy.

### Connect nicktsai.me

1. In Vercel: Project → Settings → Domains → add `nicktsai.me` and `www.nicktsai.me`.
2. At your registrar, point DNS as Vercel instructs (usually an A record for the apex and a CNAME for `www`).
3. Wait for HTTPS. Set the canonical domain to `https://nicktsai.me`.

`src/data/site.ts` is the source of truth: `domain` and `url` feed metadata, sitemap, robots and JSON-LD.

## Interactions worth knowing

- **换个角度看** — Recruiter / AI · Startup / Media. Changes the snapshot and jump links.
- **EN / 中** — typed content dictionary, no i18n framework.
- **⌘K / Ctrl+K** — command palette.
- Email links copy `nicktsai1221@gmail.com` and briefly show `COPIED`.

## Project map

```text
src/
  app/             layout, page, metadata, OG image, robots, sitemap
  components/      editorial sections, palette, diagrams
  data/            site config and copy
  lib/             preferences and helpers
```
