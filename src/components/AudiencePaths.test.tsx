import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { site } from "@/data/site";
import { AudiencePaths } from "./AudiencePaths";
import { SiteProvider } from "./SiteProvider";

function renderAudiencePaths() {
  return render(
    <SiteProvider>
      <AudiencePaths />
    </SiteProvider>,
  );
}

describe("AudiencePaths", () => {
  it("renders three audience cards with direct section links", () => {
    renderAudiencePaths();

    expect(screen.getAllByTestId("audience-card")).toHaveLength(3);
    expect(screen.getByRole("heading", { name: "Recruiter" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "AI Venture" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Media" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Experience →" })).toHaveAttribute(
      "href",
      "#experience",
    );
    expect(screen.getByRole("link", { name: "Projects →" })).toHaveAttribute(
      "href",
      "#work",
    );
    expect(screen.getByRole("link", { name: "Content →" })).toHaveAttribute(
      "href",
      "#community",
    );
  });

  it("opens the CV path safely in a new tab", () => {
    renderAudiencePaths();

    const cvLink = screen.getByRole("link", { name: "CV ↗" });
    expect(cvLink).toHaveAttribute("href", site.resumePath);
    expect(cvLink).toHaveAttribute("target", "_blank");
    const relTokens = cvLink.getAttribute("rel")?.split(/\s+/);
    expect(relTokens).toContain("noopener");
    expect(relTokens).toContain("noreferrer");
  });
});
