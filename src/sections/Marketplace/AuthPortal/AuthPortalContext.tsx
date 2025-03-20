"use client";

import React, { createContext, useContext, useOptimistic } from "react";
// import { getBoardPowerBILatestUrl } from "@/modules/Acquisition/boardPowerBI/application/get/getBoardPowerBILatestUrl";
import { AuthPortalRepository } from "@/modules/Marketplace/authPortal/domain/AuthPortalRepository";

interface ContextValue {}

export const AuthPortalContext = createContext<ContextValue | undefined>(undefined);

export const AuthPortalContextProvider: React.FC<
  React.PropsWithChildren<{ repository: AuthPortalRepository }>
> = ({ children, repository }) => {
//   const getLatestPowerBIUrl = useOptimistic(() => getBoardPowerBILatestUrl(repository)());

  const contextValue: ContextValue = {
    // getLatestPowerBIUrl,
  };

  return (
    <AuthPortalContext.Provider value={contextValue}>
      {children}
    </AuthPortalContext.Provider>
  );
};

