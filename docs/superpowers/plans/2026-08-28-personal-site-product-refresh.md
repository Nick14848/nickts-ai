# Personal Site Product Refresh Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Finish the approved Institutional Signal refresh so nicktsai.me has brighter contrast, three direct audience paths, Deep Pivot + Custom AI as the only top-level projects, and a mailto inquiry draft to 163.com.

**Architecture:** Keep content in `src/data/` (`site.ts` for domain/emails, `content.ts` for structure, `translations.ts` for EN/ZH). Extract `draftMailto` into `src/lib/inquiry.ts` so unit tests can assert encoding without opening a mail client. Audience cards are stateless links; do not keep a second-stage action row.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript, Tailwind 4, Vitest, Playwright.

**Spec:** `docs/superpowers/specs/2026-08-28-personal-site-product-refresh-design.md`

**Constraints:** Keep `NICK TS` + blue `AI`. Keep `localStorage` keys `nickts.ai:locale` and `nickts.ai:lens`. Do not claim Deep Pivot is incorporated. Do not put Archbridge on project cards. Public Email stays Gmail; inquiry mailto uses 163.com. Do not commit unless asked.

---

### Task 1: Lock spec behavior in tests

**Files:**
- Modify: `src/data/translations.test.ts`
- Create: `src/data/content.test.ts`
- Create: `src/lib/inquiry.test.ts`
- Modify: `src/components/LensSelector.test.tsx`
- Modify: `tests/site.spec.ts`

- [ ] **Step 1: Write failing tests** for two work chapters, four Deep Pivot modules, inquiry types, 163 mailto encoding, audience cards as links (not tabs), Recruiter CV path, Investment Workspace (not NEXUS as a top-level heading), and `Personal homepage`.

- [ ] **Step 2: Run** `npm test` and confirm the new assertions fail against current code.

---

### Task 2: Data and copy

**Files:**
- Modify: `src/data/content.ts` — rename NEXUS display to `Investment Workspace`; inquiry types `workflows | tools | data | website | other`.
- Modify: `src/data/site.ts` — add empty `deepPivotUrl`; keep Gmail public email; keep 163 inquiry email; update demo subject off NEXUS.
- Modify: `src/data/translations.ts` — hero EN `Personal homepage`; chapter `status`; inquiry types; audience briefs/actions; Deep Pivot details without Nexus; build headline/copy from spec.
- Create: `src/lib/inquiry.ts` — `draftMailto`.

---

### Task 3: UI against spec

**Files:**
- `src/components/Hero.tsx` — order: places → note → 蔡逸凯 → NICK TS[AI] → line1/2/3 → credentials; AccentAI on subline.
- `src/app/globals.css` — `.hero-stage`; keep signal-runner + reduced-motion.
- `src/components/LensSelector.tsx` — three cards; each card’s primary CTA is the navigation; Recruiter has inline CV link; no tablist; no snapshot row.
- `src/components/Story.tsx` — `object-contain`; 1 / 2 / 3 column gallery.
- `src/components/SelectedWork.tsx` — status on Deep Pivot; compact modules.
- `src/components/ProjectModule.tsx` — compact cards without giant venture numbering.
- `src/components/InquiryForm.tsx` — use `draftMailto`; default type `workflows`; show 163 destination.
- `src/components/BuildStack.tsx` — CTA to `#custom-ai`.
- `src/components/project-visuals/Diagrams.tsx` — replace on-diagram `NEXUS` label.

---

### Task 4: Verify

Run: `npm run lint`, `npm run typecheck`, `npm test`, `npm run build`, `npm run test:e2e`.

Confirm: 375px overflow, language toggle, audience links, mailto to 163, no Archbridge in `#work`, Deep Pivot + Custom AI as the two top-level entries.
