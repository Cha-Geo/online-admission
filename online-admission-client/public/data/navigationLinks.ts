import { IconArrowElbow, IconCheck, IconDownload, IconEdit, IconExternalLink, IconGitHub, IconHome, IconRefresh } from "@/components/icons";

//NAVBAR LINKS
export const aboutData: ISubSidebarMenu[] = [
  {
    path: "about/about-dl",
    name: "About DL-IBTC",
    icon: IconCheck,
    id: "about-dl",
  },
  {
    path: "about-dl/history",
    name: "History of DL-IBTC",
    icon: IconDownload,
    id: "history",
  },
  {
    path: "about-dl/objectives",
    name: "Objectives",
    icon: IconEdit,
    id: "objectives",
  },
  {
    path: "about-dl/core-values",
    name: "Core Values",
    icon: IconDownload,
    id: "core-values",
  },
  {
    path: "about-dl/college-organogram",
    name: "College Organogram",
    icon: IconCheck,
    id: "college-organogram",
  },
  {
    path: "about-dl/faculty-profile",
    name: "Faculty Profile",
    icon: IconEdit,
    id: "faculty-profile",
  },
];

export const academicsData: ISubSidebarMenu[] = [
  {
    path: "/academics",
    name: "Academics",
    icon: IconCheck,
    id: "our-academics",
  },
  {
    path: "academics/research",
    name: "Research",
    icon: IconDownload,
    id: "research",
  },
  {
    path: "academics/visual-classrooms",
    name: "Visual Classrooms",
    icon: IconEdit,
    id: "visual-classrooms",
  },
];

export const admissionsData: ISubSidebarMenu[] = [
  {
    path: "/admissions",
    name: "Admissions",
    icon: IconCheck,
    id: "our-admissions",
  },
  {
    path: "admissions/requirements",
    name: "Admission Requirements",
    icon: IconDownload,
    id: "requirements",
  },
  {
    path: "admissions/online-application-executive",
    name: "Online Applications (Executive)",
    icon: IconEdit,
    id: "online-application-executive",
  },
  {
    path: "admissions/online-application-general",
    name: "Online Applications (General)",
    icon: IconEdit,
    id: "online-application-general",
  },
];

export const programsData: ISubSidebarMenu[] = [
  {
    path: "/programs",
    name: "Programs",
    icon: IconCheck,
    id: "our-programs",
  },
  {
    path: "programs/diploma-theology",
    name: "Diploma In Theory",
    icon: IconDownload,
    id: "diploma-theology",
  },
  {
    path: "programs/certificate-theology",
    name: "Certicate In Theology",
    icon: IconEdit,
    id: "certificate-theology",
  },
  {
    path: "programs/executive-theology",
    name: "Executive Course In Theology",
    icon: IconEdit,
    id: "certificate-theology",
  },
];

export const navigationItems: ISidebarMenu[] = [
  {
    path: '/',
    name: 'Dashboard',
    icon: IconHome,
  },
  {
    path: '/about',
    name: 'About',
    data: aboutData,
    icon: IconRefresh,
  },
  {
    path: '/contact',
    name: 'Contact',
    icon: IconGitHub,
  },
  {
    path: '/academics',
    name: 'Academics',
    data: academicsData,
    icon: IconCheck,
  },
  {
    path: '/admissions',
    name: 'Admissions',
    data: admissionsData,
    icon: IconExternalLink,
  },
  {
    path: '/programs',
    name: 'Programs',
    data: programsData,
    icon: IconArrowElbow,
  },
];


// END NAVBAR LINKS


//FOOTER LINKS

const officeData: IFooterData[] = [
  {
    name: "KS 18426, ADUM, KUMASI",
    path: "/contact?section=location",
  },
  {
    name: "GPRS AG-0867-9765",
    path: "/contact?section=location",
  },
  {
    name: "Send a mail",
    path: "admin@auc.edu.gh",
  },
  {
    name: "0559141626 | 0559220960 | 020117770",
    path: "/contact?section=call",
  },
];

const quickiesData: IFooterData[] = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Who We Are",
    path: "/about?section=about-dl",
  },
  {
    name: "Our Philosophy",
    path: "/about?section=objectives",
  },
];

const coursesData: IFooterData[] = [
  {
    path: "programs?section=diploma-theology",
    name: "Diploma In Theory (Part-Time)",
  },
  {
    path: "programs?section=diploma-theology",
    name: "Diploma In Theory (Distance Online)",
  },
  {
    path: "programs?section=diploma-theology",
    name: "Diploma In Theory (Sandwich)",
  },
  {
    path: "programs?section=certificate-theology",
    name: "Certicate In Theology",
  },
  {
    path: "programs?section=executive-theology",
    name: "Executive Course In Theology",
  },
];

export const footerLinks: IFooterItems[] = [
  {
    name: "Quick Links",
    data: quickiesData,
  },
  {
    name: "Head Office",
    data: officeData,
  },
  {
    name: "Programs",
    data: coursesData,
  },
];

