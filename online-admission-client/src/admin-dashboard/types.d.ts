//BUTTONS 
interface IButtonProps {
  label: string;
  bgColor?: string;
  color?: string;
  loading?: boolean;
  onClick?: () => void;
};

interface ActionButtonProps {
  onClick: () => void;
};


interface IChildren {
    children: React.ReactNode;
}

interface ContentNotFoundProps {}

interface ICardForm {
  label: string;
  type: string;
  rows?: number;
  defaultValue?: string;
}

interface ICardSection {
  title: string;
  children: React.ReactNode;
}

interface ConfirmDialogueProps {
  title: string;
  onSave: () => void;
};

// PPPPPP
interface IPaginationProps {
  handleNextPaginate: () => void;
  handlePrevPaginate: () => void;
  hasPrevPage: boolean;
  hasNextPage: boolean;
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

// SEARCH
interface ISearchComponentProps {
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  addBulk: boolean;
}

//TABLES
interface ITokens {
  access_token: string;
  u_id: string;
  refresh_token: string;
  expiresIn: number;
}

interface ICardTableProps {
  color: CardTableColors;
}

interface ITableRowData {
  imageSrc: string;
  projectName: string;
  budget: string;
  status: { color: string; text: string };
  users: { imageSrc: string }[];
  completion: { percent: string };
}

interface ITableRowProps {
  color: CardTableColors;
  data: ITableRowData[];
}

interface ITableTemplateProps {
  title: string;
  columns: string[];
  rows: { [key: string]: string }[];
  paginate?: boolean;
  Add?: boolean;
  Edit?: boolean;
  Delete?: boolean;
  addLink: string;
  toggleEdit?: () => void;
  toggleDelete?: () => void;
  label?: string;
  addBulk?: boolean;
  addBulkLink?: string;
  hasNextPage: boolean;
  hasPrevPage: boolean;
  handleNextPaginate: () => void;
  handlePrevPaginate: () => void;
  handleSearch: (e: ChangeEvent<HTMLInputElement>) => void;
  searchValue: string;
  loading?: boolean;
}


/// uuuuuu

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

// WWW
interface WithPrivateRouteProps {
  router: NextRouter;
}




//types
type ToastType = "success" | "info" | "error" | "warning";

type CardTableColors = "light" | "dark";

type CardTableHeaders = "Project" | "Budget" | "Status" | "Users" | "Completion" | "";
