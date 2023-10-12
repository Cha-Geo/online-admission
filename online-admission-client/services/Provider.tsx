"use client";

import React, { ReactNode } from "react";
import { VisibilityProvider } from "./contexts/NavbarVisibilityContext";
import { OpenCloseProvider } from "./contexts/OpenCloseContext";
type Props = {
  children: ReactNode;
};

const Provider = ({ children }: Props) => {

  return (
    <VisibilityProvider>
      <OpenCloseProvider>
        {children}
      </OpenCloseProvider>
    </VisibilityProvider>
    ); 
};

export default Provider;
