import Link from "next/link";
import { siteContent } from "@/lib/site-content";
import { HugeiconsIcon } from "@hugeicons/react";
import { 
  ArrowRight01Icon,
  CallIcon,
  Mail01Icon,
  Location01Icon,
  GlobeIcon,
  InstagramIcon,
} from "@hugeicons/core-free-icons";

export function SiteFooter() {
  const { brand, footer } = siteContent;

  return (
    <footer className="bg-[#1A1A1A] text-white border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 pt-20 pb-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr_1fr] gap-16 pb-16">
          {/* 브랜드 정체성 영역 */}
          <div className="space-y-10">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                 <div className="size-10 flex items-center justify-center border-2 border-primary bg-primary text-white text-lg font-bold">J</div>
                 <span className="text-2xl font-bold tracking-[0.2em] uppercase">JEYUL D&C</span>
              </div>
              <p className="max-w-md text-sm leading-relaxed text-white/40 font-medium">
                {brand.coreKeyword} 기반으로 주거와 기업 공간의 새로운 가치를 창출합니다. <br />
                정밀한 공정 관리와 타협하지 않는 품질로 공간의 미래를 짓습니다.
              </p>
            </div>
            
            <div className="flex gap-4">
              <a href="#" className="size-10 flex items-center justify-center border border-white/10 hover:border-primary transition-colors text-white/60 hover:text-primary">
                <HugeiconsIcon icon={InstagramIcon} className="size-5" />
              </a>
              <a href={brand.officialHomepageUrl} target="_blank" rel="noreferrer" className="size-10 flex items-center justify-center border border-white/10 hover:border-primary transition-colors text-white/60 hover:text-primary">
                <HugeiconsIcon icon={GlobeIcon} className="size-5" />
              </a>
            </div>
          </div>

          {/* 주요 메뉴 링크 */}
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-8">
              <p className="text-[10px] font-bold text-primary tracking-[0.3em] uppercase">Navigation</p>
              <ul className="space-y-4">
                {footer.links.map((item) => (
                  <li key={item.href}>
                    <Link className="text-sm font-bold text-white/60 hover:text-white transition-colors uppercase tracking-widest" href={item.href}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-8">
              <p className="text-[10px] font-bold text-primary tracking-[0.3em] uppercase">Contact Us</p>
              <ul className="space-y-4">
                {footer.legalLinks.map((item) => (
                  <li key={item.href}>
                    <Link className="text-sm font-bold text-white/60 hover:text-white transition-colors uppercase tracking-widest" href={item.href}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 연락처 및 본사 정보 */}
          <div className="space-y-8">
            <p className="text-[10px] font-bold text-primary tracking-[0.3em] uppercase">Office Info</p>
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <HugeiconsIcon icon={Location01Icon} className="size-5 text-primary mt-1" />
                <div className="space-y-1">
                  <p className="text-xs font-bold text-white/40 uppercase tracking-widest">Headquarters</p>
                  <p className="text-sm font-bold leading-relaxed">{brand.address}</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <HugeiconsIcon icon={CallIcon} className="size-5 text-primary mt-1" />
                <div className="space-y-1">
                  <p className="text-xs font-bold text-white/40 uppercase tracking-widest">Inquiry</p>
                  <p className="text-sm font-bold">{brand.phone}</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <HugeiconsIcon icon={Mail01Icon} className="size-5 text-primary mt-1" />
                <div className="space-y-1">
                  <p className="text-xs font-bold text-white/40 uppercase tracking-widest">Email Address</p>
                  <p className="text-sm font-bold">{brand.email}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 푸터 하단: 사업자 정보 및 카피라이트 */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-2">
            <div className="flex gap-2 text-[10px] font-bold text-white/30 uppercase tracking-[0.15em]">
              <span>COMPANY</span>
              <span className="text-white/50">{brand.koreanName}</span>
            </div>
            <div className="flex gap-2 text-[10px] font-bold text-white/30 uppercase tracking-[0.15em]">
               <span>REGISTRATION</span>
               <span className="text-white/50">{brand.registrationNumber}</span>
            </div>
            <div className="flex gap-2 text-[10px] font-bold text-white/30 uppercase tracking-[0.15em]">
               <span>CEO</span>
               <span className="text-white/50">강제윤</span>
            </div>
          </div>
          <p className="text-[10px] font-bold text-white/20 uppercase tracking-[0.2em]">
            © 2026 JEYUL D&C. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
}
