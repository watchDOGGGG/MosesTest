type InputProps = React.HTMLProps<HTMLInputElement> & {
  width: string | number;
  label?: string;
};

export function Input(props: InputProps) {
  const { width, height, className, label } = props;
  return (
    <div className="flex flex-col gap-y-2">
      {label ? (
        <label className="text-[12px] md:text-[14px]">{label}</label>
      ) : (
        ""
      )}
      <div style={{ width }} className="h-[41px] sm:h-[46px]">
        <input
          {...props}
          className={`rounded-[4px] ${className} w-full h-full outline-none shadow-sm border border-[#D0D5DD] p-4 placeholder:text-[#C1D7BE]`}
        />
      </div>
    </div>
  );
}
