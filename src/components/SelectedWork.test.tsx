import { render, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { projectEntries, solutionModules } from "@/data/content";
import { dictionaries } from "@/data/translations";
import { SelectedWork } from "./SelectedWork";
import { SiteProvider } from "./SiteProvider";

function renderSelectedWork() {
  return render(
    <SiteProvider>
      <SelectedWork />
    </SiteProvider>,
  );
}

describe("SelectedWork", () => {
  it("keeps the Deep Pivot hierarchy, modules, and privacy boundary", () => {
    const { container } = renderSelectedWork();
    const section = container.querySelector("#work");
    const copy = dictionaries.en.work;

    expect(section).toBeInTheDocument();
    expect(
      within(section as HTMLElement).getByRole("heading", {
        level: 2,
        name: copy.headline,
      }),
    ).toBeInTheDocument();

    const renderedProjects = within(section as HTMLElement).getAllByTestId("project-entry");
    const deepPivotProject = renderedProjects[0];
    expect(deepPivotProject).toHaveAttribute("id", "deep-pivot");
    expect(within(deepPivotProject).getByText(projectEntries[0].index)).toBeInTheDocument();
    expect(within(deepPivotProject).getByText(copy.deepPivot.status)).toBeInTheDocument();
    expect(
      within(deepPivotProject).getByRole("heading", {
        level: 3,
        name: copy.deepPivot.title,
      }),
    ).toBeInTheDocument();
    expect(within(deepPivotProject).getByText(copy.deepPivot.descriptor)).toBeInTheDocument();

    const audienceList = within(deepPivotProject).getByRole("list", {
      name: copy.deepPivot.audience,
    });
    expect(
      within(audienceList)
        .getAllByRole("listitem")
        .map((item) => item.textContent),
    ).toEqual(copy.deepPivot.audienceList);

    expect(within(deepPivotProject).getByText(copy.solutionsLabel)).toBeInTheDocument();
    const renderedModules = within(deepPivotProject).getAllByTestId("solution-module");
    expect(renderedModules).toHaveLength(solutionModules.length);

    const expectedSolutions = [
      {
        heading: solutionModules[0].name,
        diagram: "Abstract system diagram of an investment workspace",
      },
      {
        heading: solutionModules[1].name,
        diagram: "Abstract human-in-the-loop screening workflow",
      },
      {
        heading: solutionModules[2].name,
        diagram: "Abstract private inference stack diagram",
      },
      {
        heading: solutionModules[3].name,
        diagram: "Abstract market intelligence pipeline diagram",
      },
    ];
    expectedSolutions.forEach(({ heading, diagram }) => {
      const moduleHeading = within(deepPivotProject).getByRole("heading", {
        level: 4,
        name: heading,
      });
      const solutionModule = moduleHeading.closest('[data-testid="solution-module"]');
      expect(solutionModule).toBeInTheDocument();

      const diagramRegion = within(solutionModule as HTMLElement).getByRole("region", {
        name: `${heading} diagram`,
      });
      expect(diagramRegion).toHaveAttribute("tabindex", "0");
      expect(diagramRegion).toHaveClass("max-w-full", "overflow-x-auto");
      expect(diagramRegion.firstElementChild).toHaveClass("min-w-[480px]");

      const image = within(diagramRegion).getByRole("img", { name: diagram });
      Array.from(image.querySelectorAll("text")).forEach((annotation) => {
        expect(annotation).toHaveAttribute("font-size", "13");
      });
    });

    const firstModule = renderedModules[0];
    expect(firstModule).toHaveTextContent(
      copy.solutions["investment-workspace"].summary,
    );
    expect(
      Array.from(
        within(firstModule).getByRole("list").querySelectorAll("li"),
        (item) => item.textContent,
      ),
    ).toEqual(solutionModules[0].tags);

    const diagrams = within(deepPivotProject).getAllByRole("img");
    expect(diagrams).toHaveLength(solutionModules.length);

    expect(section).not.toHaveTextContent(/\bNEXUS\b|\bACP\b|Archbridge/i);
  });

  it("renders AI services as the second project with its inquiry form", () => {
    const { container } = renderSelectedWork();
    const section = container.querySelector("#work") as HTMLElement;
    const copy = dictionaries.en.work.service;
    const renderedProjects = within(section).getAllByTestId("project-entry");

    expect(renderedProjects).toHaveLength(2);
    const serviceProject = renderedProjects[1];
    expect(serviceProject).toHaveAttribute("id", "ai-services");
    expect(within(serviceProject).getByText(projectEntries[1].index)).toBeInTheDocument();
    expect(within(serviceProject).getByText(copy.status)).toBeInTheDocument();
    expect(
      within(serviceProject).getByRole("heading", {
        level: 3,
        name: copy.title,
      }),
    ).toBeInTheDocument();
    expect(serviceProject).toHaveTextContent(copy.summary);

    const servicePoints = within(serviceProject).getByRole("list");
    expect(
      within(servicePoints)
        .getAllByRole("listitem")
        .map((item) => item.textContent),
    ).toEqual(copy.points);
    expect(
      within(serviceProject).getByRole("heading", {
        level: 4,
        name: copy.inquiry.heading,
      }),
    ).toBeInTheDocument();
    expect(serviceProject.querySelector("form")).toBeInTheDocument();
    expect(
      within(serviceProject).getByRole("button", {
        name: copy.inquiry.submit,
      }),
    ).toBeInTheDocument();
  });
});
