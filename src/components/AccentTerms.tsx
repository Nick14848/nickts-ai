type AccentTermsProps = {
  text: string;
  terms: readonly string[];
};

function escapeRegex(term: string) {
  return term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function AccentTerms({ text, terms }: AccentTermsProps) {
  const normalizedTerms = [...new Set(terms.filter((term) => term !== ""))].sort(
    (left, right) => right.length - left.length,
  );

  if (normalizedTerms.length === 0) {
    return text;
  }

  const matcher = new RegExp(`(${normalizedTerms.map(escapeRegex).join("|")})`, "g");

  return text.split(matcher).map((part, index) =>
    normalizedTerms.includes(part) ? (
      <span key={`${part}-${index}`} className="text-accent">
        {part}
      </span>
    ) : (
      part
    ),
  );
}
