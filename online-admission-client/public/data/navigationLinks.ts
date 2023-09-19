import { IconArrowElbow, IconCheck, IconDownload, IconEdit, IconExternalLink, IconHome, IconNextChat, IconRefresh } from "@/components/icons";

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
    icon: IconNextChat,
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
