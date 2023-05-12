import Image from "next/image";
import UploadSvg from "../../../assets/svg/upload.svg";

type DropzoneProps = {
  width: number | string;
  height?: number | string;
  label?: string;
};

export function Dropzone({ width, height, label }: DropzoneProps) {
  return (
    <div className="flex flex-col gap-y-2">
      {label ? (
        <label className="text-[12px] md:text-[14px]">{label}</label>
      ) : (
        ""
      )}

      <div
        style={{ width, height: height ?? 96 }}
        className="border border-[#D0D5DD] border-dashed flex flex-col items-center justify-center gap-y-3 active:scale-95 md:cursor-pointer"
      >
        <Image src={UploadSvg} alt="" />

        <p className="text-[#191D23] font-light text-[10px]">
          Browse and chose the files from your computer
        </p>
      </div>
    </div>
  );
}
