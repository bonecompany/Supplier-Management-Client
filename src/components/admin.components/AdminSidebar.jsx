import React, { useState } from "react";
import {
  FaHome,
  FaTruck,
  FaUserTie,
  FaTree,
  FaFlask,
  FaSignOutAlt,
  FaBalanceScale,
} from "react-icons/fa";
import SidebarItem from "./SidebarItem";
import AdminNavbar from "./AdminNavbar";
import { Outlet, useNavigate } from "react-router-dom";

const AdminSidebar = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isMenu, setIsMenu] = useState("")

  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="flex h-screen flex-col ">
      <header className="fixed left-0 top-0 right-0 z-50 ">
        <AdminNavbar toggleSidebar={toggleSidebar} isExpanded={isExpanded} />
      </header>
      <div className="flex h-full pt-[72px] ">
        <aside
          className={`flex flex-col ${isExpanded ? "w-64 px-2" : "w-16"
            } bg-gradient-to-b from-[#3b4457] to-[#172131] text-white h-full transition-width duration-300 shadow-lg`}
        >
          <nav className="flex flex-col justify-between flex-1">
            <div className="flex flex-col space-y-2 mt-4 px-1">
              <SidebarItem
                icon={<FaHome />}
                label="Home"
                isExpanded={isExpanded}
                isMenu={isMenu}
                onClick={() => {
                  navigate("/admin");
                  setIsExpanded(!isExpanded);
                  setIsMenu("Home")
                }}
              />
              <SidebarItem
                icon={<FaFlask />}
                label="Latex Parchase"
                isExpanded={isExpanded}
                isMenu={isMenu}
                onClick={() => {
                  navigate("/admin/latex-parchase");
                  setIsExpanded(false);
                  setIsMenu("Latex Parchase")
                }}
              />
              <SidebarItem
                icon={<FaBalanceScale />}
                label="DRC Updation"
                isExpanded={isExpanded}
                isMenu={isMenu}
                onClick={() => {
                  navigate("/admin/drc-updation");
                  setIsExpanded(false);
                  setIsMenu("DRC Updation")
                }}
              />
              <SidebarItem
                icon={<FaUserTie />}
                label="Suppliers"
                isExpanded={isExpanded}
                isMenu={isMenu}
                onClick={() => {
                  navigate("/admin/suppliers");
                  setIsExpanded(false);
                  setIsMenu("Suppliers")
                }}
              />
              <SidebarItem
                icon={<FaTruck />}
                label="Drivers"
                isExpanded={isExpanded}
                isMenu={isMenu}
                onClick={() => {
                  navigate("/admin/drivers");
                  setIsExpanded(false);
                  setIsMenu("Drivers")
                }}
              />
              <SidebarItem
                icon={<FaTree />}
                label="Tapers"
                isExpanded={isExpanded}
                isMenu={isMenu}
                onClick={() => {
                  navigate("/admin/tapers");
                  setIsExpanded(false);
                  setIsMenu("Tapers")
                }}
              />
            </div>
          </nav>
          <div
            className={`text-center p-4 text-sm text-gray-400 ${isExpanded ? "block" : "hidden"
              }`}
          >
            © 2024 B One Rubbers
          </div>
        </aside>
        <main className="flex-1 bg-gray-50 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminSidebar;
