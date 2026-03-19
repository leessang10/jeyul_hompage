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
  Settings01Icon,
  Briefcase01Icon,
  Home01Icon,
} from "@hugeicons/core-free-icons"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ProjectPlaceholder } from "@/components/site/project-placeholder"
import { SectionShell } from "@/components/site/section-shell"
import { siteContent } from "@/lib/site-content"

/**
 * 1. Hero 섹션: 브랜드의 정체성과 압도적인 첫인상을 결정하는 영역
 */
function HomeHero() {
  const { hero, residentialPortfolio } = siteContent
  const featured = residentialPortfolio[0]

  return (
    <section className="relative min-h-[85vh] overflow-hidden flex items-center">
      {/* 배경 장식: 웜 화이트와 청록색 그라데이션 */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(18,133,131,0.12),transparent_40%),linear-gradient(180deg,rgba(250,249,246,1),rgba(239,242,238,0.8))]"
      />
      
      <div className="relative mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
          <div className="space-y-10">
            <div className="space-y-6">
              <Badge variant="outline" className="jeyul-badge-premium py-1.5 px-4 bg-white/50 backdrop-blur-sm">
                {hero.eyebrow}
              </Badge>
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-semibold tracking-[-0.06em] leading-[0.95] text-foreground">
                공간의 가치를 <br />
                <span className="text-primary">정밀하게</span> 설계합니다.
              </h1>
              <p className="max-w-xl text-lg sm:text-xl leading-relaxed text-muted-foreground font-light">
                제율디앤씨는 프리미엄 주거 인테리어와 기업의 전략적 오피스를 위한 <br className="hidden sm:block" />
                ICM(통합 공사관리) 기반의 시공 솔루션을 제공합니다.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild size="lg" className="h-14 px-10 rounded-none text-base group">
                <Link href="/contact">
                  프로젝트 문의하기
                  <HugeiconsIcon icon={ArrowRight01Icon} className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-14 px-10 rounded-none text-base bg-white/40 backdrop-blur-sm">
                <Link href="/residential">포트폴리오 둘러보기</Link>
              </Button>
            </div>

            <div className="flex items-center gap-12 pt-8 border-t border-border/40 max-w-md">
              <div>
                <p className="text-2xl font-bold tracking-tight">100+</p>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Projects</p>
              </div>
              <div className="w-px h-8 bg-border/60" />
              <div>
                <p className="text-2xl font-bold tracking-tight">ICM</p>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Management</p>
              </div>
              <div className="w-px h-8 bg-border/60" />
              <div>
                <p className="text-2xl font-bold tracking-tight">Premium</p>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Quality</p>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="jeyul-content-frame aspect-[4/5] relative overflow-hidden group">
              <ProjectPlaceholder
                label="Featured Project"
                title={featured?.title ?? "Signature Project"}
                meta={featured?.location ?? "Seoul"}
                variant="residential"
                className="h-full w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-8 left-8 right-8 text-white translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-sm font-medium mb-1">{featured?.date}</p>
                <p className="text-2xl font-semibold">{featured?.title}</p>
              </div>
            </div>
            {/* 장식용 요소 */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-primary/20 -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 border border-primary/20 -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}

/**
 * 2. Split Entry 섹션: 주거와 기업 프로젝트로의 명확한 진입로
 */
function SplitEntry() {
  return (
    <section className="py-0">
      <div className="grid md:grid-cols-2">
        <Link 
          href="/residential" 
          className="group relative overflow-hidden bg-[#F2F1ED] py-32 px-8 flex flex-col items-center justify-center text-center transition-all duration-700 hover:bg-[#EAE8E2]"
        >
          <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-700">
            <ProjectPlaceholder
              label="Residential"
              title="고급 주거 인테리어"
              variant="residential"
              className="h-full w-full grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
            />
          </div>
          <div className="relative z-10 space-y-6">
            <HugeiconsIcon icon={Home01Icon} className="size-12 mx-auto text-primary/80" />
            <div className="space-y-2">
              <h2 className="text-4xl font-semibold tracking-tight">고급 주거 인테리어</h2>
              <p className="text-muted-foreground max-w-sm mx-auto">일상의 품격을 높이는 하이엔드 주거 공간 <br /> 개인의 라이프스타일을 담은 맞춤형 시공</p>
            </div>
            <div className="inline-flex items-center text-sm font-semibold tracking-widest uppercase text-foreground/80 group-hover:text-primary transition-colors">
              VIEW RESIDENTIAL <HugeiconsIcon icon={ArrowRight01Icon} className="ml-2 size-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </Link>

        <Link 
          href="/commercial" 
          className="group relative overflow-hidden bg-[#E9EBE8] py-32 px-8 flex flex-col items-center justify-center text-center transition-all duration-700 hover:bg-[#DEE1DD]"
        >
          <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-700">
            <ProjectPlaceholder
              label="Commercial"
              title="기업 · 오피스 · 공공"
              variant="commercial"
              className="h-full w-full grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
            />
          </div>
          <div className="relative z-10 space-y-6">
            <HugeiconsIcon icon={Briefcase01Icon} className="size-12 mx-auto text-primary/80" />
            <div className="space-y-2">
              <h2 className="text-4xl font-semibold tracking-tight">기업 · 오피스 · 공공</h2>
              <p className="text-muted-foreground max-w-sm mx-auto">대기업 실적으로 검증된 공사관리 역량 <br /> 복합 시설과 오피스를 위한 최적의 파트너</p>
            </div>
            <div className="inline-flex items-center text-sm font-semibold tracking-widest uppercase text-foreground/80 group-hover:text-primary transition-colors">
              VIEW COMMERCIAL <HugeiconsIcon icon={ArrowRight01Icon} className="ml-2 size-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </Link>
      </div>
    </section>
  )
}

/**
 * 3. ICM Process 섹션: 제율만의 차별화된 관리 시스템
 */
function ProcessHighlights() {
  const { processSteps } = siteContent
  const steps = processSteps.slice(0, 4)
  const icons = [PaintBoardIcon, ChartIcon, CheckmarkBadge01Icon, Settings01Icon]

  return (
    <SectionShell className="py-32 bg-white">
      <div className="max-w-4xl mx-auto text-center mb-20 space-y-6">
        <Badge variant="outline" className="jeyul-badge-premium">JEYUL ICM SYSTEM</Badge>
        <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight">
          결과는 완벽하게, <br className="sm:hidden" /> 과정은 투명하게 관리합니다.
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
          제율디앤씨의 통합 공사관리(ICM)는 기획부터 사후 관리까지 <br className="hidden sm:block" />
          각 단계의 위험 요소를 사전에 차단하고 품질을 극대화합니다.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border/60 border border-border/60">
        {steps.map((step, index) => (
          <div key={step.title} className="bg-white p-10 space-y-8 transition-colors hover:bg-secondary/20">
            <div className="size-14 flex items-center justify-center bg-secondary/40 text-primary">
              <HugeiconsIcon icon={icons[index]} className="size-7" />
            </div>
            <div className="space-y-4">
              <p className="text-xs font-bold text-primary/60 tracking-[0.2em] uppercase">Step 0{index + 1}</p>
              <h3 className="text-xl font-semibold">{step.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground font-light">{step.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <Button asChild variant="link" className="text-foreground group">
          <Link href="/process">
            제율의 공사관리 상세 방식 보기
            <HugeiconsIcon icon={ArrowRight01Icon} className="ml-2 size-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </div>
    </SectionShell>
  )
}

/**
 * 4. Trust 섹션: 실적과 면허로 증명된 신뢰
 */
function TrustSection() {
  const { brand } = siteContent

  return (
    <SectionShell className="py-32 bg-[#F9F8F6]">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-10">
          <div className="space-y-6">
            <Badge variant="outline" className="jeyul-badge-premium">TRUST & RELIABILITY</Badge>
            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight">
              검증된 실적이 <br /> 신뢰의 근거가 됩니다.
            </h2>
            <p className="text-lg text-muted-foreground font-light leading-relaxed">
              실내건축공사업 면허를 보유한 정식 시공사로서, <br className="hidden sm:block" />
              LG, SK하이닉스, 롯데 등 국내 주요 기업의 프로젝트를 성공적으로 수행해 왔습니다.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            <div className="space-y-2 border-l-2 border-primary/20 pl-6 py-2">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Certified License</p>
              <p className="text-lg font-medium">{brand.license}</p>
            </div>
            <div className="space-y-2 border-l-2 border-primary/20 pl-6 py-2">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Corporation</p>
              <p className="text-lg font-medium">제율디앤씨 주식회사</p>
            </div>
          </div>

          <Button asChild variant="outline" className="h-14 px-10 rounded-none bg-white">
            <Link href="/about">회사 소개서 다운로드</Link>
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-4 pt-12">
            <div className="jeyul-content-frame aspect-square">
              <ProjectPlaceholder label="Commercial" title="기업 프로젝트" variant="commercial" className="h-full w-full" />
            </div>
            <div className="jeyul-content-frame aspect-[4/3]">
              <ProjectPlaceholder label="Detail" title="공정 디테일" variant="process" className="h-full w-full" />
            </div>
          </div>
          <div className="space-y-4">
            <div className="jeyul-content-frame aspect-[4/3]">
              <ProjectPlaceholder label="Residential" title="주거 프로젝트" variant="residential" className="h-full w-full" />
            </div>
            <div className="jeyul-content-frame aspect-square">
              <ProjectPlaceholder label="Office" title="오피스 공간" variant="commercial" className="h-full w-full" />
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  )
}

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <HomeHero />
      <SplitEntry />
      <ProcessHighlights />
      <TrustSection />
      
      {/* 마지막 상담 유도 섹션 */}
      <section className="py-24 bg-foreground text-background text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-8">
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white">
            여러분의 프로젝트를 <br className="sm:hidden" /> 제율과 함께 시작하세요.
          </h2>
          <p className="text-lg font-light max-w-xl mx-auto text-white/70">
            공간의 목적과 예산에 최적화된 시공 계획을 제안해 드립니다. <br />
            지금 바로 전문 상담을 신청해 보세요.
          </p>
          <Button asChild size="lg" variant="secondary" className="h-14 px-12 rounded-none text-base group">
            <Link href="/contact">
              상담 신청하기
              <HugeiconsIcon icon={ArrowRight01Icon} className="ml-2 size-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
