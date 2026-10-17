import type { Locale } from "@/data/site";

export function ProfileNavigation({ locale, mode }: { locale: Locale; mode: "human" | "agent" }) {
  return (
    <div className="profile-modes" aria-label={locale === "zh" ? "阅读方式" : "Reading mode"}>
      <a href={`/?lang=${locale}`} aria-current={mode === "human" ? "page" : undefined}>{locale === "zh" ? "人类" : "Human"}</a>
      <a href={`/agent/${locale}`} aria-current={mode === "agent" ? "page" : undefined}>{locale === "zh" ? "智能体" : "Agent"}<span aria-hidden="true">↗</span></a>
    </div>
  );
}
