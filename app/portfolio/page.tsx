import { PortfolioFilterBar } from "@/components/site/portfolio-filter-bar";
import { PortfolioGrid } from "@/components/site/portfolio-grid";
import { SectionShell } from "@/components/site/section-shell";
import { siteContent, type PortfolioType } from "@/lib/site-content";

type PortfolioPageProps = {
  searchParams?: Promise<{
    type?: string;
  }>;
};

type PortfolioFilter = "all" | PortfolioType;

function resolveFilter(type?: string): PortfolioFilter {
  if (type === "residential" || type === "commercial") {
    return type;
  }

  return "all";
}

export default async function Page({ searchParams }: PortfolioPageProps) {
  const params = (await searchParams) ?? {};
  const activeFilter = resolveFilter(params.type);
  const items =
    activeFilter === "all"
      ? siteContent.portfolioItems
      : siteContent.portfolioItems.filter((item) => item.type === activeFilter);

  const counts = {
    all: siteContent.portfolioItems.length,
    residential: siteContent.portfolioItems.filter((item) => item.type === "residential").length,
    commercial: siteContent.portfolioItems.filter((item) => item.type === "commercial").length
  };

  return (
    <div className="min-h-screen bg-[#f5f2ec]">
      <section className="border-b border-border/30">
        <div className="px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
          <h1 className="text-3xl font-semibold tracking-[-0.05em] sm:text-4xl lg:text-5xl">
            제율디앤씨 포트폴리오
          </h1>
        </div>
      </section>

      <PortfolioFilterBar activeFilter={activeFilter} counts={counts} />

      <SectionShell className="py-8 sm:py-10 lg:py-12" innerClassName="max-w-none px-4 sm:px-6 lg:px-8">
        <PortfolioGrid items={items} />
      </SectionShell>
    </div>
  );
}
