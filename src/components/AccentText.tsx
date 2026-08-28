import { splitMetrics } from "@/lib/utils";

export function AccentText({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <span className={className}>
      {splitMetrics(text).map((part, index) =>
        part.accent ? (
          <span key={`${part.text}-${index}`} className="text-accent">
            {part.text}
          </span>
        ) : (
          <span key={`${part.text}-${index}`}>{part.text}</span>
        ),
      )}
    </span>
  );
}
