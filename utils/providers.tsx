"use client"

import { Provider } from "react-redux"
import { store } from "./store";
import { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";

interface ProviderProps {
    children?: any,
    session?: any
}

export const Providers = ({children, session} : ProviderProps) => {
    return (
        <SessionProvider session={session}>
            <Provider store={store}>{children}</Provider>
        </SessionProvider>
        
    )
}