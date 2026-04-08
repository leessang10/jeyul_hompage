"use client";

import type { ChangeEvent, ReactNode } from "react";
import { useRef, useState } from "react";
import { format } from "date-fns";
import { ko } from "date-fns/locale";
import { Calendar01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { siteContent } from "@/lib/site-content";

const discoveryChannels = [
  "인스타랩",
  "블로그",
  "유튜브",
  "핀터레스트",
  "지인추천",
  "검색",
];

function VisualPanel() {
  return (
    <section className="relative min-h-[58vh] overflow-hidden bg-[#dfd6c9] lg:h-dvh lg:min-h-0">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.18),rgba(0,0,0,0.08))]" />
      <div className="absolute inset-x-0 top-0 h-[64%] bg-[linear-gradient(180deg,#f8f3ed_0%,#f0e7dd_30%,#e4ddd4_58%,#d8d0c4_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-[38%] bg-[linear-gradient(180deg,#c5b7a5_0%,#b9a893_100%)]" />
      <div className="absolute left-[18%] top-[13%] h-[56%] w-[53%] bg-[linear-gradient(180deg,rgba(250,250,249,0.9),rgba(230,229,226,0.72))] shadow-[0_0_0_2px_rgba(255,255,255,0.7)]">
        <div className="absolute inset-x-[5%] bottom-[8%] top-[14%] bg-[linear-gradient(180deg,#fefefe_0%,#f9f8f6_30%,#dfe2e4_68%,#cdd5db_100%)]" />
        <div className="absolute inset-x-[8%] bottom-[13%] h-[20%] bg-[linear-gradient(180deg,rgba(216,221,227,0.15),rgba(171,183,196,0.5))]" />
        <div className="absolute bottom-[13%] left-[11%] h-[22%] w-[29%] bg-[radial-gradient(circle_at_50%_110%,rgba(152,167,180,0.38),rgba(255,255,255,0)_58%)]" />
        <div className="absolute bottom-[13%] left-[39%] h-[21%] w-[26%] bg-[radial-gradient(circle_at_50%_110%,rgba(152,167,180,0.3),rgba(255,255,255,0)_58%)]" />
      </div>
      <div className="absolute bottom-0 left-[75%] top-0 w-[9.5%] bg-[linear-gradient(180deg,#d1c5b7_0%,#b8a794_100%)] shadow-[-22px_0_42px_rgba(104,83,58,0.08)]" />
      <div className="absolute left-[10%] top-[54%] h-[15%] w-[19%] rounded-[46%_46%_40%_40%] bg-[#f4f0ea] shadow-[0_16px_34px_rgba(118,98,72,0.12)]" />
      <div className="absolute left-[15.5%] top-[67%] h-[5%] w-[8.5%] rounded-full bg-[#fbfbfa] shadow-[0_6px_20px_rgba(118,98,72,0.08)]" />
      <div className="absolute left-[31%] top-[66.5%] h-[10%] w-[8%] rounded-[2rem] bg-[#f7f6f2] shadow-[0_12px_22px_rgba(118,98,72,0.12)]" />
      <div className="absolute left-[30.8%] top-[61.5%] h-[10.5%] w-[8.6%] rounded-t-[3rem] rounded-b-[1.2rem] bg-[#f9f7f3]" />
      <div className="absolute left-[33.7%] top-[63%] h-[18%] w-[1.6%] bg-[#f5f5f3]" />
      <div className="absolute left-[11.8%] top-[53%] h-[16%] w-[6%] rounded-[50%_50%_40%_40%] bg-[radial-gradient(circle_at_50%_58%,#5f8a49_0%,#4f7640_48%,rgba(72,102,57,0)_78%)] opacity-90" />
      <div className="absolute left-[13.1%] top-[47%] h-[22%] w-[11%] bg-[radial-gradient(circle_at_20%_65%,#75985d_0%,#65894f_27%,rgba(101,137,79,0)_58%),radial-gradient(circle_at_70%_34%,#6f9557_0%,#587947_26%,rgba(88,121,71,0)_56%),radial-gradient(circle_at_52%_80%,#88a86f_0%,#65894f_32%,rgba(101,137,79,0)_62%)]" />
      <div className="absolute left-[17%] top-[52%] h-[1px] w-[18%] bg-white/75" />
      <div className="absolute left-[15.5%] top-[48.6%] size-[11%] rounded-full border border-white/30 bg-[radial-gradient(circle,#f8f8f5_0%,#efede6_65%,rgba(239,237,230,0)_76%)] opacity-65" />
      <div className="absolute left-0 top-0 h-full w-full bg-[linear-gradient(180deg,rgba(22,16,8,0.12)_0%,rgba(22,16,8,0.02)_36%,rgba(22,16,8,0.16)_100%)]" />

      <div className="relative z-10 flex h-full min-h-[58vh] flex-col justify-between p-4 text-white sm:p-6 lg:min-h-0 lg:p-8">
        <div className="flex items-start justify-between">
          <div className="text-[18px] font-semibold tracking-[0.04em] text-white/88 sm:text-[20px]">
            JEYUL D&amp;C
          </div>
          <Link
            href="/"
            aria-label="홈으로 이동"
            className="relative block size-8 text-white/92 sm:size-10"
          >
            <span className="absolute left-1/2 top-1/2 h-px w-7 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-current sm:w-8" />
            <span className="absolute left-1/2 top-1/2 h-px w-7 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-current sm:w-8" />
          </Link>
        </div>

        <div className="space-y-5 pb-5 sm:pb-6 lg:pb-9">
          <div className="max-w-[22rem] text-[clamp(2rem,6vw,3.6rem)] leading-[1.06] font-semibold tracking-[-0.06em] text-white">
            <p className="whitespace-nowrap">우리집 이름 짓기,</p>
            <p className="whitespace-nowrap">집이 삶을 닮는 첫걸음입니다.</p>
          </div>
          <p className="text-right text-[1.05rem] font-semibold tracking-[-0.04em] text-white/92 sm:text-[1.2rem]">
            Casa de Jeyul
          </p>
        </div>
      </div>
    </section>
  );
}

