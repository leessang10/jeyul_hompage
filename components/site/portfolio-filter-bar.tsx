import Link from "next/link";
import { cn } from "@/lib/utils";

type PortfolioFilter = "all" | "residential" | "commercial";

type PortfolioFilterBarProps = {
  activeFilter: PortfolioFilter;
  counts: {
    all: number;
    residential: number;
    commercial: number;
  };
};

const filterItems: Array<{
  key: PortfolioFilter;
  label: string;
  href: string;
}> = [
  { key: "all", label: "전체", href: "/portfolio" },
  { key: "residential", label: "주거", href: "/portfolio?type=residential" },
  { key: "commercial", label: "기업·오피스", href: "/portfolio?type=commercial" }
];

export function PortfolioFilterBar({
  activeFilter,
  counts
}: PortfolioFilterBarProps) {
  return (
    <div className="sticky top-24 z-30 border-y border-border/50 bg-[#f5f2ec]/92 backdrop-blur-xl">
      <div className="flex gap-2 overflow-x-auto px-4 py-3 sm:px-6 lg:px-8">
        {filterItems.map((item) => (
          <Link
            key={item.key}
            href={item.href}
            className={cn(
              "shrink-0 rounded-none border px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] transition-colors",
              activeFilter === item.key
                ? "border-primary bg-primary text-white"
                : "border-border/70 bg-white/80 text-muted-foreground hover:border-primary/30 hover:text-foreground"
            )}
          >
            {item.label} {counts[item.key]}
          </Link>
        ))}
      </div>
    </div>
  );
}
