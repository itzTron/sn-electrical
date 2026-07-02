import type { ReactNode } from "react";

import { SectionHeading } from "@/components/section-heading";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  actions?: ReactNode;
};

export function PageHero({
  eyebrow,
  title,
  description,
  actions,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden pt-32 sm:pt-36">
      <div className="absolute inset-x-0 top-0 h-64 bg-[radial-gradient(circle_at_top,rgba(0,102,255,0.18),transparent_65%)]" />
      <div className="container relative">
        <div className="glass-panel px-6 py-14 sm:px-10 sm:py-20">
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            description={description}
          />
          {actions ? <div className="mt-8 flex flex-wrap gap-4">{actions}</div> : null}
        </div>
      </div>
    </section>
  );
}

