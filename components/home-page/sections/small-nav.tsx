import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dispatch, SetStateAction, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Logo from "../../../assets/svg/logo-white.svg";
import LogoBlack from "../../../assets/svg/logo-black.svg";
import { useRouter } from "next/router";

export default function SmallNav({ bgColor }: { bgColor?: string }) {
  const [showSideBar, setShowSideBar] = useState(false);

  const router = useRouter();

  return (
    <div className="md:hidden sticky top-0 z-[100]">
      <nav
        style={{ background: bgColor ? bgColor : "#128C7E" }}
        className="p-4 flex items-center justify-between"
      >
        <Image
          src={Logo}
          alt="logo"
          width={140}
          onClick={() => router.push("/")}
        />
        <FontAwesomeIcon
          icon={faBars}
          className="w-[25px] h-[25px] text-white"
          onClick={() => setShowSideBar(true)}
        />
      </nav>

      {showSideBar ? (
        <SideBar setShowSideBar={setShowSideBar} showSideBar={showSideBar} />
      ) : (
        ""
      )}
    </div>
  );
}

type SideBarProps = {
  setShowSideBar: Dispatch<SetStateAction<boolean>>;
  showSideBar: boolean;
};

const SideBar = ({ setShowSideBar, showSideBar }: SideBarProps) => {
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0, x: "100%" }}
      animate={{ opacity: 1, x: "0%" }}
      transition={{ type: "tween" }}
      className="fixed top-0 left-0 w-full h-full bg-white z-[1000]"
    >
      <div className="h-[60px] flex items-center px-4 border-b">
        <FontAwesomeIcon
          icon={faXmark}
          className="font-light w-[30px] h-[30px]"
          onClick={() => setShowSideBar(false)}
        />

        <div className="mx-auto">
          <Image src={LogoBlack} alt="logo" width={100} />
        </div>
      </div>

      <ul className="">
        <li
          className="h-[80px] flex items-center border-b px-4 text-[21px]"
          onClick={() => {
            setShowSideBar(false);
            router.push("/#how-it-works");
          }}
        >
          How it works
        </li>
        <li
          className="h-[80px] flex items-center border-b px-4 text-[21px]"
          onClick={() => {
            setShowSideBar(false);
            router.push("/#about-us");
          }}
        >
          About us
        </li>
        <li
          className="h-[80px] flex items-center border-b px-4 text-[21px]"
          onClick={() => null}
        >
          News
        </li>
        <li
          className="h-[80px] flex items-center border-b px-4 text-[21px]"
          onClick={() => {
            setShowSideBar(false);
            router.push("/#faqs");
          }}
        >
          FAQ
        </li>
      </ul>

      <div className="px-4 sticky top-full py-5 flex flex-col gap-y-4">
        <button
          onClick={() => router.push("/auth/register")}
          className="w-full h-[50px] rounded-[10px] border border-[#128C7E] active:scale-95"
        >
          Sign up
        </button>
        <button
          onClick={() => router.push("/auth/login")}
          className="w-full h-[50px] rounded-[10px] bg-[#128C7E] active:scale-95 text-white"
        >
          Log in
        </button>
      </div>
    </motion.div>
  );
};
