import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { ReactNode, useState } from "react";
import { motion, Variants } from "framer-motion";

import HomePageManSign from "../assets/images/home-page-man-sign.png";
import EarningsHomePageSvg from "../assets/svg/earnings-home-page.svg";
import HomePagePhone from "../assets/svg/home-page-phone.svg";
import HomePageMailBox from "../assets/svg/home-page-mail-box.svg";
import {
  HomePageContactForm,
  Input,
  Select,
  TitleWithLine,
} from "../components/home-page";
import { BigFooter } from "../components/home-page/sections/big-footer";
import {
  HomePageCarousal,
  HowItWorksCard,
} from "../components/home-page/sections";
import { BigNav } from "../components/home-page/sections/big-nav";
import { TawkAPIInjection } from "../components/home-page/sections/tawk-api-injection";
import SmallNav from "../components/home-page/sections/small-nav";
import { SmallFooter } from "../components/home-page/sections/small-footer";
import { useRouter } from "next/router";
import { InvoicingFlowForm } from "../components/dashboard/forms";

const Home: NextPage = () => {
  const router = useRouter();

  const features = [
    {
      title: "Generate Invoice",
      body: "Invoice collects information of the receiver e.g email and trackingID, then payment can be processed from Kinriel wallet. ",
    },
    {
      title: "Process Payment",
      body: "Money paid is kept in the e-wallet on Kinriel Pay until the product is received by the buyer through a registered courier service.",
    },
    {
      title: "Track Package",
      body: "Product can be tracked (locally or internationally) by using a tracking ID generated for both buyer and seller to track product.",
    },
    {
      title: "Track Earnings",
      body: "Sellers can track their earnings on the KP wallet",
    },
  ];

  const carousalData = [
    {
      title: "Is Kinriel Pay free?",
      content: `Yes, you can try us for free for 30 days.
       If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.`,
    },
    {
      title: "Can I check an invoice?",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
      ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    },
    {
      title: "What is your cancellation policy?",
      content: `Arcu non sodales neque sodales ut etiam sit. In fermentum posuere urna nec tincidunt praesent semper. Mattis nunc sed blandit libero. Sodales ut etiam sit amet. Mattis molestie a iaculis at erat pellentesque. Aliquam sem et tortor consequat id porta nibh venenatis cras. Maecenas pharetra convallis posuere morbi leo. H
      endrerit gravida rutrum quisque non tellus orci ac auctor augue. A diam sollicitudin tempor id. Amet nulla facilisi morbi tempus iaculis urna.`,
    },
    {
      title: "Can other info be added to an invoice?",
      content: `Arcu non sodales neque sodales ut etiam sit. In fermentum posuere urna nec tincidunt praesent semper. Mattis nunc sed blandit libero. Sodales ut etiam sit amet. Mattis molestie a iaculis at erat pellentesque. Aliquam sem et tortor consequat id porta nibh venenatis cras. Maecenas pharetra convallis posuere morbi leo. Hendrerit gravida rutrum quisque non tellus orci ac auctor augue. A diam sollicitudin tempor id. Amet nulla facilisi morbi tempus iaculis urna.`,
    },
    {
      title: "How does billing work?",
      content: `Arcu non sodales neque sodales ut etiam sit. In fermentum posuere urna nec tincidunt praesent semper. Mattis nunc sed blandit libero. Sodales ut etiam sit amet. Mattis molestie a iaculis at erat pellentesque. Aliquam sem et tortor consequat id porta nibh venenatis cras. Maecenas pharetra convallis posuere morbi leo. Hendrerit gravida rutrum quisque non tellus orci ac auctor augue. A diam sollicitudin tempor id. Amet nulla facilisi morbi tempus iaculis urna.`,
    },
    {
      title: "How do I change my account email?",
      content: `Arcu non sodales neque sodales ut etiam sit. In fermentum posuere urna nec tincidunt praesent semper. Mattis nunc sed blandit libero. Sodales ut etiam sit amet. Mattis molestie a iaculis at erat pellentesque. Aliquam sem et tortor consequat id porta nibh venenatis cras. Maecenas pharetra convallis posuere morbi leo. Hendrerit gravida rutrum quisque non tellus orci ac auctor augue. A diam sollicitudin tempor id. Amet nulla facilisi morbi tempus iaculis urna.`,
    },
  ];

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
        stiffness: 100,
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
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const [showInvoicingFlowForm, setShowInvoicingFlowForm] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-[#128C7E] overflow-y-auto overflow-x-hidden">
      <BigNav />
      <SmallNav />
      <div className="mt-4 sm:mt-10 md:mt-20 flex justify-between flex-wrap gap-y-4 px-4 md:px-14 py-7">
        <motion.section
          variants={fadeInFromLeftAnim}
          whileInView="animate"
          initial="initial"
          className="w-full md:w-auto order-2 md:order-1"
        >
          <div>
            <motion.span
              style={{ borderBottom: "6px solid #1DBF73" }}
              className="text-3xl md:text-6xl inline-block text-white mb-3 sm:py-2 font-semibold"
            >
              Secure, Fast{" "}
              <span className="font-light text-3xl md:text-6xl">&</span>
            </motion.span>
            <br />
            <motion.span
              style={{ borderBottom: "6px solid #1DBF73" }}
              className="text-3xl md:text-6xl inline-block text-white font-semibold sm:py-2"
            >
              Efficient
            </motion.span>
          </div>

          <div className="mt-10">
            <Input />
            <Select />
            <button
              onClick={() => setShowInvoicingFlowForm(true)}
              className="text-white font-bold w-[222px] h-[50px] md:h-[55px] flex items-center justify-center bg-[#1DBF73]"
            >
              Get started now
            </button>
          </div>
        </motion.section>

        <motion.section
          variants={fadeInFromRightAnim}
          whileInView="animate"
          initial="initial"
          className="order-1 md:order-2"
        >
          <Image src={EarningsHomePageSvg} alt="" />
        </motion.section>
      </div>

      <div className="flex mt-12 justify-between flex-wrap px-4 md:px-14 pb-20 gap-y-5">
        {features.map((f, i) => (
          <motion.div
            // initial={{ y: 100, opacity: 0 }}
            // whileInView={{ y: 0, opacity: 1 }}
            // transition={{ duration: 0.4, delay: i * 0.1 }}
            key={i}
            style={{ background: "rgba(217,217,217,0.1)" }}
            className="min-h-[150px] md:min-h-[190px] w-full md:w-[48%] lg:w-[23%] rounded-[12px] p-5"
          >
            <span className="text-white text-[16px] md:text-[20px] font-bold">
              {f.title}
            </span>
            <p
              style={{ color: "rgba(255,255,255,.6)" }}
              className="text-white mt-2 text-[14px] md:text-base"
            >
              {f.body}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="bg-white py-16 px-5 md:px-16 xl:px-28 relative md:mt-0">
        <TitleWithLine>How it works</TitleWithLine>

        <div className="mt-5 md:mt-16 scroll-mt-28" id="how-it-works">
          <HowItWorksCard />
        </div>

        <div className="md:mt-10 scroll-mt-28" id="about-us">
          <TitleWithLine>About Kinriel Pay</TitleWithLine>

          <div className="flex justify-between mt-10 md:mt-0 mb-7 flex-wrap gap-y-5">
            <motion.div className="w-full lg:w-[calc(100%-450px)] xl:w-[calc(100%-650px)] mt-10 md:mt-20 order-2 md:order-1">
              <p className="font-light text-[13px] md:text-[18px]">
                There have been cases of scam associated with online
                transactions and no one is immune to this. Many people across
                the world have been victims of internet fraud. This challenge
                has remarkably hindered the trust of the people who have the
                intention of buying or selling goods and services over the
                internet.
              </p>
              <p className="my-8 font-light text-[13px] md:text-[18px]">
                Therefore, {"it’s"} important to implement an online payment
                platform that would eliminate the possibility of paying for a
                product online without getting the product because it was a mere
                scam.
              </p>
              <p className=" font-light text-[13px] md:text-[18px] mb-8">
                To achieve the objective of encouraging the growth of e-commerce
                in Africa and across the world, Kinriel Technologies Limited is
                implementing a Kinriel Pay platform - a secure, fast, efficient
                and a user friendly IT based solution that protects online
                transactions between the seller and the buyer.
              </p>

              <button
                onClick={() => router.push("/about-us")}
                style={{ boxShadow: "0px 20px 40px 5px rgba(0, 0, 0, 0.25)" }}
                className="text-white bg-[#1DBF73] w-[171px] h-[50px] sm:h-[61px] font-merry text-[13px] md:text-[16px]"
              >
                Learn more
              </button>
            </motion.div>
            <motion.div
              variants={fadeInFromRightAnim}
              initial="initial"
              whileInView={"animate"}
              className="relative w-full sm:w-[400px] xl:w-[600px] h-[300px] sm:h-[433px] xl:h-[633px] ml-auto order-1 md:order-2"
            >
              <Image src={HomePageManSign} fill alt="image" />
            </motion.div>
          </div>
        </div>

        <div className="mt-28 scroll-mt-28" id="faqs">
          <HomePageCarousal carousalData={carousalData} />
        </div>

        <motion.div
          variants={fadeInFromDownAnim}
          initial={"initial"}
          whileInView={"animate"}
          className="rounded-[16px] bg-[#F9FAFB] flex items-center justify-center flex-col gap-5 mt-20 py-6"
        >
          <span className="text-[16px] sm:text-[20px] text-[#101828]">
            Still have questions?
          </span>
          <span className="text-[#667085] text-[14px] sm:text-[18px] text-center">
            {"Can’t"} find the answer {"you’re"} looking for? Please chat to our
            friendly team.
          </span>
          <button
            onClick={() =>
              location.assign(
                "https://tawk.to/chat/6421dc344247f20fefe849ca/1gsi48c3g"
              )
            }
            className="text-white bg-[#1DBF73] px-[18px] py-[10px] rounded-[8px] active:scale-95 text-[13px] md:text-[16px]"
          >
            Get in touch
          </button>
        </motion.div>

        <div className="my-32 flex items-center justify-between">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="hidden lg:block"
          >
            <Image src={HomePageMailBox} alt="" />
          </motion.div>
          <motion.div className="w-full lg:auto">
            <HomePageContactForm />
          </motion.div>
        </div>
      </div>

      {showInvoicingFlowForm ? (
        <InvoicingFlowForm
          setShowInvoicingFlowForm={setShowInvoicingFlowForm}
        />
      ) : (
        ""
      )}
      <TawkAPIInjection />
      <BigFooter />
      <SmallFooter />
    </div>
  );
};

export default Home;
