/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import React, { createContext, useOptimistic } from 'react';
// import { getBoardPowerBILatestUrl } from "@/modules/Acquisition/boardPowerBI/application/get/getBoardPowerBILatestUrl";
import { AuthPortalRepository } from '@/modules/Marketplace/authPortal/domain/AuthPortalRepository';

interface ContextValue {
    onSave(): void;
}

export const AuthPortalContext = createContext<ContextValue | undefined>(
    undefined,
);

export const AuthPortalContextProvider: React.FC<
    React.PropsWithChildren<{ repository: AuthPortalRepository }>
> = ({ children, repository }) => {
    //   const getLatestPowerBIUrl = useOptimistic(() => getBoardPowerBILatestUrl(repository)());

    const contextValue: ContextValue = {
        onSave: () => {
            repository.run();
        },
    };

    return (
        <AuthPortalContext.Provider value={contextValue}>
            {children}
        </AuthPortalContext.Provider>
    );
};
