import { describe, expect, it } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SiteProvider } from "./SiteProvider";
import { LensSelector } from "./LensSelector";

function renderLens() {
  return render(
    <SiteProvider>
      <LensSelector />
    </SiteProvider>,
  );
}

describe("LensSelector", () => {
  it("defaults to recruiter evidence and can switch to builder", async () => {
    const user = userEvent.setup();
    renderLens();

    expect(screen.getByRole("tab", { name: "Recruiter" })).toHaveAttribute(
      "aria-selected",
      "true",
    );
    expect(screen.getByText("Financial workflows")).toBeInTheDocument();

    await user.click(screen.getByRole("tab", { name: "AI / Startup" }));

    expect(screen.getByRole("tab", { name: "AI / Startup" })).toHaveAttribute(
      "aria-selected",
      "true",
    );
    expect(screen.getByText("DGX Spark")).toBeInTheDocument();
    expect(screen.queryByText("Financial workflows")).not.toBeInTheDocument();
  });

  it("persists the selected lens", async () => {
    const user = userEvent.setup();
    const { unmount } = renderLens();
    await user.click(screen.getByRole("tab", { name: "Media (my people?)" }));
    expect(window.localStorage.getItem("nickts.ai:lens")).toBe("creator");
    unmount();
    renderLens();
    await waitFor(() => {
      expect(screen.getByRole("tab", { name: "Media (my people?)" })).toHaveAttribute(
        "aria-selected",
        "true",
      );
    });
  });
});
