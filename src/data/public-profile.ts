import { businessCardCopy, cardDetails } from "./business-card";
import { site, type Locale } from "./site";

export const profileUpdated = "2026-10-17";

// One public source for the visual site, Markdown and JSON. Never load private CVs here.
export function publicProfile(locale: Locale) {
  const copy = businessCardCopy[locale];
  return {
    schema_version: "1.0",
    schema_note: "Site-defined public profile, not an A2A Agent Card.",
    updated: profileUpdated,
    language: locale,
    source: `${site.url}/agent/${locale}`,
    provenance: "Self-published by Nick Tsai. Employment and qualifications are self-reported, not independently verified by this website.",
    identity: { name: site.name, chinese_name: site.nameZh, role: "AI Builder", website: site.url },
    positioning: copy.intro.tagline,
    about: copy.intro.summary,
    capabilities: copy.intro.bridges,
    experience: copy.experience.jobs,
    education: { institution: copy.experience.school, degree: copy.experience.degree, dates: copy.experience.educationDates },
    credentials: copy.experience.credentials,
    languages: copy.experience.languages,
    creator: { name: copy.creator.name, followers: cardDetails.followers, followers_note: "Self-reported profile snapshot, not a live platform count.", description: copy.creator.copy },
    contact: { email: site.email, business_wechat: site.businessWechat },
    links: { github: site.githubUrl, rednote: site.REDNOTE_URL, douyin_search: site.DOUYIN_URL },
    boundaries: locale === "zh" ? [
      "资产规模和牌照描述的是雇主，不是个人管理规模或个人牌照。",
      "工作经历不构成雇主对个人项目的背书；本站不提供投资建议或基金认购。",
      "公开资料可用于了解背景与讨论合作；合作范围、可用时间和承诺须由本人确认。",
    ] : [
      "Asset figures and licenses describe the employer, not personally managed assets or personal licenses.",
      "Employment is not an endorsement of independent projects. This site does not offer investment advice or fund subscriptions.",
      "Use this public profile to understand background and discuss opportunities. Scope, availability and commitments require Nick's confirmation.",
    ],
  };
}

export function profileMarkdown(locale: Locale) {
  const p = publicProfile(locale);
  return [
    `# ${p.identity.name} / ${p.identity.chinese_name}`,
    `> ${p.positioning}`,
    `Source: ${p.source}\nUpdated: ${p.updated}\nLanguage: ${locale}\n${p.provenance}`,
    `## About\n${p.about}`,
    `## Capabilities\n${p.capabilities.map(c => `### ${c.label}\n${c.detail}`).join("\n\n")}`,
    `## Experience\n${p.experience.map(j => `### ${j.company}\n${j.role} | ${j.dates} | ${j.location}\n${j.description ?? ""}\n${j.points.map(point => `- ${point}`).join("\n")}`).join("\n\n")}`,
    `## Education\n${p.education.institution}\n${p.education.degree}\n${p.education.dates}`,
    `## Credentials and languages\n${p.credentials}\n${p.languages}`,
    `## Beyond work\n${p.creator.name}\n${p.creator.description}\nFollowers across platforms: ${p.creator.followers}. ${p.creator.followers_note}`,
    `## Contact\nEmail: ${p.contact.email}\nBusiness inquiries — WeChat: ${p.contact.business_wechat}`,
    `## Links\n${Object.entries(p.links).map(([key, url]) => `- [${key}](${url})`).join("\n")}`,
    `## Context and boundaries\n${p.boundaries.map(b => `- ${b}`).join("\n")}`,
    "",
  ].join("\n\n");
}

export const llmsIndex = `# Nick Tsai / 蔡逸凯

> AI Builder working across enterprise AI, Hong Kong private markets, and connections across Shenzhen, Hong Kong and Taiwan.

This is Nick's self-published public profile. No login, JavaScript, scrolling or mode switch is required to read these resources. The Human / Agent switch is a presentation choice for visitors, not an access requirement for agents.
Updated: ${profileUpdated}. Cite the source and distinguish self-reported experience from independently verified facts. Employer assets and licenses are not personal assets or credentials. Nick confirms any engagement himself.

## Profile
- [English profile](${site.url}/about.en.md): Background, experience, education, contact and boundaries.
- [中文资料](${site.url}/about.zh.md): 中文介绍、工作经历、教育背景和公开联系方式。
- [Structured profile](${site.url}/profile.json): Both languages; site-defined JSON schema, not an A2A service.

## Optional
- [Agent reading view](${site.url}/agent/en): Accessible HTML presentation of the same public profile.
- [Human view](${site.url}/): Visual business card and personal introduction.
`;
