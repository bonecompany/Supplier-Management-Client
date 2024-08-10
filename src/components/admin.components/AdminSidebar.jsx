import React, { useState } from "react";
import {
  FaBars,
  FaTruck,
  FaUserTie,
  FaTree,
  FaFlask,
  FaSignOutAlt,
  FaBalanceScale,
} from "react-icons/fa";
import SidebarItem from "./SidebarItem"; // Ensure SidebarItem is the default export
import Logo from "../../assets/Bone Logo.png";
import { Outlet } from "react-router-dom";

const AdminSidebar = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="flex h-screen">
      <div
        className={`flex flex-col ${
          isExpanded ? "w-64 px-2" : "w-16"
        } bg-gradient-to-b from-[#486777] to-[#0F2027] text-white h-full transition-width duration-300 ease-in-out shadow-lg `}
      >
        <div className={`flex items-center justify-between p-4  ${isExpanded ? "bg-slate-50 border-4 rounded-xl mt-2" : ""} `}>
          <img
            src={Logo}
            alt="BOne Rubbers"
            className={`transition-all duration-500 ease-in-out ${
              isExpanded ? "block" : "hidden"
            } w-32`}
          />
          <button
            onClick={toggleSidebar}
            className={`${isExpanded ? "text-cyan-900 hover:bg-gray-200" : "text-white hover:bg-cyan-900"} p-2  rounded-full transition-colors duration-300`}
          >
            <FaBars className="text-xl" />
          </button>
        </div>
        <nav className="flex flex-col justify-between flex-1">
          <div className="flex flex-col space-y-2 mt-4 px-1">
            <SidebarItem
              icon={<FaUserTie />}
              label="Suppliers"
              isExpanded={isExpanded}
            />
            <SidebarItem
              icon={<FaTruck />}
              label="Drivers"
              isExpanded={isExpanded}
            />
            <SidebarItem
              icon={<FaTree />}
              label="Tapers Monitoring"
              isExpanded={isExpanded}
            />
            <SidebarItem
              icon={<FaFlask />}
              label="Latex Parchase"
              isExpanded={isExpanded}
            />
            <SidebarItem
              icon={<FaBalanceScale />}
              label="DRC"
              isExpanded={isExpanded}
              onClick={() => {console.log("DRC clicked");
                setIsExpanded(false)
              }}
            />
          </div>
          <div className={`px-1 mb-3 ${!isExpanded && ""}`}>

          <SidebarItem
            icon={<FaSignOutAlt />}
            label="Logout"
            isExpanded={isExpanded}
          />
          </div>
        </nav>
        <div className={`text-center p-4 text-sm text-gray-400 ${isExpanded ? "block" : "hidden"}`}>
          © 2024 B One Rubbers
        </div>
      </div>
      <div className="flex-1 bg-gray-50 p-6">
       <Outlet/>
      </div>
    </div>
  );
};

export default AdminSidebar;
