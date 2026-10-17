"use client";
import { useState } from "react";

export function CopyProfile({ text, zh }: { text: string; zh: boolean }) {
  const [status, setStatus] = useState<"idle" | "copied" | "error">("idle");
  return <div className="agent-copy">
    <button type="button" onClick={async () => {
      try { await navigator.clipboard.writeText(text); setStatus("copied"); }
      catch { setStatus("error"); }
    }}>{status === "copied" ? (zh ? "已复制 ✓" : "Copied ✓") : (zh ? "复制公开资料 ↗" : "Copy public profile ↗")}</button>
    <span role="status">{status === "error" ? (zh ? "无法复制，请打开下方 Markdown 链接。" : "Copy unavailable. Open the Markdown link below.") : ""}</span>
  </div>;
}
