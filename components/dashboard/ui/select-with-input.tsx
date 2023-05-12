import { Input } from "./input";
import { Select } from "./select";

type SelectWithInputProps = {
  width: string | number;
  height?: string | number;
  label?: string;
  onChange: (value: string | number) => any;
};

export default function SelectWithInput(props: SelectWithInputProps) {
  const { width, height, label, onChange } = props;
  return (
    <div className="flex flex-col gap-y-2">
      {label ? (
        <label className="text-[12px] md:text-[14px]">{label}</label>
      ) : (
        ""
      )}
      <div
        style={{ width, height: height ?? 46 }}
        className=" flex items-center overflow-visible relative"
      >
        <div className="w-[83px] h-full">
          <Select
            width={"100%"}
            height={height}
            onChange={onChange}
            value={1}
            options={[{ value: 1, name: "NG" }]}
            className="rounded-none rounded-l-[4px] bg-[#FAFAFA] border-r-[transparent]"
          />
        </div>
        <div className="w-[calc(100%-83px)] h-full">
          <Input
            width={"100%"}
            height={height}
            className="rounded-none rounded-r-[4px]"
          />
        </div>
      </div>
    </div>
  );
}
