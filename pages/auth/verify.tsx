import Image from "next/image";
import { motion } from "framer-motion";
import LogoWhite from "../../assets/svg/logo-white.svg";
import { BigNav } from "../../components/home-page/sections/big-nav";
import { CheckBox } from "../../components/ui";
import { useState } from "react";
import SmallNav from "../../components/home-page/sections/small-nav";
import { useRouter } from "next/router";
import axios from 'axios'
import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Login() {
  const router = useRouter();


  const [value, setValue] = React.useState({
    otp:''
  })

 
  function VerifyOtp() {

    const data = new URLSearchParams();
    data.append('email', localStorage.getItem("email") || "");
    data.append('otp', value.otp);
    data.append('intent', 'sign_otp');
    data.append('userType', 'user');

    axios.put('http://35.221.45.86/kpa-auth/validate-otp', data)
      .then((res) => {
        toast.success('otp verified successfully')
        router.push("/auth/login")
      })
      .catch((err) => {
        toast.error(err.response.data.message)
        console.log(err.response.data.message)
      })
  }
  

  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-auto">
      <div className="relative z-[100]">
        <BigNav variant="transparent" />
        <SmallNav />
      </div>

      <motion.div
        // initial={{ x: "-100%", opacity: 0 }}
        // animate={{ x: "0", opacity: 1 }}
        // transition={{ duration: 0.3, type: "tween" }}
        className="fixed w-[450px] xl:w-[700px] h-full top-0 left-0 bg-[#128C7E] hidden lg:flex items-center justify-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Image src={LogoWhite} alt="" width={300} />
        </motion.div>
      </motion.div>

      <div className="px-4 absolute top-[100px] left-0 lg:left-[450px] xl:left-[700px] w-full lg:w-[calc(100%-450px)] xl:w-[calc(100%-700px)] h-[calc(100%-100px)] flex justify-center items-start">
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="w-[500px]"
        >
            <ToastContainer />
          <h3 className="font-semibold text-[24px] sm:text-[30px] md:text-[40px]">
           OTP
          </h3>
          <span className="text-[14px] md:text-[16px]">
            Enter the Otp sent to your mail to verify your account
          </span>

          <div className="mt-5">
            <label
              style={{ color: "rgba(0, 0, 0, 0.4)" }}
              className="text-[13px] md:text-[16px]"
            >
              OTP
            </label>
            <div className="mt-2">
              <input
                onChange={e => setValue({ ...value, otp: e.target.value })}
                type={"text"}
                className="outline-none placeholder:text-[#C1D7BE] w-full h-[45px] md:h-[58px] border border-[#334155] px-5 text-[13px] md:text-[16px]"
              />
            </div>
          </div>

          <div className="mt-5">
            <button
              onClick={VerifyOtp}
              className="w-full h-[50px] md:h-[58px] flex items-center justify-center text-white
              bg-[#1DBF73] font-semibold active:scale-95 text-[13px] md:text-[16px]"
            >
              verify OTP
            </button>

            <div className="flex items-center gap-x-1 justify-center md:justify-start mt-4 md:mt-32">
              <span className="text-[13px] md:text-[16px]">
                {"Don't have an account"}
              </span>
              <span
                onClick={() => router.push("/auth/register")}
                className="font-semibold text-[#1DBF73] md:cursor-pointer text-[13px] md:text-[16px]"
              >
                Create free account
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
