"use client";

import { type FormEvent, useState } from "react";
import { inquiryTypes, type InquiryType } from "@/data/content";
import { site } from "@/data/site";
import { useSite } from "./SiteProvider";

function draftMailto(input: {
  name: string;
  from: string;
  type: string;
  message: string;
}): string {
  const subject = `Inquiry — ${input.type}`;
  const body = [
    `Name: ${input.name}`,
    `Email: ${input.from}`,
    `Type: ${input.type}`,
    "",
    input.message,
  ].join("\n");
  return `mailto:${site.inquiryEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function InquiryForm() {
  const { t } = useSite();
  const [name, setName] = useState("");
  const [from, setFrom] = useState("");
  const [type, setType] = useState<InquiryType>("consulting");
  const [message, setMessage] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    window.location.href = draftMailto({
      name,
      from,
      type: t.work.inquiry.types[type],
      message,
    });
  }

  const fieldClass =
    "mt-2 w-full min-h-11 border border-line bg-elevated px-3 text-[14px] text-ink outline-none focus:border-accent";

  return (
    <form onSubmit={onSubmit} className="mt-8 max-w-xl space-y-5">
      <label className="block">
        <span className="meta">{t.work.inquiry.name}</span>
        <input
          required
          value={name}
          onChange={(event) => setName(event.target.value)}
          className={fieldClass}
        />
      </label>
      <label className="block">
        <span className="meta">{t.work.inquiry.email}</span>
        <input
          required
          type="email"
          value={from}
          onChange={(event) => setFrom(event.target.value)}
          className={fieldClass}
        />
      </label>
      <label className="block">
        <span className="meta">{t.work.inquiry.type}</span>
        <select
          value={type}
          onChange={(event) => setType(event.target.value as InquiryType)}
          className={`${fieldClass} appearance-none`}
        >
          {inquiryTypes.map((id) => (
            <option key={id} value={id} className="bg-elevated text-ink">
              {t.work.inquiry.types[id]}
            </option>
          ))}
        </select>
      </label>
      <label className="block">
        <span className="meta">{t.work.inquiry.message}</span>
        <textarea
          required
          rows={5}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          className="mt-2 w-full border border-line bg-elevated px-3 py-3 text-[14px] text-ink outline-none focus:border-accent"
        />
      </label>
      <button
        type="submit"
        className="flex min-h-11 cursor-pointer items-center border border-accent px-4 text-[12px] tracking-[0.12em] text-accent hover:bg-accent/10"
      >
        {t.work.inquiry.submit}
      </button>
      <p className="text-[13px] leading-6 text-muted">{t.work.inquiry.note}</p>
    </form>
  );
}
