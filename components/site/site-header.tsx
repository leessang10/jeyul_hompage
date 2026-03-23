"use client";

import { useEffect, useState, type ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
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
  transparent = false,
}: {
  href: string;
  children: ReactNode;
  pathname: string;
  mobile?: boolean;
  transparent?: boolean;
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
        transparent && !mobile && "drop-shadow-[0_1px_8px_rgba(0,0,0,0.28)]",
        active
          ? transparent
            ? "text-white"
            : "text-primary"
          : transparent
            ? "text-white/72 hover:text-white"
            : "text-muted-foreground hover:text-foreground"
      )}
    >
      {children}
      {!mobile && active && (
        <span
          className={cn(
            "absolute -bottom-1 left-2 right-2 h-0.5 animate-in fade-in slide-in-from-left-1 duration-500",
            transparent ? "bg-white" : "bg-primary"
          )}
        />
      )}
    </Link>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const transparent = pathname === "/" && !scrolled;

  useEffect(() => {
    const syncScrollState = () => {
      setScrolled(window.scrollY > 72);
    };

    syncScrollState();
    window.addEventListener("scroll", syncScrollState, { passive: true });

    return () => window.removeEventListener("scroll", syncScrollState);
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-[background-color,border-color,backdrop-filter,box-shadow] duration-300",
        transparent
          ? "border-b border-transparent bg-transparent shadow-none backdrop-blur-0"
          : "border-b border-border/40 bg-white/78 shadow-[0_14px_40px_-28px_rgba(17,24,39,0.45)] backdrop-blur-xl"
      )}
    >
      <div className="flex h-24 w-full items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        {/* 로고 영역: 정교한 타이포그래피 */}
        <div className="flex items-center gap-6">
          <Link href="/" className="group flex items-center gap-4">
            <div
              className={cn(
                "flex size-12 items-center justify-center border-2 text-xl font-bold transition-all",
                transparent
                  ? "border-white/28 bg-white/6 text-white drop-shadow-[0_1px_10px_rgba(0,0,0,0.25)] group-hover:bg-white/12"
                  : "border-primary bg-primary text-white group-hover:bg-transparent group-hover:text-primary"
              )}
            >
              J
            </div>
            <div className="hidden sm:block">
              <span
                className={cn(
                  "block text-lg font-bold tracking-[0.15em] leading-none transition-colors",
                  transparent ? "text-white" : "text-foreground"
                )}
              >
                JEYUL D&C
              </span>
            </div>
          </Link>
        </div>

        {/* 메인 네비게이션 */}
        <nav className="hidden items-center gap-10 lg:flex" aria-label="주요 메뉴">
          {siteContent.navigation.map((item) => (
            <NavLink key={item.href} href={item.href} pathname={pathname} transparent={transparent}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* 액션 버튼 영역 */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-3">
            <Button
              asChild
              variant="outline"
              className={cn(
                "h-10 rounded-none px-6 text-xs font-bold uppercase tracking-widest transition-all",
                transparent
                  ? "border-white/16 bg-black/16 text-white shadow-[0_10px_20px_-16px_rgba(0,0,0,0.7)] hover:bg-black/24 hover:text-white"
                  : "border-border/60 hover:bg-secondary/40"
              )}
            >
              <a href={siteContent.brand.officialHomepageUrl} target="_blank" rel="noreferrer">
                OFFICIAL
              </a>
            </Button>
            <Button
              asChild
              className={cn(
                "h-10 rounded-none px-6 text-xs font-bold uppercase tracking-widest transition-all hover:translate-y-[-2px] hover:shadow-lg",
                transparent && "bg-white text-foreground shadow-[0_12px_28px_-18px_rgba(0,0,0,0.75)] hover:bg-white/92"
              )}
            >
              <Link href="/contact">INQUIRY</Link>
            </Button>
          </div>

          {/* 모바일 메뉴 (Details/Summary 스타일 유지하되 디자인 고도화) */}
          <details className="relative md:hidden group">
            <summary
              className={cn(
                "list-none cursor-pointer flex items-center justify-center size-10 outline-none transition",
                transparent
                  ? "border border-white/16 bg-black/16 hover:bg-black/24"
                  : "border border-border/60 bg-white hover:bg-secondary/40"
              )}
            >
              <div className="space-y-1">
                <div className={cn("w-4 h-0.5", transparent ? "bg-white" : "bg-foreground")} />
                <div className={cn("w-4 h-0.5", transparent ? "bg-white" : "bg-foreground")} />
                <div className={cn("w-4 h-0.5", transparent ? "bg-white" : "bg-foreground")} />
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
                    transparent={false}
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
