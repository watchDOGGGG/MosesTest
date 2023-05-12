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

  const [rememberMe, setRememberMe] = useState(false);

  const [value, setValue] = React.useState({
    email: '',
    password: "",
    userType: "user",
    device: "brower"
  })

  const data = {
    email: value.email,
    password: value.password,
    userType: "user",
    device: "brower"
  };
  
  function Login() {
    fetch('http://35.221.45.86/kpa-auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Network response was not ok.');
        }
      })
      .then((data) => {
        toast.success("login successful")
        router.push("/dashboard")
        console.log(data);
      })
      .catch((error) => {
        toast.error("error login user check your credentials")
        console.log({error});
      });
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
            Welcome back
          </h3>
          <span className="text-[14px] md:text-[16px]">
            Sign in to continue with KinrielPay
          </span>

          <div className="mt-5">
            <label
              style={{ color: "rgba(0, 0, 0, 0.4)" }}
              className="text-[13px] md:text-[16px]"
            >
              Email
            </label>
            <div className="mt-2">
              <input
                onChange={e => setValue({ ...value, email: e.target.value })}
                type={"text"}
                placeholder="Kinrieltech@gmail.com"
                className="outline-none placeholder:text-[#C1D7BE] w-full h-[45px] md:h-[58px] border border-[#334155] px-5 text-[13px] md:text-[16px]"
              />
            </div>
          </div>

          <div className="mt-5">
            <label
              style={{ color: "rgba(0, 0, 0, 0.4)" }}
              className="text-[13px] md:text-[16px]"
            >
              Password
            </label>
            <div className="mt-2">
              <input
                onChange={e => setValue({ ...value, password: e.target.value })}
                type={"password"}
                placeholder="************"
                className="outline-none placeholder:text-[#C1D7BE] w-full h-[45px] md:h-[58px] border border-[#334155] px-5 text-[13px] md:text-[16px]"
              />
            </div>
          </div>

          <div className="mt-5 flex justify-between">
            <div className="flex gap-x-2 items-center">
              <CheckBox
                width={20}
                height={20}
                value={rememberMe}
                onClick={() => setRememberMe(!rememberMe)}
              />
              <span className="text-[#1DBF73] font-medium text-[13px] md:text-base">
                Remember me
              </span>
            </div>
            <span className="text-[#1DBF73] font-semibold text-[13px] md:text-base">
              FORGOT PASSWORD
            </span>
          </div>

          <div className="mt-5">
            <button
              onClick={Login}
              className="w-full h-[50px] md:h-[58px] flex items-center justify-center text-white
              bg-[#1DBF73] font-semibold active:scale-95 text-[13px] md:text-[16px]"
            >
              Log in
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
