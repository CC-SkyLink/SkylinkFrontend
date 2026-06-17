import { type ReactNode, useState, createContext, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import AdminTopHeader from "./AdminTopHeader";

type AdminSearchContextType = {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
};

const AdminSearchContext = createContext<AdminSearchContextType>({
  searchQuery: "",
  setSearchQuery: () => {},
});

export const useAdminSearch = () => useContext(AdminSearchContext);

type AdminLayoutProps = {
  children: ReactNode;
};

const AdminLayout = ({ children }: AdminLayoutProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();

  useEffect(() => {
    setSearchQuery("");
  }, [location.pathname]);

  return (
    <AdminSearchContext.Provider value={{ searchQuery, setSearchQuery }}>
      <div className="flex h-screen overflow-hidden bg-[#F3F5F7]">
        <AdminSidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />
        <div className="flex flex-1 flex-col overflow-hidden">
          <AdminTopHeader onMenuClick={() => setIsSidebarOpen(true)} />
          <main className="flex-1 overflow-y-auto overflow-x-hidden p-6 lg:p-8">
            {children}
          </main>
        </div>
      </div>
    </AdminSearchContext.Provider>
  );
};

export default AdminLayout;
