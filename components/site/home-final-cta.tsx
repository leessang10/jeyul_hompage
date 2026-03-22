import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { Button } from "@/components/ui/button";
import { SectionShell } from "@/components/site/section-shell";
import type { HomeFinalCta as HomeFinalCtaContent } from "@/lib/site-content";

type HomeFinalCtaProps = {
  content: HomeFinalCtaContent;
};

export function HomeFinalCta({ content }: HomeFinalCtaProps) {
  return (
    <SectionShell className="bg-foreground py-24 text-background sm:py-28 lg:py-32">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="whitespace-pre-line text-4xl font-semibold leading-[1.02] tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
          {content.title}
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/72 sm:text-lg sm:leading-8">
          {content.description}
        </p>

        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <Button asChild size="lg" variant="secondary" className="h-14 rounded-none px-8 text-sm font-semibold uppercase tracking-[0.16em]">
            <Link href="/contact">
              {content.primaryCta}
              <HugeiconsIcon icon={ArrowRight01Icon} className="ml-2 size-4" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-14 rounded-none border-white/20 bg-white/6 px-8 text-sm font-semibold uppercase tracking-[0.16em] text-white hover:bg-white/12 hover:text-white"
          >
            <Link href="/about">{content.secondaryCta}</Link>
          </Button>
        </div>
      </div>
    </SectionShell>
  );
}
