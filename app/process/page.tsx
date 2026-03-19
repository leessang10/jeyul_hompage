import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  ArrowRight01Icon,
  ChartIcon,
  CheckmarkBadge01Icon,
  Layers01Icon,
  Money01Icon,
  PaintBoardIcon,
  Building01Icon,
  LicenseIcon,
  Settings01Icon,
  File01Icon,
  Search01Icon,
  Shield01Icon,
} from "@hugeicons/core-free-icons"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PageHero } from "@/components/site/page-hero"
import { ProjectPlaceholder } from "@/components/site/project-placeholder"
import { SectionShell } from "@/components/site/section-shell"
import { siteContent } from "@/lib/site-content"

const stepIconMap: Record<string, typeof ChartIcon> = {
  "기획 및 설계": PaintBoardIcon,
  "자재/인력/장비 통합관리": Layers01Icon,
  "공정 관리": ChartIcon,
  "원가 및 예산 관리": Money01Icon,
  "품질 및 안전 관리": Shield01Icon,
  "커뮤니케이션/보고 체계": Building01Icon,
  "디지털화": Settings01Icon,
}

function ProcessStepCard({
  index,
  title,
  description,
}: {
  index: number
  title: string
  description: string
}) {
  const Icon = stepIconMap[title] ?? ChartIcon

  return (
    <div className="relative group">
      {/* 연결 선 (마지막 아이템 제외) */}
      <div className="absolute left-6 top-16 bottom-[-2rem] w-px bg-border group-last:hidden md:hidden" />
      
      <div className="relative flex gap-6 md:block md:space-y-6 h-full p-6 bg-white border border-border/60 hover:border-primary/40 hover:shadow-lg transition-all duration-300">
        <div className="flex-none">
          <div className="size-12 rounded-full bg-secondary/50 flex items-center justify-center border border-border text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
            <HugeiconsIcon icon={Icon} className="size-6" />
          </div>
        </div>
        
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold text-primary/60 tracking-widest uppercase">Step {String(index + 1).padStart(2, "0")}</span>
            <div className="h-px flex-1 bg-border/60" />
          </div>
          <h3 className="text-xl font-semibold leading-tight">{title}</h3>
          <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
        </div>
      </div>
    </div>
  )
}

function SystemFeature({
  icon,
  title,
  desc
}: {
  icon: typeof ChartIcon
  title: string
  desc: string
}) {
  return (
    <div className="flex gap-4 items-start p-4 border border-transparent hover:border-border/60 hover:bg-white transition-colors">
      <div className="mt-1 size-8 flex items-center justify-center rounded bg-secondary/40 text-primary">
        <HugeiconsIcon icon={icon} className="size-4" />
      </div>
      <div className="space-y-1">
        <p className="font-semibold">{title}</p>
        <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
      </div>
    </div>
  )
}

