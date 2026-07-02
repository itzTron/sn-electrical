import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl space-y-4",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <span className="inline-flex rounded-full border border-white/20 bg-white/65 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-[var(--color-primary)] shadow-[0_15px_40px_rgba(0,102,255,0.08)] backdrop-blur-xl dark:bg-white/6">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="text-4xl font-semibold tracking-[-0.04em] text-[var(--foreground)] sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="text-base leading-8 text-[var(--muted-foreground)] sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}

