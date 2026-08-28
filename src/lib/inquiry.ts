export const MAX_MAILTO_URI_LENGTH = 1800;

export type InquiryDraft = {
  recipient: string;
  name: string;
  email: string;
  type: string;
  message: string;
};

const ORDINARY_MAILBOX =
  /^[A-Za-z0-9_+-]+(?:\.[A-Za-z0-9_+-]+)*@[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?(?:\.[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?)+$/;

export function buildInquiryMailto(input: InquiryDraft): string {
  if (!ORDINARY_MAILBOX.test(input.recipient)) {
    throw new Error("Inquiry recipient must be exactly one valid email address.");
  }

  const singleLineFields = [
    ["name", input.name],
    ["email", input.email],
    ["type", input.type],
  ] as const;
  for (const [field, value] of singleLineFields) {
    if (/[\r\n]/.test(value)) {
      throw new Error(`Inquiry ${field} must be a single-line value.`);
    }
  }

  const subject = `AI Inquiry — ${input.type}`;
  const normalizedMessage = input.message.replace(/\r\n|\r|\n/g, "\r\n");
  const body = [
    `Name: ${input.name}`,
    `Email: ${input.email}`,
    `Type: ${input.type}`,
    "",
    normalizedMessage,
  ].join("\r\n");

  return `mailto:${input.recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
