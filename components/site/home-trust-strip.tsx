import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon, LicenseIcon, StackStarIcon } from "@hugeicons/core-free-icons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionShell } from "@/components/site/section-shell";
import type { BrandInfo, HomeTrustPoint } from "@/lib/site-content";

type HomeTrustStripProps = {
  brand: BrandInfo;
  points: HomeTrustPoint[];
};

export function HomeTrustStrip({ brand, points }: HomeTrustStripProps) {
  return (
    <SectionShell className="bg-white py-24 sm:py-28 lg:py-32">
      <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <div className="space-y-6">
          <Badge variant="outline" className="rounded-none border-border/70 bg-background px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.28em]">
            Why JEYUL
          </Badge>
          <h2 className="text-4xl font-semibold tracking-[-0.05em] sm:text-5xl lg:text-6xl">
            정제된 디자인과 안정적인 시공,
            <br />
            둘 다 놓치지 않습니다.
          </h2>
          <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            제율은 주거와 기업 프로젝트 모두에서 디자인 감도와 실행 안정성을 함께 관리합니다.
          </p>

          <div className="grid gap-4 pt-4 sm:grid-cols-2">
            <div className="border border-border/70 bg-secondary/30 p-5">
              <HugeiconsIcon icon={LicenseIcon} className="mb-4 size-7 text-primary" />
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">License</p>
              <p className="text-lg font-semibold tracking-[-0.03em]">{brand.license}</p>
            </div>
            <div className="border border-border/70 bg-secondary/30 p-5">
              <HugeiconsIcon icon={StackStarIcon} className="mb-4 size-7 text-primary" />
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">Scope</p>
              <p className="text-lg font-semibold tracking-[-0.03em]">{brand.businessScope}</p>
            </div>
          </div>
        </div>

        <div className="grid gap-px border border-border/70 bg-border/70 sm:grid-cols-2">
          {points.map((point) => (
            <article key={point.title} className="bg-background p-6 sm:p-7">
              <h3 className="mb-3 text-xl font-semibold tracking-[-0.04em]">{point.title}</h3>
              <p className="text-sm leading-7 text-muted-foreground">{point.description}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <Button asChild variant="link" className="h-auto px-0 text-sm font-semibold uppercase tracking-[0.16em] text-foreground">
          <Link href="/about">
            회사소개 보기
            <HugeiconsIcon icon={ArrowRight01Icon} className="ml-2 size-4" />
          </Link>
        </Button>
      </div>
    </SectionShell>
  );
}
