import Sidebar from "@/components/ui/navigations/Sidebar";
import FooterAdmin from "@/components/ui/navigations/footers/FooterAdmin";
import HeaderStats from "@/components/ui/navigations/header/HeaderStats";
import AdminNavbar from "@/components/ui/navigations/navbar/AdminNavbar";

export default function Admin({ children }: IChildren) {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        {/* Header */}
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          {children}
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
