import { ReactNode, useState } from "react";
import { motion } from "framer-motion";

export const TitleWithLine = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className="relative inline-block">
      <h2
        className={`relative z-[10] text-[26px] md:text-[54px] font-bold ${className}`}
      >
        {children}
      </h2>
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: "100%", opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="h-[30%] w-[calc(100%+10px)] bg-[#1DBF73] absolute top-[65%] z-[1]"
      ></motion.div>
    </div>
  );
};
