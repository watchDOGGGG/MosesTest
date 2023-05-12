import { faAngleDown, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Variants, motion } from "framer-motion";
import { useState } from "react";

export function Input() {
  const [type, setType] = useState("Selling");

  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <motion.div className="w-full md:w-[460px] h-[45px] sm:h-[48px] relative mb-4 z-10">
      <div
        onClick={() => setShowDropdown(!showDropdown)}
        className="md:cursor-pointer absolute top-[10px] rounded-l-[10px] left-0 h-[60%] w-[140px] flex items-center justify-center border-r border-[#128C7E]"
      >
        <span className="text-[#C1D7BE]  font-light text-sm md:text-base">
          {"I'm"}
        </span>
        <span className="ml-1 font-light text-[#128C7E]">{type}</span>
        <FontAwesomeIcon
          icon={faAngleDown}
          className="w-[14px] h-[14px] ml-1"
        />
      </div>
      <input
        type={"text"}
        className="h-full w-full outline-none pl-[150px] placeholder:text-[#C1D7BE] rounded-[9px] text-sm md:text-base"
        placeholder={`Products to be ${type === "Selling" ? "sold" : "bought"}`}
      />

      {showDropdown ? (
        <div className="w-[140px] rounded-[10px] bg-white absolute top-[calc(100%+10px)] border p-2 shadow-md">
          <p
            onClick={() => {
              setType("Selling");
              setShowDropdown(false);
            }}
            className={`${
              type === "Selling" ? "bg-[ghostwhite]" : ""
            }  py-2 px-4 rounded-[11px] md:cursor-pointer flex justify-between items-center text-sm md:text-base`}
          >
            <span className="text-sm md:text-[13px]">{"I'm"} Selling</span>
            {type === "Selling" ? (
              <FontAwesomeIcon
                icon={faCheck}
                className="w-[14px] h-[14px] text-green-700"
              />
            ) : (
              ""
            )}
          </p>
          <p
            onClick={() => {
              setType("Buying");
              setShowDropdown(false);
            }}
            className={`${
              type === "Buying" ? "bg-[ghostwhite]" : ""
            } py-2 px-4 rounded-[11px] md:cursor-pointer flex justify-between items-center text-sm md:text-base`}
          >
            <span className="text-[13px]">{"I'm"} Buying</span>
            {type === "Buying" ? (
              <FontAwesomeIcon
                icon={faCheck}
                className="w-[14px] h-[14px] text-green-700"
              />
            ) : (
              ""
            )}
          </p>
        </div>
      ) : (
        ""
      )}
    </motion.div>
  );
}
