import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  ArrowRight01Icon,
  Building01Icon,
  CheckmarkBadge01Icon,
  Clock01Icon,
  HierarchyIcon,
  Location01Icon,
  LicenseIcon,
  PaintBoardIcon,
  UserGroupIcon,
  File01Icon,
} from "@hugeicons/core-free-icons"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ProjectPlaceholder } from "@/components/site/project-placeholder"
import { SectionShell } from "@/components/site/section-shell"
import { siteContent } from "@/lib/site-content"

/**
 * 1. 회사 개요 테이블: 공신력 있는 데이터 표현
 */
function InfoTable({ items }: { items: { label: string; value: string }[] }) {
  return (
    <div className="border border-border/60 bg-white">
      {items.map((item, idx) => (
        <div key={item.label} className={`grid grid-cols-[140px_1fr] border-b last:border-0 border-border/40 ${idx % 2 === 0 ? "bg-white" : "bg-secondary/10"}`}>
          <div className="p-5 text-sm font-bold text-muted-foreground bg-secondary/20 border-r border-border/40 uppercase tracking-wider flex items-center">
            {item.label}
          </div>
          <div className="p-5 text-sm font-semibold text-foreground flex items-center">
            {item.value}
          </div>
        </div>
      ))}
    </div>
  )
}

/**
 * 2. 미니멀 타임라인: 역사를 한눈에
 */
