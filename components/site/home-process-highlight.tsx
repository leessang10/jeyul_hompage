import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowRight01Icon,
  ChartIcon,
  CheckmarkBadge01Icon,
  PaintBoardIcon,
  Settings01Icon,
} from "@hugeicons/core-free-icons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionShell } from "@/components/site/section-shell";
import type { ProcessStep } from "@/lib/site-content";

type HomeProcessHighlightProps = {
  steps: ProcessStep[];
};

const icons = [PaintBoardIcon, ChartIcon, CheckmarkBadge01Icon, Settings01Icon];

export function HomeProcessHighlight({ steps }: HomeProcessHighlightProps) {
  return (
    <SectionShell className="bg-[#f7f4ee] py-24 sm:py-28 lg:py-32">
      <div className="mb-16 max-w-3xl space-y-6">
        <Badge variant="outline" className="rounded-none border-border/70 bg-background/75 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.28em]">
          JEYUL ICM
        </Badge>
        <h2 className="text-4xl font-semibold tracking-[-0.05em] sm:text-5xl lg:text-6xl">
          공사는 감이 아니라
          <br />
          관리의 체계로 완성됩니다.
        </h2>
        <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
          기획, 공정, 원가, 품질, 보고를 하나의 흐름으로 연결해 프로젝트의 흔들림을 줄입니다.
        </p>
      </div>

      <div className="grid gap-px border border-border/70 bg-border/70 lg:grid-cols-4">
        {steps.slice(0, 4).map((step, index) => (
          <article key={step.title} className="bg-background px-6 py-8 sm:px-8 sm:py-10">
            <div className="mb-10 flex size-14 items-center justify-center border border-border/70 bg-secondary/70">
              <HugeiconsIcon icon={icons[index]} className="size-7 text-primary" />
            </div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">
              Step 0{index + 1}
            </p>
            <h3 className="mb-4 text-2xl font-semibold tracking-[-0.04em]">{step.title}</h3>
            <p className="text-sm leading-7 text-muted-foreground">{step.description}</p>
          </article>
        ))}
      </div>

      <div className="mt-10">
        <Button asChild variant="link" className="h-auto px-0 text-sm font-semibold uppercase tracking-[0.16em] text-foreground">
          <Link href="/process">
            제율의 방식 보기
            <HugeiconsIcon icon={ArrowRight01Icon} className="ml-2 size-4" />
          </Link>
        </Button>
      </div>
    </SectionShell>
  );
}
