import { IconArrowElbow, IconCheck, IconDownload, IconEdit, IconExternalLink, IconHome, IconNextChat, IconRefresh } from "@/components/icons";

export const aboutData: ISidebarMenu[] = [
  {
    path: "/about-dl",
    name: "About DL-IBTC",
    icon: IconCheck,
  },
  {
    path: "about-dl/history",
    name: "History of DL-IBTC",
    icon: IconDownload,
  },
  {
    path: "about-dl/objectives",
    name: "Objectives",
    icon: IconEdit,
  },
  {
    path: "about-dl/core-values",
    name: "Core Values",
    icon: IconDownload,
  },
  {
    path: "about-dl/college-organogram",
    name: "College Organogram",
    icon: IconCheck,
  },
  {
    path: "about-dl/faculty-profile",
    name: "Faculty Profile",
    icon: IconEdit,
  },
];

export const navigationItems: ISidebarMenu[] = [
  {
    path: '/',
    name: 'Dashboard',
    icon: IconHome,
  },
  {
    path: '/about-dl',
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
    icon: IconCheck,
  },
  {
    path: '/admissions',
    name: 'Admissions',
    icon: IconExternalLink,
  },
  {
    path: '/programs',
    name: 'Programs',
    // data: aboutData,
    icon: IconArrowElbow,
  },
];