function UnderlineField({
  label,
  required,
  placeholder,
  children,
  className = "",
}: {
  label: string;
  required?: boolean;
  placeholder?: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <div className="mb-2.5 flex min-h-[21px] items-center gap-1 text-[14px] font-semibold tracking-[-0.03em] text-[#262626]">
        {label ? (
          <>
            <span>{label}</span>
            {required ? <span className="text-[#ea5c2b]">*</span> : null}
          </>
        ) : (
          <span className="invisible">placeholder</span>
        )}
      </div>
      {children ?? (
        <input
          className="h-10 w-full border-0 border-b border-[#4b4b4b] bg-transparent px-0 text-[14px] text-[#202020] placeholder:text-[#c6c6c6] focus:outline-none"
          placeholder={placeholder}
        />
      )}
    </div>
  );
}

function PhoneField() {
  return (
    <div className="flex h-10 items-center gap-3 border-b border-[#4b4b4b]">
      <input
        defaultValue="010"
        className="w-10 border-0 bg-transparent px-0 text-[14px] text-[#202020] focus:outline-none"
      />
      <span className="text-[#9c9c9c]">-</span>
      <input
        className="min-w-0 flex-1 border-0 bg-transparent px-0 text-[14px] text-[#202020] placeholder:text-[#c6c6c6] focus:outline-none"
        placeholder="0000"
      />
      <span className="text-[#9c9c9c]">-</span>
      <input
        className="min-w-0 flex-1 border-0 bg-transparent px-0 text-[14px] text-[#202020] placeholder:text-[#c6c6c6] focus:outline-none"
        placeholder="0000"
      />
    </div>
  );
}

function ChannelChips({
  selectedChannels,
  onToggle,
}: {
  selectedChannels: string[];
  onToggle: (channel: string) => void;
}) {
  return (
    <div className="grid grid-cols-3 gap-2 sm:grid-cols-3">
      {discoveryChannels.map((channel) => (
        <button
          key={channel}
          type="button"
          aria-pressed={selectedChannels.includes(channel)}
          onClick={() => onToggle(channel)}
          className={`h-10 rounded-[6px] border text-[13px] font-medium tracking-[-0.03em] transition-colors ${
            selectedChannels.includes(channel)
              ? "border-[#e75a27] bg-[#fff3ed] text-[#cb4d1f]"
              : "border-[#e6e1db] bg-white text-[#595959] hover:border-[#d8cfc5] hover:text-[#202020]"
          }`}
        >
          {channel}
        </button>
      ))}
    </div>
  );
}