function HistoryTimeline({ history }: { history: typeof siteContent.companyProfile.history }) {
  return (
    <div className="relative pl-8 space-y-12 before:absolute before:left-0 before:top-2 before:bottom-2 before:w-px before:bg-primary/20">
      {history.map((item) => (
        <div key={`${item.year}-${item.event}`} className="relative group">
          <div className="absolute -left-[35.5px] top-1.5 size-4 bg-white border-2 border-primary group-hover:bg-primary transition-colors" />
          <div className="space-y-2">
            <span className="text-2xl font-bold text-primary leading-none">{item.year}</span>
            <p className="text-base text-muted-foreground leading-relaxed font-medium">{item.event}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default function Page() {
  const { brand, companyProfile, aboutFacts, organization } = siteContent

  return (
    <div className="flex min-h-screen flex-col bg-[#FDFDFB]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden border-b border-border/40 bg-white">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_70%_30%,rgba(18,133,131,0.03),transparent_50%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-10">
            <div className="space-y-6">
              <Badge variant="outline" className="jeyul-badge-premium py-1.5 px-4 bg-white/50 backdrop-blur-sm">
                COMPANY OVERVIEW
              </Badge>
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-[-0.04em] leading-[0.95] text-foreground uppercase">
                신뢰를 짓고 <br />
                가치를 설계합니다.
              </h1>
              <p className="max-w-2xl text-lg sm:text-xl leading-relaxed text-muted-foreground font-medium">
                제율디앤씨 주식회사는 전문성을 갖춘 인력과 체계적인 ICM 시스템을 바탕으로 <br className="hidden sm:block" />
                고급 주거와 기업 공간의 새로운 표준을 만들어가는 프리미엄 시공 파트너입니다.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild size="lg" className="h-14 px-10 rounded-none text-base font-bold group">
                <Link href="/contact">
                  프로젝트 문의하기
                  <HugeiconsIcon icon={ArrowRight01Icon} className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-14 px-10 rounded-none text-base font-bold bg-white/60">
                <Link href="/process">시공 공정 확인</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 회사 정보 섹션 */}
      <SectionShell className="py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-10">
            <div className="space-y-4">
               <p className="text-xs font-bold text-primary tracking-[0.2em] uppercase">Profile</p>
               <h2 className="text-4xl font-bold tracking-tight">회사 개요</h2>
            </div>
            <InfoTable items={aboutFacts} />
            <div className="p-6 bg-secondary/30 border-l-4 border-primary space-y-3">
              <div className="flex items-center gap-2 text-primary">
                <HugeiconsIcon icon={LicenseIcon} className="size-5" />
                <span className="text-sm font-bold uppercase tracking-wider">Professional License</span>
              </div>
              <p className="text-lg font-bold">{brand.license}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">제율디앤씨는 국토교통부 정식 등록 면허를 보유한 신뢰할 수 있는 법인 시공사입니다.</p>
            </div>
          </div>
          <div className="relative">
            <div className="jeyul-content-frame aspect-[4/5] relative overflow-hidden">
               <ProjectPlaceholder label="Company" title="회사 대표 이미지 영역" variant="company" className="h-full w-full grayscale opacity-60" />
               <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
            </div>
            {/* 장식 요소 */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border border-primary/20 -z-10" />
          </div>
        </div>
      </SectionShell>

      {/* 연혁 섹션 */}
      <section className="py-32 bg-white border-y border-border/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
           <div className="grid lg:grid-cols-[1fr_2fr] gap-20">
              <div className="space-y-6">
                 <p className="text-xs font-bold text-primary tracking-[0.2em] uppercase">History</p>
                 <h2 className="text-4xl font-bold tracking-tight leading-tight">지속 가능한 성장의 기록</h2>
                 <p className="text-muted-foreground leading-relaxed font-medium">
                    제율은 법인 전환 이후 매년 성장하며 <br className="hidden sm:block" />
                    더 넓은 분야에서 전문성을 인정받고 있습니다.
                 </p>
              </div>
              <HistoryTimeline history={companyProfile.history} />
           </div>
        </div>
      </section>

      {/* 조직도 섹션 */}
      <SectionShell className="py-24">
        <div className="mb-16 space-y-4 text-center">
          <p className="text-xs font-bold text-primary tracking-[0.2em] uppercase">Organization</p>
          <h2 className="text-4xl font-bold tracking-tight">전문가로 구성된 체계적인 조직</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-medium">
            설계부터 시공, 사후관리까지 유기적으로 연결된 전문가 조직이 <br />
            귀하의 프로젝트를 완벽하게 서포트합니다.
          </p>
        </div>

        <div className="space-y-8">
          {/* 경영진 */}
          <div className="max-w-md mx-auto p-8 border-2 border-primary text-center space-y-4 bg-white relative">
             <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white px-4 text-xs font-bold text-primary tracking-widest uppercase">Leadership</div>
             <HugeiconsIcon icon={UserGroupIcon} className="size-8 mx-auto text-primary" />
             <h3 className="text-2xl font-bold">{organization.ceoTitle}</h3>
             <div className="h-px w-12 bg-border mx-auto" />
             <p className="text-sm text-muted-foreground font-medium">프로젝트 총괄 및 전략적 의사결정</p>
          </div>

          {/* 연결선 표현 */}
          <div className="flex flex-col items-center">
             <div className="w-px h-12 bg-border" />
             <div className="w-full max-w-4xl h-px bg-border" />
             <div className="flex justify-between w-full max-w-4xl">
                <div className="w-px h-8 bg-border" />
                <div className="w-px h-8 bg-border" />
                <div className="w-px h-8 bg-border" />
             </div>
          </div>

          {/* 부서 그리드 */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {organization.departments.map((dept) => (
              <div key={dept.title} className="p-8 bg-white border border-border/60 hover:border-primary/40 transition-all text-center space-y-6">
                <div className="size-12 bg-secondary/50 flex items-center justify-center mx-auto text-primary">
                  <HugeiconsIcon icon={dept.title === "설계 / 공무팀" ? PaintBoardIcon : dept.title === "공사 / 관리팀" ? Building01Icon : CheckmarkBadge01Icon} className="size-6" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl font-bold">{dept.title}</h4>
                  <p className="text-xs text-primary font-bold uppercase tracking-widest">{dept.subtitle}</p>
                </div>
                <div className="h-px w-8 bg-border/60 mx-auto" />
                <ul className="space-y-2">
                  {dept.responsibilities.map((res) => (
                    <li key={res} className="text-sm text-muted-foreground font-medium">{res}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </SectionShell>

      {/* CTA Section */}
      <section className="py-24 bg-foreground text-background text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-8">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight uppercase text-white">
            Built on Trust, Designed for Value.
          </h2>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Button asChild size="lg" className="h-14 px-12 rounded-none text-base font-bold bg-white text-foreground hover:bg-white/90 group">
              <Link href="/contact">
                상담 신청하기
                <HugeiconsIcon icon={ArrowRight01Icon} className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-14 px-12 rounded-none text-base font-bold border-white/20 bg-white text-foreground hover:bg-white/90 hover:text-foreground">
              <Link href="/residential">포트폴리오 보기</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
