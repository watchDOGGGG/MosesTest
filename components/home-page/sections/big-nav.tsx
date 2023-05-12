import Image from "next/image";
import Link from "next/link";
import LogoWhite from "../../../assets/svg/logo-white.svg";
import LogoBlack from "../../../assets/svg/logo-black.svg";
import { useRouter } from "next/router";

type BigNavProps = {
  variant?: "transparent" | "normal" | "stripe";
};

export function BigNav({ variant = "normal" }: BigNavProps) {
  const router = useRouter();

  return (
    <nav
      style={{ background: variant === "normal" ? "#128C7E" : "transparent" }}
      className="hidden md:flex items-center justify-between px-3 md:px-14 sticky top-0 z-[500] py-4"
    >
      <div className="flex items-center gap-x-4">
        <Image
          src={variant === "normal" ? LogoWhite : LogoBlack}
          alt=""
          onClick={() => router.push("/")}
          className={`md:cursor-pointer ${
            variant === "transparent" ? "hidden" : ""
          }`}
        />
      </div>

      <ul
        className={`flex items-center gap-x-6 ${
          variant === "normal" ? "text-white" : "text-black"
        }`}
      >
        <li className="md:cursor-pointer text-[14px]">
          <Link href={"/#how-it-works"}>How it works</Link>
        </li>
        <li className="md:cursor-pointer text-[14px]">
          <Link href={"/#about-us"}>About us</Link>
        </li>
        <li className="md:cursor-pointer text-[14px]">News</li>
        <li className="md:cursor-pointer text-[14px]">
          <Link href={"/#faqs"}>FAQ</Link>
        </li>
      </ul>

      <ul
        className={`flex items-center gap-x-6 ${
          variant === "transparent" ? "text-black" : "text-white"
        }`}
      >
        <li className="md:cursor-pointer text-[14px]">
          <Link href={"/auth/login"}>Login</Link>
        </li>
        <li
          style={{
            background:
              variant === "transparent" ? "#1DBF73" : "rgba(217,217,217,0.4)",
            color: variant === "transparent" ? "white" : "",
          }}
          onClick={() => router.push("/auth/register")}
          className="w-[122px] h-[35px] flex items-center justify-center md:cursor-pointer active:scale-95 text-[14px]"
        >
          Sign Up
        </li>
      </ul>
    </nav>
  );
}
