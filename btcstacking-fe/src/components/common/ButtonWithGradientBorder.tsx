import { cn } from "@/lib/utils";
import React from "react";

type ButtonWithGradientBorderProps = {
  children: React.ReactNode;
  className?: string;
  btnClassName?: string;
  onClick?: () => void;
};

export default function ButtonWithGradientBorder({
  children,
  className,
  btnClassName,
  onClick,
}: ButtonWithGradientBorderProps) {
  return (
    <div
      className={cn(
        "bg-gradient-to-r from-[#0EF1F1] via-[#3760F2] to-[#D94FD5] rounded-xl p-[1px] w-fit hover:from-[#D94FD5] hover:to-[#0EF1F1] transition-all duration-500",
        className
      )}
    >
      <button
        onClick={onClick}
        className={cn(
          "bg-[#0B1440] rounded-[13px] px-9 py-4 text-white text-xl font-normal",
          btnClassName
        )}
      >
        {children}
      </button>
    </div>
  );
}
