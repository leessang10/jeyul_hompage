import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowRight01Icon,
  Building01Icon,
  ChartIcon,
  CheckmarkBadge01Icon,
  Layers01Icon,
  Money01Icon,
  PaintBoardIcon,
  Settings01Icon,
  Shield01Icon,
} from "@hugeicons/core-free-icons";
import { AmbientSpaceScene } from "@/components/site/ambient-space-scene";
import { PageHero } from "@/components/site/page-hero";
import { SectionShell } from "@/components/site/section-shell";
import { Button } from "@/components/ui/button";
import { siteContent } from "@/lib/site-content";

const stepIconMap: Record<string, typeof ChartIcon> = {
  "기획 및 설계": PaintBoardIcon,
  "자재/인력/장비 통합관리": Layers01Icon,
  "공정 관리": ChartIcon,
  "원가 및 예산 관리": Money01Icon,
  "품질 및 안전 관리": Shield01Icon,
  "커뮤니케이션/보고 체계": Building01Icon,
  "디지털화": Settings01Icon,
};

function ProcessStepCard({
  index,
  title,
  description,
}: {
  index: number;
  title: string;
  description: string;
}) {
  const Icon = stepIconMap[title] ?? ChartIcon;

  return (
    <article className="border border-border/60 bg-white/88 p-6 transition-colors hover:border-primary/30 hover:bg-white sm:p-7">
      <div className="mb-8 flex size-12 items-center justify-center border border-border/60 bg-secondary/40 text-primary">
        <HugeiconsIcon icon={Icon} className="size-6" />
      </div>
      <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">
        Step 0{index + 1}
      </p>
      <h3 className="mb-4 text-2xl font-semibold tracking-[-0.04em]">{title}</h3>
      <p className="text-sm leading-7 text-muted-foreground">{description}</p>
    </article>
  );
}

export default function Page() {
  const { processSteps } = siteContent;

  return (
    <div className="flex min-h-screen flex-col bg-[#f7f4ee]">
      <PageHero
        eyebrow="Integrated Construction Management"
        title={
          <>
            설계와 현장의 간극을
            <br />
            관리 체계로 줄입니다.
          </>
        }
        description={
          <>
            제율디앤씨의 ICM은 기획, 설계, 시공, 사후관리까지 전 과정을 하나의 흐름으로 묶어
            흔들림 없는 실행을 만듭니다.
          </>
        }
        actions={
          <>
            <Button asChild size="lg" className="h-14 rounded-none px-8 text-sm font-semibold uppercase tracking-[0.16em]">
              <Link href="/contact">
                프로젝트 상담
                <HugeiconsIcon icon={ArrowRight01Icon} className="ml-2 size-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-14 rounded-none bg-white/70 px-8 text-sm font-semibold uppercase tracking-[0.16em]">
              <Link href="/portfolio?type=commercial">기업 실적 보기</Link>
            </Button>
          </>
        }
        aside={<AmbientSpaceScene variant="commercial" />}
      />

      <SectionShell className="py-24 sm:py-28 lg:py-32">
        <div className="mb-16 max-w-3xl space-y-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-primary">Workflow</p>
          <h2 className="text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
            끊김 없는 하나의 프로세스
          </h2>
          <p className="text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            분절된 공정 관리가 아니라, 처음부터 끝까지 의사결정의 맥락이 이어지는 통합 관리를 수행합니다.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {processSteps.map((step, index) => (
            <ProcessStepCard
              key={step.title}
              index={index}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </SectionShell>

      <section className="border-y border-border/40 bg-white/86 py-24 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-16 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div className="space-y-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-primary">Why ICM</p>
            <h2 className="text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
              체계적인 관리가
              <br />
              만드는 차이
            </h2>
            <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              불확실성을 줄이고 정해진 예산과 기간 안에서 결과를 지키는 일은 결국 관리 체계의 밀도에서
              갈립니다.
            </p>
          </div>

          <div className="grid gap-px border border-border/60 bg-border/60 sm:grid-cols-2">
            {[
              ["리스크 사전 차단", "설계 검토 단계에서 시공상의 문제를 미리 예측하고 수정합니다."],
              ["투명한 원가 관리", "예산과 집행 변동을 추적해 불필요한 손실을 줄입니다."],
              ["균일한 시공 품질", "표준화된 공정 기준으로 결과물의 편차를 줄입니다."],
              ["데이터 기반 보고", "감이나 추측이 아닌 기록과 수치로 현황을 공유합니다."],
            ].map(([title, description]) => (
              <article key={title} className="bg-background p-6 sm:p-7">
                <div className="mb-4 flex size-10 items-center justify-center border border-border/60 bg-secondary/40 text-primary">
                  <HugeiconsIcon icon={CheckmarkBadge01Icon} className="size-5" />
                </div>
                <h3 className="mb-3 text-xl font-semibold tracking-[-0.04em]">{title}</h3>
                <p className="text-sm leading-7 text-muted-foreground">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-foreground py-24 text-center text-background sm:py-28">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
            복잡한 현장일수록
            <br />
            시스템이 필요합니다.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/72 sm:text-lg sm:leading-8">
            프로젝트의 성격과 범위를 알려주시면 제율이 가장 현실적인 관리 방안을 제안합니다.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" variant="secondary" className="h-14 rounded-none px-8 text-sm font-semibold uppercase tracking-[0.16em]">
              <Link href="/contact">
                상담 신청하기
                <HugeiconsIcon icon={ArrowRight01Icon} className="ml-2 size-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-14 rounded-none border-white/20 bg-white text-foreground hover:bg-white/92 hover:text-foreground">
              <Link href="/portfolio?type=residential">주거 포트폴리오 보기</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
