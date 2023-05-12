import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { HTMLProps, ReactNode, useState } from "react";
import CaretDown from "../../../assets/svg/caret-down.svg";
import { useCustomState } from "../../../hooks";

export type SelectProps = {
  width: number | string;
  height?: number | string;
  value?: string | number;
  label?: string;
  onChange: (value: string | number) => any;
  options?: Array<{ name: string | ReactNode; value: string | number }>;
  className?: string;
};

export function Select({
  width,
  options,
  onChange,
  value,
  label,
  className,
}: SelectProps) {
  const [showDropDown, setShowDropDown] = useState(false);

  const [_value, _setValue] = useCustomState<string | number>(value ?? "");

  return (
    <div className={`flex flex-col gap-y-2 relative`}>
      {label ? (
        <label className="text-[12px] md:text-[14px]">{label}</label>
      ) : (
        ""
      )}
      <div
        style={{ width }}
        className={`select-none relative h-[41px] sm:h-[46px]`}
      >
        <div
          onClick={() => setShowDropDown(!showDropDown)}
          className={`rounded-[4px] ${className} w-full h-full border border-[#D0D5DD] flex items-center justify-between px-4 shadow-sm md:cursor-pointer`}
        >
          <span className="text-[12px] sm:text-[13px]">
            {_value
              ? options?.find((option) => option.value === _value)?.name
              : "Select"}
          </span>
          <Image
            src={CaretDown}
            alt=""
            className={`transition-all ${
              showDropDown ? "rotate-180" : "rotate-0"
            }`}
          />
        </div>

        {showDropDown ? (
          <div className="w-full rounded-[10px] absolute top-[calc(100%+10px)] border bg-white z-[10] max-h-[370px] overflow-auto">
            {options?.map((option, i) => (
              <div
                onClick={() => {
                  _setValue(option.value);
                  onChange(option.value);
                  setShowDropDown(false);
                }}
                className="p-4 md:cursor-pointer hover:bg-[ghostwhite] flex justify-between items-center"
                key={i}
              >
                <span className="text-[12px] sm:text-[14px]">
                  {option.name}
                </span>
                {option.value === _value ? (
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="w-[14px] h-[14px] text-[#1DBF73]"
                  />
                ) : (
                  ""
                )}
              </div>
            ))}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
