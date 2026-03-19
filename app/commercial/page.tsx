import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  ArrowRight01Icon,
  Building01Icon,
  ChartIcon,
  CheckmarkBadge01Icon,
  Location01Icon,
  StackStarIcon,
  Briefcase01Icon,
  FactoryIcon,
  OfficeIcon,
  Store01Icon,
} from "@hugeicons/core-free-icons"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ProjectPlaceholder } from "@/components/site/project-placeholder"
import { SectionShell } from "@/components/site/section-shell"
import { siteContent } from "@/lib/site-content"

/**
 * 1. 실적 그룹 카드: 기업 담당자가 보기 편한 리스트 형태
 */
function ProjectGroupSection({ group }: { group: (typeof siteContent.commercialProjectGroups)[number] }) {
  const icons = {
    "오피스": OfficeIcon,
    "공장/연구시설": FactoryIcon,
    "리테일": Store01Icon,
    "기타": Briefcase01Icon,
  }
  const Icon = icons[group.title as keyof typeof icons] ?? Briefcase01Icon

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <div className="size-10 bg-primary/10 flex items-center justify-center text-primary">
          <HugeiconsIcon icon={Icon} className="size-5" />
        </div>
        <h3 className="text-2xl font-bold tracking-tight">{group.title}</h3>
      </div>
      
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {group.projects.map((project) => (
          <div key={project.title} className="p-6 bg-white border border-border/60 hover:border-primary/40 transition-all group">
            <div className="space-y-4">
              <div className="space-y-1">
                <p className="text-xs font-bold text-primary tracking-widest uppercase">{project.client ?? "Corporate"}</p>
                <h4 className="text-lg font-semibold group-hover:text-primary transition-colors">{project.title}</h4>
              </div>
              <div className="pt-4 border-t border-border/40 flex justify-between items-end">
                <div className="space-y-1">
                   <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Location</p>
                   <p className="text-xs font-medium">{project.location}</p>
                </div>
                <Badge variant="outline" className="text-[10px] py-0 px-2 rounded-none border-border/60">REF</Badge>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

/**
 * 2. 아카이브 테이블: 방대한 데이터를 정제해서 보여주는 영역
 */
function ArchiveTable({ archive }: { archive: typeof siteContent.constructionArchive }) {
  return (
    <div className="overflow-hidden border border-border/60 bg-white">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-secondary/30 border-b border-border/60">
            <th className="p-6 text-sm font-bold tracking-wider text-muted-foreground uppercase w-24 text-center">Year</th>
            <th className="p-6 text-sm font-bold tracking-wider text-muted-foreground uppercase">Category & Project Experience</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border/40">
          {archive.map((yearData) => (
            <tr key={yearData.year} className="group hover:bg-secondary/10 transition-colors">
              <td className="p-6 align-top">
                <span className="text-2xl font-bold text-primary leading-none">{yearData.year}</span>
              </td>
              <td className="p-6 py-8">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {yearData.categories.map((cat) => (
                    <div key={cat.title} className="space-y-3">
                      <p className="text-xs font-bold tracking-widest text-foreground uppercase border-b border-primary/20 pb-2">{cat.title}</p>
                      <ul className="space-y-1.5">
                        {cat.projects.map((proj) => (
                          <li key={proj} className="text-sm text-muted-foreground leading-relaxed flex items-start gap-2">
                             <span className="size-1 bg-primary/40 mt-2 shrink-0" />
                             {proj}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function Page() {
  const { commercialProjectGroups, constructionArchive } = siteContent

  return (
    <div className="flex min-h-screen flex-col bg-[#FDFDFB]">
      {/* Hero Section: 기업형 직선적 타이포그래피 */}
      <section className="relative pt-32 pb-24 overflow-hidden border-b border-border/40">
        <div className="absolute inset-y-0 right-0 w-1/3 bg-secondary/20 -skew-x-12 translate-x-1/2" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-12">
            <div className="space-y-6">
              <Badge variant="outline" className="jeyul-badge-premium py-1.5 px-4 bg-white/50 backdrop-blur-sm">
                COMMERCIAL & INDUSTRIAL PERFORMANCE
              </Badge>
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-[-0.04em] leading-[0.95] text-foreground uppercase">
                대기업이 선택한 <br />
                <span className="text-primary">정밀한 공사관리.</span>
              </h1>
              <p className="max-w-2xl text-lg sm:text-xl leading-relaxed text-muted-foreground font-medium">
                LG, SK하이닉스, 롯데 등 국내 주요 기업의 생산시설과 오피스를 성공적으로 수행했습니다. <br className="hidden sm:block" />
                복잡한 공정과 엄격한 품질 기준이 요구되는 현장일수록 제율의 ICM 시스템은 빛을 발합니다.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="h-14 px-10 rounded-none text-base font-bold group">
                <Link href="/contact">
                  기업 프로젝트 상담신청
                  <HugeiconsIcon icon={ArrowRight01Icon} className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <div className="flex items-center gap-6 px-4">
                <div className="h-10 w-px bg-border/60" />
                <div className="space-y-1">
                   <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Main Clients</p>
                   <p className="text-sm font-bold">LG · SK · LOTTE · POSCO</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 실적 섹션 */}
      <SectionShell className="py-24 space-y-24">
        {commercialProjectGroups.map((group) => (
          <ProjectGroupSection key={group.title} group={group} />
        ))}
      </SectionShell>

      {/* Insight Banner: 신뢰 강조 */}
      <section className="py-24 bg-white border-y border-border/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
              <div className="space-y-4">
                 <HugeiconsIcon icon={ChartIcon} className="size-8 text-primary" />
                 <h4 className="text-xl font-bold">공기 준수율 100%</h4>
                 <p className="text-sm text-muted-foreground leading-relaxed">기업 운영에 차질이 없도록 철저한 공정 관리를 통해 약속된 기간 내에 반드시 완공합니다.</p>
              </div>
              <div className="space-y-4">
                 <HugeiconsIcon icon={CheckmarkBadge01Icon} className="size-8 text-primary" />
                 <h4 className="text-xl font-bold">엄격한 품질 안전</h4>
                 <p className="text-sm text-muted-foreground leading-relaxed">대기업 현장의 품질 및 안전 기준을 상회하는 자체 매뉴얼을 적용하여 리스크를 관리합니다.</p>
              </div>
              <div className="space-y-4">
                 <HugeiconsIcon icon={Location01Icon} className="size-8 text-primary" />
                 <h4 className="text-xl font-bold">전국 수행 네트워크</h4>
                 <p className="text-sm text-muted-foreground leading-relaxed">서울 본사를 중심으로 수도권 및 전국 주요 산업 단지의 프로젝트를 안정적으로 수행합니다.</p>
              </div>
              <div className="space-y-4">
                 <HugeiconsIcon icon={StackStarIcon} className="size-8 text-primary" />
                 <h4 className="text-xl font-bold">법인 기반의 신뢰</h4>
                 <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">제율디앤씨 주식회사는 실내건축공사업 면허를 보유한 정식 시공사로 안정적인 계약과 시공을 보장합니다.</p>
              </div>
           </div>
        </div>
      </section>

      {/* Archive Section: 표 형식의 데이터 정리 */}
      <SectionShell className="py-24 bg-[#F9F9F9]">
        <div className="mb-16 space-y-4">
          <p className="text-xs font-bold text-primary tracking-[0.2em] uppercase">Construction Archive</p>
          <h2 className="text-4xl font-bold tracking-tight">전체 시공 실적 아카이브</h2>
          <p className="text-muted-foreground max-w-2xl">
            2021년부터 현재까지 수행한 모든 프로젝트 이력을 투명하게 공개합니다. <br />
            오피스부터 리테일, 주거 시설까지 폭넓은 스펙트럼의 전문성을 확인해 보세요.
          </p>
        </div>
        
        <ArchiveTable archive={constructionArchive} />
      </SectionShell>

      {/* CTA Section */}
      <section className="py-24 bg-foreground text-background text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-8">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight uppercase text-white">
            Your Trusted Construction Partner.
          </h2>
          <p className="text-lg font-medium max-w-xl mx-auto text-white/70">
            제율디앤씨는 발주처의 비즈니스 가치를 최우선으로 생각합니다. <br />
            전문적인 기술 검토가 필요하신가요?
          </p>
          <Button asChild size="lg" className="h-14 px-12 rounded-none text-base font-bold bg-white text-foreground hover:bg-white/90 group">
            <Link href="/contact">
              전문가 상담 시작하기
              <HugeiconsIcon icon={ArrowRight01Icon} className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
