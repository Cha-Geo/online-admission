import React, { createContext, useCallback, useState } from "react";

interface Props {
  children: React.ReactNode;
}

const isBrowser = typeof window !== "undefined";

export const OpenCloseContext = createContext<IOpenCloseContext>({
  isOpen: false,
  setIsOpen: () => {},
  setClose: () => {},
  setOpen: () => {},
  handleOpenClose: () => {},
  navbarShow: false,
  setNavbarShow: () => {},
  handleNavbarShow: () => {},
  isMobile: isBrowser && window.innerWidth <= 720,
  setIsMobile: () => {},
});

export const OpenCloseProvider = ({ children }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [navbarShow, setNavbarShow] = useState<boolean>(false);

    const [isMobile, setIsMobile] = React.useState(
      isBrowser && window.innerWidth <= 720
    );

  const handleNavbarShow = useCallback(() => {
    setNavbarShow((prevState) => !prevState);
  }, []);

  const handleOpenClose = useCallback(() => {
    setIsOpen((prevState) => !prevState);
  }, []);

  const setOpen = () => {
    return setIsOpen(true);
  };
  const setClose = () => setIsOpen(false);

  return (
    <OpenCloseContext.Provider
      value={{
        isOpen,
        setIsOpen,
        setOpen,
        setClose,
        handleOpenClose,
        navbarShow,
        setNavbarShow,
        handleNavbarShow,
        isMobile,
        setIsMobile,
      }}
    >
      {children}
    </OpenCloseContext.Provider>
  );
};
