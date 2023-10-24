'use client'
import { SessionProvider } from "next-auth/react"

const CustomSessionProvider = ({children}: IChildren) => {
    return <SessionProvider>{children}</SessionProvider>
}

export default CustomSessionProvider;