import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { Button } from "@/components/ui/button";

type CircleProps = {
  title: string;
  description: string;
  compact?: boolean;
  variant?: "outline" | "filled";
};

function Circle({ title, description, compact = false, variant = "outline" }: CircleProps) {
  const filled = variant === "filled";

  return (
    <div
      className={[
        "flex shrink-0 items-center justify-center rounded-full text-center transition-transform duration-300",
        compact ? "size-44 sm:size-48 lg:size-52" : "size-40 sm:size-44 lg:size-48",
        filled
          ? "border border-white/6 bg-white text-[#0f2160] shadow-[0_30px_80px_-40px_rgba(255,255,255,0.3)]"
          : "border border-white/32 bg-transparent text-white",
      ].join(" ")}
    >
      <div className={compact ? "max-w-[9.5rem] px-4" : "max-w-[8.5rem] px-4"}>
        <p className={filled ? "text-2xl font-semibold tracking-[-0.05em] sm:text-[1.7rem]" : "text-2xl font-semibold tracking-[-0.05em] sm:text-[1.7rem]"}>
          {title}
        </p>
        <p className={filled ? "mt-3 text-sm font-semibold leading-6 text-[#2450b8] sm:text-base" : "mt-3 text-sm leading-6 text-white/68 sm:text-base"}>
          {description}
        </p>
      </div>
    </div>
  );
}

export function HomeIntegrationDiagram() {
  return (
    <section className="jeyul-home-section relative isolate min-h-[100svh] overflow-hidden bg-[#11151b] text-white lg:h-[100svh] lg:snap-start">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(255,255,255,0.08),transparent_26%),radial-gradient(circle_at_82%_18%,rgba(74,113,255,0.08),transparent_26%),linear-gradient(180deg,#14181f_0%,#101419_100%)]"
      />
      <div aria-hidden="true" className="absolute left-[8%] top-[18%] h-32 w-32 rounded-full bg-white/4 blur-3xl" />
      <div aria-hidden="true" className="absolute right-[10%] top-[16%] h-40 w-40 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col px-4 py-16 sm:px-6 lg:h-full lg:px-8 lg:py-20">
        <div className="max-w-3xl space-y-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/50">
            제로투엔 통합 건축 솔루션
          </p>
          <h2 className="max-w-4xl text-4xl font-semibold tracking-[-0.06em] text-white sm:text-5xl lg:text-[clamp(3rem,4.1vw,4.6rem)]">
            개발부터 설계·건설까지 완벽한 일관성을 제공합니다
          </h2>
          <div className="pt-2">
            <Button asChild className="h-12 rounded-none bg-white px-5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#13247d] hover:bg-white/92">
              <Link href="/contact">
                통합 건축 솔루션 문의하기
                <HugeiconsIcon icon={ArrowRight01Icon} className="ml-2 size-4" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="relative mt-16 flex flex-1 items-center lg:mt-10">
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-1/2 hidden h-px bg-white/20 lg:block"
          />
          <div className="relative flex w-full flex-col items-center gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:flex lg:items-center lg:gap-6">
              <Circle title="설계" description="작품성과 사업성을 갖춘 디자인" />
              <Circle title="건설" description="신속 정확한 건설" />
              <Circle title="개발" description="리스크 최소화, 이익 극대화" />
            </div>

            <div className="relative z-10 lg:ml-10">
              <Circle
                title="통합 건축 솔루션"
                description="시간 단축, 비용 절감"
                compact
                variant="filled"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
