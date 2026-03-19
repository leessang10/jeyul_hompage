"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { siteContent } from "@/lib/site-content";

function isActivePath(pathname: string, href: string) {
  return pathname === href || (href !== "/" && pathname.startsWith(href));
}

function NavLink({
  href,
  children,
  pathname,
  mobile = false,
}: {
  href: string;
  children: ReactNode;
  pathname: string;
  mobile?: boolean;
}) {
  const active = isActivePath(pathname, href);

  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={cn(
        "transition-colors",
        mobile
          ? "block rounded-none border border-transparent px-3 py-2 text-sm"
          : "text-sm font-medium",
        active
          ? "text-foreground"
          : "text-muted-foreground hover:text-foreground"
      )}
    >
      {children}
    </Link>
  );
}

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/75">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <Link href="/" className="group flex items-center gap-3">
            <span className="flex size-10 items-center justify-center border border-border/70 bg-secondary/70 text-sm font-semibold tracking-[0.3em] text-foreground">
              J
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-semibold tracking-[0.28em] text-foreground">
                JEYUL D&C
              </span>
              <span className="block text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                Integrated Construction Management
              </span>
            </span>
          </Link>
          <Badge variant="outline" className="hidden border-border/70 text-[10px] tracking-[0.22em] uppercase md:inline-flex">
            Since 2002
          </Badge>
        </div>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="주요 메뉴">
          {siteContent.navigation.map((item) => (
            <NavLink key={item.href} href={item.href} pathname={pathname}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button asChild size="sm" variant="outline">
            <a href={siteContent.brand.officialHomepageUrl} target="_blank" rel="noreferrer">
              공식 홈페이지
            </a>
          </Button>
          <Button asChild size="sm">
            <Link href="/contact">프로젝트 문의</Link>
          </Button>
        </div>

        <details className="relative md:hidden">
          <summary className="list-none cursor-pointer rounded-none border border-border bg-background px-3 py-2 text-sm font-medium text-foreground outline-none transition focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background">
            메뉴
          </summary>
          <div className="absolute right-0 top-full mt-3 w-[min(20rem,calc(100vw-2rem))] border border-border bg-background p-4 shadow-lg">
            <div className="mb-4 border-b border-border pb-4">
              <p className="text-sm font-semibold tracking-[0.2em] text-foreground">JEYUL D&C</p>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Integrated Construction Management
              </p>
            </div>
            <div className="grid gap-1">
              {siteContent.navigation.map((item) => (
                <NavLink
                  key={item.href}
                  href={item.href}
                  pathname={pathname}
                  mobile
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
            <div className="mt-4 grid gap-2">
              <Button asChild size="sm" variant="outline" className="justify-start">
                <a href={siteContent.brand.officialHomepageUrl} target="_blank" rel="noreferrer">
                  공식 홈페이지
                </a>
              </Button>
              <Button asChild size="sm" className="justify-start">
                <Link href="/contact">프로젝트 문의</Link>
              </Button>
            </div>
          </div>
        </details>
      </div>
    </header>
  );
}
