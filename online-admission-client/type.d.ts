// CONTEXTS
interface IOpenCloseContext {
  isOpen: boolean;
  setIsOpen: (show: boolean) => void;
  navbarShow: boolean;
  setNavbarShow: (show: boolean) => void;
  handleNavbarShow: () => void;
  setClose: () => void;
  setOpen: () => void;
  handleOpenClose: () => void;
  isMobile: boolean;
  setIsMobile: (show: boolean) => void;
}

interface INavbarVisibility {
  isVisible: boolean;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
}
  

//END CONTEXTS


// NAVIGATIONS

type NavbarShow = boolean | string;

interface INavbar {
  isFixed: boolean;
}

interface IHero2 {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}
interface ISidebarMenu {
  path: string;
  name: string;
  icon: IconType;
  data?: ISubSidebarMenu[];
}

interface ISubSidebarMenu {
  path: string;
    name: string;
    id?: string;
  icon: IconType;
}

interface IFooterItems {
  name: string;
  data: IFooterData[];
}

interface IFooterData {
  name: string;
  path: string;
}

// END OF NAVIGATIONS


//SECTION
interface ISection {
  data: ISectionData;
  id: string;
}

interface ISectionData {
  head: string;
  body: string;
  conclusion: string;
}

//END SECTIONS




interface IPosts {
    userId: number,
    id: number,
    title:string,
    body: string
}

