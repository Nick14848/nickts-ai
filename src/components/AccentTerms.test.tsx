import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { AccentTerms } from "./AccentTerms";

describe("AccentTerms", () => {
  it("accents every requested place-name occurrence without changing the visible text", () => {
    const text = "Taiwan, Shenzhen, Taiwan, and Hong Kong.";
    const terms = ["Taiwan", "Shenzhen", "Hong Kong"] as const;
    const { container } = render(
      <p>
        <AccentTerms text={text} terms={terms} />
      </p>,
    );

    expect(container.textContent).toBe(text);
    expect(
      Array.from(container.querySelectorAll(".text-accent"), (node) => node.textContent),
    ).toEqual(["Taiwan", "Shenzhen", "Taiwan", "Hong Kong"]);
  });

  it("treats regex metacharacters in terms as literal text", () => {
    const text = "C++ meets (HK) and [AI]. C++ again.";
    const terms = ["C++", "(HK)", "[AI]"] as const;
    const { container } = render(
      <AccentTerms text={text} terms={terms} />,
    );

    expect(container.textContent).toBe(text);
    expect(
      Array.from(container.querySelectorAll(".text-accent"), (node) => node.textContent),
    ).toEqual(["C++", "(HK)", "[AI]", "C++"]);
  });

  it("renders text unchanged when no terms are supplied", () => {
    const text = "Nothing should be highlighted.";
    const { container } = render(<AccentTerms text={text} terms={[]} />);

    expect(container.textContent).toBe(text);
    expect(container.querySelector(".text-accent")).not.toBeInTheDocument();
  });

  it("ignores embedded empty strings and duplicate terms", () => {
    const text = "Taiwan, then Taiwan again.";
    const terms = ["", "Taiwan", "Taiwan", ""] as const;
    const { container } = render(<AccentTerms text={text} terms={terms} />);

    expect(container.textContent).toBe(text);
    expect(
      Array.from(container.querySelectorAll(".text-accent"), (node) => node.textContent),
    ).toEqual(["Taiwan", "Taiwan"]);
  });

  it("prefers the longest term when supplied terms overlap", () => {
    const text = "Hong Kong and Hong.";
    const terms = ["Hong", "Hong Kong"] as const;
    const { container } = render(<AccentTerms text={text} terms={terms} />);

    expect(container.textContent).toBe(text);
    expect(
      Array.from(container.querySelectorAll(".text-accent"), (node) => node.textContent),
    ).toEqual(["Hong Kong", "Hong"]);
  });

  it("renders text unchanged when normalization removes every term", () => {
    const text = "No empty matches.";
    const { container } = render(<AccentTerms text={text} terms={["", ""]} />);

    expect(container.textContent).toBe(text);
    expect(container.querySelector(".text-accent")).not.toBeInTheDocument();
  });
});
