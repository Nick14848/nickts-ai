const domain = "nicktsai.me";
const email = "nicktsai1221@gmail.com";

export const site = {
  domain,
  url: `https://${domain}`,
  name: "Nick Tsai",
  nameZh: "蔡逸凯",
  email,
  inquiryEmail: "nicktsai1221@163.com",
  githubUrl: "https://github.com/Nick14848",
  resumePath: "/resume.pdf",
  resumePathZh: "/resume-zh.pdf",
  REDNOTE_URL: "https://xhslink.com/m/8uQvbHfgDI6",
  DOUYIN_URL: "https://www.douyin.com/search/%E5%B0%8F%E8%8F%9CNick",
  deepPivotUrl: null as string | null,
  location: "Taiwan · Shenzhen · Hong Kong",
  identity: "AI × FINANCE × SYSTEMS × PRODUCT",
  title: "Nick Tsai — AI × Finance × Builder",
  description:
    "Nick Tsai builds AI systems for financial workflows across enterprise AI, data and investment technology.",
  headline: "Long-termism",
  ogAlt: `${domain} — Nick Tsai / 蔡逸凯. Long-termism.`,
  creatorName: "小菜Nick",
} as const;

export function splitDomain(value: string = site.domain): {
  host: string;
  tld: string;
} {
  const dot = value.lastIndexOf(".");
  if (dot <= 0) {
    return { host: value, tld: "" };
  }
  return { host: value.slice(0, dot), tld: value.slice(dot) };
}

export function markDomainAccent(value: string = site.domain): {
  before: string;
  accent: string;
  after: string;
} {
  const index = value.toLowerCase().lastIndexOf("ai");
  if (index < 0) {
    return { before: value, accent: "", after: "" };
  }
  return {
    before: value.slice(0, index),
    accent: value.slice(index, index + 2),
    after: value.slice(index + 2),
  };
}

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
