// CONTEXTS
interface IOpenCloseContext {
  isOpen: boolean;
  activeAccordion: null;
  setIsOpen: (show: boolean) => void;
  setClose: () => void;
  setOpen: () => void;
  handleOpenClose: () => void;
  handleClick: (idx: any) => void;
  handleToggle: (idx: any) => any;
}

interface INavbarVisibility {
  isVisible: boolean;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
}
  

//END CONTEXTS

// DATA FETCHING

// HOMEPAGE 
interface DownloadButtonProps {
  text: string;
  fileId: string;
}

interface IData {
  filename: string;
}

//END OF HOME


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


// PROGRAMS
interface IProgramImage {
  id: string;
  type: string;
  filename: string;
  originalname: string;
  localFilePath: string; // Store the path to the image file on the local disk
  // programId: string;
}

interface IProgram {
  id: string;
  name: string;
  duration: number;
  createdAt: Date;
  updatedAt: Date;
  images: IProgramImage[];
}


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

// Define the new data structure
type IContents = {
  title: string; // Adding the title for CoreValue
  description: string; // Adding the description for CoreValue
};

type ISubContent = {
  name: string;
  description: string;
};

interface IFaqData {
  question: string;
  answer: string;
}

//END SECTIONS




interface IPosts {
    userId: number,
    id: number,
    title:string,
    body: string
}

