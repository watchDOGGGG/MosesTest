import Image from "next/image";
import { faAngleDown, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NigeriaFlag from "../../../assets/svg/nigeria-flag.svg";
import { Variants, motion } from "framer-motion";

export function Select() {
  return (
    <motion.div className="w-full md:w-[460px] h-[45px] sm:h-[48px] relative rounded-[9px] overflow-none overflow-hidden mb-4">
      <input
        type={"text"}
        className="h-full w-full outline-none pl-[15px] pr-[110px] placeholder:text-[#C1D7BE] placeholder:font-light text-sm md:text-base"
        placeholder="for N33,000"
      />
      <div className="absolute top-[10px] right-0 h-[60%] w-[100px] flex gap-2 items-center">
        <Image src={NigeriaFlag} alt="" />
        <span className="font-light text-sm md:text-base">NG</span>
        <FontAwesomeIcon
          icon={faCaretDown}
          className="w-[14px] h-[14px] text-[#C1D7BE] ml-1"
        />
      </div>
    </motion.div>
  );
}
