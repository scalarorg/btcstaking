"use client";
import { useState } from "react";
import CloseIcon from "../icons/CloseIcon";

type BaseDialogProps = {
  open: boolean;
  children: React.ReactNode;
  onOpenChange: (open: boolean) => void;
};

export default function BaseDialog({
  open,
  children,
  onOpenChange,
}: BaseDialogProps) {
  return (
    open && (
      <div
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md"
        onClick={() => onOpenChange(false)}
      >
        <div
          className="relative p-10 border-[#95959599] rounded-xl text-white bg-[#0b144099] w-[771px]"
          onClick={(e) => e.stopPropagation()}
        >
          {children}
          <CloseIcon
            className="cursor-pointer absolute top-10 right-10"
            onClick={() => onOpenChange(false)}
          />
        </div>
      </div>
    )
  );
}
