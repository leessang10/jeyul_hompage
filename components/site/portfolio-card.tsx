import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowRight01Icon,
  Briefcase01Icon,
  Calendar03Icon,
  Home01Icon,
  Location01Icon,
} from "@hugeicons/core-free-icons";
import { Badge } from "@/components/ui/badge";
import { ProjectPlaceholder } from "@/components/site/project-placeholder";
import type { PortfolioItem } from "@/lib/site-content";

type PortfolioCardProps = {
  item: PortfolioItem;
};

export function PortfolioCard({ item }: PortfolioCardProps) {
  const typeLabel = item.type === "residential" ? "Residential" : "Commercial";
  const metaIcon = item.type === "residential" ? Home01Icon : Briefcase01Icon;

  return (
    <Link
      href={`/portfolio/${item.slug}`}
      className="group relative overflow-hidden border border-border/50 bg-white/92 transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_24px_44px_-26px_rgba(15,23,42,0.28)]"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <ProjectPlaceholder
          label={typeLabel}
          title={item.title}
          meta={`${item.metaPrimary} · ${item.metaSecondary}`}
          variant={item.variant}
          decorative
          className="h-full w-full border-0 transition-transform duration-700 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/86 via-black/20 to-transparent" />

        <div className="absolute left-5 top-5 flex flex-wrap gap-2">
          <Badge
            variant="outline"
            className="rounded-none border-white/18 bg-white/10 px-3 py-1 text-white backdrop-blur-md"
          >
            {item.category}
          </Badge>
          {item.date ? (
            <Badge
              variant="outline"
              className="rounded-none border-white/12 bg-black/20 px-3 py-1 text-white/84 backdrop-blur-md"
            >
              {item.date}
            </Badge>
          ) : null}
        </div>

        <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-7">
          <h2 className="text-2xl font-semibold tracking-[-0.05em] sm:text-[1.9rem]">
            {item.title}
          </h2>
          <p className="mt-3 text-sm leading-7 text-white/74">{item.summary}</p>
          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-xs uppercase tracking-[0.16em] text-white/72">
            <span className="inline-flex items-center gap-2">
              <HugeiconsIcon icon={Location01Icon} className="size-4" />
              {item.location}
            </span>
            <span className="inline-flex items-center gap-2">
              <HugeiconsIcon icon={metaIcon} className="size-4" />
              {item.metaPrimary}
            </span>
            <span className="inline-flex items-center gap-2">
              <HugeiconsIcon icon={Calendar03Icon} className="size-4" />
              {item.metaSecondary}
            </span>
          </div>
          <div className="mt-5 inline-flex items-center text-xs font-semibold uppercase tracking-[0.18em] text-white/88">
            프로젝트 보기
            <HugeiconsIcon
              icon={ArrowRight01Icon}
              className="ml-2 size-4 transition-transform group-hover:translate-x-1"
            />
          </div>
        </div>
      </div>
    </Link>
  );
}
