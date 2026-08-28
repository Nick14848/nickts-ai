import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { markDomainAccent } from "@/data/site";
import { Wordmark } from "./Wordmark";

describe("Wordmark", () => {
  it("accents only the AI in nicktsai.me", () => {
    expect(markDomainAccent()).toEqual({
      before: "nickts",
      accent: "ai",
      after: ".me",
    });

    render(<Wordmark />);

    const accent = screen.getByText("ai");
    expect(accent).toHaveClass("text-accent");
    expect(screen.getByText("nickts")).not.toHaveClass("text-accent");
    expect(screen.getByText(".me")).not.toHaveClass("text-accent");
  });
});
