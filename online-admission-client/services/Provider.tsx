"use client";

import React, { ReactNode } from "react";
import {
  VisibilityProvider,
} from "./contexts/NavbarVisibilityContext";

type Props = {
  children: ReactNode;
};

const Provider = ({ children }: Props) => {

    return (
        <VisibilityProvider>
            { children }
        </VisibilityProvider>
  ) 
};

export default Provider;
