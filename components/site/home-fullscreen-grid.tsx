import { cn } from "@/lib/utils";

type GridItem = {
  title: string;
  description: string;
  background: string;
};

const items: GridItem[] = [
  {
    title: "설계",
    description:
      "제로투엔 설계본부는 주거, 업무, 상업, 교육현장 등 다양한 분야에서 수익성과 작품성을 겸비한 건축 기획 · 디자인 해결책을 제시합니다.",
    background:
      "linear-gradient(180deg, rgba(17, 16, 14, 0.12) 0%, rgba(17, 16, 14, 0.52) 58%, rgba(17, 16, 14, 0.86) 100%), radial-gradient(circle at 18% 18%, rgba(255, 255, 255, 0.24), transparent 28%), linear-gradient(135deg, #9e6d5d 0%, #7e4a3e 28%, #59372f 52%, #191615 100%)",
  },
  {
    title: "건설",
    description:
      "제로투엔 건설본부는 시간 단축, 하자 없는 건설을 통해 고객의 이익을 극대화하는 건설 해결책을 제시합니다.",
    background:
      "linear-gradient(180deg, rgba(10, 12, 16, 0.08) 0%, rgba(10, 12, 16, 0.46) 52%, rgba(10, 12, 16, 0.9) 100%), linear-gradient(135deg, #1d2330 0%, #254f71 24%, #d0634e 52%, #351d18 100%)",
  },
  {
    title: "개발",
    description:
      "제로투엔 개발본부는 잠재 가치를 지닌 토지를 발굴하여 최대의 이익을 창출하는 공간을 개발합니다.",
    background:
      "linear-gradient(180deg, rgba(10, 12, 16, 0.1) 0%, rgba(10, 12, 16, 0.4) 48%, rgba(10, 12, 16, 0.9) 100%), radial-gradient(circle at 72% 24%, rgba(255, 255, 255, 0.22), transparent 22%), linear-gradient(135deg, #d0d2d4 0%, #9da0a6 26%, #5d6168 54%, #26303d 100%)",
  },
  {
    title: "인테리어",
    description:
      "제로투엔 인테리어팀은 빠르게 변화하는 세상에 맞춰 사용자의 편리성은 물론 공간의 가치를 상승시키는 해결책을 제시합니다.",
    background:
      "linear-gradient(180deg, rgba(15, 13, 10, 0.04) 0%, rgba(15, 13, 10, 0.38) 52%, rgba(15, 13, 10, 0.92) 100%), radial-gradient(circle at 20% 18%, rgba(255, 255, 255, 0.24), transparent 24%), linear-gradient(135deg, #b39782 0%, #84644f 24%, #4d3930 52%, #171311 100%)",
  },
];

export function HomeFullscreenGrid() {
  return (
    <section className="jeyul-home-section min-h-[100svh] overflow-hidden bg-[#0f1114] text-white lg:h-[100svh] lg:snap-start">
      <div className="grid min-h-[100svh] lg:h-full lg:grid-cols-4">
        {items.map((item, index) => (
          <article
            key={item.title}
            className={cn(
              "group relative isolate flex min-h-[26rem] overflow-hidden px-5 py-8 sm:px-7 sm:py-10 lg:h-full lg:min-h-0 lg:px-6 lg:py-12",
              index > 0 && "border-t border-white/8 lg:border-l lg:border-t-0 lg:border-white/10"
            )}
          >
            <div
              aria-hidden="true"
              className="jeyul-home-placeholder absolute inset-0 scale-[1.02] transition-transform duration-700 group-hover:scale-[1.06]"
              style={{ backgroundImage: item.background }}
            />
            <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,5,8,0.08)_0%,rgba(3,5,8,0.14)_36%,rgba(3,5,8,0.5)_100%)]" />
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-[56%] bg-[linear-gradient(180deg,transparent_0%,rgba(10,12,16,0.2)_20%,rgba(10,12,16,0.76)_100%)]"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-40 mix-blend-screen"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(180deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />

            <div className="relative z-10 mt-auto w-full space-y-4 text-center">
              <div className="space-y-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/60">
                  0{index + 1}
                </p>
                <h2 className="text-4xl font-semibold tracking-[-0.06em] text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.28)] sm:text-5xl lg:text-[clamp(2.25rem,3vw,3.4rem)]">
                  {item.title}
                </h2>
              </div>
              <p className="mx-auto max-w-[20rem] text-sm leading-7 text-white/78 sm:text-base sm:leading-8">
                {item.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
