"use client";

export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-[70vh] flex-col items-start justify-center px-6">
      <p className="font-mono text-[11px] tracking-[0.16em] text-[#8B8D93]">
        SOMETHING BROKE
      </p>
      <h1 className="mt-4 text-[32px] font-medium tracking-[-0.04em] text-[#F3F4F6]">
        Reload and keep going.
      </h1>
      <button
        type="button"
        onClick={reset}
        className="mt-8 min-h-11 border border-white/10 px-4 text-[12px] tracking-[0.14em] text-[#3B6FFF]"
      >
        RELOAD
      </button>
    </div>
  );
}
