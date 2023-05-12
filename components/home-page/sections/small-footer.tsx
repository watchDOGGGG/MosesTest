import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import {
  faFacebook,
  faFacebookSquare,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

import LogoBlack from "../../../assets/svg/logo-black.svg";

export function SmallFooter() {
  return (
    <footer className="md:hidden pt-5 bg-white">
      <div className="flex justify-between gap-x-1 px-4">
        <motion.div>
          <h3 className="text-[16px] mb-3 font-merry">Services</h3>
          <ul className="flex flex-col gap-y-2">
            <li className="text-[11px]">Web design & development</li>
            <li className="text-[11px]">Social media management</li>
            <li className="text-[11px]">Social media marketing</li>
          </ul>
        </motion.div>

        <motion.div>
          <h3 className="text-[16px] mb-3 font-merry">Company</h3>
          <ul className="flex flex-col gap-y-2">
            <li className="text-[11px]">Web design & development</li>
            <li className="text-[11px]">Social media management</li>
            <li className="text-[11px]">Social media marketing</li>
          </ul>
        </motion.div>
      </div>

      <div className="flex justify-between items-center px-4">
        <motion.div className="flex flex-col">
          <div className="my-8">
            <Image src={LogoBlack} alt="" width={120} />
          </div>

          <ul className="flex items-center gap-6 mb-2">
            <li>
              <Link
                href={
                  "https://www.facebook.com/profile.php?id=100089563119353&mibextid=ZbWKwL"
                }
                target={"_blank"}
              >
                <FontAwesomeIcon
                  icon={faFacebookSquare}
                  className="w-[25px] h-[25px] hover:text-blue-600 md:cursor-pointer"
                />
              </Link>
            </li>
            <li>
              <FontAwesomeIcon
                icon={faInstagram}
                className="w-[25px] h-[25px] hover:text-blue-600 md:cursor-pointer"
              />
            </li>
            <li>
              <FontAwesomeIcon
                icon={faLinkedin}
                className="w-[25px] h-[25px] hover:text-blue-600 md:cursor-pointer"
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
                  className="w-[25px] h-[25px] hover:text-blue-600 md:cursor-pointer"
                />
              </Link>
            </li>
          </ul>

          <div className="my-7 font-merry font-light text-xl">
            +234 65874 987
          </div>
          <span className="font-merry font-bold text-base">Address</span>
          <div className="font-merry font-light text-sm">
            3 Calabar road opposite UBA
          </div>
        </motion.div>

        <ul>
          <li className="text-[12px] mb-3">Cookie Policy</li>
          <li className="text-[12px]">Privacy Policy</li>
        </ul>
      </div>
      <div className="text-center text-[9px] py-4 bg-[#128C7E] text-white mt-5">
        Copyright ©2023 Kinriel Technologies. All Right Reserved
      </div>
    </footer>
  );
}
