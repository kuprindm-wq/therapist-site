type ArticleVisualProps = {
  variant?: "circle" | "line" | "window" | "path";
};

export default function ArticleVisual({
  variant = "circle",
}: ArticleVisualProps) {
  return (
    <div
      aria-hidden="true"
      className="relative h-32 overflow-hidden rounded-[28px] border border-[#E3DAD0] bg-[#F3EEE7] sm:h-40"
    >
      {variant === "circle" && (
        <>
          <div className="absolute left-[18%] top-1/2 h-20 w-20 -translate-y-1/2 rounded-full border border-[#C9BDAE]" />

          <div className="absolute left-[35%] top-1/2 h-12 w-12 -translate-y-1/2 rounded-full border border-[#D7CEC2]" />

          <div className="absolute right-[20%] top-1/2 h-24 w-24 -translate-y-1/2 rounded-full border border-[#C9BDAE]" />

          <div className="absolute left-1/2 top-1/2 h-px w-24 -translate-y-1/2 bg-[#B9AD9C]" />
        </>
      )}

      {variant === "line" && (
        <>
          <div className="absolute left-[10%] right-[10%] top-1/2 h-px bg-[#B9AD9C]" />

          <div className="absolute left-[28%] top-[28%] h-10 w-10 rounded-full border border-[#C9BDAE]" />

          <div className="absolute right-[28%] top-[52%] h-10 w-10 rounded-full border border-[#C9BDAE]" />

          <div className="absolute left-[45%] top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-[#53614D]" />
        </>
      )}

      {variant === "window" && (
        <>
          <div className="absolute left-[18%] top-1/2 h-20 w-28 -translate-y-1/2 border border-[#C9BDAE]" />

          <div className="absolute left-[18%] top-1/2 h-px w-28 bg-[#C9BDAE]" />

          <div className="absolute left-[calc(18%+56px)] top-[calc(50%-40px)] h-20 w-px bg-[#C9BDAE]" />

          <div className="absolute right-[20%] top-1/2 h-px w-20 -translate-y-1/2 bg-[#B9AD9C]" />
        </>
      )}

      {variant === "path" && (
        <>
          <div className="absolute left-[10%] top-[65%] h-px w-[28%] rotate-[-12deg] bg-[#C9BDAE]" />

          <div className="absolute left-[35%] top-[55%] h-px w-[30%] rotate-[14deg] bg-[#C9BDAE]" />

          <div className="absolute right-[10%] top-[44%] h-px w-[30%] rotate-[-9deg] bg-[#C9BDAE]" />

          <div className="absolute left-[48%] top-[48%] h-2 w-2 rounded-full bg-[#53614D]" />
        </>
      )}
    </div>
  );
}