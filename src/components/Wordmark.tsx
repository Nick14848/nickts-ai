import { cn } from "@/lib/utils";
import { markDomainAccent } from "@/data/site";

export function Wordmark({
  className,
  size = "sm",
}: {
  className?: string;
  size?: "sm" | "lg";
}) {
  const { before, accent, after } = markDomainAccent();

  return (
    <span
      className={cn(
        "tracking-tight",
        size === "lg" ? "text-[28px] md:text-[40px]" : "text-[15px]",
        className,
      )}
    >
      <span className="text-ink">{before}</span>
      {accent ? <span className="text-accent">{accent}</span> : null}
      {after ? <span className="text-ink">{after}</span> : null}
    </span>
  );
}
