"use client";

import React, { ReactNode } from "react";
import { OpenCloseProvider } from "./contexts/OpenCloseContext";

type Props = {
  children: ReactNode;
};

const Provider = ({ children }: Props) => {

    return (
        <OpenCloseProvider>
            { children }
        </OpenCloseProvider>
  ) 
};

export default Provider;
