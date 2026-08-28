export function cn(
  ...classes: Array<string | false | null | undefined>
): string {
  return classes.filter(Boolean).join(" ");
}

export function isExternalUrl(href: string): boolean {
  return href.startsWith("http://") || href.startsWith("https://");
}

const METRIC = /(\d[\d,.]*K?\+)/g;

export function splitMetrics(
  text: string,
): Array<{ text: string; accent: boolean }> {
  const parts: Array<{ text: string; accent: boolean }> = [];
  let last = 0;
  const matcher = new RegExp(METRIC.source, "g");
  for (const match of text.matchAll(matcher)) {
    const index = match.index ?? 0;
    if (index > last) {
      parts.push({ text: text.slice(last, index), accent: false });
    }
    parts.push({ text: match[0], accent: true });
    last = index + match[0].length;
  }
  if (last < text.length) {
    parts.push({ text: text.slice(last), accent: false });
  }
  return parts.length ? parts : [{ text, accent: false }];
}
