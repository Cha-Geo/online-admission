import React, { createContext, useCallback, useState } from "react";

interface Props {
  children: React.ReactNode;
}

export const OpenCloseContext = createContext<IOpenCloseContext>({
  isOpen: false,
  setIsOpen: () => {},
  setClose: () => {},
  setOpen: () => {},
  handleOpenClose: () => {},
  navbarShow: false,
  setNavbarShow: () => {},
  handleNavbarShow: () => {},
  isMobile: window.innerWidth <= 720,
  setIsMobile: () => {},
});

export const OpenCloseProvider = ({ children }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [navbarShow, setNavbarShow] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 720); // Adjust the breakpoint as needed

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

export default OpenCloseProvider; 
