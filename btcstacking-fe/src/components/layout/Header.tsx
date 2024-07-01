"use client";
import { GlobalContext } from "@/context/GlobalContext";
import { useContext } from "react";
import ButtonWithGradientBorder from "../common/ButtonWithGradientBorder";
import BitcoinIcon from "../icons/BitcoinIcon";

export default function Header() {
  const { isConnextWallet, setIsConnextWallet } = useContext(GlobalContext);

  const handleConnectWallet = () => {
    setIsConnextWallet(true);
  };

  return (
    <header className="flex justify-between items-center mb-20">
      <img src="/logo.svg" alt="logo" />
      {isConnextWallet ? (
        <div className="pl-2 flex gap-2 items-center border border-[#95959599] rounded-[8px]">
          <BitcoinIcon />
          <p className="text-white">0.00037364 Signet BTC</p>
          <ButtonWithGradientBorder
            className="rounded-[8px]"
            btnClassName="px-2 py-0 rounded-[9px]"
          >
            v947...s98f
          </ButtonWithGradientBorder>
        </div>
      ) : (
        <ButtonWithGradientBorder onClick={handleConnectWallet}>
          Connect to BTC signet network
        </ButtonWithGradientBorder>
      )}
    </header>
  );
}
