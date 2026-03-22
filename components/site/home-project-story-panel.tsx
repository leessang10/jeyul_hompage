import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { AmbientSpaceScene } from "@/components/site/ambient-space-scene";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { FeaturedStoryItem } from "@/lib/site-content";

type HomeProjectStoryPanelProps = {
  item: FeaturedStoryItem;
};

export function HomeProjectStoryPanel({ item }: HomeProjectStoryPanelProps) {
  const rightAligned = item.align === "right";
  const panelWidth = rightAligned ? "lg:max-w-[38rem]" : "lg:max-w-[34rem]";
  const alignment = rightAligned
    ? "items-end justify-items-end lg:pb-10"
    : "items-center justify-items-start lg:-translate-y-8";

  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden bg-[#f3f0ea] text-foreground">
      <div className="absolute inset-0">
        <div className="jeyul-story-media absolute inset-0">
          <AmbientSpaceScene variant={item.variant} />
        </div>
        <div
          className={cn(
            "absolute inset-0",
            item.variant === "residential"
              ? "bg-[linear-gradient(180deg,rgba(11,17,20,0.22),rgba(11,17,20,0.58))]"
              : "bg-[linear-gradient(180deg,rgba(6,12,18,0.28),rgba(6,12,18,0.66))]"
          )}
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-7xl items-end px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className={cn("grid w-full", alignment)}>
          <article className={cn("jeyul-story-copy max-w-[34rem] space-y-5 rounded-none border border-white/14 bg-black/32 p-6 text-white backdrop-blur-md sm:p-8 lg:p-10", panelWidth)}>
            <div className="space-y-3">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/64">
                {item.label}
              </p>
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-white/88">
                {item.category}
              </p>
              <h2 className="max-w-[14ch] text-3xl font-semibold leading-[1.02] tracking-[-0.05em] text-white sm:text-4xl lg:text-5xl">
                {item.title}
              </h2>
              <p className="text-base leading-7 text-white/76 sm:text-lg sm:leading-8">
                {item.description}
              </p>
            </div>

            <div className="flex flex-col gap-4 border-t border-white/12 pt-5 sm:flex-row sm:items-center sm:justify-between">
              <span className="text-xs uppercase tracking-[0.22em] text-white/56">
                {item.meta}
              </span>
              <Button
                asChild
                variant="outline"
                className="h-11 rounded-none border-white/18 bg-white/6 px-5 text-xs font-semibold uppercase tracking-[0.16em] text-white hover:bg-white/12 hover:text-white"
              >
                <Link href={item.href}>
                  자세히 보기
                  <HugeiconsIcon icon={ArrowRight01Icon} className="ml-2 size-4" />
                </Link>
              </Button>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
