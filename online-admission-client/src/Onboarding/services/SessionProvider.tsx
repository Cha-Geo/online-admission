'use client'
import { SessionProvider } from "next-auth/react"

const Providers = ({children}: IChildren) => {
    return <SessionProvider>{children}</SessionProvider>
}

export default Providers;