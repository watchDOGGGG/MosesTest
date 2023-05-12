import { ReactNode } from "react";
import { motion } from "framer-motion";

type ModalProps = {
  children: ReactNode;
  className?: string;
};

export const Modal = ({ children, className }: ModalProps) => {
  return (
    <div className="w-full h-full fixed top-0 left-0 bg-[rgba(0,0,0,0.5)] flex items-center justify-center z-[3000]">
      <motion.div
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`rounded-[15px] w-[95%] sm:w-[500px] md:w-[700px] h-[100%] ${className} flex items-center justify-center flex-col flex-wrap`}
      >
        {children}
      </motion.div>
    </div>
  );
};

const ModalHead = ({
  title,
  closeBtn,
  className,
  children,
}: {
  closeBtn: ReactNode;
  title: string;
  className?: string;
  children?: ReactNode;
}) => (
  <div
    className={`bg-white z-[100] p-3 ${className} sticky top-0 rounded-t-[15px] w-full`}
  >
    <div className={`flex justify-between`}>
      <h4 className="text-xl font-medium">{title}</h4>
      {closeBtn}
    </div>
    {children}
  </div>
);

const ModalContent = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => (
  <div
    className={`px-1 ${className} relative z-[10] overflow-auto max-h-[calc(100%-170px)] bg-white w-full`}
  >
    {children}
  </div>
);

const ModalFooter = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => (
  <div
    className={`bg-white z-[100] p-3 ${className} bg-white rounded-b-[15px] w-full`}
  >
    {children}
  </div>
);

Modal.Head = ModalHead;
Modal.Content = ModalContent;
Modal.Footer = ModalFooter;
