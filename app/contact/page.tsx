import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowRight01Icon,
  Building01Icon,
  CallIcon,
  CheckmarkBadge01Icon,
  GlobeIcon,
  Location01Icon,
  Mail01Icon,
} from "@hugeicons/core-free-icons";
import { PageHero } from "@/components/site/page-hero";
import { SectionShell } from "@/components/site/section-shell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { siteContent } from "@/lib/site-content";

function ContactInfoCard({
  icon,
  label,
  value,
}: {
  icon: typeof CallIcon;
  label: string;
  value: string;
}) {
  return (
    <div className="flex gap-5 border border-border/60 bg-white/92 p-6 transition-colors hover:border-primary/30">
      <div className="flex size-12 items-center justify-center border border-border/60 bg-secondary/30 text-primary">
        <HugeiconsIcon icon={icon} className="size-6" />
      </div>
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">{label}</p>
        <p className="mt-2 text-lg font-semibold tracking-[-0.03em]">{value}</p>
      </div>
    </div>
  );
}

export default function Page() {
  const { brand, contact } = siteContent;

  return (
    <div className="flex min-h-screen flex-col bg-[#f6f2eb]">
      <PageHero
        eyebrow="Contact Us"
        title={
          <>
            프로젝트의 조건을 알려주시면,
            <br />
            실행 가능한 방향부터 제안합니다.
          </>
        }
        description={
          <>
            프로젝트의 규모와 성격에 맞춰 제율의 전문가 그룹이 요구사항을 검토하고, 현실적인 공정과
            범위를 제안합니다.
          </>
        }
        aside={
          <div className="flex h-full flex-col justify-between bg-[linear-gradient(180deg,rgba(17,24,39,0.88),rgba(17,24,39,0.68))] p-8 text-white">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-primary">Contact Details</p>
              <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em]">빠른 상담 안내</h3>
            </div>
            <div className="space-y-5 text-sm leading-7 text-white/72">
              <p>주거 인테리어부터 오피스, 기업 시설, 리모델링까지 프로젝트 성격에 맞춰 상담해 드립니다.</p>
              <p>{contact.phone}</p>
              <p>{contact.email}</p>
              <p>{brand.address}</p>
            </div>
          </div>
        }
      />

      <SectionShell className="py-24 sm:py-28 lg:py-32">
        <div className="grid items-start gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-primary">Project Brief</p>
              <h2 className="text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">상담 문의 신청</h2>
            </div>

            <form className="space-y-8 border border-border/60 bg-white/92 p-8 shadow-sm sm:p-10">
              <div className="grid gap-8 sm:grid-cols-2">
                <div className="space-y-3">
                  <label className="text-[11px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">이름 / 업체명</label>
                  <Input className="rounded-none border-0 border-b border-border/60 px-0 text-base font-medium focus-visible:ring-0" placeholder="성함 혹은 법인명" />
                </div>
                <div className="space-y-3">
                  <label className="text-[11px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">연락처</label>
                  <Input className="rounded-none border-0 border-b border-border/60 px-0 text-base font-medium focus-visible:ring-0" placeholder="연락 가능한 번호를 입력해 주세요" />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[11px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">프로젝트 유형</label>
                <Select>
                  <SelectTrigger className="rounded-none border-0 border-b border-border/60 px-0 text-base font-medium focus:ring-0">
                    <SelectValue placeholder="프로젝트 유형을 선택해 주세요" />
                  </SelectTrigger>
                  <SelectContent className="rounded-none border-border/60">
                    {contact.projectTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-3">
                <label className="text-[11px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">상세 문의 내용</label>
                <Textarea
                  className="min-h-[220px] rounded-none border-border/60 p-4 text-base leading-7 focus-visible:ring-0"
                  placeholder="공간의 용도, 면적, 예상 일정, 예산 범위, 요청 사항을 남겨주세요."
                />
              </div>

              <Button className="h-14 w-full rounded-none text-sm font-semibold uppercase tracking-[0.16em]">
                문의 남기기
                <HugeiconsIcon icon={ArrowRight01Icon} className="ml-2 size-4" />
              </Button>
            </form>
          </div>

          <div className="space-y-8 lg:sticky lg:top-32">
            <div className="space-y-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-primary">Contact Details</p>
              <h2 className="text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">빠른 상담 안내</h2>
            </div>

            <div className="space-y-4">
              <ContactInfoCard icon={CallIcon} label="Office Phone" value={contact.phone} />
              <ContactInfoCard icon={Mail01Icon} label="Email Address" value={contact.email} />
              <ContactInfoCard icon={Location01Icon} label="Headquarters" value={brand.address} />
            </div>

            <div className="bg-foreground p-8 text-white">
              <h3 className="text-2xl font-semibold tracking-[-0.04em]">Check Points</h3>
              <div className="mt-6 space-y-4">
                {[
                  "원하시는 착수 시점과 완료 희망일을 알려주세요.",
                  "예산 범위를 알려주시면 마감과 공정 방향을 더 정확히 제안할 수 있습니다.",
                  "현장 주소와 공간 면적을 함께 주시면 검토가 더 빨라집니다.",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <HugeiconsIcon icon={CheckmarkBadge01Icon} className="mt-1 size-4 text-primary" />
                    <p className="text-sm leading-7 text-white/76">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SectionShell>

      <section className="border-t border-border/40 py-12 text-center">
        <div className="flex flex-wrap justify-center gap-6 px-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
          <span className="inline-flex items-center gap-2">
            <HugeiconsIcon icon={GlobeIcon} className="size-3 text-primary" />
            {brand.officialHomepageUrl}
          </span>
          <span className="inline-flex items-center gap-2">
            <HugeiconsIcon icon={Building01Icon} className="size-3 text-primary" />
            {brand.registrationNumber}
          </span>
        </div>
      </section>
    </div>
  );
}
