import { cn } from "@/lib/utils";
import { splitDomain } from "@/data/site";

export function Wordmark({
  className,
  size = "sm",
}: {
  className?: string;
  size?: "sm" | "lg";
}) {
  const { host, tld } = splitDomain();

  return (
    <span
      className={cn(
        "tracking-tight",
        size === "lg" ? "text-[28px] md:text-[40px]" : "text-[15px]",
        className,
      )}
    >
      <span className="text-ink">{host}</span>
      {tld ? <span className="text-accent">{tld}</span> : null}
    </span>
  );
}
