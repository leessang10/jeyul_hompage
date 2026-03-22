import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { AmbientSpaceScene } from "@/components/site/ambient-space-scene";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { HomeHeroMedia } from "@/lib/site-content";

type HomeHeroVideoProps = {
  content: HomeHeroMedia;
};

export function HomeHeroVideo({ content }: HomeHeroVideoProps) {
  const hasVideo = Boolean(content.videoSrc);

  return (
    <section className="relative isolate flex min-h-[100svh] items-end overflow-hidden">
      {hasVideo ? (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster={content.posterSrc}
        >
          <source src={content.videoSrc} type="video/mp4" />
        </video>
      ) : (
        <>
          <AmbientSpaceScene
            variant="residential"
            className="absolute inset-0 jeyul-hero-fallback"
          />
          <div
            aria-hidden="true"
            className="absolute left-[8%] top-[16%] h-32 w-32 rounded-full bg-white/10 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="absolute bottom-[18%] right-[10%] h-40 w-40 rounded-full bg-primary/30 blur-3xl"
          />
        </>
      )}

      <div aria-hidden="true" className="jeyul-hero-overlay absolute inset-0" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl px-4 pb-16 pt-36 sm:px-6 sm:pb-20 sm:pt-40 lg:px-8 lg:pb-28 lg:pt-44">
        <div className="max-w-[38rem] space-y-7 text-white lg:max-w-[42rem]">
          <Badge className="w-fit rounded-none border border-white/18 bg-white/8 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-white backdrop-blur-sm">
            {content.eyebrow}
          </Badge>
          <h1 className="max-w-[12ch] whitespace-pre-line text-4xl font-semibold leading-[0.93] tracking-[-0.06em] text-white sm:text-[3.8rem] lg:text-[5rem]">
            {content.title}
          </h1>
          <p className="max-w-[29rem] text-base leading-7 text-white/76 sm:text-lg sm:leading-8">
            {content.description}
          </p>

          <div className="flex flex-col gap-3 pt-3 sm:flex-row">
            <Button asChild size="lg" className="h-14 rounded-none px-8 text-sm font-semibold uppercase tracking-[0.16em]">
              <Link href="/contact">
                {content.primaryCta}
                <HugeiconsIcon icon={ArrowRight01Icon} className="ml-2 size-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-14 rounded-none border-white/24 bg-white/6 px-8 text-sm font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-sm hover:bg-white/12 hover:text-white"
            >
              <Link href="/portfolio">{content.secondaryCta}</Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-white/72">
        <span className="text-[10px] font-semibold tracking-[0.38em]">{content.scrollCue}</span>
        <span className="jeyul-scroll-cue h-12 w-px bg-white/36" />
      </div>
    </section>
  );
}
