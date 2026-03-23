import Image from "next/image";
import { AmbientSpaceScene } from "@/components/site/ambient-space-scene";
import type { HomeHeroMedia } from "@/lib/site-content";

type HomeHeroVideoProps = {
  content: HomeHeroMedia;
};

export function HomeHeroVideo({ content }: HomeHeroVideoProps) {
  const hasVideo = Boolean(content.videoSrc);

  return (
    <section className="relative isolate flex min-h-[100svh] items-center justify-center overflow-hidden">
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

      <div className="absolute inset-0 z-10 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <h1 className="whitespace-nowrap text-center text-[clamp(1.3rem,3.2vw,3.15rem)] font-semibold tracking-[-0.06em] text-white [text-shadow:0_10px_34px_rgba(0,0,0,0.34)]">
          {content.title}
        </h1>
      </div>

      <div className="absolute bottom-7 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3 text-white">
        <div className="relative flex size-32 items-center justify-center sm:size-36">
          <Image
            src="/circle.svg"
            alt=""
            aria-hidden="true"
            fill
            sizes="144px"
            className="absolute inset-0 size-full animate-[spin_18s_linear_infinite] opacity-95"
          />
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[11px] font-semibold uppercase tracking-[0.38em] text-white/82 sm:text-xs">
            {content.scrollCue}
          </span>
          <span className="jeyul-scroll-arrow absolute left-1/2 top-1/2 -translate-x-1/2 translate-y-3 text-[1.25rem] leading-none text-white/86 sm:translate-y-3.5 sm:text-[1.35rem]">
            ↓
          </span>
        </div>
      </div>
    </section>
  );
}
