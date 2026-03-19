import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowRight01Icon,
  ChartIcon,
  CheckmarkBadge01Icon,
  Layers01Icon,
  Money01Icon,
  PaintBoardIcon,
  Building01Icon,
  LicenseIcon,
  CallIcon,
} from "@hugeicons/core-free-icons";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PageHero } from "@/components/site/page-hero";
import { ProjectPlaceholder } from "@/components/site/project-placeholder";
import { SectionShell } from "@/components/site/section-shell";
import { siteContent } from "@/lib/site-content";

const stepIconMap: Record<string, typeof ChartIcon> = {
  "기획 및 설계": PaintBoardIcon,
  "자재/인력/장비 통합관리": Layers01Icon,
  "공정 관리": ChartIcon,
  "원가 및 예산 관리": Money01Icon,
  "품질 및 안전 관리": CheckmarkBadge01Icon,
  "커뮤니케이션/보고 체계": Building01Icon,
  디지털화: LicenseIcon,
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
    <Card className="jeyul-surface-panel jeyul-card-lift">
      <CardHeader className="space-y-4">
        <div className="flex items-center justify-between gap-4">
          <Badge variant="secondary">{String(index + 1).padStart(2, "0")}</Badge>
          <HugeiconsIcon icon={Icon} className="size-5 text-primary" />
        </div>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm leading-6 text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}

function SupportCard({
  title,
  description,
  eyebrow,
}: {
  title: string;
  description: string;
  eyebrow: string;
}) {
  return (
    <Card className="jeyul-content-frame">
      <CardHeader className="space-y-3">
        <p className="jeyul-editorial-kicker">{eyebrow}</p>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm leading-6 text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}

export default function Page() {
  const { brand, processSteps } = siteContent;

  return (
    <div className="flex min-h-screen flex-col">
      <PageHero
        eyebrow="JEYUL PROCESS"
        title="제율의 방식은 설계와 현장이 따로 움직이지 않게 만드는 일입니다."
        description="기획부터 품질까지 흐름을 놓치지 않고 챙기며 주거와 기업 프로젝트를 진행합니다."
        actions={
          <>
            <Button asChild size="lg" className="h-11 px-6">
              <Link href="/contact">
                프로젝트 상담
                <HugeiconsIcon icon={ArrowRight01Icon} className="ml-2 size-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-11 px-6">
              <Link href="/commercial">기업 실적 보기</Link>
            </Button>
          </>
        }
        note={
          <div className="space-y-4">
            <p className="jeyul-editorial-kicker">What stays consistent</p>
            <p className="text-lg font-semibold text-foreground">
              {brand.koreanName}
            </p>
            <p className="text-sm leading-6 text-muted-foreground">공정, 원가, 품질, 보고 체계를 끊기지 않게 이어갑니다.</p>
            <div className="grid gap-2 text-sm text-foreground">
              <div className="flex items-center gap-2">
                <HugeiconsIcon icon={LicenseIcon} className="size-4 text-primary" />
                <span>{brand.license}</span>
              </div>
            </div>
          </div>
        }
      />

      <SectionShell className="jeyul-section-rhythm">
        <div className="mb-8 max-w-2xl space-y-3">
          <p className="jeyul-editorial-kicker">ICM flow</p>
          <h2 className="jeyul-editorial-section-title">프로젝트는 여러 단계로 나뉘지만 현장에서는 하나의 흐름으로 이어집니다.</h2>
          <p className="jeyul-editorial-section-copy">
            기획부터 보고 체계까지 각 단계가 자연스럽게 이어져야 일정과 품질이 흔들리지 않습니다.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          <ProjectPlaceholder
            label="Process Visual"
            title="현장 기록과 공정 자료 이미지 영역"
            meta="도면, 공정표, 현장 사진이 들어갈 자리"
            variant="process"
            className="md:col-span-2 xl:col-span-3 min-h-[220px]"
          />
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

      <SectionShell className="jeyul-section-rhythm">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-4">
            <p className="jeyul-editorial-kicker">How we work</p>
            <h2 className="jeyul-editorial-section-title">
              제율은 단계별 진행보다 의사결정의 누수를 줄이는 데 집중합니다.
            </h2>
            <p className="jeyul-editorial-section-copy">
              설계-시공 간극을 줄이고, 원가와 품질을 함께 보며, 보고 체계를 통해 현장 정보를 빠르게 공유합니다.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Badge variant="outline" className="border-border/70">
                설계
              </Badge>
              <Badge variant="outline" className="border-border/70">
                공정
              </Badge>
              <Badge variant="outline" className="border-border/70">
                원가
              </Badge>
              <Badge variant="outline" className="border-border/70">
                품질
              </Badge>
              <Badge variant="outline" className="border-border/70">
                보고
              </Badge>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <SupportCard
              eyebrow="Planning"
              title="기획은 현장의 첫 오차를 줄이는 일"
              description="고객 요구와 조건을 정확히 정리해야 이후 공정이 흔들리지 않습니다. 초반 정합성이 높을수록 전체 일정과 품질이 안정됩니다."
            />
            <SupportCard
              eyebrow="Execution"
              title="시공은 현장에서 기준을 지키는 일"
              description="숙련도와 관리 기준이 함께 맞아야 현장 품질이 안정적으로 유지됩니다. 제율은 기본을 지키는 시공으로 결과를 만듭니다."
            />
            <SupportCard
              eyebrow="Control"
              title="원가와 품질을 따로 보지 않습니다"
              description="예산을 지키면서 품질을 확보하려면 상호 배타적으로 보지 말아야 합니다. 제율은 두 축을 동시에 추적합니다."
            />
            <SupportCard
              eyebrow="Reporting"
              title="보고는 끝난 뒤가 아니라 진행 중의 장치"
              description="협력사와 발주처가 같은 정보를 보아야 의사결정이 빨라집니다. 보고 체계는 결과 확인이 아니라 리스크 예방 장치입니다."
            />
          </div>
        </div>
      </SectionShell>

      <SectionShell className="jeyul-section-rhythm">
        <div className="jeyul-content-frame grid gap-6 px-6 py-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-10">
          <div className="space-y-3">
            <p className="jeyul-editorial-kicker">Next step</p>
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-foreground sm:text-4xl">
              검토 중인 프로젝트를 바탕으로 바로 상담하실 수 있습니다.
            </h2>
            <p className="max-w-2xl text-base leading-7 text-muted-foreground">
              현재 검토 중인 프로젝트의 성격, 일정, 예산 범위를 남겨주시면 제율이 확인 후 안내드립니다.
            </p>
          </div>
          <div className="flex flex-col justify-between gap-4 lg:items-end">
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="h-11 px-6">
                <Link href="/contact">
                  문의하기
                  <HugeiconsIcon icon={ArrowRight01Icon} className="ml-2 size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-11 px-6">
                <Link href="/residential">주거 포트폴리오</Link>
              </Button>
            </div>
            <p className="jeyul-editorial-kicker">Official site: {brand.officialHomepageUrl}</p>
          </div>
        </div>
      </SectionShell>
    </div>
  );
}
