'use client'
import { createContext, useState, useEffect } from "react";

interface Props {
  children: React.ReactNode;
}

export const VisibilityContext = createContext<INavbarVisibility>({
  isVisible: false,
  setIsVisible: () => {},
});

export function VisibilityProvider({ children }: Props) {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    const reasonableScrollDistance = 300;

    if (currentScrollPos >= reasonableScrollDistance) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  
      useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);

  const contextValue: INavbarVisibility = {
    isVisible,
    setIsVisible,
  };

  return (
    <VisibilityContext.Provider value={contextValue}>
      {children}
    </VisibilityContext.Provider>
  );
}