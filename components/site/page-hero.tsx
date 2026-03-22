import type { ReactNode } from "react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  eyebrow?: string;
  title: ReactNode;
  description: ReactNode;
  actions?: ReactNode;
  aside?: ReactNode;
  className?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  actions,
  aside,
  className,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden border-b border-border/40 bg-[linear-gradient(180deg,rgba(248,246,241,0.96),rgba(244,241,235,0.88))]",
        className
      )}
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(18,133,131,0.07),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(17,24,39,0.05),transparent_28%)]" />
      <div className="absolute inset-0 -z-10 jeyul-content-grid opacity-25" />

      <div className="mx-auto grid max-w-7xl gap-14 px-4 pb-16 pt-32 sm:px-6 sm:pb-20 sm:pt-36 lg:grid-cols-[1.02fr_0.98fr] lg:items-end lg:gap-18 lg:px-8 lg:pb-24 lg:pt-40">
        <div className="space-y-7">
          {eyebrow ? (
            <Badge
              variant="outline"
              className="rounded-none border-border/70 bg-background/80 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.28em]"
            >
              {eyebrow}
            </Badge>
          ) : null}

          <h1 className="max-w-[12ch] text-4xl font-semibold leading-[0.94] tracking-[-0.06em] text-foreground sm:text-[3.7rem] lg:text-[4.9rem]">
            {title}
          </h1>
          <p className="max-w-[34rem] text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            {description}
          </p>
          {actions ? <div className="flex flex-wrap gap-3 pt-2">{actions}</div> : null}
        </div>

        {aside ? (
          <div className="relative hidden min-h-[28rem] lg:block">
            <div className="absolute inset-0 border border-border/60 bg-white/18 backdrop-blur-[2px]" />
            <div className="absolute -left-6 -top-6 h-24 w-24 border border-primary/18" />
            <div className="absolute -bottom-6 -right-6 h-24 w-24 border border-primary/18" />
            <div className="relative h-full overflow-hidden border border-white/20">
              {aside}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
