import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  ArrowRight01Icon,
  Building01Icon,
  ChartIcon,
  CheckmarkBadge01Icon,
  Location01Icon,
  StackStarIcon,
} from "@hugeicons/core-free-icons"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PageHero } from "@/components/site/page-hero"
import { ProjectPlaceholder } from "@/components/site/project-placeholder"
import { SectionShell } from "@/components/site/section-shell"
import { siteContent } from "@/lib/site-content"

type ProjectGroup = (typeof siteContent.commercialProjectGroups)[number]

function GroupCard({ group }: { group: ProjectGroup }) {
  const firstProject = group.projects[0]

  return (
    <Card className="jeyul-surface-panel jeyul-card-lift">
      <CardHeader className="space-y-3">
        <div className="flex items-center justify-between gap-4">
          <CardTitle className="text-xl">{group.title}</CardTitle>
          <HugeiconsIcon icon={StackStarIcon} className="size-5 text-primary" />
        </div>
        <p className="text-sm text-muted-foreground">
          {firstProject ? firstProject.client ?? firstProject.title : "등록된 프로젝트가 없습니다."}
        </p>
      </CardHeader>
      <CardContent className="grid gap-3">
        {group.projects.length > 0 ? (
          group.projects.map((project) => (
            <div key={project.title} className="space-y-1 border-b border-border/60 pb-3 last:border-0 last:pb-0">
              <p className="text-sm font-medium text-foreground">{project.title}</p>
              <p className="text-sm text-muted-foreground">
                {[project.client, project.location].filter(Boolean).join(" · ") || project.description}
              </p>
              <p className="text-xs leading-5 text-muted-foreground">{project.description}</p>
            </div>
          ))
        ) : (
          <p className="text-sm leading-6 text-muted-foreground">
            현재 이 그룹에 표시할 프로젝트가 없습니다.
          </p>
        )}
      </CardContent>
    </Card>
  )
}

