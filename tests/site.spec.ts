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

test("navigation stays pinned to the top while scrolling", async ({ page }) => {
  await page.goto("/");
  const nav = page.getByRole("banner");
  await expect(nav).toBeVisible();
  await page.evaluate(() => window.scrollTo(0, 1200));
  await expect.poll(async () => nav.evaluate((el) => el.getBoundingClientRect().top)).toBe(0);
});

test("language toggle switches visible copy", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Personal homepage",
  );
  await page.getByRole("button", { name: "Switch language" }).click();
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "的个人主页",
  );
  await expect(page.getByRole("navigation").getByText("关于我")).toBeVisible();
  await expect(page.getByRole("navigation").getByText("我的项目")).toBeVisible();
  await expect(page.getByText("港大 数据科学")).toBeVisible();
  await expect(page.getByRole("heading", { name: "自媒体" })).toBeVisible();
});

test("audience cards navigate directly", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: "Projects →" }).click();
  await expect(page.locator("#work")).toBeInViewport();
  await page.getByRole("link", { name: "Experience →" }).click();
  await expect(page.locator("#experience")).toBeInViewport();
  await expect(
    page.getByTestId("audience-card").getByRole("link", { name: "CV ↗" }),
  ).toHaveAttribute("href", "/resume.pdf");
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
  await expect(page.getByRole("link", { name: "Content →" })).toBeVisible();
});

test("work cards do not name the employer", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: "DEEP PIVOT" })).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "INVESTMENT WORKSPACE" }),
  ).toBeVisible();
  await expect(page.getByRole("heading", { name: "NEXUS" })).toHaveCount(0);
  await expect(page.locator("#work")).not.toContainText("Archbridge");
  await expect(page.locator("#experience")).toContainText(
    "ARCHBRIDGE CAPITAL PARTNERS",
  );
});

test("inquiry form shows the 163 draft destination", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("#ai-services")).toContainText("nicktsai1221@163.com");
  await expect(page.getByLabel("Are you an individual or a company?")).toBeVisible();
  await expect(page.locator("#inquiry-type")).toContainText(
    "DEEP PIVOT investment AI platform",
  );
  await expect(
    page.getByRole("button", { name: "Open email draft ↗" }),
  ).toBeVisible();
});

test("mobile menu aligns with the header content", async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 800 });
  await page.goto("/");
  await page.getByRole("button", { name: "Menu" }).click();
  const about = page.locator("#mobile-nav").getByRole("link", { name: "About", exact: true });
  await expect(about).toBeVisible();
  const wordmark = page.locator("header .site-shell a").first();
  const aboutBox = await about.boundingBox();
  const markBox = await wordmark.boundingBox();
  expect(aboutBox).toBeTruthy();
  expect(markBox).toBeTruthy();
  expect(Math.abs((aboutBox?.x ?? 0) - (markBox?.x ?? 0))).toBeLessThan(8);
});
