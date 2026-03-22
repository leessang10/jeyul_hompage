import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon, Briefcase01Icon, Home01Icon } from "@hugeicons/core-free-icons";
import { ProjectPlaceholder } from "@/components/site/project-placeholder";

export function HomeSplitEntry() {
  return (
    <section className="grid md:grid-cols-2">
      <Link
        href="/portfolio?type=residential"
        className="group relative isolate overflow-hidden bg-[#f1ede7] px-6 py-24 sm:px-10 sm:py-28 lg:px-14"
      >
        <div aria-hidden="true" className="absolute inset-0 opacity-30 transition-opacity duration-500 group-hover:opacity-40">
          <ProjectPlaceholder
            label="Residential"
            title="고급 주거 인테리어"
            meta="Lifestyle-tailored construction"
            variant="residential"
            className="h-full w-full border-0 grayscale-[0.2] transition-transform duration-700 group-hover:scale-[1.02]"
          />
        </div>
        <div className="relative z-10 max-w-md space-y-6 text-white">
          <HugeiconsIcon icon={Home01Icon} className="size-12 text-white/82" />
          <div className="space-y-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/68">Residential</p>
            <h2 className="text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">고급 주거 인테리어</h2>
            <p className="text-base leading-7 text-white/78 sm:text-lg">
              생활 방식에 맞춘 동선과 디테일로 오래 만족할 집을 설계합니다.
            </p>
          </div>
          <span className="inline-flex items-center text-sm font-semibold uppercase tracking-[0.16em] text-white">
            주거 포트폴리오 보기
            <HugeiconsIcon icon={ArrowRight01Icon} className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </Link>

      <Link
        href="/portfolio?type=commercial"
        className="group relative isolate overflow-hidden bg-[#e5e8e4] px-6 py-24 sm:px-10 sm:py-28 lg:px-14"
      >
        <div aria-hidden="true" className="absolute inset-0 opacity-30 transition-opacity duration-500 group-hover:opacity-42">
          <ProjectPlaceholder
            label="Commercial"
            title="기업 · 오피스 · 공공 프로젝트"
            meta="Managed for operations and delivery"
            variant="commercial"
            className="h-full w-full border-0 grayscale-[0.15] transition-transform duration-700 group-hover:scale-[1.02]"
          />
        </div>
        <div className="relative z-10 max-w-md space-y-6 text-white">
          <HugeiconsIcon icon={Briefcase01Icon} className="size-12 text-white/82" />
          <div className="space-y-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/68">Commercial</p>
            <h2 className="text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">기업 · 오피스 · 공공</h2>
            <p className="text-base leading-7 text-white/78 sm:text-lg">
              기능과 운영 조건, 일정과 품질을 함께 고려한 시공 솔루션을 제공합니다.
            </p>
          </div>
          <span className="inline-flex items-center text-sm font-semibold uppercase tracking-[0.16em] text-white">
            기업·오피스 실적 보기
            <HugeiconsIcon icon={ArrowRight01Icon} className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </Link>
    </section>
  );
}
