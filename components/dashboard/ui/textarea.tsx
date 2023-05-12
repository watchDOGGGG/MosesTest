type TextAreaProps = React.HTMLProps<HTMLTextAreaElement> & {
  width: string | number;
  height?: string | number;
  label?: string;
};

export function TextArea(props: TextAreaProps) {
  const { width, height, className, label } = props;
  return (
    <div className="flex flex-col gap-y-2">
      {label ? (
        <label className="text-[12px] md:text-[14px]">{label}</label>
      ) : (
        ""
      )}
      <div style={{ width, height: height ?? 96 }}>
        <textarea
          {...props}
          className={`${className} w-full h-full outline-none rounded-[4px] shadow-sm border border-[#D0D5DD] p-4 placeholder:text-[#C1D7BE]`}
        ></textarea>
      </div>
    </div>
  );
}
