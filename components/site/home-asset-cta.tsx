import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { Button } from "@/components/ui/button";

export function HomeAssetCta() {
  return (
    <section className="jeyul-home-section relative isolate min-h-[100svh] overflow-hidden bg-[#bcc8d7] text-white lg:h-[100svh] lg:snap-start">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(255,255,255,0.62),transparent_24%),radial-gradient(circle_at_76%_16%,rgba(255,255,255,0.34),transparent_20%),linear-gradient(180deg,#98adbf_0%,#bfd0df_58%,#ccd5de_100%)]"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(18,26,36,0.16)_100%)]" />
      <div aria-hidden="true" className="absolute left-[8%] top-[22%] h-32 w-32 rounded-full bg-white/28 blur-3xl" />
      <div aria-hidden="true" className="absolute right-[12%] bottom-[18%] h-48 w-48 rounded-full bg-[#4f77d8]/24 blur-3xl" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl items-center px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="max-w-3xl space-y-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/80">
            JEYUL D&amp;C
          </p>
          <h2 className="max-w-4xl text-4xl font-semibold tracking-[-0.06em] text-white drop-shadow-[0_6px_30px_rgba(0,0,0,0.26)] sm:text-5xl lg:text-[clamp(3rem,4.1vw,4.6rem)]">
            단순한 건축이 아닌 자산 가치 상승까지 원하시나요?
          </h2>
          <p className="max-w-2xl text-base leading-7 text-white/86 sm:text-lg sm:leading-8">
            제율디앤씨는 건축물을 단순히 디자인하고 짓는 것을 넘어, 부동산 자산으로서의 가치를 높이는 전략을 제시합니다.
          </p>
          <div className="pt-2">
            <Button asChild size="lg" className="h-12 rounded-none bg-[#1738ad] px-6 text-[11px] font-semibold uppercase tracking-[0.18em] text-white hover:bg-[#2147cb]">
              <Link href="/contact">
                프로젝트 문의하기
                <HugeiconsIcon icon={ArrowRight01Icon} className="ml-2 size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
