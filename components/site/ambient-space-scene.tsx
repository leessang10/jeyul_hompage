import { cn } from "@/lib/utils";

type AmbientSpaceSceneProps = {
  variant: "residential" | "commercial";
  className?: string;
};

export function AmbientSpaceScene({
  variant,
  className,
}: AmbientSpaceSceneProps) {
  const residential = variant === "residential";

  return (
    <div
      aria-hidden="true"
      className={cn(
        "relative h-full w-full overflow-hidden",
        residential
          ? "bg-[linear-gradient(135deg,#2e3234_0%,#6f7672_32%,#b19f89_60%,#dbd2c5_100%)]"
          : "bg-[linear-gradient(135deg,#202833_0%,#5f6f78_30%,#98a3a1_58%,#d4d7d2_100%)]",
        className
      )}
    >
      <div
        className={cn(
          "absolute inset-0",
          residential
            ? "bg-[linear-gradient(180deg,rgba(10,13,14,0.22),rgba(10,13,14,0.04)_24%,rgba(10,13,14,0.42)_100%)]"
            : "bg-[linear-gradient(180deg,rgba(6,10,16,0.34),rgba(6,10,16,0.08)_26%,rgba(6,10,16,0.56)_100%)]"
        )}
      />

      <div
        className={cn(
          "absolute inset-x-0 top-0 h-[56%]",
          residential
            ? "bg-[linear-gradient(180deg,rgba(244,237,226,0.9),rgba(217,206,191,0.54))]"
            : "bg-[linear-gradient(180deg,rgba(219,228,230,0.82),rgba(175,190,196,0.34))]"
        )}
      />
      <div
        className={cn(
          "absolute inset-x-0 bottom-0 h-[44%]",
          residential
            ? "bg-[linear-gradient(180deg,rgba(120,103,84,0.54),rgba(60,49,40,0.92))]"
            : "bg-[linear-gradient(180deg,rgba(80,90,96,0.62),rgba(30,38,45,0.96))]"
        )}
      />

      <div
        className={cn(
          "absolute right-[8%] top-[8%] h-[56%] w-[32%] border-l border-r",
          residential
            ? "border-white/30 bg-[linear-gradient(180deg,rgba(245,247,245,0.78),rgba(176,182,180,0.18))]"
            : "border-white/20 bg-[linear-gradient(180deg,rgba(225,236,240,0.54),rgba(118,137,148,0.16))]"
        )}
      />
      <div className="absolute right-[15%] top-[12%] h-[48%] w-px bg-white/36" />
      <div className="absolute right-[22%] top-[12%] h-[48%] w-px bg-white/24" />

      {residential ? (
        <>
          <div className="absolute left-[8%] top-[14%] h-[30%] w-[35%] rounded-[2.2rem] bg-[radial-gradient(circle_at_top,rgba(249,246,240,0.96),rgba(225,210,193,0.46))] blur-[2px]" />
          <div className="absolute left-[9%] top-[17%] h-[18%] w-[32%] rounded-[999px] border border-white/18 bg-white/10 backdrop-blur-[2px]" />
          <div className="absolute left-[12%] bottom-[18%] h-[24%] w-[34%] rounded-[2rem_2rem_0.9rem_0.9rem] bg-[linear-gradient(180deg,rgba(210,197,183,0.92),rgba(145,124,103,0.88))] shadow-[0_30px_50px_-24px_rgba(0,0,0,0.65)]" />
          <div className="absolute left-[19%] bottom-[16%] h-[5%] w-[12%] rounded-full bg-[rgba(60,46,36,0.5)] blur-xl" />
          <div className="absolute left-[42%] bottom-[23%] h-[16%] w-[22%] rounded-[1.4rem] bg-[linear-gradient(180deg,rgba(76,63,51,0.78),rgba(41,32,25,0.92))] shadow-[0_30px_40px_-24px_rgba(0,0,0,0.72)]" />
          <div className="absolute left-[44%] bottom-[33%] h-[1.4%] w-[18%] rounded-full bg-[rgba(232,224,214,0.88)]" />
          <div className="absolute left-[58%] bottom-[17%] h-[24%] w-[13%] rounded-[1.8rem_1.8rem_0.8rem_0.8rem] bg-[linear-gradient(180deg,rgba(204,193,180,0.86),rgba(118,99,80,0.92))]" />
          <div className="absolute left-[58%] bottom-[40%] h-[2px] w-[13%] bg-white/24" />
        </>
      ) : (
        <>
          <div className="absolute left-[9%] top-[16%] h-[24%] w-[26%] rounded-[1.1rem] border border-white/14 bg-[linear-gradient(180deg,rgba(240,245,247,0.24),rgba(145,161,172,0.06))] backdrop-blur-[2px]" />
          <div className="absolute left-[12%] top-[20%] h-[2px] w-[18%] bg-white/24" />
          <div className="absolute left-[12%] top-[24%] h-[2px] w-[13%] bg-white/14" />
          <div className="absolute left-[15%] bottom-[17%] h-[17%] w-[38%] rounded-[1.6rem] bg-[linear-gradient(180deg,rgba(55,65,73,0.96),rgba(28,33,39,0.96))] shadow-[0_30px_50px_-24px_rgba(0,0,0,0.7)]" />
          <div className="absolute left-[20%] bottom-[32%] h-[2px] w-[26%] bg-[rgba(209,221,227,0.52)]" />
          <div className="absolute left-[58%] bottom-[18%] h-[22%] w-[17%] rounded-[1.2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(165,180,186,0.44),rgba(81,94,101,0.92))]" />
          <div className="absolute left-[62%] bottom-[16%] h-[7%] w-[11%] rounded-full bg-[rgba(29,36,43,0.55)] blur-xl" />
          <div className="absolute right-[28%] bottom-[20%] h-[26%] w-[9%] bg-[linear-gradient(180deg,rgba(216,228,233,0.42),rgba(72,85,93,0.94))]" />
          <div className="absolute right-[28%] bottom-[43%] h-[2px] w-[9%] bg-white/18" />
        </>
      )}

      <div className="absolute inset-x-[7%] bottom-[12%] h-px bg-white/14" />
      <div className="absolute inset-y-[12%] left-[7%] w-px bg-white/12" />
      <div className="absolute inset-y-[12%] right-[7%] w-px bg-white/12" />
      <div
        className={cn(
          "absolute left-[31%] top-[16%] h-[11%] w-[11%] rounded-full blur-2xl",
          residential ? "bg-white/28" : "bg-[#dff4ff]/20"
        )}
      />
      <div
        className={cn(
          "absolute right-[14%] top-[8%] h-[16%] w-[16%] rounded-full blur-3xl",
          residential ? "bg-white/18" : "bg-[#d8ecff]/16"
        )}
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,17,17,0.22)_0%,transparent_22%,transparent_78%,rgba(17,17,17,0.18)_100%)]" />
    </div>
  );
}
