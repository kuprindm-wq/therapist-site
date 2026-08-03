type TextFieldProps = {
  label: string;
  name: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  placeholder?: string;
  optional?: boolean;
  textarea?: boolean;
  rows?: number;
  type?: React.HTMLInputTypeAttribute;
};

export default function TextField({
  label,
  name,
  value,
  onChange,
  placeholder,
  optional = false,
  textarea = false,
  rows = 6,
  type = "text",
}: TextFieldProps) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-3 block text-sm text-[#746D64]"
      >
        {label}

        {optional && (
          <span className="text-[#A69D92]">
            {" "}
            (необязательно)
          </span>
        )}
      </label>

      {textarea ? (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          rows={rows}
          placeholder={placeholder}
          className="w-full resize-none rounded-2xl border border-[#E5DDD3] bg-transparent p-5 leading-8 text-[#2E2B27] placeholder:text-[#A89E92] focus:border-[#53614D] focus:outline-none"
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full border-0 border-b border-[#DDD4C8] bg-transparent px-0 py-3 text-[#2E2B27] placeholder:text-[#A89E92] focus:border-[#53614D] focus:outline-none"
        />
      )}
    </div>
  );
}