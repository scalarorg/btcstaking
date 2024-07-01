"use client";
import ButtonWithGradientBorder from "@/components/common/ButtonWithGradientBorder";
import BaseDialog from "@/components/dialog/BaseDialog";
import BitcoinIcon from "@/components/icons/BitcoinIcon";
import CopyIcon from "@/components/icons/CopyIcon";
import InfoIcon from "@/components/icons/InfoIcon";
import KeyIcon from "@/components/icons/KeyIcon";
import VerifiedIcon from "@/components/icons/VerifiedIcon";
import WalletCircleIcon from "@/components/icons/WalletCircleIcon";
import { GlobalContext } from "@/context/GlobalContext";
import { cn } from "@/lib/utils";
import { useContext, useState } from "react";

export default function Home() {
  const { isConnextWallet } = useContext(GlobalContext);
  const [selectedRow, setSelectedRow] = useState<number | null>(null);
  const [openDialog, setOpenDialog] = useState(false);

  const handleCopyBtcPk = (btcPk: string) => () => {
    navigator.clipboard.writeText(btcPk);
  };

  return (
    <div className=" text-white">
      <div className="flex justify-between items-center mb-9">
        <div>
          <h3 className="text-[40px] leading-[52px] font-bold bg-gradient-to-r from-[#3760F2] to-[#00EEFF] inline-block text-transparent bg-clip-text mb-3">
            BTC Staking
          </h3>
          <p className="text-xl font-normal">
            Select a finality provider or{" "}
            <span className="font-medium bg-gradient-to-r from-[#3760F2] to-[#00EEFF] inline-block text-transparent bg-clip-text">
              create your own
            </span>
          </p>
        </div>
        <div className="grid gap-8 grid-cols-2">
          <div className="px-7 py-3 border border-[#95959599] rounded-xl bg-[#0b144099] flex flex-col justify-center items-center gap-4">
            <p className="text-xl font-normal flex items-center gap-2">
              <KeyIcon />
              Confirmed TVL
            </p>
            <p className="text-[25px] font-bold">702.24949758 Signet BTC</p>
          </div>
          <div className="px-7 py-3 border border-[#95959599] rounded-xl bg-[#0b144099] flex flex-col justify-center items-center gap-4">
            <p className="text-xl font-normal flex items-center gap-2">
              <KeyIcon />
              Delegations
            </p>
            <p className="text-[25px] font-bold">562.18K</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-[2fr_1fr] gap-[52px]">
        <div className="bg-[#0b144099] rounded-xl border border-[#95959599] p-10">
          <table className="w-full border-spacing-y-[18px] border-separate">
            <thead>
              <tr className="text-[25px] font-bold">
                <th className="p-5 text-left">Finality provider</th>
                <th className="p-5 text-left">BTC PK</th>
                <th className="p-5 text-left">Total Delegation</th>
                <th className="p-5 text-left">Commission</th>
              </tr>
            </thead>
            <tbody>
              {TABLE_DATA.map((data) => {
                const hiddenBtcPk = `${data.btcPk.slice(
                  0,
                  4
                )}...${data.btcPk.slice(-4)}`;
                return (
                  <tr
                    className={cn(
                      "text-lg font-normal [&>*]:border-[#95959599] cursor-pointer",
                      data.id === selectedRow &&
                        "[&>*:first-child]:border [&>*:first-child]:border-r-0 [&>*:last-child]:border [&>*:last-child]:border-l-0 [&>*:not(:first-child):not(:last-child)]:border-y"
                    )}
                    key={data.id}
                    onClick={() => {
                      setSelectedRow(data.id);
                      setOpenDialog(true);
                    }}
                  >
                    <td className="p-5 bg-[#0b144099] rounded-tl-xl rounded-bl-xl">
                      <span>{data.finalityProvider}</span>{" "}
                      <VerifiedIcon className="inline-block ml-1" />
                    </td>
                    <td
                      className="p-5 bg-[#0b144099] cursor-pointer"
                      onClick={handleCopyBtcPk(data.btcPk)}
                    >
                      {hiddenBtcPk}
                      <CopyIcon className="inline-block ml-2" />
                    </td>
                    <td className="p-5 bg-[#0b144099]">
                      {data.totalDelegation}
                    </td>
                    <td className="p-5 bg-[#0b144099] rounded-tr-xl rounded-br-xl">
                      {data.commission}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {!isConnextWallet ? (
          <div className="bg-[#0b144099] rounded-xl border border-[#95959599] p-4 flex flex-col">
            <div className="[&>*:not(:last-child)]:mb-5 flex flex-col flex-1 items-center justify-center">
              <WalletCircleIcon />
              <p className="text-xl font-bold">Connect wallet</p>
              <p className="text-xl font-normal text-[#909090]">
                Please connect wallet to start staking
              </p>
            </div>
            <ButtonWithGradientBorder
              className="w-full"
              btnClassName="py-4 w-full"
            >
              Connect Wallet
            </ButtonWithGradientBorder>
          </div>
        ) : (
          <div className="grid gap-10 grid-rows-[1fr_2fr]">
            <div className="bg-[#0b144099] rounded-xl border border-[#95959599] p-10 flex flex-col">
              <p className="text-[40px] leading-[52px] font-bold bg-gradient-to-r from-[#3760F2] to-[#00EEFF] inline-block text-transparent bg-clip-text mb-[10px]">
                Yours Staking
              </p>
              <div className="py-4 border-b border-[#ffffff4d] flex justify-between items-center text-xl">
                <p className="text-[#909090]">You staked</p>
                <p className="flex items-center gap-2 font-medium">
                  <BitcoinIcon /> 0.0014 Signet BTC
                </p>
              </div>
              <div className="py-4 border-b border-[#ffffff4d] text-xl flex justify-between items-center">
                <p className="text-[#909090]">Balance</p>
                <p className="flex items-center gap-2 font-medium">
                  <BitcoinIcon /> 0.00037364 Signet BTC{" "}
                  <span className="text-lg font-normal">v947...s98f</span>
                </p>
              </div>
              <ButtonWithGradientBorder
                className="self-start mt-auto rounded-[8px]"
                btnClassName="px-4 py-0 rounded-[9px]"
              >
                Get Test Token
              </ButtonWithGradientBorder>
            </div>
            <div className="bg-[#0b144099] rounded-xl border border-[#95959599] px-5 py-10">
              <p className="text-[40px] leading-[52px] font-bold bg-gradient-to-r from-[#3760F2] to-[#00EEFF] inline-block text-transparent bg-clip-text mb-4">
                Staking history
              </p>
              {MOCK_TRANSACTION_DATA.map((transaction) => {
                const hiddenTransactionHash = `${transaction.transactionHash.slice(
                  0,
                  4
                )}...${transaction.transactionHash.slice(-4)}`;
                return (
                  <div
                    className="p-4 bg-[#0b144099] rounded-xl grid gap-3"
                    key={transaction.id}
                  >
                    <div className="flex gap-10 items-center text-xl">
                      <p className="font-bold text-[#909090]">Amount</p>
                      <p className="">{transaction.amount}</p>
                    </div>
                    <div className="flex gap-10 items-center text-xl">
                      <p className="font-bold text-[#909090]">Inception</p>
                      <p className="">{transaction.inception}</p>
                    </div>
                    <div className="flex gap-10 items-center text-xl">
                      <p className="font-bold text-[#909090]">
                        Transaction hash
                      </p>
                      <p className="text-[#5076FF]">{hiddenTransactionHash}</p>
                    </div>
                    <div className="flex gap-10 items-center text-xl">
                      <p className="font-bold text-[#909090]">Status</p>
                      <p className="flex items-center gap-[10px]">
                        {transaction.status}
                        <InfoIcon />
                      </p>
                    </div>
                    <div className="flex gap-10 items-center text-xl">
                      <p className="font-bold text-[#909090]">Action</p>
                      <ButtonWithGradientBorder
                        className="rounded-[8px]"
                        btnClassName="py-0 px-5 rounded-[9px]"
                      >
                        {transaction.action}
                      </ButtonWithGradientBorder>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
      <BaseDialog open={openDialog} onOpenChange={setOpenDialog}>
        <p className="text-[30px] font-bold mb-[22px]">Set up staking terms</p>
        <p className="text-sm font-normal mb-10">
          You can withdraw your stake at any time with a 7-day unbonding period.
          Additionally, there's a maximum staking period of 65 weeks. If your
          stake isn&apos;t withdrawn by the end of this period, you can still
          withdraw it along with any accrued rewards. These timelines are
          estimates based on average Signet BTC block times.
        </p>
        <p className="text-[30px] font-bold mb-4">Amount</p>
        <input
          placeholder="Signet BTC"
          className="rounded-[8px] p-4 border-[#95959599] text-[#2D2D2D] bg-black mb-5 w-full"
        />
        <ButtonWithGradientBorder
          className="w-full"
          btnClassName="w-full py-[10px] text-lg"
        >
          Preview
        </ButtonWithGradientBorder>
      </BaseDialog>
    </div>
  );
}

const TABLE_DATA = [
  {
    id: 1,
    finalityProvider: "BTC Staking",
    btcPk: "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
    totalDelegation: "264.88137478 Signet BTC",
    commission: "5%",
  },
  {
    id: 2,
    finalityProvider: "BTC Staking",
    btcPk: "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
    totalDelegation: "14.2048 Signet BTC",
    commission: "10%",
  },
  {
    id: 3,
    finalityProvider: "BTC Staking",
    btcPk: "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
    totalDelegation: "264.88137478 Signet BTC",
    commission: "5%",
  },
  {
    id: 4,
    finalityProvider: "BTC Staking",
    btcPk: "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
    totalDelegation: "6.28746 Signet BTC",
    commission: "5%",
  },
  {
    id: 5,
    finalityProvider: "BTC Staking",
    btcPk: "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
    totalDelegation: "264.88137478 Signet BTC",
    commission: "10%",
  },
  {
    id: 6,
    finalityProvider: "BTC Staking",
    btcPk: "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
    totalDelegation: "3.82944 Signet BTC",
    commission: "10%",
  },
  {
    id: 7,
    finalityProvider: "BTC Staking",
    btcPk: "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
    totalDelegation: "264.88137478 Signet BTC",
    commission: "5%",
  },
  {
    id: 8,
    finalityProvider: "BTC Staking",
    btcPk: "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
    totalDelegation: "3.82944 Signet BTC",
    commission: "10%",
  },
  {
    id: 9,
    finalityProvider: "BTC Staking",
    btcPk: "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
    totalDelegation: "264.88137478 Signet BTC",
    commission: "5%",
  },
  {
    id: 10,
    finalityProvider: "BTC Staking",
    btcPk: "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
    totalDelegation: "1.41927939 Signet BTC",
    commission: "10%",
  },
];

const MOCK_TRANSACTION_DATA = [
  {
    id: 1,
    amount: "0.0014 Signet BTC",
    inception: "2024-06-29",
    status: "Active",
    transactionHash: "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
    action: "Unbond",
  },
];
