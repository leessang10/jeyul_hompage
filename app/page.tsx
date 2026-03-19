import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  ArrowRight01Icon,
  Building01Icon,
  ChartIcon,
  CheckmarkBadge01Icon,
  LicenseIcon,
  PaintBoardIcon,
  StackStarIcon,
} from "@hugeicons/core-free-icons"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ProjectPlaceholder } from "@/components/site/project-placeholder"
import { SectionShell } from "@/components/site/section-shell"
import { siteContent } from "@/lib/site-content"

function HomeHero() {
  const { brand, hero, residentialPortfolio, commercialProjectGroups } = siteContent
  const featuredResidential = residentialPortfolio[0]
  const featuredCommercial = commercialProjectGroups[0]?.projects[0]

  return (
    <section className="relative overflow-hidden border-b border-border/60">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(18,133,131,0.18),transparent_28%),linear-gradient(180deg,rgba(250,249,246,0.96),rgba(239,242,238,0.78))]"
      />
      <div className="relative mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-14">
        <div className="flex flex-col justify-between gap-8">
          <div className="space-y-6">
            <Badge variant="outline" className="border-border/70 bg-background/80 text-[10px] tracking-[0.28em] uppercase">
              {hero.eyebrow}
            </Badge>
            <div className="space-y-4">
              <h1 className="max-w-xl text-5xl font-semibold tracking-[-0.05em] text-foreground sm:text-6xl lg:text-7xl">
                주거와 기업 공간, 제율은 시작부터 완성까지 함께합니다.
              </h1>
              <p className="max-w-lg text-base leading-7 text-muted-foreground sm:text-lg">
                설계와 시공, 공정과 품질을 함께 살피며 오래 만족할 공간을 만듭니다.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="h-11 px-6">
                <Link href="/contact">
                  상담하기
                  <HugeiconsIcon icon={ArrowRight01Icon} className="ml-2 size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-11 px-6">
                <Link href="/residential">대표 포트폴리오</Link>
              </Button>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="jeyul-surface-panel p-4">
              <p className="jeyul-editorial-kicker">Trust</p>
              <p className="mt-2 text-sm font-medium text-foreground">{brand.license}</p>
            </div>
            <div className="jeyul-surface-panel p-4">
              <p className="jeyul-editorial-kicker">Reference</p>
              <p className="mt-2 text-sm font-medium text-foreground">주거와 기업 프로젝트를 함께 수행합니다.</p>
            </div>
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <figure className="jeyul-content-frame relative min-h-[440px] overflow-hidden p-6 lg:min-h-[620px]">
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[linear-gradient(145deg,rgba(16,24,40,0.96),rgba(58,74,84,0.76)_48%,rgba(220,225,221,0.16)),radial-gradient(circle_at_top_left,rgba(18,133,131,0.32),transparent_28%)]"
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-8 bottom-8 top-26 border border-white/16 bg-[linear-gradient(180deg,rgba(255,255,255,0.14),rgba(255,255,255,0.03))]"
            />
            <div
              aria-hidden="true"
              className="absolute bottom-14 left-14 right-14 h-px bg-white/18"
            />
            <div className="relative flex h-full flex-col justify-between text-white">
              <div className="flex items-start justify-between gap-4">
                <Badge variant="secondary" className="border-0 bg-white/12 text-white backdrop-blur-sm">
                  Signature Residential
                </Badge>
                <div className="rounded-none border border-white/16 bg-black/12 px-3 py-2 backdrop-blur-sm">
                  <p className="text-[10px] uppercase tracking-[0.28em] text-white/72">JEYUL D&C</p>
                  <p className="mt-1 text-sm text-white">{featuredResidential?.area ?? "67평"}</p>
                </div>
              </div>
              <div className="max-w-md space-y-3">
                <p className="text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                  {featuredResidential?.title ?? "강남권 주거 프로젝트"}
                </p>
                <p className="text-sm leading-6 text-white/76">
                  {featuredResidential?.location} · {featuredResidential?.date} · {featuredResidential?.scope}
                </p>
              </div>
            </div>
          </figure>

          <div className="grid gap-4">
            <figure className="jeyul-surface-panel relative min-h-[220px] overflow-hidden p-5">
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[linear-gradient(135deg,rgba(18,133,131,0.2),rgba(255,255,255,0)_56%),linear-gradient(180deg,rgba(247,246,242,0.98),rgba(226,231,227,0.78))]"
              />
              <div className="relative flex h-full flex-col justify-between">
                <Badge variant="outline" className="w-fit border-border/70 bg-background/80">
                  Corporate Reference
                </Badge>
                <div className="space-y-2">
                  <p className="text-xl font-semibold tracking-[-0.03em] text-foreground">
                    {featuredCommercial?.title ?? "LG · SK · LOTTE"}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {[featuredCommercial?.client, featuredCommercial?.location].filter(Boolean).join(" · ")}
                  </p>
                </div>
              </div>
            </figure>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="jeyul-surface-panel flex min-h-[180px] flex-col justify-between p-5">
                <div className="flex size-11 items-center justify-center border border-border bg-secondary/60">
                  <HugeiconsIcon icon={ChartIcon} className="size-5 text-primary" />
                </div>
                <div className="space-y-2">
                  <p className="text-lg font-semibold text-foreground">설계 · 공정 · 원가 · 품질</p>
                  <p className="text-sm leading-6 text-muted-foreground">
                    프로젝트 전반을 놓치지 않도록 꼼꼼하게 살핍니다.
                  </p>
                </div>
              </div>
              <div className="jeyul-surface-panel flex min-h-[180px] flex-col justify-between p-5">
                <div className="flex size-11 items-center justify-center border border-border bg-secondary/60">
                  <HugeiconsIcon icon={CheckmarkBadge01Icon} className="size-5 text-primary" />
                </div>
                <div className="space-y-2">
                  <p className="text-lg font-semibold text-foreground">면허 기반 시공 역량</p>
                  <p className="text-sm leading-6 text-muted-foreground">
                    주거와 기업 프로젝트 모두 책임 있게 수행합니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function HomeDirectory() {
  const { homeSections } = siteContent

  const icons = {
    "/process": ChartIcon,
    "/residential": Building01Icon,
    "/commercial": StackStarIcon,
  } as const

  return (
    <SectionShell className="jeyul-section-rhythm">
      <div className="mb-8 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl space-y-3">
          <p className="jeyul-editorial-kicker">Explore</p>
          <h2 className="jeyul-editorial-section-title">원하시는 프로젝트에 맞춰 제율의 작업을 둘러보실 수 있습니다.</h2>
          <p className="jeyul-editorial-section-copy">
            주거 포트폴리오, 기업·오피스 실적, 공사관리 방식, 회사 정보를 페이지별로 나누어 담았습니다.
          </p>
        </div>
        <Button asChild variant="outline" className="w-fit">
          <Link href="/about">회사소개</Link>
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {homeSections.map((section) => {
          const icon = icons[section.href as keyof typeof icons] ?? ChartIcon

          return (
            <Card key={section.href} className="jeyul-surface-panel jeyul-card-lift">
              <CardHeader className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex size-11 items-center justify-center border border-border bg-secondary/60">
                    <HugeiconsIcon icon={icon} className="size-5 text-primary" />
                  </div>
                  <Badge variant="outline" className="text-[10px] uppercase tracking-[0.28em]">
                    {section.href.replace("/", "")}
                  </Badge>
                </div>
                <CardTitle className="text-xl">{section.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                <p className="text-sm leading-6 text-muted-foreground">{section.description}</p>
                <Button asChild variant="link" className="h-auto p-0 text-sm font-medium text-foreground">
                  <Link href={section.href} className="jeyul-link-underline">
                    자세히 보기
                  </Link>
                </Button>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </SectionShell>
  )
}

function SignatureProjects() {
  const { residentialPortfolio, commercialProjectGroups } = siteContent
  const residential = residentialPortfolio.slice(0, 2)
  const commercial = commercialProjectGroups.slice(0, 2)

  return (
    <SectionShell className="jeyul-section-rhythm">
      <div className="mb-8 max-w-2xl space-y-3">
        <p className="jeyul-editorial-kicker">Signature Projects</p>
        <h2 className="jeyul-editorial-section-title">최근 프로젝트부터 제율의 작업을 살펴보실 수 있습니다.</h2>
        <p className="jeyul-editorial-section-copy">
          주거 프로젝트의 분위기와 기업 공간의 수행 이력을 함께 확인하실 수 있습니다.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="grid gap-4">
          <ProjectPlaceholder
            label="Hero Shot"
            title="대표 주거 프로젝트 이미지 영역"
            meta="실제 완공 사진 또는 메인 컷이 들어갈 자리"
            variant="residential"
            className="min-h-[360px]"
          />
          {residential.map((project, index) => (
            <figure
              key={project.title}
              className={`jeyul-content-frame relative overflow-hidden p-6 ${index === 0 ? "min-h-[300px]" : "min-h-[220px]"}`}
            >
              <div
                aria-hidden="true"
                className={`absolute inset-0 ${index === 0
                  ? "bg-[linear-gradient(140deg,rgba(25,34,50,0.94),rgba(75,92,103,0.72)_48%,rgba(231,235,231,0.18)),radial-gradient(circle_at_top_left,rgba(18,133,131,0.24),transparent_26%)]"
                  : "bg-[linear-gradient(135deg,rgba(18,133,131,0.15),rgba(255,255,255,0)_58%),linear-gradient(180deg,rgba(245,244,240,0.98),rgba(227,231,228,0.78))]"}`
                }
              />
              <div className={`relative flex h-full flex-col justify-between ${index === 0 ? "text-white" : ""}`}>
                <div className="flex items-center justify-between gap-4">
                  <Badge variant={index === 0 ? "secondary" : "outline"} className={index === 0 ? "border-0 bg-white/12 text-white" : "border-border/70 bg-background/80"}>
                    Residential
                  </Badge>
                  <p className={`text-xs ${index === 0 ? "text-white/72" : "text-muted-foreground"}`}>{project.date}</p>
                </div>
                <div className="max-w-md space-y-3">
                  <p className={`text-2xl font-semibold tracking-[-0.04em] ${index === 0 ? "sm:text-4xl" : "sm:text-3xl"} ${index === 0 ? "text-white" : "text-foreground"}`}>
                    {project.title}
                  </p>
                  <p className={`text-sm leading-6 ${index === 0 ? "text-white/78" : "text-muted-foreground"}`}>
                    {project.location} · {project.area} · {project.scope}
                  </p>
                </div>
              </div>
            </figure>
          ))}
        </div>

        <div className="grid gap-4">
          {commercial.map((group) => (
            <Card key={group.title} className="jeyul-surface-panel">
              <CardHeader className="space-y-3">
                <div className="flex items-center justify-between gap-4">
                  <CardTitle className="text-xl">{group.title}</CardTitle>
                  <HugeiconsIcon icon={StackStarIcon} className="size-5 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground">
                  {group.projects[0]?.client ?? group.projects[0]?.title}
                </p>
              </CardHeader>
              <CardContent className="grid gap-3">
                {group.projects.slice(0, 3).map((project) => (
                  <div key={project.title} className="space-y-1 border-b border-border/60 pb-3 last:border-0 last:pb-0">
                    <p className="text-sm font-medium text-foreground">{project.title}</p>
                    <p className="text-sm text-muted-foreground">
                      {[project.client, project.location].filter(Boolean).join(" · ") || project.description}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
          <Button asChild variant="outline" className="w-fit">
            <Link href="/commercial">기업·오피스 실적 전체 보기</Link>
          </Button>
        </div>
      </div>
    </SectionShell>
  )
}

function ProcessBand() {
  const { processSteps } = siteContent
  const highlights = processSteps.slice(0, 4)

  const icons = [PaintBoardIcon, ChartIcon, CheckmarkBadge01Icon, LicenseIcon]

  return (
    <SectionShell className="jeyul-section-rhythm">
      <div className="jeyul-content-frame grid gap-8 px-6 py-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-10">
        <div className="space-y-3">
          <p className="jeyul-editorial-kicker">ICM</p>
          <h2 className="jeyul-editorial-section-title">제율은 공간의 결과만이 아니라 과정의 안정감까지 함께 챙깁니다.</h2>
          <p className="jeyul-editorial-section-copy">
            설계, 공정, 원가, 품질을 이어서 관리해 일정과 마감의 흐름을 안정적으로 맞춥니다.
          </p>
          <Button asChild variant="outline" className="mt-4 w-fit">
            <Link href="/process">공사관리 방식 보기</Link>
          </Button>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <ProjectPlaceholder
            label="Process Board"
            title="도면, 공정표, 현장 기록 이미지 영역"
            meta="프로세스 다이어그램 또는 시공 기록 사진이 들어갈 자리"
            variant="process"
            className="sm:col-span-2 min-h-[240px]"
          />
          {highlights.map((step, index) => (
            <Card key={step.title} className="jeyul-surface-panel">
              <CardHeader className="space-y-3">
                <div className="flex size-10 items-center justify-center border border-border bg-secondary/60">
                  <HugeiconsIcon icon={icons[index] ?? ChartIcon} className="size-5 text-primary" />
                </div>
                <CardTitle className="text-lg">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-6 text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </SectionShell>
  )
}

function TrustBand() {
  const { brand } = siteContent

  return (
    <SectionShell className="pt-0 pb-20">
      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <Card className="jeyul-content-frame">
          <CardHeader className="space-y-3">
            <p className="jeyul-editorial-kicker">Trust Signals</p>
            <CardTitle className="text-2xl">{brand.koreanName}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-5">
            <p className="max-w-xl text-sm leading-6 text-muted-foreground">
              최근 주거 포트폴리오와 기업 실적, 실내건축공사업 면허, 법인 전환 이력을 바탕으로 프로젝트를 진행합니다.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="border-b border-border/60 pb-3">
                <p className="jeyul-editorial-kicker">면허</p>
                <p className="mt-1 text-sm font-medium text-foreground">{brand.license}</p>
              </div>
              <div className="border-b border-border/60 pb-3">
                <p className="jeyul-editorial-kicker">법인 전환</p>
                <p className="mt-1 text-sm font-medium text-foreground">2024.11 제율디앤씨 주식회사</p>
              </div>
              <div className="border-b border-border/60 pb-3 sm:border-b-0 sm:pb-0">
                <p className="jeyul-editorial-kicker">사업자등록번호</p>
                <p className="mt-1 text-sm font-medium text-foreground">{brand.registrationNumber}</p>
              </div>
              <div className="sm:border-b-0 sm:pb-0">
                <p className="jeyul-editorial-kicker">주요 범위</p>
                <p className="mt-1 text-sm font-medium text-foreground">프리미엄 주거 · 기업 · 오피스</p>
              </div>
            </div>
            <div>
              <Button asChild variant="outline" className="w-fit">
                <Link href="/about">회사 정보 보기</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-4">
          <ProjectPlaceholder
            label="Office Shot"
            title="기업·오피스 대표 이미지 영역"
            meta="실제 기업 프로젝트 사진 또는 현장 컷이 들어갈 자리"
            variant="commercial"
            className="min-h-[240px]"
          />
          <Card className="jeyul-surface-panel">
            <CardHeader className="space-y-3">
              <p className="jeyul-editorial-kicker">Next Step</p>
              <CardTitle className="text-2xl">프로젝트 성격에 맞는 페이지로 바로 이동하실 수 있습니다.</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm">
              <p className="leading-6 text-muted-foreground">
                주거 포트폴리오, 기업 실적, 상담 페이지로 바로 이어지도록 홈 구성을 간결하게 정리했습니다.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <Button asChild className="w-full sm:w-auto">
                  <Link href="/residential">
                    주거 포트폴리오
                    <HugeiconsIcon icon={ArrowRight01Icon} className="ml-2 size-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full sm:w-auto">
                  <Link href="/commercial">기업·오피스 실적</Link>
                </Button>
                <Button asChild variant="outline" className="w-full sm:w-auto">
                  <Link href="/contact">상담하기</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </SectionShell>
  )
}

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <HomeHero />
      <HomeDirectory />
      <SignatureProjects />
      <ProcessBand />
      <TrustBand />
    </div>
  )
}
