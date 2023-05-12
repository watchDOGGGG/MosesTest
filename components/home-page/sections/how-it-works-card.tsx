import Image from "next/image";
import {
  motion,
  useAnimation,
  useAnimationControls,
  useInView,
} from "framer-motion";
import { useEffect, useRef } from "react";

import HomePageFlower from "../../../assets/svg/home-page-flower.svg";

export const HowItWorksCard = () => {
  const divRef = useRef(null);
  const isInView = useInView(divRef);

  console.log(isInView);

  const controls = useAnimationControls();

  useEffect(() => {
    if (isInView) controls.start({ x: 0, opacity: 1 });
  }, [isInView]);

  const data = [
    {
      title: "Merchant Integration",
      content: `Merchants or Companies integrate Kinriel Pay as a payment option in their websites then Buyer client selects the Kinriel Payment option. `,
    },
    {
      title: "KP Invoice",
      content: `<p>Buyer or seller generates a KP invoice: Invoice collects information of the receiver e.g email and trackingID, then payment can be processed from Kinriel wallet.</p>
        <p>On completion of payment a One Time Password is sent to the receiver email.</p>`,
    },
    {
      title: "Secure payments & Escrow",
      content: `<p>The money paid is kept in the e-wallet on Kinriel Pay until the product is received by the buyer through a registered courier service.</p>
               <p class="mt-6">Email is sent to the seller to acknowledge the Invoice: If the cost price of the invoice is what was agreed on and the item or image uploaded appears as it is supposed to, then the product can be shipped and a tracking ID will be generated.</p>`,
    },
    {
      title: "Product Tracking",
      content: `Both parties can then track the product until it’s delivered.`,
    },
    {
      title: "Customer Satisfaction",
      content: `<p>When the Buyer finally gets the Item or product bought, then can acknowledge it on the platform as being received.</p>
           <p class="my-6">If Buyer is okay with the product they can proceed to enable “A Withdrawal” request, this action will give the Seller access to withdraw their funds
           When the seller gets the product they can close the invoice and the money paid by the buyer can be withdrawn by the seller.</p>
           <p>If the Buyer is not okay with the product, they return the product back to the seller.</p>`,
    },
    {
      title: "Fulfilment",
      content: `Delivery company acknowledges items as being received and if no disputes the seller's money would automatically drop in his account`,
    },
  ];

  return (
    <div className="flex flex-wrap justify-between mb-10 md:mb-32 gap-y-3">
      <div className="w-full lg:w-[45%] relative z-40">
        {data.slice(0, 3).map((d, i) => (
          <motion.div
            initial={{ x: -150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: i * 0.1 }}
            key={i}
            className="flex items-start gap-x-6 mb-6"
          >
            <div className="text-[30px] md:text-[64px] outline-text h-[64px] font-merry text-[#191D23]">
              0{i + 1}
            </div>
            <div className="mt-4">
              <span className="text-[16px] md:text-[28px] font-bold text-[#191D23]">
                {d.title}
              </span>
              <div
                className="text-[12px] sm:text-[14px] font-light text-[#191D23] mt-2 md:mt-5"
                dangerouslySetInnerHTML={{ __html: d.content }}
              ></div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="w-full lg:w-[45%] relative z-40">
        {data.slice(3).map((d, i) => (
          <motion.div
            initial={{ x: 150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: i * 0.1 }}
            key={i}
            className="flex items-start gap-x-6 mb-6"
          >
            <div className="text-[30px] md:text-[64px] outline-text h-[64px] font-merry text-[#191D23]">
              0{i + 4}
            </div>
            <div className="mt-4">
              <span className="text-[16px] md:text-[28px] font-bold text-[#191D23]">
                {d.title}
              </span>
              <div
                className="text-[12px] sm:text-[14px] font-light text-[#191D23] mt-2 md:mt-5"
                dangerouslySetInnerHTML={{ __html: d.content }}
              ></div>
            </div>
          </motion.div>
        ))}
      </div>

      <Image
        src={HomePageFlower}
        alt=""
        className="absolute left-0 top-[250px]"
      />
    </div>
  );
};
