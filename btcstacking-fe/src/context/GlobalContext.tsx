"use client";
import { createContext, useState } from "react";

interface GlobalContextType {
  isConnextWallet: boolean;
  setIsConnextWallet: React.Dispatch<React.SetStateAction<boolean>>;
}

export const GlobalContext = createContext<GlobalContextType>(
  {} as GlobalContextType
);

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  const [isConnextWallet, setIsConnextWallet] = useState(false);

  const contextValue = {
    isConnextWallet,
    setIsConnextWallet,
  };
  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};
