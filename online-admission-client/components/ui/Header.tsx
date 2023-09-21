"use client"

import { usePathname } from "next/navigation";
import Hero2 from "./Hero2"
import Navbar from "./Navbar";
import { useState } from "react";

type Props = {}

const Header = (props: Props) => {
    const pathname = usePathname();

    const [visible, setVisible] = useState<boolean>(true);
    
    return <>{pathname === "/" ? <Hero2 visible={visible}setVisible={setVisible} /> : <Navbar isFixed={visible} />}</>;
}

export default Header