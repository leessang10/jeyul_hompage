import * as React from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  ChartIcon,
  ChampionIcon,
  Building01Icon,
  PaintBoardIcon,
  LicenseIcon,
  Layers01Icon,
  Money01Icon,
  CheckmarkBadge01Icon,
  ArrowRight01Icon,
  Mail01Icon,
  CallIcon,
  Location01Icon
} from "@hugeicons/core-free-icons"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Field, FieldLabel } from "@/components/ui/field"

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between mx-auto px-4">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tighter">JEYUL D&C</span>
          </div>
          <nav className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#about" className="transition-colors hover:text-primary">회사소개</a>
            <a href="#icm" className="transition-colors hover:text-primary">ICM 핵심역량</a>
            <a href="#services" className="transition-colors hover:text-primary">주요분야</a>
            <a href="#contact" className="transition-colors hover:text-primary">문의하기</a>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="hidden md:flex">
              견적 문의
            </Button>
            <Button size="sm" className="md:hidden">메뉴</Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl space-y-6">
              <Badge variant="secondary" className="px-3 py-1 text-sm">
                실내건축공업 ICM 전문 시공사
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
                통합 공사관리로 <br />
                <span className="text-primary">건축의 가치</span>를 완성합니다
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                제율디앤씨는 설계부터 시공, 원가관리까지 통합 관리하는 ICM(Integrated Construction Management)을 통해 투명하고 정밀한 건축 솔루션을 제공합니다.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="px-8 h-12">
                  프로젝트 문의하기
                  <HugeiconsIcon icon={ArrowRight01Icon} className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="px-8 h-12">
                  회사소개서 다운로드
                </Button>
              </div>
            </div>
          </div>
          {/* Background Decorative Element */}
          <div className="absolute right-0 top-0 -z-10 w-1/2 h-full opacity-10 hidden lg:block">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <defs>
                <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#grid)" />
            </svg>
          </div>
        </section>

        {/* About Us Section */}
        <section id="about" className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tight">제율디앤씨(JEYUL D&C)</h2>
                <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                  <p>
                    제율디앤씨는 실내건축공사업 면허를 기반으로 한 ICM 전문 시공사입니다. 우리는 단순히 짓는 것을 넘어, 공사의 모든 과정을 데이터와 전문성으로 통합 관리합니다.
                  </p>
                  <p>
                    설계, 견적, 시공, 공정, 원가, 품질을 하나의 시스템으로 연결하여 고객의 예산 안에서 최상의 품질을 구현하는 것이 제율디앤씨의 약속입니다.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-6 pt-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-primary/10 text-primary">
                      <HugeiconsIcon icon={LicenseIcon} className="h-6 w-6" />
                    </div>
                    <span className="font-semibold text-sm">실내건축공사업 면허</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-primary/10 text-primary">
                      <HugeiconsIcon icon={ChampionIcon} className="h-6 w-6" />
                    </div>
                    <span className="font-semibold text-sm">ICM 전문 시공사</span>
                  </div>
                </div>
              </div>
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-muted flex items-center justify-center">
                 <div className="text-center p-8 border-2 border-dashed border-muted-foreground/30 rounded-xl">
                   <HugeiconsIcon icon={Building01Icon} className="h-16 w-16 mx-auto mb-4 text-muted-foreground/40" />
                   <p className="text-muted-foreground font-medium italic">ICM Integrated Management Image Placeholder</p>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* ICM Section */}
        <section id="icm" className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-bold tracking-tight mb-4">ICM 핵심역량</h2>
              <p className="text-muted-foreground">
                설계부터 유지보수까지, 제율디앤씨만의 통합 관리 시스템으로 공사의 불확실성을 제거합니다.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "설계 & 견적",
                  desc: "정밀한 분석을 통한 최적의 설계와 투명한 내역 산출",
                  icon: PaintBoardIcon
                },
                {
                  title: "시공 & 공정",
                  desc: "체계적인 공정표 관리로 오차 없는 공기 준수",
                  icon: Layers01Icon
                },
                {
                  title: "원가 & 품질",
                  desc: "효율적인 자원 배분과 엄격한 품질 관리 시스템",
                  icon: Money01Icon
                },
                {
                  title: "통합 관리 (ICM)",
                  desc: "공사 전 과정을 데이터화하여 실시간 의사결정 지원",
                  icon: ChartIcon
                },
                {
                  title: "시공 중심 관리",
                  desc: "현장 경험을 바탕으로 한 실무 중심의 리스크 통제",
                  icon: Building01Icon
                },
                {
                  title: "신뢰 & 안전",
                  desc: "원칙을 준수하는 시공으로 지속 가능한 공간 창조",
                  icon: CheckmarkBadge01Icon
                }
              ].map((item, i) => (
                <Card key={i} className="border-none shadow-md hover:shadow-lg transition-shadow bg-background">
                  <CardHeader>
                    <div className="p-3 w-fit rounded-xl bg-primary/10 text-primary mb-2">
                      <HugeiconsIcon icon={item.icon} className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Service Fields Section */}
        <section id="services" className="py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1">
                 <div className="grid gap-4">
                   <div className="bg-white/10 p-6 rounded-xl border border-white/20">
                      <h3 className="text-xl font-bold mb-2">리모델링 & 대수선</h3>
                      <p className="text-primary-foreground/80">노후화된 건물의 가치를 극대화하고 구조적 안정성을 확보하는 전문 시공 솔루션</p>
                   </div>
                   <div className="bg-white/10 p-6 rounded-xl border border-white/20">
                      <h3 className="text-xl font-bold mb-2">공공 프로젝트</h3>
                      <p className="text-primary-foreground/80">공공기관의 엄격한 기준을 충족하는 투명한 공정 관리와 성실 시공</p>
                   </div>
                   <div className="bg-white/10 p-6 rounded-xl border border-white/20">
                      <h3 className="text-xl font-bold mb-2">민간 상업/오피스</h3>
                      <p className="text-primary-foreground/80">브랜드 아이덴티티를 반영한 고품격 상업 공간 및 업무 시설 구축</p>
                   </div>
                 </div>
              </div>
              <div className="order-1 md:order-2 space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">다양한 영역에서 증명된 <br />전문성을 경험하세요</h2>
                <p className="text-primary-foreground/90 text-lg">
                  제율디앤씨는 주거, 상업, 공공 시설을 아우르는 폭넓은 스펙트럼의 프로젝트를 수행하며 각 분야에 최적화된 ICM 프로세스를 적용합니다.
                </p>
                <div className="flex gap-4">
                  <div className="flex flex-col">
                    <span className="text-3xl font-bold">100+</span>
                    <span className="text-sm opacity-80 text-nowrap">완료 프로젝트</span>
                  </div>
                  <div className="w-px h-12 bg-white/20 mx-4" />
                  <div className="flex flex-col">
                    <span className="text-3xl font-bold">98%</span>
                    <span className="text-sm opacity-80 text-nowrap">고객 만족도</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto bg-card rounded-3xl overflow-hidden shadow-2xl border flex flex-col md:row gap-0">
               <div className="grid md:grid-cols-5">
                  <div className="md:col-span-2 bg-muted p-8 md:p-12 space-y-8">
                    <div>
                      <h2 className="text-2xl font-bold mb-2">문의하기</h2>
                      <p className="text-muted-foreground text-sm">상담 및 견적 문의는 아래 채널을 통해 연락 주시면 신속히 답변 드리겠습니다.</p>
                    </div>
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                         <HugeiconsIcon icon={Location01Icon} className="h-6 w-6 text-primary mt-1" />
                         <div>
                           <p className="font-semibold">위치</p>
                           <p className="text-sm text-muted-foreground">서울특별시 [상세 주소 입력]</p>
                         </div>
                      </div>
                      <div className="flex items-start gap-4">
                         <HugeiconsIcon icon={CallIcon} className="h-6 w-6 text-primary mt-1" />
                         <div>
                           <p className="font-semibold">전화</p>
                           <p className="text-sm text-muted-foreground">02-XXX-XXXX</p>
                         </div>
                      </div>
                      <div className="flex items-start gap-4">
                         <HugeiconsIcon icon={Mail01Icon} className="h-6 w-6 text-primary mt-1" />
                         <div>
                           <p className="font-semibold">이메일</p>
                           <p className="text-sm text-muted-foreground">contact@jeyul.co.kr</p>
                         </div>
                      </div>
                    </div>
                  </div>
                  <div className="md:col-span-3 p-8 md:p-12">
                    <form className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <Field>
                          <FieldLabel>이름 / 업체명</FieldLabel>
                          <Input placeholder="홍길동" />
                        </Field>
                        <Field>
                          <FieldLabel>연락처</FieldLabel>
                          <Input placeholder="010-0000-0000" />
                        </Field>
                      </div>
                      <Field>
                        <FieldLabel>문의 유형</FieldLabel>
                        <Input placeholder="예: 리모델링 견적 문의" />
                      </Field>
                      <Field>
                        <FieldLabel>문의 내용</FieldLabel>
                        <Textarea placeholder="문의하실 내용을 상세히 적어주세요." className="min-h-[120px]" />
                      </Field>
                      <Button className="w-full h-12 text-lg">상담 신청하기</Button>
                    </form>
                  </div>
               </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-12 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <div className="space-y-4">
              <span className="text-xl font-bold tracking-tighter">JEYUL D&C</span>
              <p className="text-sm text-muted-foreground max-w-xs">
                실내건축공업 ICM 전문 시공사 제율디앤씨. <br />
                건축의 모든 과정을 정밀하게 관리합니다.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
              <div className="space-y-4">
                <h4 className="text-sm font-semibold">회사</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="#about" className="hover:text-primary transition-colors">회사소개</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">연혁</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">인증/면허</a></li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-sm font-semibold">서비스</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="#icm" className="hover:text-primary transition-colors">ICM 관리</a></li>
                  <li><a href="#services" className="hover:text-primary transition-colors">리모델링</a></li>
                  <li><a href="#services" className="hover:text-primary transition-colors">공공공사</a></li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-sm font-semibold">고객지원</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="#contact" className="hover:text-primary transition-colors">문의하기</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
            <p>© 2026 제율디앤씨 (JEYUL D&C). All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors">개인정보처리방침</a>
              <a href="#" className="hover:text-primary transition-colors">이용약관</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
