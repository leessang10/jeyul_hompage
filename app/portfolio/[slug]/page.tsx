import Link from "next/link";
import { notFound } from "next/navigation";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowLeft01Icon,
  ArrowRight01Icon,
  Briefcase01Icon,
  Calendar03Icon,
  Home01Icon,
  Location01Icon,
} from "@hugeicons/core-free-icons";
import { ProjectPlaceholder } from "@/components/site/project-placeholder";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionShell } from "@/components/site/section-shell";
import { siteContent } from "@/lib/site-content";

type PortfolioDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return siteContent.portfolioItems.map((item) => ({
    slug: item.slug
  }));
}

export default async function Page({ params }: PortfolioDetailPageProps) {
  const { slug } = await params;
  const item = siteContent.portfolioItems.find((portfolioItem) => portfolioItem.slug === slug);

  if (!item) {
    notFound();
  }

  const relatedItems = siteContent.portfolioItems
    .filter((portfolioItem) => portfolioItem.type === item.type && portfolioItem.slug !== item.slug)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-[#f5f2ec]">
      <SectionShell className="pb-12 pt-16 sm:pb-14 sm:pt-20 lg:pb-16 lg:pt-24">
        <div className="space-y-8">
          <Link
            href={item.type === "residential" ? "/portfolio?type=residential" : "/portfolio?type=commercial"}
            className="inline-flex items-center text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
          >
            <HugeiconsIcon icon={ArrowLeft01Icon} className="mr-2 size-4" />
            포트폴리오로 돌아가기
          </Link>

          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div className="space-y-5">
              <div className="flex flex-wrap gap-2">
                <Badge className="rounded-none bg-primary px-3 py-1 text-white">
                  {item.type === "residential" ? "Residential" : "Commercial"}
                </Badge>
                <Badge variant="outline" className="rounded-none border-border/60 bg-white/80 px-3 py-1">
                  {item.category}
                </Badge>
              </div>
              <h1 className="text-4xl font-semibold tracking-[-0.05em] sm:text-5xl lg:text-6xl">
                {item.title}
              </h1>
              <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                {item.summary}
              </p>
            </div>

            <div className="grid gap-4 border border-border/60 bg-white/88 p-6 sm:grid-cols-2">
              <div className="space-y-2">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">
                  Location
                </p>
                <p className="inline-flex items-center gap-2 text-sm font-medium text-foreground">
                  <HugeiconsIcon icon={Location01Icon} className="size-4 text-primary" />
                  {item.location}
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">
                  Primary
                </p>
                <p className="inline-flex items-center gap-2 text-sm font-medium text-foreground">
                  <HugeiconsIcon
                    icon={item.type === "residential" ? Home01Icon : Briefcase01Icon}
                    className="size-4 text-primary"
                  />
                  {item.metaPrimary}
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">
                  Secondary
                </p>
                <p className="inline-flex items-center gap-2 text-sm font-medium text-foreground">
                  <HugeiconsIcon icon={Calendar03Icon} className="size-4 text-primary" />
                  {item.metaSecondary}
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">
                  Project Type
                </p>
                <p className="text-sm font-medium text-foreground">{item.category}</p>
              </div>
            </div>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="py-0">
        <div className="overflow-hidden border border-border/50 bg-white/92">
          <ProjectPlaceholder
            label={item.type === "residential" ? "Residential Project" : "Commercial Project"}
            title={item.title}
            meta={`${item.metaPrimary} · ${item.metaSecondary}`}
            variant={item.variant}
            decorative
            className="min-h-[420px] border-0 sm:min-h-[560px]"
          />
        </div>
      </SectionShell>

      <SectionShell className="py-16 sm:py-20 lg:py-24">
        <div className="grid gap-8 border border-border/60 bg-white/88 p-8 lg:grid-cols-[0.8fr_1.2fr] lg:p-10">
          <div className="space-y-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-primary">
              Project Summary
            </p>
            <h2 className="text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
              프로젝트 핵심 정보
            </h2>
          </div>
          <div className="space-y-4 text-base leading-7 text-muted-foreground">
            <p>
              제율은 프로젝트의 성격에 맞춰 설계, 공정, 품질, 커뮤니케이션의 흐름을 정리하고 실행
              안정성을 높입니다.
            </p>
            <p>
              실제 이미지 자산이 준비되면 이 화면은 대표 공간 컷, 세부 디테일, 주요 공정 정보 중심으로
              확장할 수 있습니다.
            </p>
          </div>
        </div>
      </SectionShell>

      {relatedItems.length > 0 ? (
        <SectionShell className="pt-0 pb-24 sm:pb-28 lg:pb-32">
          <div className="space-y-8">
            <div className="space-y-3">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-primary">
                Related Projects
              </p>
              <h2 className="text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                같은 유형의 다른 프로젝트
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {relatedItems.map((relatedItem) => (
                <Link
                  key={relatedItem.slug}
                  href={`/portfolio/${relatedItem.slug}`}
                  className="group border border-border/60 bg-white/90 transition-all hover:-translate-y-1 hover:border-primary/30"
                >
                  <ProjectPlaceholder
                    label={relatedItem.category}
                    title={relatedItem.title}
                    meta={`${relatedItem.metaPrimary} · ${relatedItem.metaSecondary}`}
                    variant={relatedItem.variant}
                    decorative
                    className="min-h-[320px] border-0"
                  />
                </Link>
              ))}
            </div>
          </div>
        </SectionShell>
      ) : null}

      <section className="bg-foreground py-20 text-center text-background sm:py-24">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
            유사한 프로젝트를 계획 중이라면
            <br />
            제율과 먼저 이야기해 보세요.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/72 sm:text-lg sm:leading-8">
            프로젝트의 성격과 범위를 알려주시면 실행 가능한 방향부터 제안합니다.
          </p>
          <div className="mt-10">
            <Button asChild size="lg" variant="secondary" className="h-14 rounded-none px-8 text-sm font-semibold uppercase tracking-[0.16em]">
              <Link href="/contact">
                프로젝트 문의하기
                <HugeiconsIcon icon={ArrowRight01Icon} className="ml-2 size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
