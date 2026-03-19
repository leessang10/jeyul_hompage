import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  ArrowRight01Icon,
  Building01Icon,
  CallIcon,
  CheckmarkBadge01Icon,
  Location01Icon,
  PaintBoardIcon,
  SparklesIcon,
} from "@hugeicons/core-free-icons"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PageHero } from "@/components/site/page-hero"
import { ProjectPlaceholder } from "@/components/site/project-placeholder"
import { SectionShell } from "@/components/site/section-shell"
import { siteContent } from "@/lib/site-content"

type ResidentialProject = (typeof siteContent.residentialPortfolio)[number]

function ProjectCard({
  project,
  featured = false,
}: {
  project: ResidentialProject
  featured?: boolean
}) {
  return (
    <Card
      className={
        featured
          ? "jeyul-content-frame overflow-hidden lg:grid lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch"
          : "jeyul-surface-panel jeyul-card-lift"
      }
    >
      <div className={featured ? "bg-[linear-gradient(135deg,rgba(18,133,131,0.06),transparent_60%)] p-6 lg:p-8" : ""}>
        <CardHeader className="space-y-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">{project.date}</Badge>
              <Badge variant="outline">{project.projectType}</Badge>
            </div>
            <HugeiconsIcon icon={Building01Icon} className="size-5 text-primary" />
          </div>
          <CardTitle className={featured ? "text-2xl leading-tight sm:text-3xl" : "text-lg leading-tight"}>
            {project.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-3 text-sm text-muted-foreground sm:grid-cols-3">
            <div className="space-y-1">
              <p className="jeyul-editorial-kicker">Location</p>
              <p className="text-foreground">{project.location}</p>
            </div>
            <div className="space-y-1">
              <p className="jeyul-editorial-kicker">Area</p>
              <p className="text-foreground">{project.area}</p>
            </div>
            <div className="space-y-1">
              <p className="jeyul-editorial-kicker">Scope</p>
              <p className="text-foreground">{project.scope}</p>
            </div>
          </div>
          {featured ? (
            <div className="grid gap-3 rounded-none border border-border/70 bg-background/70 p-4 sm:grid-cols-2">
              <div className="flex items-start gap-3">
                <HugeiconsIcon icon={PaintBoardIcon} className="mt-0.5 size-4 text-primary" />
                <div>
                  <p className="text-sm font-medium text-foreground">주거 감도</p>
                  <p className="text-sm text-muted-foreground">공간의 질감과 동선을 먼저 읽고, 생활 방식에 맞춰 구조를 정리합니다.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <HugeiconsIcon icon={CheckmarkBadge01Icon} className="mt-0.5 size-4 text-primary" />
                <div>
                  <p className="text-sm font-medium text-foreground">관리 기준</p>
                  <p className="text-sm text-muted-foreground">디자인의 분위기와 실제 사용감을 함께 살피며 마감까지 꼼꼼하게 완성합니다.</p>
                </div>
              </div>
            </div>
          ) : null}
        </CardContent>
      </div>
    </Card>
  )
}

function EmptyStateCard() {
  return (
    <Card className="jeyul-content-frame border-dashed">
      <CardHeader className="space-y-3">
        <div className="flex size-10 items-center justify-center border border-border bg-secondary/60">
          <HugeiconsIcon icon={Building01Icon} className="size-5 text-primary" />
        </div>
        <CardTitle className="text-xl">등록된 주거 포트폴리오가 없습니다.</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm leading-6 text-muted-foreground">
          현재 표시할 주거 프로젝트가 준비되지 않았습니다. 상담을 통해 진행 중인 사례와 향후 레퍼런스를 확인하실 수 있습니다.
        </p>
      </CardContent>
    </Card>
  )
}

function ApproachCard({
  title,
  description,
  icon,
}: {
  title: string
  description: string
  icon: typeof SparklesIcon
}) {
  return (
    <Card className="jeyul-surface-panel jeyul-card-lift">
      <CardHeader className="space-y-3">
        <div className="flex size-10 items-center justify-center border border-border bg-secondary/60">
          <HugeiconsIcon icon={icon} className="size-5 text-primary" />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm leading-6 text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}

export default function Page() {
  const { brand, residentialPortfolio, contact } = siteContent
  const [featuredProject, ...restProjects] = residentialPortfolio
  const hasProjects = residentialPortfolio.length > 0

  return (
    <div className="flex min-h-screen flex-col">
      <PageHero
        eyebrow="Residential Portfolio"
        title="주거는 기능보다 먼저 감도와 생활의 리듬을 읽어야 완성됩니다."
        description="제율은 거주자의 생활 방식과 공간의 분위기를 함께 살피며 주거 프로젝트를 완성합니다."
        actions={
          <>
            <Button asChild size="lg" className="h-11 px-6">
              <Link href="/contact">
                주거 상담
                <HugeiconsIcon icon={ArrowRight01Icon} className="ml-2 size-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-11 px-6">
              <Link href="/process">제율의 방식 보기</Link>
            </Button>
          </>
        }
        note={
          <div className="space-y-4">
            <p className="jeyul-editorial-kicker">Residential Focus</p>
            <p className="text-lg font-semibold text-foreground">{brand.koreanName}</p>
            <p className="text-sm leading-6 text-muted-foreground">
              주거의 핵심은 예산과 미감의 균형입니다. 제율은 그 균형을 공정 관리로 유지합니다.
            </p>
            <div className="grid gap-2 text-sm text-foreground">
              <div className="flex items-center gap-2">
                <HugeiconsIcon icon={Location01Icon} className="size-4 text-primary" />
                <span>서울 중심권 프리미엄 주거 사례</span>
              </div>
              <div className="flex items-center gap-2">
                <HugeiconsIcon icon={CallIcon} className="size-4 text-primary" />
                <span>{contact.phone}</span>
              </div>
            </div>
          </div>
        }
      />

      <SectionShell className="jeyul-section-rhythm">
        <div className="mb-8 max-w-2xl space-y-3">
          <p className="jeyul-editorial-kicker">Featured work</p>
          <h2 className="jeyul-editorial-section-title">최근 프로젝트부터 차분히 살펴보실 수 있습니다.</h2>
          <p className="jeyul-editorial-section-copy">
            최근에 완성한 주거 공간을 중심으로 제율의 분위기와 마감 감도를 담았습니다.
          </p>
        </div>

        <div className="grid gap-4">
          <ProjectPlaceholder
            label="Main Residential Shot"
            title="대표 주거 프로젝트 메인 이미지 영역"
            meta="실제 완공 사진 또는 공간 전경 컷이 들어갈 자리"
            variant="residential"
            className="min-h-[360px]"
          />
          {hasProjects && featuredProject ? (
            <>
              <ProjectCard project={featuredProject} featured />
              {restProjects.length > 0 ? (
                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {restProjects.map((project) => (
                    <ProjectCard key={project.title} project={project} />
                  ))}
                </div>
              ) : null}
            </>
          ) : (
            <EmptyStateCard />
          )}
        </div>
      </SectionShell>

      <SectionShell className="jeyul-section-rhythm">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-4">
            <p className="jeyul-editorial-kicker">Residential approach</p>
            <h2 className="jeyul-editorial-section-title">주거 프로젝트는 생활 방식에 맞춰 디테일의 순서를 조정합니다.</h2>
            <p className="jeyul-editorial-section-copy">
              평형이 같아도 거주 방식이 다르면 공간의 우선순위는 달라집니다. 제율은 동선, 수납, 마감, 유지관리의 균형을 먼저 맞추고 그 위에 감도를 얹습니다.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Badge variant="outline" className="border-border/70">동선</Badge>
              <Badge variant="outline" className="border-border/70">수납</Badge>
              <Badge variant="outline" className="border-border/70">마감</Badge>
              <Badge variant="outline" className="border-border/70">유지관리</Badge>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <ProjectPlaceholder
              label="Detail Shot"
              title="디테일 컷 이미지 영역"
              meta="마감, 재료, 수납, 디테일 사진이 들어갈 자리"
              variant="residential"
              className="sm:col-span-2 min-h-[220px]"
            />
            <ApproachCard
              icon={PaintBoardIcon}
              title="미감은 구조 위에서 안정적으로 보입니다"
              description="공간의 첫 인상은 마감이 아니라 구조와 비례에서 결정됩니다. 제율은 디테일보다 먼저 전체 감도를 맞춥니다."
            />
            <ApproachCard
              icon={CheckmarkBadge01Icon}
              title="시공 품질은 생활 만족도로 연결됩니다"
              description="눈에 보이지 않는 수평, 틈새, 접합부가 장기 만족도를 만듭니다. 주거 공사는 결국 사용 경험의 품질입니다."
            />
            <ApproachCard
              icon={Building01Icon}
              title="프리미엄은 과장보다 절제가 맞습니다"
              description="주거 공간은 많은 것을 덧붙이는 방식보다 필요한 것만 정확하게 남길 때 더 고급스럽게 읽힙니다."
            />
            <ApproachCard
              icon={Location01Icon}
              title="현장마다 해법은 달라집니다"
              description="같은 평형과 같은 지역이라도 구조와 생활 방식은 모두 다릅니다. 제율은 현장에 맞는 답을 차분히 찾아갑니다."
            />
          </div>
        </div>
      </SectionShell>

      <SectionShell className="pt-0 pb-20">
        <div className="jeyul-content-frame grid gap-6 px-6 py-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-10">
          <div className="space-y-3">
            <p className="jeyul-editorial-kicker">Inquiry</p>
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-foreground sm:text-4xl">
              집에 대한 생각을 들려주시면 제율이 함께 방향을 잡아드립니다.
            </h2>
            <p className="max-w-2xl text-base leading-7 text-muted-foreground">
              평형, 가족 구성, 예산 범위, 원하는 분위기 정도만 남겨주셔도 상담을 시작하실 수 있습니다.
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
                <Link href="/commercial">기업 실적 보기</Link>
              </Button>
            </div>
            <p className="jeyul-editorial-kicker">Official site: {brand.officialHomepageUrl}</p>
          </div>
        </div>
      </SectionShell>
    </div>
  )
}
