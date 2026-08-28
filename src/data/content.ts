import { sectionIds, type Lens } from "./site";

export const projects = [
  {
    id: "nexus",
    index: "01",
    name: "NEXUS",
    tags: ["AI SYSTEMS", "FINANCE", "ENTERPRISE", "NODE.JS"],
    visual: "nexus",
    demo: true,
  },
  {
    id: "feasibility",
    index: "02",
    name: "FEASIBILITY AGENT",
    tags: ["LLM AGENTS", "HUMAN-IN-THE-LOOP", "PRIVATE CREDIT", "WORKFLOW"],
    visual: "feasibility",
    demo: false,
  },
  {
    id: "private-ai",
    index: "03",
    name: "PRIVATE AI INFRASTRUCTURE",
    tags: ["DGX SPARK", "vLLM", "LOCAL LLM", "INFRASTRUCTURE"],
    visual: "privateAi",
    demo: false,
  },
  {
    id: "market-intel",
    index: "04",
    name: "MARKET INTELLIGENCE PIPELINE",
    tags: ["BLOOMBERG", "BLPAPI", "AUTOMATION", "MARKETS"],
    visual: "market",
    demo: false,
  },
] as const;

export type ProjectId = (typeof projects)[number]["id"];
export type ProjectVisual = (typeof projects)[number]["visual"];

export const experiences = [
  {
    id: "archbridge",
    organization: "ARCHBRIDGE CAPITAL PARTNERS",
  },
  {
    id: "hsbc",
    organization: "HSBC",
  },
] as const;

export type ExperienceId = (typeof experiences)[number]["id"];

export const lifePhotos = [
  {
    id: "bike",
    src: "/life/bike.jpg",
    frame: "portrait",
  },
  {
    id: "used-to-be-fat",
    src: "/life/used-to-be-fat.jpg",
    frame: "wide",
  },
  {
    id: "really-fat",
    src: "/life/really-fat.jpg",
    frame: "wide",
  },
  {
    id: "wall-street",
    src: "/life/wall-street.jpg",
    frame: "square",
  },
] as const;

export type LifePhotoId = (typeof lifePhotos)[number]["id"];

export const navItems = [
  { id: "story", href: `#${sectionIds.story}` },
  { id: "work", href: `#${sectionIds.work}` },
  { id: "elsewhere", href: `#${sectionIds.elsewhere}` },
] as const;

export const paletteActions = [
  { id: "go-story", kind: "section", target: sectionIds.story },
  { id: "go-work", kind: "section", target: sectionIds.work },
  { id: "go-elsewhere", kind: "section", target: sectionIds.elsewhere },
  { id: "open-resume", kind: "resume" },
  { id: "open-github", kind: "github" },
  { id: "copy-email", kind: "email" },
  { id: "switch-language", kind: "language" },
] as const;

export const lensOrder: Lens[] = ["recruiter", "builder", "creator"];

export const lensStarts: Record<Lens, string> = {
  recruiter: `#${sectionIds.experience}`,
  builder: `#${sectionIds.work}`,
  creator: `#${sectionIds.community}`,
};

export const buildTrail = ["Cursor", "GitHub", "Vercel"] as const;

export const stackNames = ["Next.js", "TypeScript", "Tailwind CSS", "Motion"] as const;
