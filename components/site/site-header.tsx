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
        "relative shrink-0 whitespace-nowrap transition-all duration-300 uppercase tracking-widest text-[11px] font-bold",
        mobile
          ? "block border-b border-border/40 px-4 py-5 text-sm"
          : "px-2 py-1",
        active
          ? "text-primary"
          : "text-muted-foreground hover:text-foreground"
      )}
    >
      {children}
      {!mobile && active && (
        <span className="absolute -bottom-1 left-2 right-2 h-0.5 bg-primary animate-in fade-in slide-in-from-left-1 duration-500" />
      )}
    </Link>
  );
}

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        {/* 로고 영역: 정교한 타이포그래피 */}
        <div className="flex items-center gap-6">
          <Link href="/" className="group flex items-center gap-4">
            <div className="flex size-12 items-center justify-center border-2 border-primary bg-primary text-white text-xl font-bold transition-all group-hover:bg-transparent group-hover:text-primary">
              J
            </div>
            <div className="hidden sm:block">
              <span className="block text-lg font-bold tracking-[0.15em] text-foreground leading-none">
                JEYUL D&C
              </span>
              <span className="mt-1 block text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground/60">
                Integrated Construction Management
              </span>
            </div>
          </Link>
        </div>

        {/* 메인 네비게이션 */}
        <nav className="hidden items-center gap-10 lg:flex" aria-label="주요 메뉴">
          {siteContent.navigation.map((item) => (
            <NavLink key={item.href} href={item.href} pathname={pathname}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* 액션 버튼 영역 */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-3">
            <Button asChild variant="outline" className="h-10 rounded-none px-6 text-xs font-bold uppercase tracking-widest border-border/60 hover:bg-secondary/40 transition-all">
              <a href={siteContent.brand.officialHomepageUrl} target="_blank" rel="noreferrer">
                OFFICIAL
              </a>
            </Button>
            <Button asChild className="h-10 rounded-none px-6 text-xs font-bold uppercase tracking-widest transition-all hover:translate-y-[-2px] hover:shadow-lg">
              <Link href="/contact">INQUIRY</Link>
            </Button>
          </div>

          {/* 모바일 메뉴 (Details/Summary 스타일 유지하되 디자인 고도화) */}
          <details className="relative md:hidden group">
            <summary className="list-none cursor-pointer flex items-center justify-center size-10 border border-border/60 bg-white outline-none transition hover:bg-secondary/40">
              <div className="space-y-1">
                <div className="w-4 h-0.5 bg-foreground" />
                <div className="w-4 h-0.5 bg-foreground" />
                <div className="w-4 h-0.5 bg-foreground" />
              </div>
            </summary>
            <div className="absolute right-0 top-full mt-4 w-[85vw] max-w-sm border border-border/60 bg-white p-0 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-300">
              <div className="p-8 border-b border-border/40 bg-secondary/10">
                <p className="text-sm font-bold tracking-[0.2em] text-foreground uppercase">JEYUL D&C</p>
                <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.2em] text-muted-foreground/60">
                  Management Solution
                </p>
              </div>
              <div className="flex flex-col">
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
              <div className="p-6 grid gap-3">
                <Button asChild variant="outline" className="h-12 rounded-none justify-center text-xs font-bold tracking-widest uppercase border-border/60">
                  <a href={siteContent.brand.officialHomepageUrl} target="_blank" rel="noreferrer">
                    OFFICIAL SITE
                  </a>
                </Button>
                <Button asChild className="h-12 rounded-none justify-center text-xs font-bold tracking-widest uppercase">
                  <Link href="/contact">START PROJECT</Link>
                </Button>
              </div>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
