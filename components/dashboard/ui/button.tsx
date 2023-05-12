import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = {
  width: string | number;
  height: string | number;
  bgColor?: string;
  textColor: string;
  loading?: boolean;
  trailingIcon?: ReactNode;
  leadingIcon?: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button(props: ButtonProps) {
  const {
    width,
    textColor,
    bgColor,
    height,
    className,
    disabled,
    children,
    loading,
    trailingIcon,
    leadingIcon,
    ...rest
  } = props;
  return (
    <div
      style={{ width, height }}
      className={className + " inline-block relative overflow-hidden"}
    >
      {disabled ? (
        <div className="h-full w-full absolute top-0 left-0 z-[10] bg-[rgba(255,255,255,0.4)]"></div>
      ) : (
        ""
      )}
      <button
        style={{
          background: bgColor
            ? bgColor
            : "linear-gradient(90deg, #1CBD67 0%, #26E880 100%)",
          width: "100%",
          height: "100%",
          color: textColor,
        }}
        className={"active:scale-95 flex items-center justify-center gap-x-2"}
        {...rest}
      >
        {!loading ? (
          <>
            {leadingIcon ? leadingIcon : ""}
            {children}
            {trailingIcon ? trailingIcon : ""}
          </>
        ) : (
          <span>loading...</span>
        )}
      </button>
    </div>
  );
}
