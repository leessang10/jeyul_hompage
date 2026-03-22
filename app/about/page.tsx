import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowRight01Icon,
  Building01Icon,
  CheckmarkBadge01Icon,
  LicenseIcon,
  PaintBoardIcon,
  UserGroupIcon,
} from "@hugeicons/core-free-icons";
import { AmbientSpaceScene } from "@/components/site/ambient-space-scene";
import { PageHero } from "@/components/site/page-hero";
import { SectionShell } from "@/components/site/section-shell";
import { Button } from "@/components/ui/button";
import { siteContent } from "@/lib/site-content";

function InfoTable({ items }: { items: { label: string; value: string }[] }) {
  return (
    <div className="overflow-hidden border border-border/60 bg-white/92">
      {items.map((item, index) => (
        <div
          key={item.label}
          className={`grid grid-cols-[132px_1fr] border-b border-border/40 last:border-b-0 ${index % 2 === 0 ? "bg-white" : "bg-secondary/10"}`}
        >
          <div className="flex items-center border-r border-border/40 bg-secondary/20 p-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            {item.label}
          </div>
          <div className="flex items-center p-5 text-sm font-medium text-foreground">{item.value}</div>
        </div>
      ))}
    </div>
  );
}

function HistoryTimeline({
  history,
}: {
  history: typeof siteContent.companyProfile.history;
}) {
  return (
    <div className="relative space-y-10 pl-8 before:absolute before:bottom-2 before:left-0 before:top-2 before:w-px before:bg-primary/20">
      {history.map((item) => (
        <div key={`${item.year}-${item.event}`} className="relative">
          <div className="absolute -left-[35px] top-1.5 size-4 border-2 border-primary bg-white" />
          <span className="text-2xl font-semibold text-primary">{item.year}</span>
          <p className="mt-2 text-base leading-7 text-muted-foreground">{item.event}</p>
        </div>
      ))}
    </div>
  );
}

export default function Page() {
  const { brand, companyProfile, aboutFacts, organization } = siteContent;

  return (
    <div className="flex min-h-screen flex-col bg-[#f5f2ec]">
      <PageHero
        eyebrow="Company Overview"
        title={
          <>
            신뢰를 짓는 회사,
            <br />
            제율디앤씨입니다.
          </>
        }
        description={
          <>
            제율디앤씨는 전문 인력과 체계적인 ICM 운영을 바탕으로 고급 주거와 기업 공간을 안정적으로
            완성하는 시공 파트너입니다.
          </>
        }
        actions={
          <Button asChild size="lg" className="h-14 rounded-none px-8 text-sm font-semibold uppercase tracking-[0.16em]">
            <Link href="/contact">
              프로젝트 문의하기
              <HugeiconsIcon icon={ArrowRight01Icon} className="ml-2 size-4" />
            </Link>
          </Button>
        }
        aside={<AmbientSpaceScene variant="commercial" />}
      />

      <SectionShell className="py-24 sm:py-28 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-primary">Profile</p>
              <h2 className="text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">회사 개요</h2>
            </div>
            <InfoTable items={aboutFacts} />
            <div className="border-l-4 border-primary bg-white/88 p-6">
              <div className="mb-3 flex items-center gap-2 text-primary">
                <HugeiconsIcon icon={LicenseIcon} className="size-5" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.28em]">Professional License</span>
              </div>
              <p className="text-xl font-semibold tracking-[-0.03em]">{brand.license}</p>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                정식 등록과 면허를 기반으로 안정적인 계약과 시공을 수행합니다.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-primary">History</p>
              <h2 className="text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">성장의 기록</h2>
            </div>
            <HistoryTimeline history={companyProfile.history} />
          </div>
        </div>
      </SectionShell>

      <section className="border-y border-border/40 bg-white/88 py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-primary">Organization</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
              전문가로 구성된 조직
            </h2>
          </div>

          <div className="mx-auto max-w-md border-2 border-primary bg-background p-8 text-center">
            <HugeiconsIcon icon={UserGroupIcon} className="mx-auto mb-4 size-7 text-primary" />
            <h3 className="text-2xl font-semibold tracking-[-0.04em]">{organization.ceoTitle}</h3>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">프로젝트 총괄 및 전략적 의사결정</p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[organization.support, ...organization.departments].map((department, index) => (
              <article key={department.title} className="border border-border/60 bg-background p-7 text-center">
                <div className="mb-5 flex justify-center">
                  <div className="flex size-12 items-center justify-center border border-border/60 bg-secondary/30 text-primary">
                    <HugeiconsIcon
                      icon={index === 0 ? CheckmarkBadge01Icon : index === 1 ? PaintBoardIcon : Building01Icon}
                      className="size-6"
                    />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold tracking-[-0.04em]">{department.title}</h3>
                <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-primary">
                  {department.subtitle}
                </p>
                <ul className="mt-6 space-y-2">
                  {department.responsibilities.map((item) => (
                    <li key={item} className="text-sm leading-7 text-muted-foreground">
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-foreground py-24 text-center text-background sm:py-28">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
            신뢰를 기반으로,
            <br />
            오래 남는 가치를 만듭니다.
          </h2>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" variant="secondary" className="h-14 rounded-none px-8 text-sm font-semibold uppercase tracking-[0.16em]">
              <Link href="/contact">
                상담 신청하기
                <HugeiconsIcon icon={ArrowRight01Icon} className="ml-2 size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
