import { fireEvent, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { buildInquiryMailto } from "@/lib/inquiry";
import { InquiryForm } from "./InquiryForm";
import { SiteProvider } from "./SiteProvider";

function renderInquiryForm(openDraft = vi.fn()) {
  render(
    <SiteProvider>
      <InquiryForm openDraft={openDraft} />
    </SiteProvider>,
  );

  return openDraft;
}

describe("InquiryForm", () => {
  it("renders required, localized fields and explains the email draft flow", () => {
    renderInquiryForm();

    expect(screen.getByLabelText("Name")).toBeRequired();
    expect(screen.getByLabelText("Contact email")).toBeRequired();
    expect(screen.getByLabelText("Are you an individual or a company?")).toBeRequired();
    expect(screen.getByLabelText("What do you need?")).toBeRequired();
    expect(screen.getByLabelText("Context")).toBeRequired();
    expect(
      screen.getByRole("button", { name: "Open email draft ↗" }),
    ).toBeInTheDocument();

    const typeSelect = screen.getByRole("combobox", { name: "What do you need?" });
    expect(
      within(typeSelect)
        .getAllByRole("option")
        .map((option) => option.textContent),
    ).toEqual([
      "DEEP PIVOT investment AI platform",
      "Custom AI solutions",
      "Personal website (like this one)",
      "Other inquiries (including study abroad)",
    ]);

    const roleSelect = screen.getByRole("combobox", {
      name: "Are you an individual or a company?",
    });
    expect(
      within(roleSelect)
        .getAllByRole("option")
        .map((option) => option.textContent),
    ).toEqual(["Individual", "Company"]);

    expect(
      screen.getByText(
        "This opens a prepared draft in your email app. You decide when to send it.",
      ),
    ).toBeVisible();
    expect(
      screen.getByRole("link", { name: "nicktsai1221@163.com" }),
    ).toHaveAttribute("href", "mailto:nicktsai1221@163.com");
  });

  it("opens a real mailto draft with the entered and selected values", async () => {
    const user = userEvent.setup();
    const openDraft = renderInquiryForm();

    await user.type(screen.getByLabelText("Name"), "Ada Lovelace");
    await user.type(screen.getByLabelText("Contact email"), "ada+ops@example.com");
    await user.selectOptions(
      screen.getByLabelText("Are you an individual or a company?"),
      "company",
    );
    await user.selectOptions(
      screen.getByLabelText("What do you need?"),
      "website",
    );
    await user.type(
      screen.getByLabelText("Context"),
      "Automate investor updates & weekly reporting.",
    );
    await user.click(screen.getByRole("button", { name: "Open email draft ↗" }));

    expect(openDraft).toHaveBeenCalledTimes(1);
    const href = openDraft.mock.calls[0][0] as string;
    const [recipient, query] = href.slice("mailto:".length).split("?");
    const params = new URLSearchParams(query);

    expect(recipient).toBe("nicktsai1221@163.com");
    expect(params.get("subject")).toBe("AI Inquiry — Personal website (like this one)");
    expect(params.get("body")).toBe(
      [
        "Name: Ada Lovelace",
        "Email: ada+ops@example.com",
        "Role: Company",
        "Type: Personal website (like this one)",
        "",
        "Automate investor updates & weekly reporting.",
      ].join("\r\n"),
    );
  });

  it("blocks an oversized encoded draft and recovers after a shorter edit", async () => {
    const user = userEvent.setup();
    const openDraft = renderInquiryForm();
    const message = "数据％自动化\n".repeat(40);
    const encodedHref = buildInquiryMailto({
      recipient: "nicktsai1221@163.com",
      name: "Ada Lovelace",
      email: "ada@example.com",
      role: "Individual",
      type: "AI workflows",
      message,
    });

    expect(encodedHref.length).toBeGreaterThan(1800);

    await user.type(screen.getByLabelText("Name"), "Ada Lovelace");
    await user.type(screen.getByLabelText("Contact email"), "ada@example.com");
    const textarea = screen.getByLabelText("Context");
    fireEvent.change(textarea, { target: { value: message } });
    await user.click(screen.getByRole("button", { name: "Open email draft ↗" }));

    const error =
      "This draft is too long for a reliable email link. Shorten the context or email me directly.";
    expect(openDraft).not.toHaveBeenCalled();
    expect(textarea).toHaveAttribute("aria-invalid", "true");
    expect(textarea).toHaveAccessibleDescription(error);
    expect(screen.getByRole("alert")).toHaveTextContent(error);

    fireEvent.change(textarea, { target: { value: "A shorter context." } });

    expect(screen.queryByRole("alert")).not.toBeInTheDocument();
    expect(textarea).not.toHaveAttribute("aria-invalid");
    await user.click(screen.getByRole("button", { name: "Open email draft ↗" }));

    expect(openDraft).toHaveBeenCalledTimes(1);
  });
});
