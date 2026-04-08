"use client";

import { siteContent } from "@/lib/site-content";

function CloseButton() {
  return (
    <button
      type="button"
      aria-label="창 닫기"
      onClick={() => {
        if (window.opener) {
          window.close();
          return;
        }

        window.location.href = "/contact";
      }}
      className="relative block size-8 text-[#9a9288] transition-colors hover:text-[#1b1b1b] sm:size-10"
    >
      <span className="absolute left-1/2 top-1/2 h-px w-6 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-current sm:w-7" />
      <span className="absolute left-1/2 top-1/2 h-px w-6 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-current sm:w-7" />
    </button>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-7">
      <h2 className="text-[14px] font-semibold tracking-[-0.03em] text-[#1f1f1f]">{title}</h2>
      <div className="mt-3 space-y-2 text-[13px] leading-[1.9] tracking-[-0.02em] text-[#4b4b4b]">
        {children}
      </div>
    </section>
  );
}

function TermsBody() {
  const { brand } = siteContent;

  return (
    <div>
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 text-center">
          <h1 className="text-[20px] font-semibold tracking-[-0.05em] text-[#1b1b1b]">
            개인정보처리방침 동의
          </h1>
        </div>
        <CloseButton />
      </div>

      <div className="mt-8 text-[13px] leading-[1.9] tracking-[-0.02em] text-[#4b4b4b]">
        <p>
          {brand.koreanName}(이하 &apos;제율디앤씨&apos;라고 합니다.)은 실내공간 인테리어 상담 및
          방문견적신청과 관련하여 「개인정보보호법」 제15조 제1항 제1호, 제17조 제1항 제1호,
          제23조 제1호, 제24조 제1항 제1호 및 「신용정보의 이용 및 보호에 관한 법률」 제32조
          제1항, 제33조, 제34조에 따라 아래와 같이 개인정보의 수집·이용 및 제3자 제공에 관하여
          귀하의 동의를 얻고자 합니다.
        </p>
      </div>

      <Section title="1. 개인정보의 수집 목적">
        <p>
          제율디앤씨는 다음의 목적을 위하여 개인정보를 처리하고 있으며, 다음의 목적 이외의 용도로는
          이용하지 않습니다.
        </p>
        <p>
          - 고객 상담의사 확인, 고객에 대한 서비스 제공에 따른 본인 식별·인증, 상담 및 방문견적 등
          각종 서비스 제공을 위한 운영자 및 협력 파트너사 정보 제공, 서비스 공급에 따른 계약 진행 및
          후속 커뮤니케이션
        </p>
      </Section>

      <Section title="2. 개인정보의 수집 항목">
        <p>제율디앤씨는 상담 및 견적 진행 시 다음의 항목을 수집합니다.</p>
        <p>
          - 필수항목: 이름, 연락처, 주소, 상담 내용, 공사 대상 소유물 또는 점유물과 관련해 이용자가
          제출한 사진 및 참고 자료
        </p>
      </Section>

      <Section title="3. 개인정보의 수집 방법">
        <p>제율디앤씨는 다음의 방법으로 개인정보를 수집합니다.</p>
        <p>- 홈페이지 상담 신청, 서면 양식, 전화/문자, 이메일, 이벤트 응모</p>
        <p>- 생성정보 수집 툴을 통한 수집</p>
        <p>- 기타 기술적 방법을 통한 수집</p>
      </Section>

      <Section title="4. 개인정보의 처리 및 보유 기간">
        <p>
          ① 제율디앤씨는 정보주체로부터 개인정보를 수집할 때 동의 받은 개인정보 보유·이용기간 또는
          법령에 따른 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.
        </p>
        <p>② 구체적인 개인정보 처리 및 보유 기간은 다음과 같습니다.</p>
        <p>- 계약 또는 청약철회 등에 관한 기록: 5년</p>
        <p>- 대금결제 및 재화 등의 공급에 관한 기록: 5년</p>
        <p>- 소비자의 불만 또는 분쟁처리에 관한 기록: 3년</p>
      </Section>

      <Section title="5. 개인정보의 파기">
        <p>
          ① 제율디앤씨는 원칙적으로 개인정보 처리목적이 달성된 경우에는 지체 없이 해당 개인정보를
          파기합니다. 파기의 절차, 기한 및 방법은 다음과 같습니다.
        </p>
        <p>
          - 파기절차: 이용자가 입력한 정보는 목적 달성 후 별도의 DB에 옮겨져 내부 방침 및 관련 법령에
          따라 일정 기간 저장된 후 혹은 즉시 파기됩니다.
        </p>
        <p>
          - 파기기한: 개인정보의 보유기간이 경과된 경우 종료일로부터 5일 이내에, 처리 목적 달성 등으로
          불필요하게 되었을 때에는 그 인정일로부터 5일 이내에 파기합니다.
        </p>
        <p>
          - 파기방법: 전자적 파일 형태의 정보는 기록을 재생할 수 없는 기술적 방법을 사용하며, 종이에
          출력된 개인정보는 분쇄 또는 소각을 통하여 파기합니다.
        </p>
      </Section>

      <Section title="6. 개인정보 제3자 제공에 관한 사항">
        <p>① 제공받는 자</p>
        <p>- 제율디앤씨</p>
        <p>- 제율디앤씨 사업 파트너사 및 서비스 수행에 필요한 협력 관계사</p>
        <p>② 제공받는 자의 이용 목적</p>
        <p>- 상담, 견적, 현장 확인, 계약 진행, 만족도 조사 및 서비스 품질 향상</p>
        <p>③ 제공할 개인정보의 항목</p>
        <p>- 이름, 전화번호, 주소, 상담 과정에서 입력한 정보 및 업로드한 자료</p>
        <p>④ 제공받은 자의 개인정보 보유·이용 기간</p>
        <p>
          - 위 개인정보는 제공된 날부터 3년간 보유·이용되며 보유목적 달성 시 또는 정보주체가 삭제를
          요청할 경우 지체 없이 파기합니다.
        </p>
        <p>⑤ 동의를 거부할 권리 및 거부할 경우의 불이익</p>
        <p>
          - 위 개인정보 중 필수항목의 수집·이용에 관한 동의는 제율디앤씨 상담 서비스 제공을 위해
          필수적이므로 이에 동의하셔야 이후 절차를 진행할 수 있습니다.
        </p>
      </Section>

      <Section title="7. 이용자 및 법정대리인의 권리와 행사방법">
        <p>
          ① 이용자 및 법정대리인은 등록되어 있는 이용자 본인 혹은 당해 만 14세 미만자의 개인정보
          관련하여 언제든지 열람, 정정, 삭제, 처리정지, 동의 철회를 요청할 수 있습니다.
        </p>
        <p>
          ② 이용자 및 법정대리인이 개인정보의 오류에 대한 정정을 요청한 경우에는 정정을 완료하기
          전까지 해당 개인정보를 이용 또는 제3자에게 제공하지 않습니다.
        </p>
        <p>
          ③ 이용자는 개인정보를 최신의 상태로 정확하게 입력하여야 하며, 부정확한 정보 입력으로 인해
          발생하는 사고의 책임은 이용자 본인에게 있습니다.
        </p>
      </Section>

      <Section title="8. 개인정보 보호책임자">
        <p>
          ① 제율디앤씨는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한
          정보주체의 불만처리 및 피해구제를 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
        </p>
        <p>▶ 개인정보 보호책임자</p>
        <p>성명: 제율디앤씨 개인정보보호 담당자</p>
        <p>소속부서: 고객상담</p>
        <p>연락처: {brand.phone}</p>
        <p>이메일 주소: {brand.email}</p>
        <p>
          ② 정보주체께서는 제율디앤씨의 서비스를 이용하시면서 발생한 모든 개인정보 보호 관련 문의,
          불만처리, 피해구제 등에 관한 사항을 담당부서로 문의하실 수 있으며, 제율디앤씨는 지체 없이
          답변 및 처리하겠습니다.
        </p>
      </Section>

      <Section title="9. 개인정보 처리방침 변경">
        <p>
          이 개인정보처리방침은 시행일로부터 적용되며, 법령 및 방침에 따른 변경 내용의 추가, 삭제 및
          정정이 있는 경우에는 변경사항의 시행 7일 전부터 공지사항을 통하여 고지할 것입니다.
        </p>
      </Section>

      <Section title="10. 개인정보 자동 수집 장치의 설치/운영 및 거부에 관한 사항">
        <p>
          ① 제율디앤씨는 이용자의 정보를 저장하고 찾아내는 쿠키(cookie) 등 개인정보를 자동으로 수집하는
          장치를 설치·운용할 수 있습니다.
        </p>
        <p>
          ② 이용자는 웹 브라우저에서 옵션을 설정함으로써 모든 쿠키를 허용하거나 거부할 수 있습니다.
        </p>
      </Section>
    </div>
  );
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#f3f1ee] px-4 py-4 sm:px-6 sm:py-6">
      <div className="mx-auto max-w-[680px] rounded-[24px] bg-white px-5 py-6 shadow-[0_20px_50px_rgba(0,0,0,0.06)] sm:px-7 sm:py-8 lg:px-10">
        <TermsBody />
      </div>
    </div>
  );
}
