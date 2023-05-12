import Image from "next/image";
import { motion, Variants } from "framer-motion";
import LogoBlack from "../../../assets/svg/logo-black.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faFacebookSquare,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export function BigFooter() {
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
        type: "spring",
        stiffness: 300,
      },
    },
  };

  const fadeInFromLeftAnim: Variants = {
    initial: {
      opacity: 0,
      x: -300,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeIn",
        type: "spring",
      },
    },
  };

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
      },
    },
  };

  return (
    <footer className="relative bg-white hidden md:block">
      {/* <div className="flex justify-between absolute h-[calc(100%+30px)] w-full z-10">
        <Image src={BackDropBall} alt="" className="ml-[-160px]" />
        <Image src={BackDropBall} alt="" />
      </div> */}

      <div className="overflow-hidden h-[350px] relative flex">
        <div className="h-full relative z-30 flex items-center justify-between px-14 w-full">
          <motion.div
            variants={fadeInFromDownAnim}
            whileInView={"animate"}
            initial={"initial"}
          >
            <div className="mb-6">
              <Image src={LogoBlack} alt="" />
            </div>

            <ul className="flex items-center gap-6 mb-5">
              <li>
                <Link
                  href={
                    "https://www.facebook.com/profile.php?id=100089563119353&mibextid=ZbWKwL"
                  }
                  target={"_blank"}
                >
                  <FontAwesomeIcon
                    icon={faFacebookSquare}
                    className="w-[30px] h-[30px] hover:text-blue-600 md:cursor-pointer"
                  />
                </Link>
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="w-[30px] h-[30px] hover:text-blue-600 md:cursor-pointer"
                />
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="w-[30px] h-[30px] hover:text-blue-600 md:cursor-pointer"
                />
              </li>
              <li>
                <Link
                  href={
                    "https://twitter.com/Kinrielpay?t=fRS1GZ1qACluAYsrcPMN-g&s=08"
                  }
                  target={"_blank"}
                >
                  <FontAwesomeIcon
                    icon={faTwitter}
                    className="w-[30px] h-[30px] hover:text-blue-600 md:cursor-pointer"
                  />
                </Link>
              </li>
            </ul>

            <div className="my-7 font-merry font-light text-2xl">
              +234 65874 987
            </div>

            <span className="font-merry font-bold">Address</span>

            <div className="font-merry font-light">3 Calabar road</div>
            <div className="font-merry font-light">opposite UBA</div>
          </motion.div>

          <motion.div
            variants={fadeInFromDownAnim}
            whileInView={"animate"}
            initial={"initial"}
          >
            <h3 className="text-[20px] mb-3 font-merry">Services</h3>
            <ul className="flex flex-col gap-y-2">
              <li className="text-[14px]">Web design & development</li>
              <li className="text-[14px]">Social media management</li>
              <li className="text-[14px]">Social media marketing</li>
            </ul>
          </motion.div>

          <motion.div
            variants={fadeInFromDownAnim}
            whileInView={"animate"}
            initial={"initial"}
          >
            <h3 className="text-[20px] mb-3 font-merry">Company</h3>
            <ul className="flex flex-col gap-y-2">
              <li className="text-[14px]">Web design & development</li>
              <li className="text-[14px]">Social media management</li>
              <li className="text-[14px]">Social media marketing</li>
            </ul>
          </motion.div>

          <motion.div
            variants={fadeInFromDownAnim}
            whileInView={"animate"}
            initial={"initial"}
          >
            <h3 className="text-[20px] mb-3 font-merry">Legal Staff</h3>
            <ul className="flex flex-col gap-y-2">
              <li className="text-[14px]">Web design & development</li>
              <li className="text-[14px]">Social media management</li>
              <li className="text-[14px]">Social media marketing</li>
            </ul>
          </motion.div>
        </div>
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="ball left-[-150px] top-[50px] w-[400px] h-[400px] bg-[#E8F9F1] absolute rounded-full"
        ></motion.div>
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="ball right-[-30px] top-[50px] w-[300px] h-[300px] bg-[#E8F9F1] absolute rounded-full"
        ></motion.div>
      </div>

      <div className="bg-[#128C7E] h-[55px] flex items-center px-10 justify-between">
        <motion.span
          variants={fadeInFromLeftAnim}
          whileInView={"animate"}
          initial={"initial"}
          className="text-white font-extralight font-merry text-[11px]"
        >
          Copyright ©{new Date().getFullYear()} Kinriel Technologies. All Right
          Reserved
        </motion.span>

        <motion.ul
          // variants={fadeInFromDownAnim}
          // whileInView={"animate"}
          // initial={"initial"}
          className="flex gap-5"
        >
          <li className="text-white font-merry font-light text-[11px]">
            Cookie Policy
          </li>
          <li className="text-white font-merry font-light text-[11px]">
            Privacy Policy
          </li>
        </motion.ul>
      </div>
    </footer>
  );
}