export default function Page() {
  const { brand, processSteps } = siteContent

  return (
    <div className="flex min-h-screen flex-col bg-[#F9F9F9]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-white border-b border-border/40">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-8">
            <Badge variant="outline" className="jeyul-badge-premium py-1.5 px-4 bg-white/50 backdrop-blur-sm">
              INTEGRATED CONSTRUCTION MANAGEMENT
            </Badge>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-[-0.04em] leading-[1.1] text-foreground">
              설계와 현장의 간극을 <br />
              <span className="text-primary">시스템</span>으로 채웁니다.
            </h1>
            <p className="max-w-2xl text-lg sm:text-xl leading-relaxed text-muted-foreground font-light">
              제율디앤씨의 ICM(통합 공사관리)은 기획, 설계, 시공, 사후관리까지 <br className="hidden sm:block" />
              모든 단계를 하나의 데이터 흐름으로 연결하여 오차 없는 완성을 약속합니다.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild size="lg" className="h-14 px-10 rounded-none text-base group">
                <Link href="/contact">
                  프로젝트 상담
                  <HugeiconsIcon icon={ArrowRight01Icon} className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-14 px-10 rounded-none text-base bg-white/60">
                <Link href="/commercial">기업 실적 확인</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Process Flow */}
      <SectionShell className="py-24">
        <div className="mb-16 max-w-3xl space-y-4">
          <p className="text-xs font-bold text-primary tracking-[0.2em] uppercase">Workflow</p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            끊김 없는 하나의 프로세스
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            단계별로 분절된 공사가 아니라, 처음부터 끝까지 맥락이 이어지는 통합 관리를 수행합니다. <br />
            이것이 제율이 약속하는 품질의 비결입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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

      {/* System Features Grid */}
      <section className="py-24 bg-white border-y border-border/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="outline" className="text-primary border-primary/20">Why ICM?</Badge>
                <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
                  체계적인 관리가 <br /> 만드는 차이
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  현장의 불확실성을 통제하고, 정해진 예산과 기간 내에 최상의 품질을 만들어내는 것은 <br />
                  결국 '관리의 힘'에 달려 있습니다.
                </p>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-x-4 gap-y-6">
                <SystemFeature 
                  icon={Search01Icon}
                  title="리스크 사전 차단"
                  desc="설계 도면 검토 단계부터 시공상의 문제를 미리 예측하고 수정합니다."
                />
                <SystemFeature 
                  icon={Money01Icon}
                  title="투명한 원가 관리"
                  desc="불필요한 자재 로스를 줄이고 예산 변동을 실시간으로 추적합니다."
                />
                <SystemFeature 
                  icon={CheckmarkBadge01Icon}
                  title="균일한 시공 품질"
                  desc="작업자의 숙련도에 의존하지 않고 표준화된 매뉴얼로 품질을 통제합니다."
                />
                <SystemFeature 
                  icon={File01Icon}
                  title="데이터 기반 보고"
                  desc="감이나 추측이 아닌, 수치와 기록으로 현황을 투명하게 공유합니다."
                />
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] w-full bg-secondary/20 relative overflow-hidden p-8 border border-border">
                {/* 추상적인 다이어그램 표현 */}
                <div className="absolute inset-0 bg-[linear-gradient(45deg,#00000005_1px,transparent_1px)] bg-[size:1rem_1rem]" />
                <div className="relative h-full flex flex-col justify-between border-l-2 border-primary/20 pl-8 py-4">
                   <div className="space-y-2">
                      <span className="text-xs font-mono text-primary/60">PHASE 01</span>
                      <p className="text-xl font-medium">PLANNING & DESIGN</p>
                      <div className="w-12 h-1 bg-primary" />
                   </div>
                   <div className="space-y-2 opacity-60">
                      <span className="text-xs font-mono text-foreground/40">PHASE 02</span>
                      <p className="text-xl font-medium">CONSTRUCTION & QA</p>
                      <div className="w-12 h-1 bg-border" />
                   </div>
                   <div className="space-y-2 opacity-40">
                      <span className="text-xs font-mono text-foreground/40">PHASE 03</span>
                      <p className="text-xl font-medium">MAINTENANCE</p>
                      <div className="w-12 h-1 bg-border" />
                   </div>
                </div>
                
                {/* 우측 하단 장식 */}
                <div className="absolute bottom-8 right-8 text-right space-y-1">
                   <p className="text-4xl font-bold text-primary/20">100%</p>
                   <p className="text-xs font-bold tracking-widest uppercase text-muted-foreground">Completion Rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-foreground text-background text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-8">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
            복잡한 현장일수록 <br /> 시스템이 필요합니다.
          </h2>
          <p className="text-lg font-light text-white/70">
            지금 계획 중인 프로젝트의 규모와 예산을 알려주시면, <br />
            가장 효율적인 관리 방안을 제안해 드립니다.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Button asChild size="lg" className="h-14 px-12 rounded-none text-base bg-white text-foreground hover:bg-white/90">
              <Link href="/contact">
                상담 신청하기
                <HugeiconsIcon icon={ArrowRight01Icon} className="ml-2 size-5 transition-transform" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-14 px-12 rounded-none text-base border-white/20 bg-white text-foreground hover:bg-white/90 hover:text-foreground">
              <Link href="/residential">포트폴리오 보기</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
