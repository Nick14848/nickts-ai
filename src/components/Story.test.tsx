import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { type Locale } from "@/data/site";
import { dictionaries } from "@/data/translations";
import { storeLocale } from "@/lib/preferences";
import { SiteProvider } from "./SiteProvider";
import { Story } from "./Story";

function renderStory(locale: Locale = "en") {
  storeLocale(locale);
  return render(
    <SiteProvider>
      <Story />
    </SiteProvider>,
  );
}

function findParagraph(section: HTMLElement, text: string) {
  const paragraph = Array.from(section.querySelectorAll("p")).find(
    (candidate) => candidate.textContent === text,
  );

  expect(paragraph).toBeDefined();
  return paragraph as HTMLParagraphElement;
}

describe("Story", () => {
  it.each([
    {
      locale: "en" as const,
      expectedAccents: [
        ["Taiwan", "Shenzhen", "Hong Kong"],
        ["Taiwan", "Shenzhen", "Hong Kong"],
        ["Shenzhen", "Hong Kong", "Taiwan"],
      ],
    },
    {
      locale: "zh" as const,
      expectedAccents: [
        ["台湾", "深圳", "香港"],
        [],
        ["深圳", "香港", "台湾"],
      ],
    },
  ])(
    "accents exact place names only in the first three $locale paragraphs",
    async ({ locale, expectedAccents }) => {
      const { container } = renderStory(locale);
      const story = dictionaries[locale].story;

      await screen.findByRole("heading", { level: 2, name: story.headline });
      const section = container.querySelector("#story");
      expect(section).toBeInTheDocument();

      story.paragraphs.slice(0, 3).forEach((text, index) => {
        const paragraph = findParagraph(section as HTMLElement, text);
        expect(paragraph.textContent).toBe(text);
        expect(
          Array.from(
            paragraph.querySelectorAll(".text-accent"),
            (node) => node.textContent,
          ),
        ).toEqual(expectedAccents[index]);
      });

      story.paragraphs.slice(3).forEach((text) => {
        const paragraph = findParagraph(section as HTMLElement, text);
        expect(paragraph.textContent).toBe(text);
        expect(paragraph.querySelector(".text-accent")).not.toBeInTheDocument();
      });
    },
  );

  it("renders exactly the three non-bike gallery images without cropping", () => {
    renderStory();

    const gallery = screen.getByTestId("story-gallery");
    const images = within(gallery).getAllByRole("img");
    expect(gallery).toHaveClass("grid-cols-1", "md:grid-cols-2", "lg:grid-cols-3");

    const expectedImages = [
      {
        src: "/life/used-to-be-fat.jpg",
        alt: dictionaries.en.story.photos["used-to-be-fat"].title,
      },
      {
        src: "/life/really-fat.jpg",
        alt: dictionaries.en.story.photos["really-fat"].title,
      },
      {
        src: "/life/wall-street.jpg",
        alt: dictionaries.en.story.photos["wall-street"].title,
      },
    ];

    expect(images).toHaveLength(3);
    expect(images.map((image) => image.getAttribute("alt"))).toEqual(
      expectedImages.map(({ alt }) => alt),
    );

    images.forEach((image, index) => {
      const mediaWrapper = image.parentElement;

      expect(decodeURIComponent(image.getAttribute("src") ?? "")).toContain(
        expectedImages[index].src,
      );
      expect(mediaWrapper).toHaveClass("relative", "aspect-[4/3]");
      expect(image).toHaveAttribute("data-nimg", "fill");
      expect(image).toHaveClass("object-contain", "p-2");
      expect(image).not.toHaveClass("object-cover");
      expect(image).toHaveAttribute(
        "sizes",
        "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw",
      );
    });

    expect(
      images.map((image) => decodeURIComponent(image.getAttribute("src") ?? "")).join(" "),
    ).not.toContain("/life/bike.jpg");
  });
});
