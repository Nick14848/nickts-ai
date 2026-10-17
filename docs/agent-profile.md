# Public profile: Human / Agent

The Human view and the Agent resources share `src/data/business-card.ts` and
`src/data/site.ts`. The exporter in `src/data/public-profile.ts` selects public
facts only. Update its revision date when changing the public profile.

## Direct access

- `/agent/en` and `/agent/zh`: statically rendered HTML; no JavaScript required.
- `/llms.txt`: a small discovery index with links to public resources.
- `/about.en.md` and `/about.zh.md`: complete text profiles.
- `/profile.json`: both languages using a site-defined schema, not A2A.

The mode switch is for human navigation, not a prerequisite or authentication
mechanism for machine readers. Root HTML includes alternate-format links;
the sitemap includes both Agent pages. No user-agent detection or hidden claims.

## Publishing boundaries

Public contacts are email and the business WeChat handle. Phone numbers, private
resumes and retired photos are not deployed. Removing a current file does not
erase Git history, old deployments, downloads or third-party caches.

Employer AUM and licenses belong to the employer. Employment, credentials and
regional networks are self-reported; do not represent them as independently
verified. The follower count is a snapshot, not a live API result.

## Verification

- Production build, lint, 72 unit tests.
- Browser inspection at 320, 390 and 1440px; both languages.
- JavaScript-disabled Agent page and direct Markdown/JSON reads.
- Clipboard content equals the exported Markdown.
- Language navigation and return to the Human card flip.
- Retired PDF and image URLs return 404 in the current build.

The decorative orbital graphic is not a live network-activity indicator.
