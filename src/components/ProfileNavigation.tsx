import type { Locale } from "@/data/site";

export function ProfileNavigation({ locale, mode }: { locale: Locale; mode: "human" | "agent" }) {
  return (
    <div className="profile-modes" aria-label={locale === "zh" ? "阅读方式" : "Reading mode"}>
      <a href={`/?lang=${locale}`} aria-current={mode === "human" ? "page" : undefined}>Human</a>
      <a href={`/agent/${locale}`} aria-current={mode === "agent" ? "page" : undefined}>Agent<span aria-hidden="true">↗</span></a>
    </div>
  );
}
