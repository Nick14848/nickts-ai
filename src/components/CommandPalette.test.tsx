import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CommandPalette } from "./CommandPalette";
import { SiteProvider, useSite } from "./SiteProvider";

function OpenPalette() {
  const { setPaletteOpen } = useSite();
  return (
    <button type="button" onClick={() => setPaletteOpen(true)}>
      Open palette
    </button>
  );
}

describe("CommandPalette", () => {
  it("opens and can copy email", async () => {
    const user = userEvent.setup();
    const writeText = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, "clipboard", {
      configurable: true,
      value: { writeText },
    });

    render(
      <SiteProvider>
        <OpenPalette />
        <CommandPalette />
      </SiteProvider>,
    );

    await user.click(screen.getByRole("button", { name: "Open palette" }));
    expect(screen.getByRole("dialog", { name: "Command" })).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: /Copy Email/i }));
    expect(writeText).toHaveBeenCalledWith("nicktsai1221@gmail.com");
    expect(screen.getByRole("button", { name: "Copied" })).toBeInTheDocument();
  });

  it("closes on Escape", async () => {
    const user = userEvent.setup();
    render(
      <SiteProvider>
        <OpenPalette />
        <CommandPalette />
      </SiteProvider>,
    );

    await user.click(screen.getByRole("button", { name: "Open palette" }));
    await user.keyboard("{Escape}");
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });
});