function UploadBox() {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [selectedFiles, setSelectedFiles] = useState<string[]>([]);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const nextFiles = Array.from(event.target.files ?? [])
      .slice(0, 5)
      .map((file) => file.name);

    setSelectedFiles(nextFiles);
  };

  return (
    <div className="space-y-3">
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        multiple
        className="hidden"
        onChange={handleFileChange}
      />
      <button
        type="button"
        onClick={() => fileInputRef.current?.click()}
        className="flex h-[66px] w-[98px] flex-col items-center justify-center gap-1.5 rounded-[6px] border border-[#e8e1d8] bg-white text-[#2c2c2c] transition-colors hover:border-[#d8cfc5]"
      >
        <span className="relative block size-6">
          <span className="absolute inset-x-[2px] bottom-[3px] top-[7px] rounded-[3px] border-[2px] border-current" />
          <span className="absolute left-1/2 top-[2px] h-[7px] w-[12px] -translate-x-1/2 rounded-t-[4px] border-[2px] border-b-0 border-current" />
          <span className="absolute left-1/2 top-1/2 size-[5px] -translate-x-1/2 -translate-y-[12%] rounded-full bg-current" />
        </span>
        <span className="text-[13px] font-medium tracking-[-0.03em]">사진 올리기</span>
      </button>
      {selectedFiles.length > 0 ? (
        <div className="space-y-1 text-[12px] leading-5 text-[#8b847c]">
          <p>{selectedFiles.length}개 파일 선택됨</p>
          {selectedFiles.slice(0, 3).map((fileName) => (
            <p key={fileName} className="truncate">
              {fileName}
            </p>
          ))}
        </div>
      ) : null}
    </div>
  );
}

function openTermsPopup() {
  window.open(
    "/terms",
    "jeyul-terms",
    "popup=yes,width=760,height=820,left=180,top=80,resizable=yes,scrollbars=yes"
  );
}

