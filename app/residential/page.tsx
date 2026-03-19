import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  ArrowRight01Icon,
  CheckmarkBadge01Icon,
  PaintBoardIcon,
  Home01Icon,
  MaximizeIcon,
  SquareIcon,
} from "@hugeicons/core-free-icons"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ProjectPlaceholder } from "@/components/site/project-placeholder"
import { SectionShell } from "@/components/site/section-shell"
import { siteContent } from "@/lib/site-content"

type ResidentialProject = (typeof siteContent.residentialPortfolio)[number]

/**
 * 프로젝트 카드: 비주얼 중심의 프리미엄 레이아웃
 */
function ProjectCard({
  project,
  index,
}: {
  project: ResidentialProject
  index: number
}) {
  // 인덱스에 따라 카드 높이와 스타일 변주 (Masonry-like feel)
  const isLarge = index % 3 === 0

  return (
    <Link 
      href={`/residential/${index}`} // 상세 페이지가 있다면 연결, 현재는 예시
      className={`group relative overflow-hidden bg-white border border-border/40 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${isLarge ? "md:col-span-2 md:row-span-2" : "col-span-1"}`}
    >
      <div className="relative aspect-[4/3] sm:aspect-square md:aspect-auto md:h-full overflow-hidden">
        <ProjectPlaceholder
          label={project.title}
          title={project.title}
          variant="residential"
          className="h-full w-full transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
        
        {/* 상단 배지 */}
        <div className="absolute top-6 left-6 flex gap-2">
          <Badge variant="outline" className="bg-white/10 backdrop-blur-md text-white border-white/20 py-1 px-3">
            {project.date}
          </Badge>
          <Badge variant="outline" className="bg-primary/20 backdrop-blur-md text-white border-primary/30 py-1 px-3">
            {project.projectType}
          </Badge>
        </div>

        {/* 하단 정보 */}
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white translate-y-4 group-hover:translate-y-0 transition-all duration-500">
          <div className="space-y-4">
            <h3 className={`${isLarge ? "text-3xl sm:text-4xl" : "text-xl sm:text-2xl"} font-semibold leading-tight tracking-tight`}>
              {project.title}
            </h3>
            
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/70 font-light">
              <div className="flex items-center gap-2">
                <HugeiconsIcon icon={Home01Icon} className="size-4" />
                <span>{project.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <HugeiconsIcon icon={SquareIcon} className="size-4" />
                <span>{project.area}</span>
              </div>
              <div className="flex items-center gap-2">
                <HugeiconsIcon icon={MaximizeIcon} className="size-4" />
                <span>{project.scope}</span>
              </div>
            </div>

            <div className="pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center text-xs font-bold tracking-widest uppercase text-white/90">
              VIEW CASE STUDY <HugeiconsIcon icon={ArrowRight01Icon} className="ml-2 size-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default function Page() {
  const { residentialPortfolio } = siteContent

  return (
    <div className="flex min-h-screen flex-col bg-[#FDFDFB]">
      {/* Hero Section: 타이포그래피 중심의 압도적 헤더 */}
      <section className="relative pt-32 pb-20 overflow-hidden border-b border-border/40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(18,133,131,0.05),transparent_30%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-10">
            <div className="space-y-6">
              <Badge variant="outline" className="jeyul-badge-premium py-1.5 px-4 bg-white/50 backdrop-blur-sm">
                RESIDENTIAL PORTFOLIO
              </Badge>
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-semibold tracking-[-0.06em] leading-[0.95] text-foreground">
                삶의 궤적을 <br />
                <span className="text-primary">아름다운</span> 공간으로.
              </h1>
              <p className="max-w-2xl text-lg sm:text-xl leading-relaxed text-muted-foreground font-light">
                주거 프로젝트는 기능보다 먼저 거주자의 라이프스타일과 공간의 감도를 읽어야 합니다. <br className="hidden sm:block" />
                제율디앤씨는 절제된 미학과 정밀한 시공으로 프리미엄 주거의 기준을 제시합니다.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="h-14 px-10 rounded-none text-base group">
                <Link href="/contact">
                  상담 신청하기
                  <HugeiconsIcon icon={ArrowRight01Icon} className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid: 리듬감 있는 레이아웃 */}
      <SectionShell className="py-24">
        <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div className="max-w-2xl space-y-4">
            <p className="text-xs font-bold text-primary tracking-[0.2em] uppercase">Selection of Works</p>
            <h2 className="text-4xl font-semibold tracking-tight">제율이 완성한 주거 공간</h2>
          </div>
          <div className="flex gap-4 border-b border-border/60 pb-2 overflow-x-auto whitespace-nowrap scrollbar-hide">
            <button className="text-sm font-semibold border-b-2 border-primary px-4 pb-2">ALL PROJECTS</button>
            <button className="text-sm font-medium text-muted-foreground px-4 pb-2 transition-colors hover:text-foreground">APARTMENT</button>
            <button className="text-sm font-medium text-muted-foreground px-4 pb-2 transition-colors hover:text-foreground">VILLA</button>
            <button className="text-sm font-medium text-muted-foreground px-4 pb-2 transition-colors hover:text-foreground">REMODELING</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[450px]">
          {residentialPortfolio.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </SectionShell>

      {/* Philosophy Section: 주거 철학 */}
      <section className="py-32 bg-foreground text-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
              <div className="space-y-6">
                <Badge variant="outline" className="border-white/20 text-white/60 tracking-[0.2em]">PHILOSOPHY</Badge>
                <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-tight text-white">
                  단순히 예쁜 집을 넘어, <br />
                  시간이 흐를수록 <br />
                  가치를 더하는 공간.
                </h2>
              </div>
              <div className="grid gap-8">
                <div className="flex gap-6">
                  <div className="size-12 shrink-0 flex items-center justify-center border border-white/20 text-white/80">
                    <HugeiconsIcon icon={PaintBoardIcon} className="size-6" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-medium text-white">비례와 질감의 조화</h3>
                    <p className="leading-relaxed font-light text-white/70">
                      과한 장식보다는 공간의 본질적인 비례와 소재의 질감을 살려 <br />
                      시각적 편안함과 고급스러움을 동시에 확보합니다.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="size-12 shrink-0 flex items-center justify-center border border-white/20 text-white/80">
                    <HugeiconsIcon icon={CheckmarkBadge01Icon} className="size-6" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-medium text-white">사용자 중심의 정밀한 시공</h3>
                    <p className="leading-relaxed font-light text-white/70">
                      보이지 않는 부분의 마감이 실제 거주 만족도를 결정합니다. <br />
                      제율은 1mm의 오차도 허용하지 않는 정밀 시공을 지향합니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative aspect-square">
              <ProjectPlaceholder label="Detail" title="주거 디테일 컷" variant="residential" className="h-full w-full grayscale opacity-40" />
              <div className="absolute inset-0 border border-white/10 -m-6 -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Band */}
      <section className="py-24 bg-[#F9F8F6] text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-8">
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight">
            당신의 일상이 머무는 곳, <br /> 제율과 함께 그리세요.
          </h2>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Button asChild size="lg" className="h-14 px-12 rounded-none text-base group">
              <Link href="/contact">
                상담 문의하기
                <HugeiconsIcon icon={ArrowRight01Icon} className="ml-2 size-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-14 px-12 rounded-none text-base bg-white">
              <Link href="/process">시공 공정 보기</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
