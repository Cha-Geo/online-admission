// NAVIGATIONS
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

