import { PortfolioCard } from "@/components/site/portfolio-card";
import type { PortfolioItem } from "@/lib/site-content";

type PortfolioGridProps = {
  items: PortfolioItem[];
};

export function PortfolioGrid({ items }: PortfolioGridProps) {
  if (items.length === 0) {
    return (
      <div className="border border-dashed border-border/70 bg-white/70 px-6 py-16 text-center">
        <p className="text-sm font-medium text-muted-foreground">
          현재 조건에 맞는 프로젝트가 없습니다.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => (
        <PortfolioCard key={item.slug} item={item} />
      ))}
    </div>
  );
}
