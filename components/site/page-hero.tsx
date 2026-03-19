import type { ReactNode } from "react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  eyebrow?: string;
  title: ReactNode;
  description: ReactNode;
  actions?: ReactNode;
  note?: ReactNode;
  className?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  actions,
  note,
  className,
}: PageHeroProps) {
  return (
    <section className={cn("relative overflow-hidden border-b border-border/50 bg-background", className)}>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(18,133,131,0.08),transparent_40%),radial-gradient(circle_at_top_right,rgba(17,24,39,0.06),transparent_36%)]" />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-20">
        <div className="space-y-6">
          {eyebrow ? (
            <Badge variant="outline" className="border-border/70 text-[10px] uppercase tracking-[0.28em]">
              {eyebrow}
            </Badge>
          ) : null}
          <div className="space-y-4">
            <h1 className="max-w-3xl text-4xl font-semibold tracking-[-0.03em] text-foreground sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
              {description}
            </p>
          </div>
          {actions ? <div className="flex flex-wrap gap-3">{actions}</div> : null}
        </div>
        {note ? (
          <div className="flex items-end lg:justify-end">
            <div className="max-w-md border border-border/70 bg-card p-6 text-sm leading-6 text-muted-foreground shadow-sm">
              {note}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
