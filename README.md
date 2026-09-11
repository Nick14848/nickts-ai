# nicktsai.me — Digital Business Card

A bilingual, mobile-first business card for **Nick Tsai / 蔡逸凯**. A paper-like card flips and expands into a professional introduction, followed by work experience, education and the creator story.

Live website: [nicktsai.me](https://nicktsai.me)

## Start in a fresh desktop folder

Open a terminal **in your Desktop directory**, then run:

```sh
git clone https://github.com/Nick14848/nickts-ai.git nicktsai-website-v2
cd nicktsai-website-v2
npm ci
npm run dev
```

This folder is independent of the old `nicktsai_website` folder. Cloning connects `origin` to the existing GitHub repository and checks out `main`. Open this new folder in Codex or Cursor for future edits.

Development runs at [localhost:3000](http://localhost:3000). Use a supported Node.js LTS compatible with the installed Next.js version.

## Edit content

| File                                  | What to edit                                                                            |
| ------------------------------------- | --------------------------------------------------------------------------------------- |
| `src/data/business-card.ts`           | Phone, cities, follower total, work history, education and current Chinese/English copy |
| `src/data/site.ts`                    | Email, domain, social URLs, résumé path and metadata                                    |
| `src/components/BusinessCardSite.tsx` | Structure, scroll interaction and dialogs                                               |
| `src/app/business-card.css`           | Colors, typography and responsive layout                                                |
| `public/resume.pdf`                   | Public résumé download                                                                  |
| `public/life/bike.jpg`                | Creator photograph                                                                      |

The domain highlights `ai` in **nicktsai.me**. The signature highlights **AI** and the **i / a** in **Finance**. The name uses solid, high-contrast blue with no translucent layer over the text.

Previous V1 components and translations remain for reference, but the homepage now renders `BusinessCardSite`. Edit the current files above to change the live page.

### Social links

- RedNote uses the existing personal sharing URL.
- **Douyin currently uses the existing search for 小菜Nick, not a verified profile URL.** The button is labelled accordingly. Replace `DOUYIN_URL` in `src/data/site.ts` when the exact profile link is available; also update `creator.douyinNote` in both languages.
- The `7K+` total is user-provided and manually maintained, not a live counter.

### Accuracy and privacy

- The displayed phone and email were explicitly approved by Nick for this public business card.
- HKU is an education affiliation. The degree is marked as in progress, with expected graduation in late 2026. No official crest or endorsement claim is used.
- Company names describe work experience, not sponsorship.
- Never add client names, deal details, confidential screenshots, home addresses or family information.

## Interactions

- Scroll: the card flips, expands and blends into work experience.
- Header: direct work-experience navigation and Chinese/English switch; language persists locally.
- Keep in touch: native modal with email, phone and email-copy action; Escape closes it.
- `Cmd+K` / `Ctrl+K`: quick navigation, résumé, GitHub and contact.
- Reduced motion: static card and separate introduction.
- No JavaScript: server-rendered content and ordinary contact links remain available.

## Validate changes

```sh
npm run typecheck
npm run lint
npm test
npm run build
```

For browser checks on your computer:

```sh
npx playwright install chromium
npm run test:e2e
```

The browser suite covers 320–1440px widths, card overflow, name color, language persistence, scroll, contact dialog and reduced motion. Unit/build checks do not replace a browser run.

`scripts/dev.mjs` retains the Next.js dev server while translating the supervised preview's `--host` option to Next.js `--hostname`. It does not change Vercel production hosting.

## Publish future edits

Before editing, update a clean checkout:

```sh
git pull --ff-only
```

After making and validating changes, stage the intended files and publish:

```sh
git add src/data/business-card.ts src/app/business-card.css
git commit -m "Update business card"
git push origin main
```

Adjust the `git add` paths to your actual edits. The existing Vercel integration deploys `main`; check deployment status before assuming the production site has updated.

## Stack

Next.js App Router · React · TypeScript · Tailwind CSS · Motion · locally bundled Geist fonts. No backend, database, authentication or tracking analytics is required.
