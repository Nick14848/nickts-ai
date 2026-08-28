import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Hero } from "./Hero";
import { SiteProvider } from "./SiteProvider";

function renderHero() {
  return render(
    <SiteProvider>
      <Hero />
    </SiteProvider>,
  );
}

describe("Hero", () => {
  it("renders the institutional hero contract accessibly", () => {
    const { container } = renderHero();

    expect(
      screen.getByRole("heading", { level: 1, name: "Personal homepage" }),
    ).toBeInTheDocument();
    expect(screen.getByText("蔡逸凯")).toBeInTheDocument();

    const wordmark = screen.getByRole("img", { name: "NICK TSAI" });
    expect(wordmark).toHaveTextContent("NICK TSAI");

    const credentials = screen.getByRole("list");
    expect(credentials).toHaveAttribute("role", "list");
    const credentialItems = within(credentials).getAllByRole("listitem");
    expect(credentialItems).toHaveLength(4);
    expect(credentialItems[1]).toHaveTextContent("Hong Kong AI + Finance");
    expect(within(credentialItems[1]).getByText("AI")).toHaveClass("text-accent");

    for (const place of ["Taiwan", "Shenzhen", "Hong Kong"]) {
      expect(screen.getByRole("button", { name: place })).toBeInTheDocument();
    }

    expect(container.querySelector(".hero-signal")).toHaveAttribute(
      "aria-hidden",
      "true",
    );
  });
});
