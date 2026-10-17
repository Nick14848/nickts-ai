import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProfileNavigation } from "@/components/ProfileNavigation";
import { CopyProfile } from "@/components/CopyProfile";
import { publicProfile, profileMarkdown, profileUpdated } from "@/data/public-profile";
import { site, type Locale } from "@/data/site";
import "../agent.css";

export function generateStaticParams() { return [{ lang: "en" }, { lang: "zh" }]; }
export const dynamicParams = false;
type Props = { params: Promise<{ lang: string }> };
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  return { title: "Nick Tsai — Agent-readable profile", alternates: { canonical: `/agent/${lang}`, languages: { en: "/agent/en", "zh-CN": "/agent/zh" } } };
}
export default async function AgentPage({ params }: Props) {
  const { lang } = await params;
  if (lang !== "en" && lang !== "zh") notFound();
  const locale: Locale = lang;
  const zh = locale === "zh";
  const p = publicProfile(locale);
  const preview = { name: p.identity.name, role: p.identity.role, regions: ["Shenzhen", "Hong Kong", "Taiwan"], reading: "public / no login / no JavaScript", contact: p.contact };
  return <div className="agent-app bc-app" lang={zh ? "zh-CN" : "en"}>
    <a className="bc-skip" href="#profile">{zh ? "跳到公开资料" : "Skip to profile"}</a>
    <header className="bc-header bc-header-dark">
      <div className="bc-header-inner">
        <a className="bc-wordmark" href={`/?lang=${locale}`}>nickts<span className="bc-highlight">ai</span>.me</a>
        <nav aria-label={zh ? "主导航" : "Main navigation"}>
          <ProfileNavigation locale={locale} mode="agent" />
          <span className="bc-nav-divider" aria-hidden="true" />
          <a href={`/agent/${zh ? "en" : "zh"}`} hrefLang={zh ? "en" : "zh"}>{zh ? "EN" : "中文"}</a>
        </nav>
      </div>
    </header>
    <main id="profile" className="agent-main">
      <section className="agent-hero">
        <div className="agent-lead">
          <p className="agent-kicker"><span /> {zh ? "一个人 · 两种阅读方式" : "ONE PERSON. TWO WAYS TO CONNECT."}</p>
          <h1>Nick Tsai<span>蔡逸凯 <small>/ AI Builder</small></span></h1>
          <h2>{zh ? <>让人认识我。<br /><em>也让 Agent 读懂我。</em></> : <>Built for people.<br /><em>Readable by agents.</em></>}</h2>
          <p className="agent-deck">{p.positioning}</p>
          <div className="agent-actions"><CopyProfile text={profileMarkdown(locale)} zh={zh} /><a href="/llms.txt">llms.txt ↗</a></div>
          <p className="agent-note">{zh ? "同一份公开资料，无需登录，也无需点击切换。" : "The same public profile. No login. No mode switch required."}</p>
        </div>
        <div className="agent-console">
          <div className="agent-console-bar"><span>PUBLIC PROFILE</span><span>01 / OPEN WEB</span></div>
          <div className="agent-orbit" aria-hidden="true">
            <div className="agent-orbit-ring" /><div className="agent-orbit-ring second" />
            <span className="agent-core">N<span>HUMAN AT THE CORE</span></span>
            <span className="orbit-label orbit-sz">SHENZHEN</span><span className="orbit-label orbit-hk">HONG KONG</span><span className="orbit-label orbit-tw">TAIWAN</span>
          </div>
          <pre aria-label={zh ? "公开数据预览" : "Public data preview"}>{JSON.stringify(preview, null, 2)}</pre>
          <a className="agent-console-footer" href="/profile.json">{zh ? "读取完整 JSON" : "Read full JSON"} <span>↗</span></a>
        </div>
      </section>
      <div className="agent-resource-strip">
        <span>{zh ? "直接读取" : "DIRECT ACCESS"}</span>
        <a href={`/about.${locale}.md`}>Markdown ↗</a><a href="/profile.json">JSON ↗</a><a href="/llms.txt">llms.txt ↗</a>
        <span className="agent-updated">{zh ? "更新" : "UPDATED"} {profileUpdated}</span>
      </div>
      <section className="agent-section" id="about">
        <div className="agent-section-label"><span>01 / CONTEXT</span><h2>{zh ? "我带来的视角" : "The context I bring"}</h2></div>
        <div><p className="agent-summary">{p.about}</p><div className="agent-capabilities">{p.capabilities.map((c, i) => <article key={c.label}><span>0{i + 1}</span><h3>{c.label}</h3><p>{c.detail}</p></article>)}</div></div>
      </section>
      <section className="agent-section" id="experience">
        <div className="agent-section-label"><span>02 / EXPERIENCE</span><h2>{zh ? "经历与实践" : "Experience, in context"}</h2><p>{zh ? "本人公开提供的经历资料。" : "Experience published by Nick."}</p></div>
        <div className="agent-jobs">{p.experience.map(j => <article key={j.company}><p className="agent-meta">{j.dates} · {j.location}</p><h3>{j.company}</h3><p className="agent-role">{j.role}</p>{j.description && <p>{j.description}</p>}<ul>{j.points.map(point => <li key={point}>{point}</li>)}</ul></article>)}
          <article><p className="agent-meta">{p.education.dates}</p><h3>{p.education.institution}</h3><p>{p.education.degree}</p><p>{p.credentials}</p><p>{p.languages}</p></article>
        </div>
      </section>
      <section className="agent-section" id="connect">
        <div className="agent-section-label"><span>03 / CONNECT</span><h2>{zh ? "对话，从这里开始" : "Start a conversation"}</h2></div>
        <div><p className="agent-summary">{zh ? "交流 AI 产品、真实业务问题，或跨地区合作的可能性。" : "AI products, real business problems, or possibilities across regions."}</p>
          <div className="agent-contact"><a href={`mailto:${site.email}`}>{site.email} ↗</a><p>{zh ? "商务咨询 · 微信" : "Business · WeChat"} <strong>{site.businessWechat}</strong></p></div>
          <details className="agent-context"><summary>{zh ? "资料来源与使用边界" : "Source & context"}</summary><p>{zh ? "本站由 Nick 本人发布；经历与资质为本人提供，未由本站独立核验。" : p.provenance}</p><ul>{p.boundaries.map(b => <li key={b}>{b}</li>)}</ul></details>
        </div>
      </section>
      <footer className="agent-footer"><span>© 2026 Nick Tsai</span><a href={`/?lang=${locale}`}>{zh ? "回到 Human 视图" : "Back to the human side"} ↗</a></footer>
    </main>
  </div>;
}
