import Image from "next/image";
import { useState } from "react";
import { motion, Variants } from "framer-motion";
import CircleDelete from "../../../assets/svg/circle-delete.svg";
import CircleAdd from "../../../assets/svg/circle-add.svg";

export type HomePageCarousalProps = {
  title: string;
  content: string;
};

export const HomePageCarousal = (props: {
  carousalData: Array<HomePageCarousalProps>;
}) => {
  const { carousalData } = props;

  const [idx, setIdx] = useState(-1);

  const fadeInFromDownAnim: Variants = {
    initial: {
      opacity: 0,
      y: 60,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeIn",
      },
    },
  };

  return (
    <div className="mt-8 mx-auto w-full 2xl:w-[1200px]">
      <motion.h3
        variants={fadeInFromDownAnim}
        whileInView="animate"
        initial="initial"
        className="text-[#101828] text-[22px] font-bold  sm:text-[30px] md:text-[58px] text-center md:text-left"
      >
        Frequently asked questions
      </motion.h3>
      <motion.p
        variants={fadeInFromDownAnim}
        whileInView="animate"
        initial="initial"
        className="text-[#667085] text-[15px] md:text-[20px] text-center md:text-left font-normal mt-2 mb-8"
      >
        Everything you need to know about the product and billing.
      </motion.p>
      {carousalData.map((data, i) => (
        <motion.div
          key={i}
          className={`${carousalData.length - 1 === i ? "" : "border-b"} py-5`}
        >
          <motion.div
            onClick={() => setIdx(i === idx ? -1 : i)}
            className="flex justify-between md:cursor-pointer"
          >
            <span className="text-[#101828] text-[14px] sm:text-[18px]">
              {data.title}
            </span>
            <Image src={i === idx ? CircleDelete : CircleAdd} alt="image" />
          </motion.div>
          {idx === i ? (
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="text-[#667085] text-[13px] sm:text-[16px] py-3"
            >
              {data.content}
            </motion.div>
          ) : (
            ""
          )}
        </motion.div>
      ))}
    </div>
  );
};
