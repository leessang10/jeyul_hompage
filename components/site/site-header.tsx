"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { siteContent } from "@/lib/site-content";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const transparent = pathname === "/" && !scrolled;

  useEffect(() => {
    const syncScrollState = () => {
      setScrolled(window.scrollY > 72);
    };

    syncScrollState();
    window.addEventListener("scroll", syncScrollState, { passive: true });

    return () => window.removeEventListener("scroll", syncScrollState);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-[background-color,border-color,backdrop-filter,box-shadow] duration-300",
          transparent
            ? "border-b border-transparent bg-transparent shadow-none backdrop-blur-0"
            : "border-b border-border/40 bg-white/78 shadow-[0_14px_40px_-28px_rgba(17,24,39,0.45)] backdrop-blur-xl"
        )}
      >
        <div className="flex h-24 w-full items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
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
                    "block text-lg leading-none font-bold tracking-[0.15em] transition-colors",
                    transparent ? "text-white" : "text-foreground"
                  )}
                >
                  JEYUL D&C
                </span>
              </div>
            </Link>
          </div>

          <button
            type="button"
            aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className={cn(
              "group flex size-12 items-center justify-center border transition-all duration-300",
              transparent
                ? "border-white/18 bg-black/14 text-white hover:bg-black/24"
                : "border-border/60 bg-white/84 text-foreground hover:bg-secondary/50"
            )}
          >
            <span className="grid grid-cols-3 gap-1.5">
              {Array.from({ length: 9 }).map((_, index) => (
                <span
                  key={index}
                  className={cn(
                    "size-1.5 transition-transform duration-300",
                    transparent ? "bg-white" : "bg-current",
                    menuOpen && "scale-75"
                  )}
                />
              ))}
            </span>
          </button>
        </div>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-[70] transition-all duration-300",
          menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        )}
        aria-hidden={!menuOpen}
      >
        <div
          className="absolute inset-0 bg-black/28 backdrop-blur-md"
          onClick={() => setMenuOpen(false)}
        />
        <aside
          className={cn(
            "absolute inset-y-0 right-0 flex w-full flex-col overflow-y-auto border-l border-black/8 bg-[linear-gradient(180deg,rgba(250,248,243,0.98),rgba(247,243,236,0.98))] text-foreground shadow-2xl transition-transform duration-300",
            menuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex min-h-24 items-center justify-between border-b border-black/8 px-4 sm:px-6 lg:px-8">
            <div>
              <p className="text-lg leading-none font-bold uppercase tracking-[0.15em] text-foreground">
                JEYUL D&C
              </p>
            </div>
            <button
              type="button"
              aria-label="메뉴 닫기"
              onClick={() => setMenuOpen(false)}
              className="flex size-12 items-center justify-center border border-black/10 bg-white/70 text-foreground transition hover:bg-white"
            >
              <span className="relative block size-5">
                <span className="absolute left-1/2 top-1/2 h-px w-5 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-current" />
                <span className="absolute left-1/2 top-1/2 h-px w-5 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-current" />
              </span>
            </button>
          </div>

          <div className="flex flex-1 flex-col px-4 py-8 sm:px-6 sm:py-10 lg:px-10 lg:py-12">
            <div className="grid flex-1 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(340px,0.95fr)] lg:gap-14">
              <div className="flex flex-col justify-start">
                <div className="grid gap-1">
                  <Link
                    href="/about"
                    onClick={() => setMenuOpen(false)}
                    className="w-fit text-[clamp(3.1rem,8vw,5.9rem)] leading-[0.9] font-semibold tracking-[-0.07em] text-foreground transition hover:text-foreground/72"
                  >
                    About
                  </Link>
                  <Link
                    href="/process"
                    onClick={() => setMenuOpen(false)}
                    className="w-fit text-[clamp(3.1rem,8vw,5.9rem)] leading-[0.9] font-semibold tracking-[-0.07em] text-foreground transition hover:text-foreground/72"
                  >
                    Services
                  </Link>
                </div>
              </div>

              <nav className="grid content-start gap-x-10 gap-y-7 sm:grid-cols-2" aria-label="패널 메뉴">
                <Link
                  href="/portfolio"
                  onClick={() => setMenuOpen(false)}
                  className="group"
                >
                  <span className="block text-[clamp(2rem,4vw,3.25rem)] leading-none font-semibold tracking-[-0.06em] text-foreground transition group-hover:text-foreground/72">
                    Projects
                  </span>
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="group"
                >
                  <span className="block text-[clamp(2rem,4vw,3.25rem)] leading-none font-semibold tracking-[-0.06em] text-foreground transition group-hover:text-foreground/72">
                    Proposals
                  </span>
                </Link>
                <Link
                  href="/about"
                  onClick={() => setMenuOpen(false)}
                  className="group"
                >
                  <span className="block text-[clamp(2rem,4vw,3.25rem)] leading-none font-semibold tracking-[-0.06em] text-foreground transition group-hover:text-foreground/72">
                    Press
                  </span>
                </Link>
                <Link
                  href="/about"
                  onClick={() => setMenuOpen(false)}
                  className="group"
                >
                  <span className="block text-[clamp(2rem,4vw,3.25rem)] leading-none font-semibold tracking-[-0.06em] text-foreground transition group-hover:text-foreground/72">
                    CV
                  </span>
                </Link>
              </nav>
            </div>

            <div className="mt-10 border-t border-black/10 pt-6">
              <div className="grid gap-x-10 gap-y-4 sm:grid-cols-2">
                <a
                  href={siteContent.brand.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-fit text-[clamp(1.8rem,3vw,2.6rem)] leading-none font-semibold tracking-[-0.05em] text-foreground transition hover:text-foreground/72"
                >
                  Instagram
                </a>
                <a
                  href={siteContent.brand.youtubeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-fit text-[clamp(1.8rem,3vw,2.6rem)] leading-none font-semibold tracking-[-0.05em] text-foreground transition hover:text-foreground/72"
                >
                  Youtube
                </a>
                <a
                  href={siteContent.brand.blogUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-fit text-[clamp(1.8rem,3vw,2.6rem)] leading-none font-semibold tracking-[-0.05em] text-foreground transition hover:text-foreground/72"
                >
                  Blog
                </a>
                <a
                  href={siteContent.brand.pinterestUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-fit text-[clamp(1.8rem,3vw,2.6rem)] leading-none font-semibold tracking-[-0.05em] text-foreground transition hover:text-foreground/72"
                >
                  Pinterest
                </a>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
