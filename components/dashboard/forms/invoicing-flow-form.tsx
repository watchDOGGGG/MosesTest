import Image from "next/image";
import { faArrowLeftLong, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dispatch, SetStateAction, createContext, useState } from "react";
import { Button, Input, Modal, Select, TextArea } from "../ui";
import SelectWithInput from "../ui/select-with-input";
import { CheckBox } from "../../ui";
import QrCodeImg from "../../../assets/images/qr-code.png";
import WhatsappSvg from "../../../assets/svg/whatsapp.svg";
import TwitterSvg from "../../../assets/svg/twitter-2.svg";
import FacebookMessengerSvg from "../../../assets/svg/messenger.svg";
import MessageSvg from "../../../assets/svg/message.svg";
import { InvoicingFlowProgressBar } from "../ui/invoicing-flow-progress-bar";
import { Dropzone } from "../ui/drop-zone";

type InvoicingFlowProps = {
  setShowInvoicingFlowForm: Dispatch<SetStateAction<boolean>>;
  //   showInvoicingFlow: boolean;
};

const InvoicingFlowContext = createContext(null);

export const InvoicingFlowForm = ({
  setShowInvoicingFlowForm,
}: InvoicingFlowProps) => {
  const [comp, setComp] = useState("Create Invoice");

  const views = [
    "Create Invoice",
    "Transaction Summary",
    "Confirm Transaction",
    "Transaction Created",
  ];

  function handleNext() {
    let idx = views.findIndex((view) => view === comp);
    return idx < views.length - 1 ? views[idx + 1] : views[idx];
  }

  function handlePrevious() {
    let idx = views.findIndex((view) => view === comp);
    return idx > 0 ? views[idx - 1] : views[idx];
  }

  return (
    <Modal>
      <Modal.Head
        className="p-4"
        closeBtn={
          <FontAwesomeIcon
            icon={faXmark}
            className="w-[16px] h-[16px] md:cursor-pointer"
            onClick={() => setShowInvoicingFlowForm(false)}
          />
        }
        title={comp}
      />
      <Modal.Content className="px-5">
        <div className="pt-[10px] pb-[30px] hidden md:flex items-center bg-white sticky top-0 z-[100]">
          <InvoicingFlowProgressBar invoicingFlows={views} activeFlow={comp} />
        </div>
        {comp === "Create Invoice" ? <CreateInvoiceForm /> : ""}
        {comp === "Transaction Summary" ? <TransactionSummary /> : ""}
        {comp === "Confirm Transaction" ? <ConfirmTransactionForm /> : ""}
        {comp === "Transaction Created" ? <TransactionCreated /> : ""}
      </Modal.Content>
      <Modal.Footer className="px-5">
        <div className="mt-2 flex justify-between">
          {comp !== "Create Invoice" ? (
            <div
              className="flex gap-x-2 items-center md:cursor-pointer"
              onClick={() => setComp(handlePrevious())}
            >
              <FontAwesomeIcon
                icon={faArrowLeftLong}
                className="w-[20px] md:w-[23px] h-[20px] md:h-[23px]"
              />
              <span className="text-[14px] md:text-[16px]">Back</span>
            </div>
          ) : (
            ""
          )}

          <div className="w-[140px] md:w-[146px] h-[43px] md:h-[49px] ml-auto">
            <Button
              width={"100%"}
              height={"100%"}
              textColor="white"
              bgColor={"#1DBF73"}
              className="rounded-[6px] text-[12px] md:text-[16px]"
              onClick={() => setComp(handleNext())}
            >
              Continue
            </Button>
          </div>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

const CreateInvoiceForm = () => {
  const productCategories = [
    "Animals & Pet Supplies",
    "Arts & Entertainment",
    "Audio Accessories",
    "Audio Components",
    "Baby & Toddler",
    "Beverages",
    "Building Consumables",
    "Building Materials",
    "Business & Home Security",
    "Business & Industrial",
    "Cabinets & Storage",
    "Cameras & Optics",
    "Clothing",
    "Clothing Accessories",
    "Communications",
    "Components",
    "Computer Accessories & Components",
    "Computer Software",
    "Computers",
    "Construction",
    "Decor",
    "Dentistry",
    "Digital Goods & Currency",
    "Education",
    "Electronics",
    "Electronics Accessories",
    "Exercise & Fitness",
    "Financial Services",
    "Food & Beverages",
    "Furniture",
    "Hardware",
    "Health & Beauty",
    "Home & Garden",
    "Home Furniture",
    "Luggage & Bags",
    "Media",
    "Medical Services",
    "Membership Organizations",
    "Office Supplies",
    "Personal Services",
    "Professional Services",
    "Religious & Ceremonial",
    "Sporting Goods",
    "Stage Equipment",
    "Toys & Games",
    "Transportation",
    "Travel and Lodging",
    "Vehicles & Parts",
  ];

  return (
    <div>
      <div className="mt-5">
        <div>
          <Input label="Title" width={"100%"} />
        </div>

        <div className="flex flex-wrap justify-between mt-5 gap-y-5">
          <div className="w-full md:w-[32%]">
            <Select
              label="Role"
              width={"100%"}
              options={[
                { name: "Selling", value: "selling" },
                { name: "Buying", value: "buying" },
              ]}
              onChange={() => null}
            />
          </div>
          <div className="w-full md:w-[32%]">
            <Select label="Currency" width={"100%"} onChange={() => null} />
          </div>
          <div className="w-full md:w-[32%]">
            <Select
              label="Inspection Time (Days)"
              width={"100%"}
              value={1}
              options={Array(20)
                .fill(0)
                .map((_, i) => ({ value: i + 1, name: i + 1 }))}
              onChange={() => null}
            />
          </div>
        </div>

        <div className="flex flex-wrap justify-between mt-5 gap-y-5">
          <div className="w-full md:w-[49%]">
            <Input label="Product name" width={"100%"} />
          </div>
          <div className="w-full md:w-[49%]">
            <Input label="Price" width={"100%"} />
          </div>
        </div>

        <div className="mt-5">
          <Select
            label="Product Category"
            width={"100%"}
            options={productCategories.map((category, i) => ({
              value: category,
              name: category,
            }))}
            onChange={() => null}
          />
        </div>

        <div className="flex justify-between mt-5 gap-y-5 flex-wrap">
          <div className="w-full md:w-[49%]">
            <TextArea width={"100%"} label="Product description" />
          </div>
          <div className="w-full md:w-[49%]">
            <Dropzone width={"100%"} label="Upload product photos" />
          </div>
        </div>
      </div>
    </div>
  );
};

const TransactionSummary = () => {
  return (
    <div>
      <div className="mt-5">
        <div className="rounded-[10px] p-3 border border-[#D0D5DD]">
          <div className="flex justify-between mb-2">
            <span className="text-[13px] md:text-[16px] font-bold">
              Red Nokia 2700 4gb ram
            </span>
            <span
              className="text-[13px] md:text-[16px]"
              style={{ color: "rgba(0, 0, 0, 0.8)" }}
            >
              N665.00
            </span>
          </div>
          <div className="flex justify-between mb-2">
            <span
              className="text-[13px] md:text-[16px] italic"
              style={{ color: "rgba(0, 0, 0, 0.8)" }}
            >
              Category
            </span>
          </div>
          <div className="flex justify-between mb-2">
            <span
              className="text-[13px] md:text-[16px]"
              style={{ color: "rgba(0, 0, 0, 0.8)" }}
            >
              Description
            </span>
          </div>
          <div className="flex justify-between">
            <span
              className="text-[13px] md:text-[16px]"
              style={{ color: "rgba(0, 0, 0, 0.8)" }}
            >
              Inspection Period: 1 Day
            </span>
          </div>
        </div>

        <div className="mt-10">
          <div className="flex justify-between mb-10">
            <span className="text-[13px] md:text-[16px] font-bold text-[#4F5759]">
              Transaction summary
            </span>
            <span className="text-[13px] md:text-[16px] text-[#0088FF]">
              How the totals are calculated?
            </span>
          </div>

          <div className="flex justify-between mb-4">
            <span className="text-[13px] md:text-[16px] text-[#4F5759]">
              Subtotal:
            </span>
            <span className="text-[13px] md:text-[16px] text-[#4F5759]">
              $665.00
            </span>
          </div>
          <div className="flex justify-between mb-8">
            <span className="text-[13px] md:text-[16px] text-[#4F5759]">
              Courier Fees
            </span>
            <span className="text-[13px] md:text-[16px] text-[#4F5759]">
              $21.61
            </span>
          </div>

          <div className="flex justify-between mb-4">
            <span className="text-[13px] md:text-[16px] text-[#4F5759]">
              Buyer price:
            </span>
            <span className="text-[13px] md:text-[16px] text-[#4F5759]">
              $686.61
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-[13px] md:text-[16px] text-[#4F5759]">
              Seller proceeds:
            </span>
            <span className="text-[13px] md:text-[16px] text-[#4F5759]">
              $665.00
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const ConfirmTransactionForm = () => {
  const [isAgreed, setIsAgreed] = useState(false);

  return (
    <div>
      <div className="mt-5 border-[0.4px] rounded-[15px] py-2 px-3">
        <h4 className="text-[#64748B] font-light text-[13px] md:text-[16px]">
          Attach Buyer or seller contact so they can receive a link
        </h4>

        <div className="flex mt-6 flex-wrap justify-between gap-y-5">
          <div className="w-full md:w-[48%]">
            <Input width={"100%"} label="Email" />
          </div>
          <div className="w-full md:w-[48%]">
            <SelectWithInput
              width={"100%"}
              label="Phone Number"
              onChange={() => null}
            />
          </div>
        </div>

        <div className="flex justify-center my-10 gap-x-3 items-center">
          <CheckBox
            value={isAgreed}
            onClick={() => setIsAgreed(!isAgreed)}
            width={20}
            height={20}
          />
          <div className="text-[12px] md:text-[13px] w-[calc(100%-30px)]">
            <span className="text-[#4F5759]">I have read and agree to the</span>
            <span className="text-[#0088FF] ml-1">
              General Escrow Instructions
            </span>
            <span className="text-[#4F5759] mx-1">the</span>
            <span className="text-[#0088FF]">Privacy Policy</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const TransactionCreated = () => {
  return (
    <div className="pt-6">
      <h4 className="text-lg md:text-xl font-semibold text-center">
        Transaction Created
      </h4>
      <div>
        <p className="text-[12px] sm:text-[14px] text-center mt-6 px-4 md:px-10">
          Your transaction has been created, waiting for both parties to agree.
          Share the transaction via the URL or QR code so that the Buyer/Seller
          can agree to the terms.
        </p>

        <div className="flex flex-col gap-y-10 justify-center items-center my-6">
          <Image src={QrCodeImg} alt="" />

          <div>
            <h4 className="text-[12px] md:text-[14px] text-[#191D23] mb-4">
              Share
            </h4>
            <div className="flex gap-x-7">
              <Image src={WhatsappSvg} alt="" />
              <Image src={FacebookMessengerSvg} alt="" />
              <Image src={TwitterSvg} alt="" />
              <Image src={MessageSvg} alt="" />
            </div>
          </div>

          <div className="md:px-10 w-full">
            <h4 className="mb-2 text-[12px] sm:text-[14px] md:text-[16px]">
              URL
            </h4>
            <div className="flex flex-wrap justify-between w-full py-4 px-3 sm:px-4 bg-[#F2F2F2] rounded-[6px]">
              <span className="text-[#78A873] text-[12px] sm:text-[14px] md:text-[16px] w-full sm:w-auto block sm:inline">
                https://www.Kinrielpay.com/login-page?tid=12451934
              </span>
              <span className="text-[#78A873] md:cursor-pointer text-[12px] sm:text-[14px] md:text-[16px] ml-auto font-bold">
                Copy Link
              </span>
            </div>
          </div>

          <div className="w-full sm:w-[494px] h-[49px]">
            <Button
              width={"100%"}
              height={"100%"}
              textColor="white"
              bgColor="#1DBF73"
              className="rounded-[4px] font-bold text-[12px] sm:text-[14px] md:text-[16px]"
            >
              View Transaction
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
