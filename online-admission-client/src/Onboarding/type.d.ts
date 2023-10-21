//ACCESS 
interface ITokens {
  access_token: string;
  u_id: string;
  refresh_token: string;
  expiresIn: number;
}

// CONTEXTS
interface IChildren {
  children: React.ReactNode;
}

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
  baseurl?: string;
}

interface IData {
  filename: string;
}

//END OF HOME

//FETCHER

type RequestMethod = "GET" | "POST" | "PATCH" | "DELETE" | "PUT";
interface IHeaders {
  method: string;
  cache?: RequestCache;
  credentials?: RequestCredentials;
  headers?: HeadersInit;
}
interface IFetcher {
  url: string;
  method?: RequestMethod;
  cache?: RequestCache
}


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
  filename: string;
  driveid: string;
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



// P
interface IPosts {
    userId: number,
    id: number,
    title:string,
    body: string
}

interface IProfile {
  id: string;
  first_name: string | null;
  last_name: string | null;
  contact_no: string | null;
  image: string | null;
  area: string | null;
  city: string | null;
  state: string | null;
  pinCode: string | null;
}



// END P

// USERS 
interface IUser {
  id: string;
  username: string;
  email: string;
  role: Role;
  createdAt: Date;
  updatedAt: Date;
  isActive: boolean;
  profile: IProfile;
}

