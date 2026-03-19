import { HugeiconsIcon } from "@hugeicons/react"
import {
  ArrowRight01Icon,
  Building01Icon,
  CallIcon,
  CheckmarkBadge01Icon,
  Location01Icon,
  Mail01Icon,
  Message01Icon,
  GlobeIcon,
} from "@hugeicons/core-free-icons"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Field, FieldLabel } from "@/components/ui/field"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { SectionShell } from "@/components/site/section-shell"
import { siteContent } from "@/lib/site-content"

export default function Page() {
  const { brand, contact } = siteContent

  return (
    <div className="flex min-h-screen flex-col bg-[#FDFDFB]">
      {/* Hero Section: 명확하고 신뢰감 있는 헤더 */}
      <section className="relative pt-32 pb-20 overflow-hidden border-b border-border/40 bg-white">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_70%_30%,rgba(18,133,131,0.03),transparent_50%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-10">
            <div className="space-y-6">
              <Badge variant="outline" className="jeyul-badge-premium py-1.5 px-4 bg-white/50 backdrop-blur-sm">
                CONTACT US
              </Badge>
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-[-0.04em] leading-[0.95] text-foreground uppercase">
                당신의 공간, <br />
                제율과 함께 <br />
                시작하십시오.
              </h1>
              <p className="max-w-2xl text-lg sm:text-xl leading-relaxed text-muted-foreground font-medium">
                프로젝트의 규모와 성격에 관계없이, 제율디앤씨의 전문가 그룹이 <br className="hidden sm:block" />
                귀하의 요구사항을 정밀하게 검토하여 최적의 솔루션을 제안해 드립니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SectionShell className="py-24">
        <div className="grid gap-20 lg:grid-cols-[1.2fr_0.8fr] items-start">
          {/* 문의 폼 섹션 */}
          <div className="space-y-12">
            <div className="space-y-4">
               <p className="text-xs font-bold text-primary tracking-[0.2em] uppercase">Project Brief</p>
               <h2 className="text-4xl font-bold tracking-tight">상담 문의 신청</h2>
            </div>
            
            <form className="space-y-8 bg-white p-8 sm:p-12 border border-border/60 shadow-sm">
              <div className="grid gap-8 sm:grid-cols-2">
                <div className="space-y-3">
                  <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">이름 / 업체명</label>
                  <Input className="rounded-none border-0 border-b border-border/60 focus-visible:ring-0 focus-visible:border-primary px-0 text-base font-medium placeholder:text-muted-foreground/40" placeholder="성함 혹은 법인명을 입력하세요" />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">연락처</label>
                  <Input className="rounded-none border-0 border-b border-border/60 focus-visible:ring-0 focus-visible:border-primary px-0 text-base font-medium placeholder:text-muted-foreground/40" placeholder="010-0000-0000" />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">프로젝트 유형</label>
                <Select>
                  <SelectTrigger className="rounded-none border-0 border-b border-border/60 focus:ring-0 px-0 text-base font-medium">
                    <SelectValue placeholder="프로젝트 유형을 선택해 주세요" />
                  </SelectTrigger>
                  <SelectContent className="rounded-none border-border/60">
                    {contact.projectTypes.map((type) => (
                      <SelectItem key={type} value={type} className="rounded-none">
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">상세 문의 내용</label>
                <Textarea
                  placeholder="공간의 용도, 면적, 예상 일정 및 예산 등 구체적인 내용을 남겨주시면 더욱 정확한 상담이 가능합니다."
                  className="min-h-[200px] rounded-none border-border/60 focus-visible:ring-0 focus-visible:border-primary p-4 text-base font-medium placeholder:text-muted-foreground/40 leading-relaxed"
                />
              </div>

              <div className="pt-4">
                <Button className="h-16 w-full rounded-none text-base font-bold uppercase tracking-widest group">
                  상담 신청 완료
                  <HugeiconsIcon icon={ArrowRight01Icon} className="ml-3 size-5 transition-transform group-hover:translate-x-1" />
                </Button>
                <p className="mt-4 text-center text-xs text-muted-foreground">
                  보내주신 정보는 프로젝트 검토를 위해서만 사용되며, 제율디앤씨가 직접 확인 후 연락드립니다.
                </p>
              </div>
            </form>
          </div>

          {/* 정보 및 연락처 섹션 */}
          <div className="lg:sticky lg:top-32 space-y-12">
            <div className="space-y-8">
              <div className="space-y-4">
                 <p className="text-xs font-bold text-primary tracking-[0.2em] uppercase">Contact Details</p>
                 <h2 className="text-4xl font-bold tracking-tight">빠른 상담 안내</h2>
              </div>
              
              <div className="grid gap-6">
                 <div className="flex gap-6 p-6 bg-white border border-border/60 group hover:border-primary/40 transition-colors">
                    <div className="size-12 bg-secondary/50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                       <HugeiconsIcon icon={CallIcon} className="size-6" />
                    </div>
                    <div className="space-y-1">
                       <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Office Phone</p>
                       <p className="text-xl font-bold">{contact.phone}</p>
                    </div>
                 </div>
                 
                 <div className="flex gap-6 p-6 bg-white border border-border/60 group hover:border-primary/40 transition-colors">
                    <div className="size-12 bg-secondary/50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                       <HugeiconsIcon icon={Mail01Icon} className="size-6" />
                    </div>
                    <div className="space-y-1">
                       <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Email Address</p>
                       <p className="text-xl font-bold">{contact.email}</p>
                    </div>
                 </div>

                 <div className="flex gap-6 p-6 bg-white border border-border/60 group hover:border-primary/40 transition-colors">
                    <div className="size-12 bg-secondary/50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                       <HugeiconsIcon icon={Location01Icon} className="size-6" />
                    </div>
                    <div className="space-y-1">
                       <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Headquarters</p>
                       <p className="text-sm font-bold leading-relaxed">{brand.address}</p>
                    </div>
                 </div>
              </div>
            </div>

            <div className="p-8 bg-foreground text-background space-y-8">
               <div className="space-y-4">
                  <h4 className="text-xl font-bold text-white">Check Points</h4>
                  <p className="text-sm leading-relaxed font-medium text-white/70">상담 전 다음 사항을 확인해 주시면 더욱 원활한 프로젝트 검토가 가능합니다.</p>
               </div>
               <div className="space-y-4">
                  <div className="flex items-start gap-3">
                     <HugeiconsIcon icon={CheckmarkBadge01Icon} className="mt-1 size-4 text-primary" />
                     <p className="text-sm font-medium text-white">원하시는 시공 시점과 완료 일정을 알려주세요.</p>
                  </div>
                  <div className="flex items-start gap-3">
                     <HugeiconsIcon icon={CheckmarkBadge01Icon} className="mt-1 size-4 text-primary" />
                     <p className="text-sm font-medium text-white">대략적인 예산 범위를 고려해 주시면 예산에 최적화된 마감을 제안해 드립니다.</p>
                  </div>
                  <div className="flex items-start gap-3">
                     <HugeiconsIcon icon={CheckmarkBadge01Icon} className="mt-1 size-4 text-primary" />
                     <p className="text-sm font-medium text-white">현장 주소와 공간의 면적(평형)을 확인해 주세요.</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </SectionShell>

      {/* Footer Info */}
      <section className="py-12 border-t border-border/40 text-center">
         <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">
               <HugeiconsIcon icon={GlobeIcon} className="size-3 text-primary" />
               <span>Official Site: {brand.officialHomepageUrl}</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">
               <HugeiconsIcon icon={Building01Icon} className="size-3 text-primary" />
               <span>Business ID: {brand.registrationNumber}</span>
            </div>
         </div> 
      </section>
    </div>
  )
}
