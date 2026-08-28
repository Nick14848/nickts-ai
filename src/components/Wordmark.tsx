import { cn } from "@/lib/utils";

export function Wordmark({
  className,
  size = "sm",
}: {
  className?: string;
  size?: "sm" | "lg";
}) {
  return (
    <span
      className={cn(
        "tracking-tight",
        size === "lg" ? "text-[28px] md:text-[40px]" : "text-[15px]",
        className,
      )}
    >
      <span className="text-ink">nickts</span>
      <span className="text-accent">.ai</span>
    </span>
  );
}