export default function ContactPage() {
  const { brand } = siteContent;
  const [selectedAreaType, setSelectedAreaType] = useState<"공급" | "전용">("공급");
  const [selectedChannels, setSelectedChannels] = useState<string[]>([]);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [plannedDate, setPlannedDate] = useState<Date | undefined>();

  const toggleChannel = (channel: string) => {
    setSelectedChannels((current) =>
      current.includes(channel)
        ? current.filter((item) => item !== channel)
        : [...current, channel]
    );
  };

  return (
    <div className="bg-white text-[#202020]">
      <div className="lg:grid lg:h-dvh lg:grid-cols-[minmax(0,1fr)_minmax(520px,48.6vw)] lg:overflow-hidden">
        <VisualPanel />

        <section className="bg-white lg:h-dvh lg:overflow-hidden">
          <div className="mx-auto flex w-full max-w-[720px] flex-col px-4 py-8 sm:px-6 sm:py-10 lg:h-full lg:max-w-none lg:px-14 lg:py-8 xl:px-16">
            <div className="mb-10 lg:mb-8">
              <h1 className="text-[2rem] leading-none font-semibold tracking-[-0.06em] text-[#171717] sm:text-[2.3rem]">
                인테리어 상담신청서
              </h1>
            </div>

            <form className="flex flex-1 flex-col">
              <div className="space-y-6 sm:space-y-7 lg:grid lg:grid-cols-2 lg:gap-x-7 lg:gap-y-5 lg:space-y-0">
                <div className="grid gap-6 sm:grid-cols-2 sm:gap-x-7 lg:col-span-2 lg:grid-cols-2 lg:gap-y-5">
                  <UnderlineField label="성함" required placeholder="성함을 입력해주세요" />
                  <UnderlineField label="연락처" required className="sm:pt-0">
                    <PhoneField />
                  </UnderlineField>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 sm:gap-x-7 lg:col-span-2 lg:grid-cols-2 lg:gap-y-5">
                  <UnderlineField label="주소" required placeholder="인테리어 예정지 주소를 검색해주세요" />
                  <UnderlineField label="" placeholder="상세 주소(선택)" />
                </div>

                <div className="grid gap-6 sm:grid-cols-2 sm:gap-x-7 lg:col-span-2 lg:grid-cols-2 lg:gap-y-5">
                  <UnderlineField label="평수" required>
                    <div className="flex h-10 items-center gap-3 border-b border-[#4b4b4b]">
                      <div className="flex rounded-[6px] border border-[#ebe4dc]">
                        <button
                          type="button"
                          aria-pressed={selectedAreaType === "공급"}
                          onClick={() => setSelectedAreaType("공급")}
                          className={`h-8 min-w-[52px] border-r border-[#ebe4dc] px-3 text-[13px] font-medium transition-colors ${
                            selectedAreaType === "공급"
                              ? "bg-[#fbefe9] text-[#cb4d1f]"
                              : "bg-white text-[#4b4b4b]"
                          }`}
                        >
                          공급
                        </button>
                        <button
                          type="button"
                          aria-pressed={selectedAreaType === "전용"}
                          onClick={() => setSelectedAreaType("전용")}
                          className={`h-8 min-w-[52px] px-3 text-[13px] font-medium transition-colors ${
                            selectedAreaType === "전용"
                              ? "bg-[#fbefe9] text-[#cb4d1f]"
                              : "bg-white text-[#4b4b4b]"
                          }`}
                        >
                          전용
                        </button>
                      </div>
                      <input
                        className="min-w-0 flex-1 border-0 bg-transparent px-0 text-[14px] text-[#202020] placeholder:text-[#c6c6c6] focus:outline-none"
                        placeholder="평수를 입력해 주세요"
                      />
                      <span className="text-[14px] text-[#5b5b5b]">평</span>
                    </div>
                  </UnderlineField>

                  <UnderlineField label="가용 예산" required>
                    <div className="flex h-10 items-center gap-3 border-b border-[#4b4b4b]">
                      <input
                        className="min-w-0 flex-1 border-0 bg-transparent px-0 text-[14px] text-[#202020] placeholder:text-[#c6c6c6] focus:outline-none"
                        placeholder="가용 인테리어 예산을 입력해주세요"
                      />
                      <span className="text-[14px] text-[#5b5b5b]">만원</span>
                    </div>
                  </UnderlineField>
                </div>

                <UnderlineField label="제율디앤씨를 알게 된 경로" required className="lg:col-span-2">
                  <ChannelChips
                    selectedChannels={selectedChannels}
                    onToggle={toggleChannel}
                  />
                </UnderlineField>

                <UnderlineField label="인테리어 예정일" required>
                  <Popover>
                    <PopoverTrigger asChild>
                      <button
                        type="button"
                        className="flex h-10 w-full items-center justify-between gap-3 border-0 border-b border-[#4b4b4b] bg-transparent px-0 text-left text-[14px] text-[#202020] outline-none"
                      >
                        <span className={plannedDate ? "text-[#202020]" : "text-[#c6c6c6]"}>
                          {plannedDate
                            ? format(plannedDate, "yyyy.MM.dd (eee)", { locale: ko })
                            : "인테리어 시작 예정일을 선택해주세요"}
                        </span>
                        <HugeiconsIcon icon={Calendar01Icon} className="size-4 text-[#8f8f8f]" />
                      </button>
                    </PopoverTrigger>
                    <PopoverContent align="start" className="w-auto rounded-none p-0">
                      <Calendar
                        mode="single"
                        selected={plannedDate}
                        onSelect={setPlannedDate}
                        locale={ko}
                      />
                    </PopoverContent>
                  </Popover>
                </UnderlineField>

                <UnderlineField label="인테리어 플랜(선택)" className="lg:row-span-2">
                  <textarea
                    className="min-h-[132px] w-full resize-none border-0 border-b border-[#4b4b4b] px-0 py-2 text-[14px] leading-6 text-[#202020] placeholder:text-[#d0d0d0] focus:outline-none lg:min-h-[210px]"
                    placeholder="원하시는 인테리어 내용을 작성해주세요"
                  />
                </UnderlineField>

                <div>
                  <p className="mb-2.5 text-[14px] font-semibold tracking-[-0.03em] text-[#262626]">
                    참고 사진(선택)
                  </p>
                  <p className="text-[12px] leading-5 text-[#b2b2b2]">
                    도면 혹은 현장 사진을 첨부해 주시면 더 원활한 상담이 가능합니다.(최대 5장)
                  </p>
                  <div className="mt-3">
                    <UploadBox />
                  </div>
                </div>
              </div>

              <div className="mt-8 space-y-5 lg:mt-auto lg:pt-6">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                  <label className="flex cursor-pointer items-center gap-3 text-[14px] font-semibold tracking-[-0.03em] text-[#3a3a3a]">
                    <button
                      type="button"
                      aria-pressed={privacyAccepted}
                      onClick={() => setPrivacyAccepted((current) => !current)}
                      className={`flex size-6 items-center justify-center transition-colors ${
                        privacyAccepted
                          ? "bg-[#ea5c2b] text-white"
                          : "border border-[#d8cfc5] bg-white text-transparent"
                      }`}
                    >
                      <span className="block h-3.5 w-2.5 rotate-45 border-b-2 border-r-2 border-current" />
                    </button>
                    <button
                      type="button"
                      onClick={openTermsPopup}
                      className="cursor-pointer underline underline-offset-2"
                    >
                      개인정보처리방침 동의
                    </button>
                  </label>

                  <button
                    type="submit"
                    className="flex h-[54px] w-full items-center justify-center rounded-full bg-[#e75a27] px-10 text-[21px] font-semibold tracking-[-0.04em] text-white transition-colors hover:bg-[#d65021] sm:w-auto sm:min-w-[238px]"
                  >
                    상담 신청하기
                  </button>
                </div>

                <div className="border-t border-[#f1ebe4] pt-4 text-[12px] leading-5 text-[#b0aaa2]">
                  <p>{brand.koreanName}</p>
                  <p>{brand.address}</p>
                  <p>
                    {brand.phone} · {brand.email}
                  </p>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}
