import Link from "next/link";
import { siteContent } from "@/lib/site-content";

export function SiteFooter() {
  const { brand, footer } = siteContent;

  return (
    <footer className="border-t border-border/70 bg-muted/20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_1.2fr_1fr] lg:px-8">
        <div className="space-y-4">
          <p className="text-sm font-semibold tracking-[0.28em] text-foreground">JEYUL D&C</p>
          <p className="max-w-sm text-sm leading-6 text-muted-foreground">
            {brand.coreKeyword} 기반으로 주거와 기업 공간을 함께 설계하고 시공합니다.
          </p>
        </div>

        <div className="space-y-5 border-y border-border/60 py-6 text-center lg:border-x lg:border-y-0 lg:px-8 lg:py-0">
          <p className="text-sm uppercase tracking-[0.28em] text-muted-foreground">
            {footer.supportLine}
          </p>
          <div className="space-y-2">
            <p className="text-2xl font-semibold tracking-[0.16em] text-foreground">
              {footer.brandLine}
            </p>
            <p className="text-sm text-muted-foreground">{brand.address}</p>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm">
              <a className="text-foreground transition-colors hover:text-muted-foreground" href={`tel:${brand.phone.replace(/-/g, "")}`}>
                {brand.phone}
              </a>
              <a className="text-foreground transition-colors hover:text-muted-foreground" href={`mailto:${brand.email}`}>
                {brand.email}
              </a>
              <a className="text-foreground transition-colors hover:text-muted-foreground" href={brand.officialHomepageUrl} target="_blank" rel="noreferrer">
                {brand.officialHomepageUrl}
              </a>
            </div>
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-1">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              Menu
            </p>
            <ul className="space-y-2 text-sm">
              {footer.links.map((item) => (
                <li key={item.href}>
                  <Link className="text-foreground transition-colors hover:text-muted-foreground" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              Contact
            </p>
            <ul className="space-y-2 text-sm">
              {footer.legalLinks.map((item) => (
                <li key={item.href}>
                  <Link className="text-foreground transition-colors hover:text-muted-foreground" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
