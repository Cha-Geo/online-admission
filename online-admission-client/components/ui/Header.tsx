"use client"

import { usePathname } from "next/navigation";
import Hero2 from "./Hero2"
import Navbar from "./Navbar";
import { useState } from "react";

type Props = {}

const Header = (props: Props) => {
    const pathname = usePathname();
    
    return <>{pathname === "/" ? <Hero2 /> : <Navbar />}</>;
}

export default Header