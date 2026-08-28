import { expect, test } from "@playwright/test";

const widths = [375, 390, 430, 768, 1440];

for (const width of widths) {
  test(`does not horizontally overflow at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/");
    const overflow = await page.evaluate(() => {
      const doc = document.documentElement;
      return doc.scrollWidth - doc.clientWidth;
    });
    expect(overflow).toBeLessThanOrEqual(1);
  });
}

test("language toggle switches visible copy", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Long-termism",
  );
  await page.getByRole("button", { name: "Switch language" }).click();
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "长期主义",
  );
  await expect(page.getByRole("navigation").getByText("关于我")).toBeVisible();
  await expect(page.getByRole("navigation").getByText("我的项目")).toBeVisible();
  await expect(page.getByText("香港 AI + Finance")).toBeVisible();
  await expect(page.getByRole("tab", { name: "自媒体 (我的粉丝？)" })).toBeVisible();
});

test("lens selector updates snapshot metadata", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByTestId("lens-snapshot-item").first()).toBeVisible();
  await page.getByRole("tab", { name: "AI / Startup" }).click();
  await expect(
    page.getByTestId("lens-snapshot-item").filter({ hasText: "vLLM" }),
  ).toBeVisible();
});

test("external links open safely", async ({ page }) => {
  await page.goto("/");
  const github = page.getByRole("link", { name: "GitHub ↗" }).first();
  await expect(github).toHaveAttribute("target", "_blank");
  await expect(github).toHaveAttribute("rel", /noopener/);
  await expect(github).toHaveAttribute("href", "https://github.com/Nick14848");
});

test("command palette keyboard shortcut works", async ({ page }) => {
  await page.goto("/");
  await page.locator("body").click();
  await page.keyboard.press("Control+K");
  await expect(page.getByRole("dialog", { name: "Command" })).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog")).toHaveCount(0);
});

test("email copy interaction", async ({ page }) => {
  await page.context().grantPermissions(["clipboard-read", "clipboard-write"]);
  await page.goto("/");
  await page.getByRole("button", { name: "Email ↗" }).click();
  await expect(page.getByRole("button", { name: "Copied" })).toBeVisible();
});

test("reduced motion keeps the page usable", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  await page.getByRole("tab", { name: "Media (my people?)" }).click();
  await expect(
    page.getByTestId("lens-snapshot-item").filter({ hasText: "7K+ community" }),
  ).toBeVisible();
});

test("work cards do not name the employer", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: "NEXUS" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Request for demo" })).toHaveAttribute(
    "href",
    "mailto:nicktsai1221@gmail.com?subject=NEXUS%20Demo",
  );
  await expect(page.locator("#work")).not.toContainText("Archbridge");
  await expect(page.locator("#experience")).toContainText(
    "ARCHBRIDGE CAPITAL PARTNERS",
  );
});
