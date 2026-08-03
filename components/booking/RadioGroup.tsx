type Option = {
  value: string;
  label: string;
};

type RadioGroupProps = {
  label: string;
  name: string;
  options: Option[];
  columns?: 1 | 2;
  fullWidthLast?: boolean;
};

export default function RadioGroup({
  label,
  name,
  options,
  columns = 2,
  fullWidthLast = false,
}: RadioGroupProps) {
  return (
    <div>
      <label className="mb-4 block text-sm text-[#746D64]">
        {label}
      </label>

      <div
        className={
          columns === 2
            ? "grid grid-cols-2 gap-3"
            : "grid grid-cols-1 gap-3"
        }
      >
        {options.map((option, index) => {
          const isLast =
            fullWidthLast &&
            columns === 2 &&
            index === options.length - 1;

          return (
            <label
              key={option.value}
              className={[
                "group cursor-pointer rounded-xl border p-4 transition-all duration-300",
                "border-[#E5DDD3]",
                "hover:border-[#53614D]",
                "hover:bg-[#F7F4EF]",
                isLast ? "col-span-2" : "",
              ].join(" ")}
            >
              <input
                type="radio"
                name={name}
                value={option.value}
                className="peer sr-only"
              />

              <div className="flex items-center gap-4">
                <div className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-[#CFC6BA] transition-all duration-300 peer-checked:border-[#53614D]">
                  <div className="h-2.5 w-2.5 scale-0 rounded-full bg-[#53614D] transition-transform duration-300 peer-checked:scale-100" />
                </div>

                <span className="text-[#2E2B27] transition-colors duration-300 peer-checked:text-[#53614D]">
                  {option.label}
                </span>
              </div>
            </label>
          );
        })}
      </div>
    </div>
  );
}