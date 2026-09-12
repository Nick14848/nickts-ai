"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionStyle,
} from "motion/react";
import { cardDetails, businessCardCopy } from "@/data/business-card";
import { site } from "@/data/site";
import { useSite } from "./SiteProvider";

function Arrow({ down = false }: { down?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className={down ? "bc-arrow bc-arrow-down" : "bc-arrow"}
    >
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CardWordmark() {
  return (
    <span className="bc-wordmark" aria-label={site.domain}>
      nickts<span className="bc-highlight">ai</span>.me
    </span>
  );
}

export function FinanceSignature() {
  return (
    <span className="bc-finance" aria-label="AI × Finance">
      <span className="bc-highlight">AI</span>
      <span className="bc-times" aria-hidden="true">
        ×
      </span>
      <span>
        F<span className="bc-highlight">i</span>n
        <span className="bc-highlight">a</span>nce
      </span>
    </span>
  );
}

function Dialog({
  open,
  onClose,
  title,
  children,
  closeLabel,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  closeLabel: string;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (!open) {
      if (dialog.open) dialog.close();
      return;
    }
    const previous = document.body.style.overflow;
    if (!dialog.open) dialog.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
      if (dialog.open) dialog.close();
    };
  }, [open]);
  return (
    <dialog
      ref={ref}
      className="bc-dialog"
      aria-label={title}
      onCancel={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="bc-dialog-inner">
        <div className="bc-dialog-heading">
          <h2>{title}</h2>
          <button
            className="bc-close"
            onClick={onClose}
            aria-label={closeLabel}
            type="button"
          >
            ×
          </button>
        </div>
        {children}
      </div>
    </dialog>
  );
}

export function BusinessCardSite() {
  const {
    locale,
    toggleLocale,
    paletteOpen,
    setPaletteOpen,
    copyEmail,
    emailCopied,
  } = useSite();
  const copy = businessCardCopy[locale];
  const resumePath = locale === "zh" ? site.resumePathZh : site.resumePath;
  const storyRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();
  const [backVisible, setBackVisible] = useState(false);
  const [darkNav, setDarkNav] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const showBack = !reducedMotion && backVisible;
  const { scrollYProgress } = useScroll({
    target: storyRef,
    offset: ["start start", "end end"],
  });
  const rotation = useTransform(scrollYProgress, [0, 0.08, 0.38], [0, 0, 180]);
  const unfold = useTransform(scrollYProgress, [0.3, 0.52], [0, 1]);
  const paperOpacity = useTransform(
    scrollYProgress,
    [0, 0.06, 0.18],
    [1, 1, 0],
  );
  const backdrop = useTransform(
    scrollYProgress,
    [0.28, 0.46],
    ["#dfe7f1", "#102337"],
  );
  const radius = useTransform(unfold, [0, 1], [10, 0]);
  const backTitleY = useTransform(scrollYProgress, [0.38, 0.7], [12, 0]);
  const shadow = useTransform(
    unfold,
    [0, 1],
    [
      "0px 30px 80px -25px rgba(25,42,69,0.27)",
      "0px 0px 0px 0px rgba(25,42,69,0)",
    ],
  );

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    setBackVisible(!reducedMotion && progress > 0.23);
    setDarkNav(progress > 0.38);
  });

  function openContact() {
    setPaletteOpen(false);
    setContactOpen(true);
  }
  function navigate(id: string) {
    setPaletteOpen(false);
    document
      .getElementById(id)
      ?.scrollIntoView({
        behavior: reducedMotion ? "instant" : "smooth",
        block: "start",
      });
  }

  const renderIntroDetails = () => (
    <div className="bc-intro-details">
      <p className="bc-intro-copy">{copy.intro.summary}</p>
      <div className="bc-bridge-grid">
        {copy.intro.bridges.map((bridge) => (
          <div className="bc-bridge-item" key={bridge.label}>
            <strong>{bridge.label}</strong>
            <p>{bridge.detail}</p>
          </div>
        ))}
      </div>
      <div className="bc-affiliations">
        <span>{copy.intro.affiliations}</span>
        <p>
          HKU <i aria-hidden="true" /> HSBC <i aria-hidden="true" /> Archbridge
        </p>
        <small>{copy.intro.credentials}</small>
      </div>
    </div>
  );

  const introContents = (
    <>
      <p className="bc-eyebrow">{copy.intro.label}</p>
      <h2 className="bc-intro-title">
        {copy.intro.title.map((line) => (
          <span key={line}>{line}</span>
        ))}
      </h2>
      {renderIntroDetails()}
    </>
  );

  return (
    <div className={`bc-app${reducedMotion ? " bc-no-motion" : ""}`}>
      <a className="bc-skip" href="#experience">
        {copy.nav.skip}
      </a>
      <header className={`bc-header${darkNav ? " bc-header-dark" : ""}`}>
        <div className="bc-header-inner">
          <a href="#home" aria-label={site.domain}>
            <CardWordmark />
          </a>
          <nav aria-label={locale === "zh" ? "主导航" : "Main navigation"}>
            <a href="#experience">{copy.nav.experience}</a>
            <span className="bc-nav-divider" aria-hidden="true" />
            <button
              onClick={toggleLocale}
              aria-label={copy.nav.language}
              type="button"
            >
              {locale === "zh" ? "EN" : "中文"}
            </button>
          </nav>
        </div>
      </header>

      <main id="home">
        <section
          ref={storyRef}
          className="bc-card-story"
          aria-label={
            locale === "zh"
              ? "商务名片与个人介绍"
              : "Business card and introduction"
          }
        >
          <motion.div
            className="bc-card-stage"
            style={{ backgroundColor: reducedMotion ? "#dfe7f1" : backdrop }}
          >
            <motion.div
              className="bc-stage-topline"
              style={{ opacity: reducedMotion ? 1 : paperOpacity }}
            >
              <span>{copy.card.welcome}</span>
              <span>01 / 03</span>
            </motion.div>
            <motion.div
              className="bc-card-frame"
              style={
                { "--card-open": reducedMotion ? 0 : unfold } as MotionStyle
              }
            >
              <motion.div
                className="bc-card-rotor"
                style={{ rotateY: reducedMotion ? 0 : rotation }}
              >
                <motion.div
                  className="bc-card-face bc-card-front"
                  style={{ borderRadius: radius, boxShadow: shadow }}
                  aria-hidden={showBack}
                  inert={showBack}
                >
                  <div className="bc-card-top">
                    <a
                      href="https://www.hku.hk/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bc-university"
                      aria-label="The University of Hong Kong — 香港大学"
                    >
                      <strong>HKU</strong>
                      <span>{copy.card.university}</span>
                    </a>
                    <div
                      className="bc-cities"
                      aria-label={cardDetails.cities.join(", ")}
                    >
                      {cardDetails.cities.map((city) => (
                        <span key={city}>{city}</span>
                      ))}
                    </div>
                  </div>
                  <div className="bc-card-identity">
                    <h1>Nick Tsai</h1>
                    <p className="bc-chinese-name">蔡逸凯</p>
                    <p className="bc-role">AI Builder</p>
                  </div>
                  <address className="bc-card-address">
                    <a href={cardDetails.phoneHref}>
                      <span>T</span>
                      {cardDetails.phone}
                    </a>
                    <a href={`mailto:${site.email}`}>
                      <span>E</span>
                      {site.email}
                    </a>
                    <a href={site.url}>{site.domain}</a>
                  </address>
                  <div className="bc-card-foot">
                    <FinanceSignature />
                    <span className="bc-card-rule" aria-hidden="true" />
                  </div>
                </motion.div>
                <motion.div
                  className="bc-card-face bc-card-back"
                  style={{ borderRadius: radius }}
                  aria-hidden={!showBack}
                  inert={!showBack}
                >
                  <div className="bc-back-content" id="intro">
                    <p className="bc-eyebrow">{copy.intro.label}</p>
                    <motion.h2
                      className="bc-intro-title"
                      style={{ y: backTitleY }}
                    >
                      {copy.intro.title.map((line) => (
                        <span key={line}>{line}</span>
                      ))}
                    </motion.h2>
                    {renderIntroDetails()}
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
            <motion.a
              href="#experience"
              className="bc-scroll-cue"
              style={{
                opacity: reducedMotion ? 1 : paperOpacity,
                pointerEvents: showBack ? "none" : "auto",
              }}
              aria-hidden={showBack}
              tabIndex={showBack ? -1 : 0}
            >
              <span>{copy.card.scroll}</span>
              <Arrow down />
            </motion.a>
          </motion.div>
        </section>

        <section
          className="bc-reduced-intro bc-dark"
          aria-label={copy.intro.label}
        >
          <div className="bc-content">{introContents}</div>
        </section>

        <section id="experience" className="bc-experience bc-dark">
          <div className="bc-content">
            <div className="bc-section-heading">
              <div>
                <p className="bc-eyebrow">02 / 03</p>
                <h2>{copy.experience.title}</h2>
              </div>
              <a
                className="bc-text-link"
                href={resumePath}
                target="_blank"
                rel="noopener noreferrer"
              >
                {copy.experience.cv}
                <Arrow />
              </a>
            </div>
            <div className="bc-career-list">
              {copy.experience.jobs.map((job, index) => (
                <motion.article
                  className="bc-career"
                  key={job.company}
                  initial={reducedMotion ? false : { opacity: 0, y: 28 }}
                  whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.24 }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <div className="bc-career-meta">
                    <p>{job.dates}</p>
                    <span>{job.location}</span>
                  </div>
                  <div className="bc-career-body">
                    <div className="bc-company-heading">
                      <h3>{job.company}</h3>
                    </div>
                    <p className="bc-job-role">{job.role}</p>
                    <p className="bc-job-type">{job.type}</p>
                    <ul>
                      {job.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </motion.article>
              ))}
            </div>
            <div className="bc-education">
              <p className="bc-eyebrow">{copy.experience.educationLabel}</p>
              <div>
                <h3>{copy.experience.school}</h3>
                <p>{copy.experience.degree}</p>
                {locale === "zh" && (
                  <p className="bc-degree-en">
                    HKU BEng Data Science &amp; Engineering
                  </p>
                )}
                <span>{copy.experience.educationDates}</span>
              </div>
            </div>
          </div>
        </section>

        <section id="community" className="bc-creator">
          <div className="bc-content">
            <div className="bc-section-heading">
              <div>
                <p className="bc-eyebrow">03 / 03</p>
                <h2>{copy.creator.title}</h2>
              </div>
              <span className="bc-creator-handle">{copy.creator.name}</span>
            </div>
            <div className="bc-creator-grid">
              <div className="bc-creator-text">
                <div className="bc-followers">
                  <strong>{cardDetails.followers}</strong>
                  <span>{copy.creator.followers}</span>
                </div>
                <h3>{copy.creator.headline}</h3>
                <p>{copy.creator.copy}</p>
                <div className="bc-social-links">
                  <a
                    href={site.REDNOTE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {copy.creator.rednote}
                    <Arrow />
                  </a>
                  <a
                    href={site.DOUYIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${copy.creator.douyin} · ${copy.creator.douyinNote}`}
                  >
                    {copy.creator.douyin}
                    <Arrow />
                    <small>{copy.creator.douyinNote}</small>
                  </a>
                </div>
              </div>
              <figure className="bc-life-photo">
                <Image
                  src={cardDetails.creatorImage}
                  alt={copy.creator.photoAlt}
                  width={1080}
                  height={1080}
                  sizes="(max-width: 700px) 90vw, 450px"
                />
                <figcaption>{copy.creator.photoCaption}</figcaption>
              </figure>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="bc-footer">
        <div className="bc-content">
          <div className="bc-footer-main">
            <div>
              <p className="bc-eyebrow">NICK TSAI · 蔡逸凯</p>
              <h2>{copy.contact.greeting}</h2>
            </div>
            <button
              className="bc-contact-button"
              type="button"
              onClick={openContact}
            >
              {copy.contact.button}
              <Arrow />
            </button>
          </div>
          <div className="bc-footer-base">
            <a href="#home">
              <CardWordmark />
            </a>
            <p>© {new Date().getFullYear()} Nick Tsai</p>
            <a href={site.githubUrl} target="_blank" rel="noopener noreferrer">
              GitHub ↗
            </a>
          </div>
          <p className="bc-notice">{copy.contact.notice}</p>
        </div>
      </footer>

      <Dialog
        open={contactOpen}
        onClose={() => setContactOpen(false)}
        title={copy.contact.title}
        closeLabel={copy.contact.close}
      >
        <div className="bc-contact-list">
          <a href={`mailto:${site.email}`}>
            <span>{copy.contact.email}</span>
            <strong>{site.email}</strong>
            <Arrow />
          </a>
          <a href={cardDetails.phoneHref}>
            <span>{copy.contact.phone}</span>
            <strong>{cardDetails.phone}</strong>
            <Arrow />
          </a>
        </div>
        <button
          className="bc-copy-email"
          type="button"
          onClick={() => void copyEmail()}
          aria-live="polite"
        >
          {emailCopied ? copy.contact.copied : copy.contact.copy}
        </button>
      </Dialog>
      <Dialog
        open={paletteOpen}
        onClose={() => setPaletteOpen(false)}
        title={copy.commands.title}
        closeLabel={copy.contact.close}
      >
        <div className="bc-command-list">
          <button type="button" onClick={() => navigate("home")}>
            {copy.commands.intro}
          </button>
          <button type="button" onClick={() => navigate("experience")}>
            {copy.commands.experience}
          </button>
          <button type="button" onClick={() => navigate("community")}>
            {copy.commands.creator}
          </button>
          <button type="button" onClick={openContact}>
            {copy.commands.contact}
          </button>
          <a href={resumePath} target="_blank" rel="noopener noreferrer">
            {copy.commands.resume} ↗
          </a>
          <a href={site.githubUrl} target="_blank" rel="noopener noreferrer">
            {copy.commands.github} ↗
          </a>
          <button type="button" onClick={toggleLocale}>
            {copy.commands.language}
          </button>
        </div>
      </Dialog>
      <noscript>
        <style>{`.bc-card-story{height:auto!important}.bc-card-stage{position:relative!important;min-height:700px}.bc-reduced-intro{display:block!important}`}</style>
      </noscript>
    </div>
  );
}
