import { HugeiconsIcon } from "@hugeicons/react"
import {
  ArrowRight01Icon,
  CallIcon,
  CheckmarkBadge01Icon,
  Location01Icon,
  Mail01Icon,
  Message01Icon,
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
import { PageHero } from "@/components/site/page-hero"
import { ProjectPlaceholder } from "@/components/site/project-placeholder"
import { SectionShell } from "@/components/site/section-shell"
import { siteContent } from "@/lib/site-content"

export default function Page() {
  const { brand, contact } = siteContent

  return (
    <div className="flex min-h-screen flex-col">
      <PageHero
        eyebrow="Contact"
        title="프로젝트 상담을 남겨주시면 제율이 직접 연락드립니다."
        description="주거와 기업 프로젝트 모두 상담 가능합니다. 필요한 내용을 남겨주시면 확인 후 안내드립니다."
        note={
          <div className="space-y-4">
            <p className="jeyul-editorial-kicker">Project Scope</p>
            <p className="text-lg font-semibold text-foreground">{brand.koreanName}</p>
            <p className="text-sm leading-6 text-muted-foreground">
              주거 인테리어, 오피스, 기업 시설, 리모델링 상담을 받고 있습니다.
            </p>
            <div className="grid gap-2 text-sm text-foreground">
              <div className="flex items-center gap-2">
                <HugeiconsIcon icon={CheckmarkBadge01Icon} className="size-4 text-primary" />
                <span>주거와 기업 프로젝트 상담 가능</span>
              </div>
              <div className="flex items-center gap-2">
                <HugeiconsIcon icon={Message01Icon} className="size-4 text-primary" />
                <span>기본 정보만 남겨도 상담 시작 가능</span>
              </div>
              <div className="flex items-center gap-2">
                <HugeiconsIcon icon={Location01Icon} className="size-4 text-primary" />
                <span>서울 및 수도권 중심 대응</span>
              </div>
            </div>
          </div>
        }
      />

      <SectionShell className="jeyul-section-rhythm">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.95fr]">
          <div className="jeyul-content-frame p-6 sm:p-8">
            <div className="mb-6 space-y-3">
              <p className="jeyul-editorial-kicker">Inquiry</p>
              <h2 className="jeyul-editorial-section-title">편하게 남겨 주세요.</h2>
              <p className="jeyul-editorial-section-copy">
                공간 유형, 일정, 예산 등 기본 정보만 남겨주셔도 상담을 시작하실 수 있습니다.
              </p>
            </div>

            <form className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field>
                  <FieldLabel>이름 / 업체명</FieldLabel>
                  <Input placeholder="홍길동 / 회사명" />
                </Field>
                <Field>
                  <FieldLabel>연락처</FieldLabel>
                  <Input placeholder="010-0000-0000" />
                </Field>
              </div>

              <Field>
                <FieldLabel>프로젝트 유형</FieldLabel>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="선택해 주세요" />
                  </SelectTrigger>
                  <SelectContent>
                    {contact.projectTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </Field>

              <Field>
                <FieldLabel>문의 내용</FieldLabel>
                <Textarea
                  placeholder="공간의 종류, 평형 또는 면적, 원하는 일정, 예산 범위 등을 적어 주세요."
                  className="min-h-[150px]"
                />
              </Field>

              <Button className="h-11 w-full px-6">
                상담 남기기
                <HugeiconsIcon icon={ArrowRight01Icon} className="ml-2 size-4" />
              </Button>
            </form>
          </div>

          <div className="space-y-4">
            <ProjectPlaceholder
              label="Consulting"
              title="상담 이미지 영역"
              meta="미팅, 브리프, 현장 상담 사진이 들어갈 자리"
              variant="contact"
              className="min-h-[220px]"
            />
            <div className="jeyul-surface-panel p-6">
              <p className="jeyul-editorial-kicker">Contact Info</p>
              <h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-foreground">
                바로 연락하실 수 있습니다.
              </h3>
              <div className="mt-4 grid gap-3 text-sm">
                <div className="flex items-center justify-between gap-4 border-b border-border/60 pb-3">
                  <span className="jeyul-editorial-kicker">Website</span>
                  <a className="text-foreground transition-colors hover:text-muted-foreground" href={contact.website} target="_blank" rel="noreferrer">
                    {contact.website}
                  </a>
                </div>
                <div className="flex items-center justify-between gap-4 border-b border-border/60 pb-3">
                  <span className="jeyul-editorial-kicker">Phone</span>
                  <a className="text-foreground transition-colors hover:text-muted-foreground" href={`tel:${contact.phone.replace(/-/g, "")}`}>
                    {contact.phone}
                  </a>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span className="jeyul-editorial-kicker">Email</span>
                  <a className="text-foreground transition-colors hover:text-muted-foreground" href={`mailto:${contact.email}`}>
                    {contact.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <div className="jeyul-content-frame p-6">
                <p className="jeyul-editorial-kicker">Before You Contact</p>
                <div className="mt-3 grid gap-3 text-sm text-muted-foreground">
                  <div className="flex items-start gap-3">
                    <HugeiconsIcon icon={Message01Icon} className="mt-0.5 size-4 text-primary" />
                    <p>원하시는 공간 유형과 현재 상태를 간단히 남겨 주세요.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <HugeiconsIcon icon={Location01Icon} className="mt-0.5 size-4 text-primary" />
                    <p>평형, 면적, 지역, 사용 중 여부를 함께 남겨주시면 좋습니다.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <HugeiconsIcon icon={CheckmarkBadge01Icon} className="mt-0.5 size-4 text-primary" />
                    <p>예산 범위와 일정 조건이 있으면 상담이 더 정확해집니다.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionShell>
    </div>
  )
}
