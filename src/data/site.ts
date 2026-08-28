export const site = {
  domain: "nickts.ai",
  url: "https://nickts.ai",
  name: "Nick Tsai",
  nameZh: "蔡逸凯",
  email: "nicktsai1221@gmail.com",
  githubUrl: "https://github.com/Nick14848",
  resumePath: "/resume.pdf",
  REDNOTE_URL: "https://xhslink.com/m/8uQvbHfgDI6",
  DOUYIN_URL: "https://www.douyin.com/search/%E5%B0%8F%E8%8F%9CNick",
  NEXUS_DEMO_URL: "#",
  location: "Taiwan · Shenzhen · Hong Kong",
  identity: "AI × FINANCE × SYSTEMS × PRODUCT",
  title: "Nick Tsai — AI × Finance × Builder",
  description:
    "Nick Tsai builds AI systems, invests for the long term, and treats discipline as the same skill in body, markets and work.",
  headline: "Long-termism",
  ogAlt: "nickts.ai — Nick Tsai / 蔡逸凯. Long-termism.",
  creatorName: "小菜Nick",
} as const;

export const STORAGE_KEYS = {
  locale: "nickts.ai:locale",
  lens: "nickts.ai:lens",
} as const;

export const sectionIds = {
  work: "work",
  story: "story",
  elsewhere: "elsewhere",
  experience: "experience",
  community: "community",
} as const;

export type Locale = "en" | "zh";
export type Lens = "recruiter" | "builder" | "creator";
export const lenses: Lens[] = ["recruiter", "builder", "creator"];
export const locales: Locale[] = ["en", "zh"];
