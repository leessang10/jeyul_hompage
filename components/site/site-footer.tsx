"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteContent } from "@/lib/site-content";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  CallIcon,
  Mail01Icon,
  Location01Icon,
  GlobeIcon,
  InstagramIcon,
} from "@hugeicons/core-free-icons";

export function SiteFooter() {
  const pathname = usePathname();
  const { brand, footer } = siteContent;

  if (pathname === "/contact" || pathname === "/terms") {
    return null;
  }

  return (
    <footer className="border-t border-white/6 bg-[#121417] text-white">
      <div className="mx-auto max-w-7xl px-4 pb-12 pt-20 sm:px-6 lg:px-8 lg:pb-14 lg:pt-24">
        <div className="grid gap-16 border-b border-white/8 pb-16 lg:grid-cols-[1.2fr_0.8fr_0.9fr]">
          <div className="space-y-8">
            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="flex size-11 items-center justify-center border border-white/16 bg-white/6 text-lg font-bold tracking-[0.1em]">
                  J
                </div>
                <div>
                  <p className="text-2xl font-semibold tracking-[0.18em] uppercase text-white">JEYUL D&amp;C</p>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/36">
                    {brand.englishName}
                  </p>
                </div>
              </div>
              <p className="max-w-xl text-base leading-8 text-white/58">
                {brand.coreKeyword} 기반으로 주거와 기업 공간의 가치를 정밀하게 설계하고,
                공정과 품질을 안정적으로 관리하는 시공 파트너입니다.
              </p>
            </div>

            <div className="flex gap-3">
              <a
                href={brand.officialHomepageUrl}
                target="_blank"
                rel="noreferrer"
                className="flex size-11 items-center justify-center border border-white/12 bg-white/4 text-white/70 transition-colors hover:border-primary/36 hover:text-white"
              >
                <HugeiconsIcon icon={GlobeIcon} className="size-5" />
              </a>
              <a
                href={`mailto:${brand.email}`}
                className="flex size-11 items-center justify-center border border-white/12 bg-white/4 text-white/70 transition-colors hover:border-primary/36 hover:text-white"
              >
                <HugeiconsIcon icon={Mail01Icon} className="size-5" />
              </a>
              <a
                href="#"
                className="flex size-11 items-center justify-center border border-white/12 bg-white/4 text-white/70 transition-colors hover:border-primary/36 hover:text-white"
              >
                <HugeiconsIcon icon={InstagramIcon} className="size-5" />
              </a>
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-1">
            <div className="space-y-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-primary">Navigation</p>
              <ul className="space-y-3">
                {footer.links.map((item) => (
                  <li key={item.href}>
                    <Link
                      className="text-sm font-medium leading-7 text-white/62 transition-colors hover:text-white"
                      href={item.href}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-primary">Direct</p>
              <ul className="space-y-3">
                {footer.legalLinks.map((item) => (
                  <li key={item.href}>
                    <Link
                      className="text-sm font-medium leading-7 text-white/62 transition-colors hover:text-white"
                      href={item.href}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-primary">Office Info</p>
            <div className="space-y-5">
              <div className="flex gap-4">
                <HugeiconsIcon icon={Location01Icon} className="mt-1 size-5 text-primary" />
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/34">Headquarters</p>
                  <p className="mt-2 text-sm leading-7 text-white/72">{brand.address}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <HugeiconsIcon icon={CallIcon} className="mt-1 size-5 text-primary" />
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/34">Inquiry</p>
                  <p className="mt-2 text-sm leading-7 text-white/72">{brand.phone}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <HugeiconsIcon icon={Mail01Icon} className="mt-1 size-5 text-primary" />
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/34">Email</p>
                  <p className="mt-2 text-sm leading-7 text-white/72">{brand.email}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 pt-8 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-x-8 gap-y-2">
            <div className="flex gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/32">
              <span>Company</span>
              <span className="text-white/56">{brand.koreanName}</span>
            </div>
            <div className="flex gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/32">
              <span>Registration</span>
              <span className="text-white/56">{brand.registrationNumber}</span>
            </div>
            <div className="flex gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/32">
              <span>CEO</span>
              <span className="text-white/56">{brand.ceoNames.join(" · ")}</span>
            </div>
          </div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/26">
            © 2026 JEYUL D&C. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
}
