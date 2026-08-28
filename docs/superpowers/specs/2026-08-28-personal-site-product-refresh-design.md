# nicktsai.me Product Refresh Design

Date: 2026-08-28

## Goal

Make nicktsai.me feel immediately distinctive, credible, and useful to recruiters, investors, prospective AI clients, friends, classmates, and family. The site should present Nick as a strong AI + finance builder without becoming a toy-like portfolio or copying Archbridge Capital Partners.

The approved visual direction is **Institutional Signal**: brighter editorial contrast, restrained financial-system motion, clear audience paths, and a stronger project/service hierarchy.

## Principles

- Preserve the existing dark editorial identity and cobalt accent.
- Improve contrast and hierarchy rather than adding decorative noise.
- Use motion to imply systems, data, and execution; never use particle rain, 3D gimmicks, or loud gradients.
- Keep all important actions obvious and keyboard accessible.
- Keep Chinese and English structurally aligned.
- Keep the production domain centralized in `src/data/site.ts`.
- Keep the hero brand exactly as `NICK TS` plus the blue `AI`.
- Do not expose confidential employer, client, or deal information.

## Navigation and Global Visual System

### Palette

- Shift the page background from near-black to a slightly brighter deep charcoal-blue.
- Increase the contrast of body copy, navigation links, section headings, and dividers.
- Continue using cobalt blue only for AI, important numbers, active states, and primary actions.
- Do not add extra accent colors.

### Sticky navigation

- Keep the navigation sticky at the top during scrolling.
- Use a coordinated deep-blue translucent background with a subtle blue-gray border.
- Make About, Projects, and Contact links brighter and easier to scan.
- English résumé label: `CV ↗`.
- Chinese résumé label: `简历 ↗`.

## Hero

### Content hierarchy

The Chinese hero follows this order:

1. `台湾 · 深圳 · 香港`
2. Contextual place note, defaulting to `Hi 大家好我是`
3. `蔡逸凯`
4. `NICK TS` + blue `AI`
5. `的个人主页`
6. `投资自己 · 构建系统 · 长期主义`
7. `Stay Childish.`
8. `港大 数据科学 · 香港 AI + Finance · ex-HSBC CIB · 小菜Nick`

The English version uses the same structure and meaning:

1. `Taiwan · Shenzhen · Hong Kong`
2. `Hi, I’m`
3. `蔡逸凯`
4. `NICK TS` + blue `AI`
5. `Personal homepage`
6. `Invest in yourself · Build systems · Long-termism`
7. `Stay Childish.`
8. `HKU Data Science · Hong Kong AI + Finance · ex-HSBC CIB · 小菜Nick`

`蔡逸凯` is visibly larger than its current meta-label treatment. The `AI` in the final credential line uses the same cobalt accent as the `AI` in `TSAI`.

### Place interaction

- Chinese place labels are translated to 台湾, 深圳, 香港.
- English labels remain Taiwan, Shenzhen, Hong Kong.
- Labels are large enough to look interactive.
- Hover, focus, or tap updates the short note below:
  - 台湾: 我的快乐老家
  - 深圳: 住了十几年也算半个深圳人吧
  - 香港: 我在港大念书和工作
- English notes carry the same meaning.

### Motion

- Add a very subtle data grid and one animated signal path/node around the hero.
- Use low-frequency, small-distance movement.
- Keep text reveal restrained.
- Disable nonessential motion under `prefers-reduced-motion`.
- Do not obscure or reduce the readability of the hero photo or text.

## Audience Paths

### Purpose

Replace the current tab-plus-tag interface with three obvious, functional audience routes. The section heading remains `换个角度看`, with:

`选择你的角色，只看你感兴趣的部分`

English:

`Choose your role and see only what matters to you.`

### Cards

Each card is visibly actionable, has an arrow, and provides a clear hover/focus state. The small secondary tag row is removed.

#### Recruiter / 招聘

Chinese:

`查看我的过往实习工作经历，或者直接看简历`

Actions:

- `查看过往经历 →` scrolls to Experience.
- The words `看简历 ↗` open the configured CV in a new tab.

English:

`See my previous internships and work experience, or go straight to my CV.`

#### AI Venture / AI创业

Chinese:

`查看我做的一些 cool AI 产品项目，to B or to C`

Action:

- `查看项目 →` scrolls to Projects.

English:

`See the cool AI products I build, from B2B to B2C.`

#### Media / 自媒体

Chinese:

`查看我做的自媒体内容，以及镜头外面的那个小菜Nick~`

Action:

- `查看内容 →` scrolls to the community/media content.

English:

`See my content, community, and 小菜Nick off-camera.`

The audience paths are direct links, not a hidden second-stage navigation system.

## About

### Chinese copy

1. `生于台湾，深圳长大，在香港读书和工作。`
2. `多年在两岸三地生活，给了我比较独特的视野。`
3. `现在主要住在深圳南山，香港工作，偶尔回台湾度假。`
4. `哈哈照片里那个小胖子是我，减肥只是因为觉得以前太胖了，想健康一点，and why not?`
5. `我觉得减肥健身、投资金融市场、工作、创业本质其实是同一件事：自律、长期、韧性、复利、系统。`
6. `我在港大读 Data Science（即将 2026 年底毕业），在 HSBC CIB 做过分析，现在在香港资管机构里搭私有 AI 系统。`
7. `工作之外我在小红书和抖音做自媒体，小菜Nick，主要是记录生活，给其他人带来快乐，分享留学求职日常，记录两岸文化差异，AI学习干货等等。`
8. `我喜欢研究投资、资产配置，还喜欢骑车、打篮球、健身，也喜欢上手做一些有价值、有意义的东西。比如帮企业/朋友用AI解决问题，创造价值！`

