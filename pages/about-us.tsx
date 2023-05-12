import { motion, Variants } from "framer-motion";
import Image from "next/image";
import HomePageManSign from "../assets/images/home-page-man-sign.png";
import { TitleWithLine } from "../components/home-page";
import { BigFooter } from "../components/home-page/sections/big-footer";
import { BigNav } from "../components/home-page/sections/big-nav";
import { SmallFooter } from "../components/home-page/sections/small-footer";
import SmallNav from "../components/home-page/sections/small-nav";

export default function AboutUs() {
  const fadeInFromRightAnim: Variants = {
    initial: {
      opacity: 0,
      x: 300,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeIn",
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-y-auto overflow-x-hidden">
      <BigNav />
      <SmallNav />

      <div className="px-3 md:px-14 mt-14">
        <TitleWithLine>About Kinriel Pay</TitleWithLine>
      </div>

      <div className="flex justify-between mt-10 md:mt-0 mb-7 flex-wrap gap-y-5 px-3 md:px-14 py-10">
        <motion.div className="w-full lg:w-[calc(100%-450px)] xl:w-[calc(100%-650px)] mt-10 md:mt-20 order-2 md:order-1">
          <p className="font-light text-[13px] md:text-[18px]">
            There have been cases of scam associated with online transactions
            and no one is immune to this. Many people across the world have been
            victims of internet fraud. This challenge has remarkably hindered
            the trust of the people who have the intention of buying or selling
            goods and services over the internet.
          </p>
          <p className="my-8 font-light text-[13px] md:text-[18px]">
            Therefore, {"it’s"} important to implement an online payment
            platform that would eliminate the possibility of paying for a
            product online without getting the product because it was a mere
            scam.
          </p>
          <p className=" font-light text-[13px] md:text-[18px] mb-8">
            To achieve the objective of encouraging the growth of e-commerce in
            Africa and across the world, Kinriel Technologies Limited is
            implementing a Kinriel Pay platform - a secure, fast, efficient and
            a user friendly IT based solution that protects online transactions
            between the seller and the buyer.
          </p>
        </motion.div>
        <motion.div
          variants={fadeInFromRightAnim}
          initial="initial"
          whileInView={"animate"}
          className="relative w-full sm:w-[400px] xl:w-[560px] h-[300px] sm:h-[433px] xl:h-[600px] ml-auto order-1 md:order-2"
        >
          <Image src={HomePageManSign} fill alt="image" />
        </motion.div>
      </div>
      <BigFooter />
      <SmallFooter />
    </div>
  );
}
