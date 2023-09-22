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

  // Define the handleScroll function
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
        // Attach the handleScroll function to the scroll event
        window.addEventListener("scroll", handleScroll);

        return () => {
          // Clean up the event listener when the component unmounts
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

// import { createContext, useState } from "react";

// interface Props {
//   children: React.ReactNode;
// }

// const VisibilityContext = createContext<INavbarVisibility>({
//   isVisible: false,
//   setIsVisible: () => {},
// });

// export function VisibilityProvider({ children }: Props) {
//   const [isVisible, setIsVisible] = useState(false);

//   const contextValue = { isVisible, setIsVisible };

//   return (
//     <VisibilityContext.Provider value={contextValue}>
//       {children}
//     </VisibilityContext.Provider>
//   );
// }
