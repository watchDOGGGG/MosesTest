import Image from "next/image";
import { motion } from "framer-motion";
import { BigNav } from "../../components/home-page/sections/big-nav";
import SmallNav from "../../components/home-page/sections/small-nav";
import ManCallingImg from "../../assets/images/man-calling.png";
import { useRouter } from "next/router";
import axios from "axios";
import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Signup() {
  const router = useRouter();
  const [value, setValue] = React.useState({
    email: '',
    fullname: "",
    password: ""
  })

  function Signup() {

    const data = new URLSearchParams();
    data.append('email', value.email);
    data.append('firstName', value.fullname);
    data.append('lastName', 'test');
    data.append('userType', 'user');
    data.append('country', 'nigeria');
    data.append('password', value.password);
    data.append('device', 'android');
    data.append('phone', '0900339393');
    data.append('referalCode', '');

    axios.post(`http://35.221.45.86/kpa-auth/sign-up`, data)
      .then((res) => {
        toast.success("account created successfully")
        localStorage.setItem('email', value.email)
        router.push("/auth/verify")
      })
      .catch((err) => {
        toast.error("error creating account")
        console.log(err)
      })
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full">
      <div className="relative z-[100] h-full overflow-auto">
        <BigNav variant="stripe" />
        <SmallNav />

        <div className="flex justify-center items-start gap-x-10 pt-10 md:pt-0 md:mt-20 px-4 h-[calc(100%-100px)]">
          <motion.div
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="w-full sm:w-[500px]"
          >
             <ToastContainer />
            <h3 className="font-semibold text-[24px] sm:text-[30px] md:text-[40px]">
              Create an Account
            </h3>
            <span className="text-[14px] md:text-[16px]">
              Start to continue with your invoice
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
                First & Last Name
              </label>
              <div className="mt-2">
                <input
                  onChange={e => setValue({ ...value, fullname: e.target.value })}
                  type={"text"}
                  placeholder="Your Name"
                  className="outline-none placeholder:text-[#C1D7BE] w-full h-[50px] md:h-[58px] border border-[#334155] px-5 text-[13px] md:text-[16px]"
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
                  className="outline-none placeholder:text-[#C1D7BE] w-full h-[50px] md:h-[58px] border border-[#334155] px-5 text-[13px] md:text-[16px]"
                />
              </div>
            </div>

            <div className="mt-5">
              <button
                onClick={Signup}
                className="w-full h-[50px] md:h-[58px] flex items-center justify-center text-white
              bg-[#1DBF73] font-semibold active:scale-95 text-[13px] md:text-[16px]"
              >
                Create Account
              </button>

              <div className="flex items-center gap-x-1 mt-3 justify-center md:justify-start">
                <span className="text-[13px] md:text-[16px]">
                  Already have an account
                </span>
                <span
                  onClick={() => router.push("/auth/login")}
                  className="font-semibold text-[#1DBF73] md:cursor-pointer text-[13px] md:text-[16px]"
                >
                  Log in
                </span>
              </div>
            </div>
          </motion.div>
          <div className="relative hidden xl:block w-[687px] h-[456px]">
            <Image src={ManCallingImg} alt="" fill />
          </div>
        </div>
      </div>

      <div className="fixed top-0 left-0 w-[calc(100%-200px)] xl:w-[calc(100%-500px)] h-full z-[10]"></div>
      <div className="fixed top-0 left-[calc(100%-200px)] xl:left-[calc(100%-500px)] w-[200px] xl:w-[500px] h-full bg-[#128C7E] z-[10] hidden md:block"></div>
    </div>
  );
}
