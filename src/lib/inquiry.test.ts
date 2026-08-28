import { describe, expect, it } from "vitest";
import { buildInquiryMailto } from "./inquiry";

describe("buildInquiryMailto", () => {
  it("builds an encoded AI inquiry draft for the supplied recipient", () => {
    const href = buildInquiryMailto({
      recipient: "nicktsai1221@163.com",
      name: "Ada Lovelace",
      email: "ada@example.com",
      type: "AI workflows",
      message: "Please help us review an internal research workflow.",
    });
    const [recipient, query] = href.slice("mailto:".length).split("?");
    const params = new URLSearchParams(query);

    expect(recipient).toBe("nicktsai1221@163.com");
    expect(href).toContain(
      `subject=${encodeURIComponent("AI Inquiry — AI workflows")}`,
    );
    expect(params.get("subject")).toBe("AI Inquiry — AI workflows");
    expect(params.get("body")).toBe(
      [
        "Name: Ada Lovelace",
        "Email: ada@example.com",
        "Type: AI workflows",
        "",
        "Please help us review an internal research workflow.",
      ].join("\r\n"),
    );
    expect(href).toContain("%0D%0A");
    expect(href.replaceAll("%0D%0A", "")).not.toContain("%0A");
  });

  it("keeps reserved characters inside encoded query values and normalizes message newlines", () => {
    const input = {
      recipient: "nicktsai1221@163.com",
      name: "Ada & Co?",
      email: "ada+tag@example.com&body=changed",
      type: "AI workflows?subject=changed",
      message: "First line\nSecond line\rThird line\r\nFourth &body=changed#fragment",
    };
    const subject = `AI Inquiry — ${input.type}`;
    const body = [
      `Name: ${input.name}`,
      `Email: ${input.email}`,
      `Type: ${input.type}`,
      "",
      "First line\r\nSecond line\r\nThird line\r\nFourth &body=changed#fragment",
    ].join("\r\n");
    const href = buildInquiryMailto(input);
    const query = href.split("?")[1];

    expect(href).toBe(
      `mailto:${input.recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
    );
    expect(query.split("&")).toHaveLength(2);
    expect(query).not.toContain("\n");
    expect(new URLSearchParams(query).get("body")).toBe(body);
    expect(href).toContain("%0D%0A");
    expect(href.replaceAll("%0D%0A", "")).not.toContain("%0A");
  });

  it.each([
    { field: "name", value: "Ada\nInjected" },
    { field: "name", value: "Ada\rInjected" },
    { field: "email", value: "ada@example.com\nBcc: other@example.com" },
    { field: "email", value: "ada@example.com\rBcc: other@example.com" },
    { field: "type", value: "AI workflows\nBcc: other@example.com" },
    { field: "type", value: "AI workflows\rBcc: other@example.com" },
  ] as const)("rejects line breaks in $field", ({ field, value }) => {
    const input = {
      recipient: "nicktsai1221@163.com",
      name: "Ada",
      email: "ada@example.com",
      type: "AI workflows",
      message: "Hello",
    };
    input[field] = value;

    expect(() => buildInquiryMailto(input)).toThrowError(
      `Inquiry ${field} must be a single-line value.`,
    );
  });

  it.each([
    ["comma-separated recipients", "first@example.com,second@example.com"],
    ["query injection", "nick@example.com?bcc=other@example.com"],
    ["LF injection", "nick@example.com\nBcc: other@example.com"],
    ["CR injection", "nick@example.com\rBcc: other@example.com"],
    ["whitespace", "nick @example.com"],
    ["ampersand", "nick&other@example.com"],
    ["fragment marker", "nick#other@example.com"],
    ["percent escape", "nick%2Binquiry@example.com"],
    ["equals sign", "nick=inquiry@example.com"],
    ["backtick", "nick`inquiry@example.com"],
    ["opening brace", "nick{inquiry@example.com"],
    ["closing brace", "nick}inquiry@example.com"],
    ["pipe", "nick|inquiry@example.com"],
    ["missing at-sign", "nick.example.com"],
    ["missing domain", "nick@"],
    ["non-dotted domain", "nick@example"],
    ["non-ASCII domain", "nick@例子.com"],
  ])("rejects %s", (_case, recipient) => {
    expect(() =>
      buildInquiryMailto({
        recipient,
        name: "Ada",
        email: "ada@example.com",
        type: "AI workflows",
        message: "Hello",
      }),
    ).toThrowError("Inquiry recipient must be exactly one valid email address.");
  });

  it("accepts a single plus-address recipient", () => {
    const href = buildInquiryMailto({
      recipient: "nick+inquiry@example.com",
      name: "Ada",
      email: "ada@example.com",
      type: "AI workflows",
      message: "Hello",
    });

    expect(href).toMatch(/^mailto:nick\+inquiry@example\.com\?/);
  });
});
