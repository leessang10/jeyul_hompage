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
} from "@hugeicons/core-free-icons"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PageHero } from "@/components/site/page-hero"
import { ProjectPlaceholder } from "@/components/site/project-placeholder"
import { SectionShell } from "@/components/site/section-shell"
import { siteContent } from "@/lib/site-content"

function FactCard({
  label,
  value,
}: {
  label: string
  value: string
}) {
  return (
    <Card className="jeyul-surface-panel">
      <CardHeader className="space-y-2">
        <p className="jeyul-editorial-kicker">{label}</p>
        <CardTitle className="text-lg">{value}</CardTitle>
      </CardHeader>
    </Card>
  )
}

function TimelineItem({
  year,
  event,
}: {
  year: string
  event: string
}) {
  return (
    <div className="grid gap-3 border-b border-border/60 pb-4 last:border-0 last:pb-0 sm:grid-cols-[120px_1fr]">
      <div className="flex items-center gap-2">
        <HugeiconsIcon icon={Clock01Icon} className="size-4 text-primary" />
        <p className="text-sm font-medium text-foreground">{year}</p>
      </div>
      <p className="text-sm leading-6 text-muted-foreground">{event}</p>
    </div>
  )
}

export default function Page() {
  const { brand, companyProfile, aboutFacts, organization } = siteContent

  return (
    <div className="flex min-h-screen flex-col">
      <PageHero
        eyebrow="About JEYUL"
        title="제율은 주거와 기업 공간을 책임 있게 완성하는 실내건축 시공사입니다."
        description="면허, 연혁, 조직, 회사 기본 정보를 통해 제율의 운영 기반을 확인하실 수 있습니다."
        actions={
          <>
            <Button asChild size="lg" className="h-11 px-6">
              <Link href="/contact">
                문의하기
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
            <p className="jeyul-editorial-kicker">Company Snapshot</p>
            <p className="text-lg font-semibold text-foreground">{brand.koreanName}</p>
            <p className="text-sm leading-6 text-muted-foreground">
              {brand.businessType} / {brand.businessScope}
            </p>
            <div className="grid gap-2 text-sm text-foreground">
              <div className="flex items-center gap-2">
                <HugeiconsIcon icon={LicenseIcon} className="size-4 text-primary" />
                <span>{brand.license}</span>
              </div>
              <div className="flex items-center gap-2">
                <HugeiconsIcon icon={Location01Icon} className="size-4 text-primary" />
                <span>{brand.address}</span>
              </div>
            </div>
          </div>
        }
      />

      <SectionShell className="jeyul-section-rhythm">
        <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
          <ProjectPlaceholder
            label="Company Image"
            title="회사 대표 이미지 영역"
            meta="사옥, 현장, 대표 프로젝트 사진이 들어갈 자리"
            variant="company"
            className="lg:col-span-2 min-h-[220px]"
          />
          <Card className="jeyul-content-frame">
            <CardHeader className="space-y-3">
              <p className="jeyul-editorial-kicker">Company facts</p>
              <CardTitle className="text-2xl">{brand.koreanName}</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4 sm:grid-cols-2">
              {aboutFacts.map((fact) => (
                <FactCard key={fact.label} label={fact.label} value={fact.value} />
              ))}
            </CardContent>
          </Card>

          <Card className="jeyul-surface-panel">
            <CardHeader className="space-y-3">
              <p className="jeyul-editorial-kicker">What we do</p>
              <CardTitle className="text-2xl">주거와 기업 공간을 책임 있게 시공합니다.</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm leading-6 text-muted-foreground">
                제율은 주거와 기업 프로젝트를 함께 수행하며, 설계부터 시공, 품질 관리까지 흐름이 끊기지 않도록 살핍니다.
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="flex items-start gap-3">
                  <HugeiconsIcon icon={Building01Icon} className="mt-0.5 size-4 text-primary" />
                  <p className="text-sm text-muted-foreground">주거와 기업 공간을 모두 다루는 시공 역량</p>
                </div>
                <div className="flex items-start gap-3">
                  <HugeiconsIcon icon={CheckmarkBadge01Icon} className="mt-0.5 size-4 text-primary" />
                  <p className="text-sm text-muted-foreground">면허와 이력으로 확인되는 신뢰 기반</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </SectionShell>

      <SectionShell className="jeyul-section-rhythm">
        <div className="mb-8 max-w-2xl space-y-3">
          <p className="jeyul-editorial-kicker">History</p>
          <h2 className="jeyul-editorial-section-title">연혁</h2>
          <p className="jeyul-editorial-section-copy">
            제율이 걸어온 주요 이력을 시간순으로 정리했습니다.
          </p>
        </div>

        <Card className="jeyul-content-frame">
          <CardContent className="space-y-4 p-6 sm:p-8">
            {companyProfile.history.map((item) => (
              <TimelineItem key={`${item.year}-${item.event}`} year={item.year} event={item.event} />
            ))}
          </CardContent>
        </Card>
      </SectionShell>

      <SectionShell className="jeyul-section-rhythm">
        <div className="mb-8 max-w-2xl space-y-3">
          <p className="jeyul-editorial-kicker">Organization</p>
          <h2 className="jeyul-editorial-section-title">제율은 설계, 공무, 공사, 경영지원 조직으로 운영됩니다.</h2>
          <p className="jeyul-editorial-section-copy">
            프로젝트 진행에 필요한 설계, 견적, 외주 관리, 공사 관리, 품질관리 및 A/S 업무를 조직별로 수행합니다.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
          <Card className="jeyul-content-frame">
            <CardHeader className="space-y-3">
              <p className="jeyul-editorial-kicker">Leadership</p>
              <CardTitle className="text-2xl">{organization.ceoTitle}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <HugeiconsIcon icon={HierarchyIcon} className="mt-0.5 size-4 text-primary" />
                <p className="text-sm leading-6 text-muted-foreground">
                  대표이사를 중심으로 경영지원팀과 실무 조직이 연결되어 프로젝트를 운영합니다.
                </p>
              </div>
              <div className="rounded-none border border-border/70 bg-background/70 p-4">
                <p className="text-sm font-medium text-foreground">{organization.support.title}</p>
                <p className="text-xs text-muted-foreground">{organization.support.subtitle}</p>
                <div className="mt-3 grid gap-2">
                  {organization.support.responsibilities.map((item) => (
                    <p key={item} className="text-sm text-muted-foreground">{item}</p>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-4 md:grid-cols-3">
            {organization.departments.map((department) => (
              <Card key={department.title} className="jeyul-surface-panel">
                <CardHeader className="space-y-3">
                  <HugeiconsIcon icon={Building01Icon} className="size-5 text-primary" />
                  <CardTitle className="text-xl">{department.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{department.subtitle}</p>
                </CardHeader>
                <CardContent className="grid gap-2">
                  {department.responsibilities.map((item) => (
                    <p key={item} className="text-sm leading-6 text-muted-foreground">{item}</p>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell className="pt-0 pb-20">
        <div className="jeyul-content-frame grid gap-6 px-6 py-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-10">
          <div className="space-y-3">
            <p className="jeyul-editorial-kicker">Next step</p>
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-foreground sm:text-4xl">
              프로젝트 내용은 포트폴리오와 문의 페이지에서 이어서 확인하실 수 있습니다.
            </h2>
            <p className="max-w-2xl text-base leading-7 text-muted-foreground">
              회사 기본 정보는 이 페이지에서 확인하시고, 상세 프로젝트와 상담은 별도 페이지에서 살펴보실 수 있습니다.
            </p>
          </div>
          <div className="flex flex-col justify-between gap-4 lg:items-end">
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="h-11 px-6">
                <Link href="/residential">
                  주거 포트폴리오
                  <HugeiconsIcon icon={ArrowRight01Icon} className="ml-2 size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-11 px-6">
                <Link href="/contact">문의하기</Link>
              </Button>
            </div>
            <div className="flex flex-wrap gap-3">
              <Badge variant="outline" className="border-border/70">사업자등록번호: {brand.registrationNumber}</Badge>
              <Badge variant="outline" className="border-border/70">공식 홈페이지: {brand.officialHomepageUrl}</Badge>
            </div>
          </div>
        </div>
      </SectionShell>
    </div>
  )
}