The English copy matches all eight ideas naturally rather than translating word-for-word.

台湾, 深圳, and 香港 are highlighted with the existing cobalt accent in the first three paragraphs.

### Gallery

- Keep only the three current non-bike photos.
- Rename `我以前真的好胖` to `以前真的好胖`.
- Use a three-column desktop gallery, two-column tablet layout, and one-column mobile layout.
- Place images in consistently aligned containers and use `object-contain`.
- Preserve the full image; do not crop people or force narrow portrait strips.
- Do not leave a visually empty fourth slot.

## Projects and Services

The Projects section contains two top-level entries.

### 01 Deep Pivot

Status:

- Chinese: `项目进行中`
- English: `Project in progress`

Positioning:

Deep Pivot provides practical AI implementation for small and mid-sized financial institutions, including private equity, private credit, venture capital, and family offices.

Primary descriptor:

- Chinese: `私募投资 AI 工作平台`
- English: `Private Market AI Workspace`

Do not claim Deep Pivot is already an incorporated company. Do not use ACP project names or confidential details.

#### Solution modules

The existing four systems become compact submodules under Deep Pivot:

1. Investment Workspace
2. Feasibility Agent
3. Private AI Infrastructure
4. Market Intelligence Pipeline

Each module shows:

- One concise value proposition
- Key technology tags
- A compact abstract architecture diagram

The modules are not numbered as separate top-level ventures. A future Deep Pivot company URL is configured centrally and can be added when available.

### 02 AI Custom Solutions / FDE

Position Nick as an AI builder who bridges technical delivery, business requirements, and customer conversations. The service helps companies and individuals use AI to automate work, reduce cost, improve execution, and create value.

#### Inquiry form

Fields:

- Name
- Contact email
- Need type
- Message

Need types:

- AI workflows
- Internal tools
- Data and automation
- Website building
- Other

Delivery:

- The form creates a prefilled `mailto:` draft.
- Recipient: `nicktsai1221@163.com`.
- The existing public email button continues to use `nicktsai1221@gmail.com`.
- The submit label states that the visitor’s mail app will open; it must not imply the message was sent automatically.
- The 163.com inquiry address is configured in `src/data/site.ts`, separate from the public contact email.

## Build CTA

Add this heading above the existing build stack:

`也想搭建属于自己的网站吗？`

English:

`Want to build a website of your own?`

Keep:

`Cursor → GitHub → Vercel → nicktsai.me`

`Next.js · TypeScript · Tailwind CSS · Motion`

Replace the supporting line with:

`其实用 AI 真的不难，这个网站花了我一个早上`

English:

`Building with AI is genuinely approachable. This site took me one morning.`

The CTA links to the AI Custom Solutions inquiry form.

## Data and Component Boundaries

- `src/data/site.ts`: production domain, public email, inquiry email, CV path, and future Deep Pivot URL.
- `src/data/content.ts`: two top-level projects, four Deep Pivot solution modules, inquiry types, navigation structure, gallery structure.
- `src/data/translations.ts`: all aligned Chinese/English user-facing copy.
- `Hero.tsx`: place interaction and restrained signal animation.
- `LensSelector.tsx`: renamed internally if useful; renders three stateless audience-path cards.
- `Story.tsx`: rich place emphasis and three-image non-cropping gallery.
- `SelectedWork.tsx`: renders Deep Pivot and AI Custom Solutions as the two top-level entries.
- Add focused components for solution modules and the mailto inquiry form rather than growing one large project component.

## Accessibility and Failure Handling

- All interactive elements have visible focus states and at least 44px targets.
- Audience cards expose meaningful link text, not only visual arrows.
- Place interaction works with hover, keyboard focus, and tap.
- Animations respect reduced-motion preferences.
- Form fields have labels and native validation.
- The inquiry form shows the destination address and explains that it opens a mail draft.
- All layouts continue to avoid horizontal overflow at 375px.

## Testing and Verification

- Translation key parity tests for Chinese and English.
- Unit tests for audience paths and inquiry mailto generation.
- Assert Recruiter’s CV link uses the configured résumé path.
- Assert the inquiry mailto targets the configured 163.com address and encodes form values.
- Assert Deep Pivot contains four solution modules and the Projects section has only two top-level entries.
- Playwright checks for language switching, direct audience navigation, mobile overflow, reduced motion, external link safety, and the mailto action.
- Run lint, typecheck, unit tests, production build, and Playwright before completion.

## Non-goals

- No real backend form submission in this version.
- No database, CRM, analytics, or account system.
- No public claim that Deep Pivot is an incorporated company.
- No redesign of Experience, Contact, SEO, or domain configuration beyond what is required to support this design.
- No copying of Archbridge’s layout, wording, or brand assets.
