import { expect, test } from "@playwright/test";

for (const width of [320, 360, 375, 390, 430, 768, 1440]) {
  test(`business card fits at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 820 });
    await page.goto("/");
    await expect(
      page.getByRole("heading", { name: "Nick Tsai", level: 1 }),
    ).toBeVisible();
    const measurements = await page
      .locator(".bc-card-front")
      .evaluate((card) => ({
        overflowX:
          document.documentElement.scrollWidth -
          document.documentElement.clientWidth,
        overflowY: card.scrollHeight - card.clientHeight,
      }));
    expect(measurements.overflowX).toBeLessThanOrEqual(1);
    expect(measurements.overflowY).toBeLessThanOrEqual(1);
  });
}

test("name retains solid high-contrast color", async ({ page }) => {
  await page.goto("/");
  const color = await page
    .locator(".bc-card-identity h1")
    .evaluate((node) => getComputedStyle(node).color);
  expect(color).toBe("rgb(32, 72, 189)");
});

test("switches language and remembers it", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Switch to Chinese" }).click();
  await expect(page.getByRole("heading", { name: "工作经历" })).toBeVisible();
  await expect(page.getByText("往下滑查看更多")).toBeVisible();
  await page.reload();
  await expect(
    page.getByRole("navigation").getByRole("link", { name: "工作经历" }),
  ).toBeVisible();
});

test("scroll unfolds the card and reaches experience", async ({ page }) => {
  await page.goto("/");
  await page
    .locator(".bc-card-story")
    .evaluate((section) =>
      window.scrollTo(0, (section.clientHeight - window.innerHeight) * 0.8),
    );
  await expect(page.locator(".bc-card-back")).toHaveAttribute(
    "aria-hidden",
    "false",
  );
  await expect(page.locator(".bc-card-back")).toContainText(
    "financial workflows",
  );
  await page
    .getByRole("navigation")
    .getByRole("link", { name: "Work experience" })
    .click();
  await expect(page.locator("#experience")).toBeInViewport();
  await expect(page.getByRole("banner")).toBeVisible();
});

test("contact dialog has working destinations and closes with Escape", async ({
  page,
}) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Keep in touch" }).click();
  const dialog = page.getByRole("dialog", { name: "Contact Nick" });
  await expect(dialog).toBeVisible();
  await expect(dialog.getByRole("link", { name: /Phone/ })).toHaveAttribute(
    "href",
    "tel:+85269902741",
  );
  await expect(dialog.getByRole("link", { name: /Email/ })).toHaveAttribute(
    "href",
    "mailto:nicktsai1221@gmail.com",
  );
  await page.keyboard.press("Shift+Tab");
  expect(
    await page.evaluate(
      () => document.activeElement?.closest("dialog") !== null,
    ),
  ).toBe(true);
  await page.keyboard.press("Escape");
  await expect(dialog).not.toBeVisible();
});

test("reduced motion keeps a static introduction and usable card", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await expect(page.locator(".bc-reduced-intro")).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Nick Tsai", level: 1 }),
  ).toBeVisible();
});

test("external links and command navigation are available", async ({
  page,
}) => {
  await page.goto("/");
  for (const name of ["RedNote", "Douyin · Find 小菜Nick", "GitHub ↗"]) {
    const link = page.getByRole("link", { name, exact: true });
    await expect(link).toHaveAttribute("target", "_blank");
    await expect(link).toHaveAttribute("rel", /noopener/);
  }
  await page.keyboard.press("Control+k");
  await expect(
    page.getByRole("dialog", { name: "Quick navigation" }),
  ).toBeVisible();
});
