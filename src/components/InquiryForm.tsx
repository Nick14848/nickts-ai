"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import {
  inquiryRoles,
  inquiryTypes,
  type InquiryRole,
  type InquiryType,
} from "@/data/content";
import { site } from "@/data/site";
import { buildInquiryMailto, MAX_MAILTO_URI_LENGTH } from "@/lib/inquiry";
import { useSite } from "./SiteProvider";

type InquiryFormProps = {
  openDraft?: (href: string) => void;
};

function openDraftInEmailApp(href: string) {
  window.location.href = href;
}

export function InquiryForm({ openDraft = openDraftInEmailApp }: InquiryFormProps) {
  const { t } = useSite();
  const inquiry = t.work.service.inquiry;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<InquiryRole>("individual");
  const [type, setType] = useState<InquiryType>("deep-pivot");
  const [message, setMessage] = useState("");
  const [draftTooLong, setDraftTooLong] = useState(false);

  function handleNameChange(event: ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
    setDraftTooLong(false);
  }

  function handleEmailChange(event: ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
    setDraftTooLong(false);
  }

  function handleRoleChange(event: ChangeEvent<HTMLSelectElement>) {
    setRole(event.target.value as InquiryRole);
    setDraftTooLong(false);
  }

  function handleTypeChange(event: ChangeEvent<HTMLSelectElement>) {
    setType(event.target.value as InquiryType);
    setDraftTooLong(false);
  }

  function handleMessageChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setMessage(event.target.value);
    setDraftTooLong(false);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const href = buildInquiryMailto({
      recipient: site.inquiryEmail,
      name,
      email,
      role: inquiry.roles[role],
      type: inquiry.types[type],
      message,
    });

    if (href.length > MAX_MAILTO_URI_LENGTH) {
      setDraftTooLong(true);
      return;
    }

    setDraftTooLong(false);
    openDraft(href);
  }

  const fieldClassName =
    "mt-2 min-h-11 w-full border border-line bg-elevated px-3 py-2 text-[15px] text-ink focus:border-accent";

  return (
    <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
      <div>
        <label className="block text-[13px] text-muted" htmlFor="inquiry-name">
          {inquiry.name}
        </label>
        <input
          autoComplete="name"
          className={fieldClassName}
          id="inquiry-name"
          name="name"
          onChange={handleNameChange}
          required
          type="text"
          value={name}
        />
      </div>

      <div>
        <label className="block text-[13px] text-muted" htmlFor="inquiry-email">
          {inquiry.email}
        </label>
        <input
          autoComplete="email"
          className={fieldClassName}
          id="inquiry-email"
          name="email"
          onChange={handleEmailChange}
          required
          type="email"
          value={email}
        />
      </div>

      <div>
        <label className="block text-[13px] text-muted" htmlFor="inquiry-role">
          {inquiry.role}
        </label>
        <select
          className={fieldClassName}
          id="inquiry-role"
          name="role"
          onChange={handleRoleChange}
          required
          value={role}
        >
          {inquiryRoles.map((inquiryRole) => (
            <option key={inquiryRole} value={inquiryRole}>
              {inquiry.roles[inquiryRole]}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-[13px] text-muted" htmlFor="inquiry-type">
          {inquiry.type}
        </label>
        <select
          className={fieldClassName}
          id="inquiry-type"
          name="type"
          onChange={handleTypeChange}
          required
          value={type}
        >
          {inquiryTypes.map((inquiryType) => (
            <option key={inquiryType} value={inquiryType}>
              {inquiry.types[inquiryType]}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-[13px] text-muted" htmlFor="inquiry-message">
          {inquiry.message}
        </label>
        <textarea
          aria-describedby={draftTooLong ? "inquiry-message-error" : undefined}
          aria-invalid={draftTooLong || undefined}
          className={`${fieldClassName} min-h-32 resize-y`}
          id="inquiry-message"
          name="message"
          onChange={handleMessageChange}
          required
          value={message}
        />
        {draftTooLong ? (
          <p
            className="mt-2 text-[12px] leading-5 text-accent"
            id="inquiry-message-error"
            role="alert"
          >
            {inquiry.tooLong}
          </p>
        ) : null}
      </div>

      <button
        className="min-h-11 border border-accent px-4 py-2 text-[14px] text-accent"
        type="submit"
      >
        {inquiry.submit}
      </button>

      <p className="text-[12px] leading-5 text-muted">
        {inquiry.note}{" "}
        <a
          className="text-ink underline underline-offset-2"
          href={`mailto:${site.inquiryEmail}`}
        >
          {site.inquiryEmail}
        </a>
      </p>
    </form>
  );
}