function InsightCard({
  title,
  description,
  icon,
}: {
  title: string
  description: string
  icon: typeof ChartIcon
}) {
  return (
    <Card className="jeyul-content-frame">
      <CardHeader className="space-y-3">
        <div className="flex size-10 items-center justify-center border border-border bg-secondary/60">
          <HugeiconsIcon icon={icon} className="size-5 text-primary" />
        </div>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm leading-6 text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}

function ArchiveYearCard({
  year,
  categories,
}: (typeof siteContent.constructionArchive)[number]) {
  return (
    <Card className="jeyul-surface-panel">
      <CardHeader className="space-y-3">
        <p className="text-3xl font-semibold tracking-[-0.04em] text-primary">{year}</p>
      </CardHeader>
      <CardContent className="grid gap-5">
        {categories.map((category) => (
          <div key={`${year}-${category.title}`} className="space-y-2 border-b border-border/60 pb-4 last:border-0 last:pb-0">
            <p className="text-sm font-semibold tracking-[0.16em] text-foreground">{category.title}</p>
            <div className="grid gap-1.5">
              {category.projects.map((project) => (
                <p key={project} className="text-sm leading-6 text-muted-foreground">{project}</p>
              ))}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

export default function Page() {
  const { brand, commercialProjectGroups, constructionArchive } = siteContent

  return (
    <div className="flex min-h-screen flex-col">
      <PageHero
        eyebrow="Commercial Projects"
        title="기업과 오피스 공간은 일정과 운영 흐름까지 함께 맞춰야 합니다."
        description="제율은 대기업, 공장, 연구시설, 리테일 공간에서 쌓은 경험을 바탕으로 기업 프로젝트를 수행합니다."
        actions={
          <>
            <Button asChild size="lg" className="h-11 px-6">
              <Link href="/contact">
                기업 상담
                <HugeiconsIcon icon={ArrowRight01Icon} className="ml-2 size-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-11 px-6">
              <Link href="/process">관리 방식 보기</Link>
            </Button>
          </>
        }
        note={
          <div className="space-y-4">
            <p className="jeyul-editorial-kicker">Business Scope</p>
            <p className="text-lg font-semibold text-foreground">{brand.englishName}</p>
            <p className="text-sm leading-6 text-muted-foreground">
              오피스, 생산시설, 리테일 공간의 조건을 살피며 프로젝트를 안정적으로 진행합니다.
            </p>
            <div className="grid gap-2 text-sm text-foreground">
              <div className="flex items-center gap-2">
                <HugeiconsIcon icon={Building01Icon} className="size-4 text-primary" />
                <span>오피스 · 공장 · 연구시설 · 리테일 수행</span>
              </div>
              <div className="flex items-center gap-2">
                <HugeiconsIcon icon={Location01Icon} className="size-4 text-primary" />
                <span>대기업 및 시설 프로젝트 수행 경험</span>
              </div>
            </div>
          </div>
        }
      />

      <SectionShell className="jeyul-section-rhythm">
        <div className="mb-8 max-w-2xl space-y-3">
          <p className="jeyul-editorial-kicker">Project references</p>
          <h2 className="jeyul-editorial-section-title">주요 기업 프로젝트를 분야별로 살펴보실 수 있습니다.</h2>
          <p className="jeyul-editorial-section-copy">
            오피스, 생산·연구시설, 리테일 등 다양한 환경에서 진행한 프로젝트를 정리했습니다.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          <ProjectPlaceholder
            label="Corporate Shot"
            title="기업·오피스 대표 이미지 영역"
            meta="사무공간 또는 현장 전경 사진이 들어갈 자리"
            variant="commercial"
            className="lg:col-span-2 min-h-[260px]"
          />
          {commercialProjectGroups.map((group) => (
            <GroupCard key={group.title} group={group} />
          ))}
        </div>
      </SectionShell>

      <SectionShell className="jeyul-section-rhythm">
        <div className="mb-8 max-w-2xl space-y-3">
          <p className="jeyul-editorial-kicker">Why it matters</p>
          <h2 className="jeyul-editorial-section-title">발주처는 결과 사진보다 운영의 예측 가능성을 봅니다.</h2>
          <p className="jeyul-editorial-section-copy">
            공장, 연구시설, 오피스, 리테일은 모두 요구 조건이 다르지만, 관리 원칙은 같아야 합니다. 제율은 설계 이후의 예외 상황까지 포함해서 프로젝트를 정리합니다.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <InsightCard
            icon={ChartIcon}
            title="일정 관리"
            description="작업 지연과 승인 지연을 구분해 프로젝트의 실제 리스크를 빠르게 읽습니다."
          />
          <InsightCard
            icon={CheckmarkBadge01Icon}
            title="품질 관리"
            description="체크리스트와 현장 기준을 하나의 품질 루틴으로 이어갑니다."
          />
          <InsightCard
            icon={Building01Icon}
            title="현장 대응"
            description="오피스와 생산시설은 사용 중단을 최소화하는 계획이 중요합니다."
          />
          <InsightCard
            icon={StackStarIcon}
            title="레퍼런스 신뢰"
            description="브랜드와 시설 특성이 다른 프로젝트를 연속 수행한 경험이 축적되어 있습니다."
          />
        </div>
      </SectionShell>

      <SectionShell className="jeyul-section-rhythm">
        <div className="mb-8 max-w-3xl space-y-3">
          <p className="jeyul-editorial-kicker">Actual Construction</p>
          <h2 className="jeyul-editorial-section-title">최근 실적뿐 아니라 축적된 시공 이력도 함께 확인하실 수 있습니다.</h2>
          <p className="jeyul-editorial-section-copy">
            오피스, 주거, 리테일, 교육, 모델하우스까지 이어진 수행 이력을 연도별로 정리했습니다.
          </p>
        </div>

        <div className="grid gap-4 xl:grid-cols-3">
          {constructionArchive.map((year) => (
            <ArchiveYearCard key={year.year} year={year.year} categories={year.categories} />
          ))}
        </div>
      </SectionShell>

      <SectionShell className="pt-0 pb-20">
        <div className="jeyul-content-frame grid gap-6 px-6 py-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-10">
          <div className="space-y-3">
            <p className="jeyul-editorial-kicker">Inquiry</p>
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-foreground sm:text-4xl">
              검토 중인 현장 조건을 알려주시면 보다 정확하게 상담해드립니다.
            </h2>
            <p className="max-w-2xl text-base leading-7 text-muted-foreground">
              발주 방식, 일정 제약, 운영 시간, 내부 승인 구조를 남겨주시면 준비 방향을 더 구체적으로 안내드릴 수 있습니다.
            </p>
          </div>
          <div className="flex flex-col justify-between gap-4 lg:items-end">
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="h-11 px-6">
                <Link href="/contact">
                  상담하기
                  <HugeiconsIcon icon={ArrowRight01Icon} className="ml-2 size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-11 px-6">
                <Link href="/residential">주거 포트폴리오 보기</Link>
              </Button>
            </div>
            <p className="jeyul-editorial-kicker">Official site: {brand.officialHomepageUrl}</p>
          </div>
        </div>
      </SectionShell>
    </div>
  )
}
