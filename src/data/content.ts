import { sectionIds, type Lens } from "./site";

export const projectEntries = [
  {
    id: "deep-pivot",
    index: "01",
    copyKey: "deepPivot",
  },
  {
    id: "ai-services",
    index: "02",
    copyKey: "service",
  },
] as const;

export type ProjectEntryId = (typeof projectEntries)[number]["id"];
export type ProjectCopyKey = (typeof projectEntries)[number]["copyKey"];

export const solutionModules = [
  {
    id: "investment-workspace",
    name: "INVESTMENT WORKSPACE",
    tags: ["AI SYSTEMS", "PRIVATE MARKETS", "WORKFLOW", "NODE.JS"],
    visual: "workspace",
  },
  {
    id: "feasibility",
    name: "FEASIBILITY AGENT",
    tags: ["LLM AGENTS", "HUMAN-IN-THE-LOOP", "PRIVATE CREDIT"],
    visual: "feasibility",
  },
  {
    id: "private-ai",
    name: "PRIVATE AI INFRASTRUCTURE",
    tags: ["DGX SPARK", "vLLM", "LOCAL LLM"],
    visual: "privateAi",
  },
  {
    id: "market-intel",
    name: "MARKET INTELLIGENCE PIPELINE",
    tags: ["BLOOMBERG", "BLPAPI", "AUTOMATION"],
    visual: "market",
  },
] as const;

export type SolutionId = (typeof solutionModules)[number]["id"];
export type SolutionVisual = (typeof solutionModules)[number]["visual"];

export const inquiryTypes = [
  "ai-workflows",
  "internal-tools",
  "data-automation",
  "website",
  "other",
] as const;

export type InquiryType = (typeof inquiryTypes)[number];

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

export const audienceOrder: Lens[] = ["recruiter", "builder", "creator"];

export const audienceRoutes: Record<Lens, { href: string }> = {
  recruiter: { href: `#${sectionIds.experience}` },
  builder: { href: `#${sectionIds.work}` },
  creator: { href: `#${sectionIds.community}` },
};

export const lensOrder = audienceOrder;

export const buildTrail = ["Cursor", "GitHub", "Vercel"] as const;

export const stackNames = ["Next.js", "TypeScript", "Tailwind CSS", "Motion"] as const;
