import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";

type InvoicingFlowProgressBarProps = {
  invoicingFlows: Array<string>;
  activeFlow: string;
};

export function InvoicingFlowProgressBar({
  invoicingFlows,
  activeFlow,
}: InvoicingFlowProgressBarProps) {
  let activeIdx = invoicingFlows.findIndex((f) => f === activeFlow);

  return (
    <div className="relative w-[80%] mx-auto">
      <div className="bars flex items-center absolute top-[11px] w-full">
        <Bars
          width={"33.3%"}
          bgColor={`${activeIdx > 0 ? "#1DBF73" : "#D4D4D8"}`}
        />
        <Bars
          width={"33.3%"}
          bgColor={`${activeIdx > 1 ? "#1DBF73" : "#D4D4D8"}`}
        />
        <Bars
          width={"33.3%"}
          bgColor={`${activeIdx > 2 ? "#1DBF73" : "#D4D4D8"}`}
        />
      </div>
      <div className="flex items-center relative justify-between">
        {invoicingFlows.map((flow, i) => (
          <Ball
            key={i}
            variant={(function () {
              let flowIdx = i;
              if (flowIdx === activeIdx) return "active";
              else if (flowIdx > activeIdx) return "blurred";
              else return "checked";
            })()}
            text={flow}
          />
        ))}
      </div>
    </div>
  );
}

const Bars = ({
  width,
  bgColor,
}: {
  width: number | string;
  bgColor: string;
}) => {
  return (
    <div
      style={{ width, background: bgColor }}
      className="h-[2px] border-x-2"
    ></div>
  );
};

const Ball = ({
  text,
  variant = "checked",
}: {
  text: string;
  variant?: "checked" | "active" | "blurred";
}) => {
  const textRef = useRef<HTMLSpanElement>(null);

  const [textWidth, setTextWidth] = useState(0);

  useEffect(() => {
    let textSize = textRef.current?.clientWidth;

    setTextWidth(textSize!);
  }, []);

  return (
    <div className="relative">
      {variant === "checked" ? (
        <div className="w-[24px] h-[24px] rounded-full flex items-center justify-center bg-[#1DBF73]">
          <FontAwesomeIcon
            icon={faCheck}
            className="w-[13px] h-[13px] text-white"
          />
        </div>
      ) : variant === "active" ? (
        <div className="w-[24px] h-[24px] rounded-full flex items-center justify-center border-2 border-[#1DBF73] bg-white">
          <div className="w-[5px] h-[5px] bg-[#1DBF73] rounded-full"></div>
        </div>
      ) : variant === "blurred" ? (
        <div className="w-[24px] h-[24px] rounded-full flex items-center justify-center border-2 border-[#D4D4D8] bg-white"></div>
      ) : (
        ""
      )}
      <span
        ref={textRef}
        style={{ left: -((textWidth - 20) / 2) }}
        className="absolute whitespace-nowrap top-[calc(100%+10px)] text-[10px] sm:text-[12px]"
      >
        {text}
      </span>
    </div>
  );
};
