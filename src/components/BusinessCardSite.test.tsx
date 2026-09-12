import { fireEvent, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeAll, beforeEach, describe, expect, it, vi } from "vitest";
import { useReducedMotion } from "motion/react";
import { site, STORAGE_KEYS } from "@/data/site";
import { BusinessCardSite } from "./BusinessCardSite";
import { SiteProvider } from "./SiteProvider";

// Test our interface contract independently of scroll-animation machinery.
vi.mock("motion/react", async () => {
  const { createElement, forwardRef } = await import("react");
  const element = (tag: string) =>
    forwardRef<HTMLElement, Record<string, unknown>>(
      (
        {
          initial: _initial,
          whileInView: _whileInView,
          viewport: _viewport,
          transition: _transition,
          ...props
        },
        ref,
      ) => {
        void _initial;
        void _whileInView;
        void _viewport;
        void _transition;
        return createElement(tag, { ...props, ref });
      },
    );
  return {
    motion: {
      div: element("div"),
      h2: element("h2"),
      a: element("a"),
      article: element("article"),
    },
    useReducedMotion: vi.fn(() => false),
    useInView: vi.fn(() => true),
    useScroll: () => ({ scrollYProgress: 0 }),
    useTransform: (_value: unknown, _input: unknown, output: unknown[]) =>
      output[0],
    useMotionValueEvent: vi.fn(),
  };
});
beforeAll(() => {
  Object.defineProperty(HTMLDialogElement.prototype, "showModal", {
    configurable: true,
    value() {
      this.setAttribute("open", "");
    },
  });
  Object.defineProperty(HTMLDialogElement.prototype, "close", {
    configurable: true,
    value() {
      this.removeAttribute("open");
    },
  });
  Element.prototype.scrollIntoView = vi.fn();
});
beforeEach(() => {
  vi.mocked(useReducedMotion).mockReturnValue(false);
});
const renderSite = () =>
  render(
    <SiteProvider>
      <BusinessCardSite />
    </SiteProvider>,
  );

describe("Business card website", () => {
  it("presents the identity, university affiliation and real contact links", () => {
    const { container } = renderSite();
    expect(
      screen.getByRole("heading", { name: "Nick Tsai", level: 1 }),
    ).toBeInTheDocument();
    expect(screen.getByText("AI Builder")).toBeInTheDocument();
    expect(
      screen.getByRole("link", {
        name: /The University of Hong Kong — 香港大学/,
      }),
    ).toHaveAttribute("href", "https://www.hku.hk/");
    expect(
      screen.getByRole("link", { name: /T\s*\+852 6990 2741/ }),
    ).toHaveAttribute("href", "tel:+85269902741");
    expect(
      screen.getByRole("link", { name: /E\s*nicktsai1221@gmail.com/ }),
    ).toHaveAttribute("href", "mailto:nicktsai1221@gmail.com");
    expect(
      Array.from(container.querySelectorAll(".bc-finance .bc-highlight")).map(
        (node) => node.textContent,
      ),
    ).toEqual(["AI", "i", "a"]);
  });
  it("shows the requested employers, education and creator section", () => {
    const { container } = renderSite();
    const experience = container.querySelector("#experience") as HTMLElement;
    expect(within(experience).getAllByRole("article")).toHaveLength(2);
    expect(
      within(experience).getByRole("heading", {
        name: "Archbridge Capital Partners",
      }),
    ).toBeInTheDocument();
    expect(
      within(experience).getByRole("heading", { name: "HSBC" }),
    ).toBeInTheDocument();
    expect(screen.getAllByText("A bridge between")).toHaveLength(2);
    expect(screen.queryByText(/Intern/)).not.toBeInTheDocument();
    expect(
      within(experience).getByText("BEng Data Science & Engineering"),
    ).toBeInTheDocument();
    expect(
      screen.getByLabelText("7,443 followers across platforms"),
    ).toBeInTheDocument();
    expect(screen.queryByText("ByteDance")).not.toBeInTheDocument();
    expect(container.querySelector("#work")).toBeNull();
    expect(screen.getByRole("link", { name: "View résumé" })).toHaveAttribute(
      "href",
      "/resume.pdf",
    );
  });
  it("switches to Chinese and persists the choice", async () => {
    const user = userEvent.setup();
    renderSite();
    await user.click(screen.getByRole("button", { name: "Switch to Chinese" }));
    expect(
      screen.getByRole("heading", { name: "工作经历" }),
    ).toBeInTheDocument();
    expect(screen.getByText("往下滑查看更多")).toBeInTheDocument();
    expect(screen.getByText("很高兴认识你～")).toBeInTheDocument();
    expect(screen.getByText("全平台粉丝")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "查看简历" })).toHaveAttribute(
      "href",
      "/resume-zh.pdf",
    );
    expect(window.localStorage.getItem(STORAGE_KEYS.locale)).toBe("zh");
    expect(document.documentElement.lang).toBe("zh-CN");
  });
  it("opens and closes the contact dialog with phone and email destinations", async () => {
    const user = userEvent.setup();
    renderSite();
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "Keep in touch" }));
    const dialog = screen.getByRole("dialog", { name: "Contact Nick" });
    expect(
      within(dialog).getByRole("link", {
        name: /Email nicktsai1221@gmail.com/,
      }),
    ).toHaveAttribute("href", "mailto:nicktsai1221@gmail.com");
    expect(
      within(dialog).getByRole("link", { name: /Phone \+852 6990 2741/ }),
    ).toHaveAttribute("href", "tel:+85269902741");
    expect(document.body.style.overflow).toBe("hidden");
    await user.click(within(dialog).getByRole("button", { name: "Close" }));
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    expect(document.body.style.overflow).not.toBe("hidden");
  });
  it("preserves command navigation and handles native cancel", () => {
    renderSite();
    fireEvent.keyDown(window, { key: "k", ctrlKey: true });
    const dialog = screen.getByRole("dialog", { name: "Quick navigation" });
    fireEvent(dialog, new Event("cancel", { bubbles: false }));
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });
  it("keeps social destinations truthful and external links safe", () => {
    renderSite();
    const rednote = screen.getByRole("link", {
      name: "RedNote · @小菜Nick",
    });
    const douyin = screen.getByRole("link", { name: "Douyin · Find 小菜Nick" });
    expect(rednote).toHaveAttribute("href", site.REDNOTE_URL);
    expect(douyin).toHaveAttribute("href", site.DOUYIN_URL);
    for (const link of [rednote, douyin]) {
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
    }
  });
  it("provides a no-motion mode without hiding the front of the card", () => {
    vi.mocked(useReducedMotion).mockReturnValue(true);
    const { container } = renderSite();
    expect(container.querySelector(".bc-app")).toHaveClass("bc-no-motion");
    expect(container.querySelector(".bc-card-front")).toHaveAttribute(
      "aria-hidden",
      "false",
    );
    expect(
      screen.getByRole("heading", { level: 1, name: "Nick Tsai" }),
    ).toBeInTheDocument();
  });
});
