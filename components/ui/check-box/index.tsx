import Image from "next/image";
import CheckBoxSvg from "../../../assets/svg/check-box.svg";
import CheckBoxRectSvg from "../../../assets/svg/check-box-rect.svg";

type CheckBoxProps = {
  value: boolean;
  width: number;
  height: number;
  onClick?: () => any;
};

export function CheckBox({ value, width, height, onClick }: CheckBoxProps) {
  return (
    <>
      {value ? (
        <Image
          src={CheckBoxSvg}
          width={width}
          height={height}
          onClick={onClick}
          className="md:cursor-pointer"
          alt=""
        />
      ) : (
        <Image
          src={CheckBoxRectSvg}
          width={width}
          height={height}
          onClick={onClick}
          className="md:cursor-pointer"
          alt=""
        />
      )}
    </>
  );
}
