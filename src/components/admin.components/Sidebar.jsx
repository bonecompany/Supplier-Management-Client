import React, { useState } from "react";
import {
  FaBars,
  FaTruck,
  FaUserTie,
  FaTree,
  FaFlask,
  FaUser,
  FaSignOutAlt,
} from "react-icons/fa";
import { SidebarItem } from "./SidebarItem";
import Logo from "../../assets/Bone Logo.png";

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="flex">
      <div
        className={`flex flex-col ${
          isExpanded ? "w-48" : "w-16"
        } bg-cyan-900 text-white h-screen transition-width duration-300`}
      >
        <div className="flex items-center justify-between p-3">
          <button onClick={toggleSidebar}>
            <FaBars className="text-3xl" />
          </button>
          <div className={`p-1 bg-white ${isExpanded ? "block" : "hidden"}`}>
            <img
              src={Logo}
              alt="B One Rubbers"
              className={`w-32`}
            />
          </div>
        </div>
        <div className="flex flex-col justify-between my-10 h-full">
          <div className="flex flex-col w-full">
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
              label="Tapers"
              isExpanded={isExpanded}
            />
            <SidebarItem
              icon={<FaFlask />}
              label="Latex"
              isExpanded={isExpanded}
            />
            <SidebarItem
              icon={<FaUser />}
              label="NRC"
              isExpanded={isExpanded}
              onClick={() => console.log("NRC clicked")}
            />
          </div>
          <div className="">
            <SidebarItem
              icon={<FaSignOutAlt />}
              label="Logout"
              isExpanded={isExpanded}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full h-screen">
        <div className="w-full bg-slate-600 h-14"></div>
        <div className=" w-full h-full flex justify-center items-center">
          <div className="bg-logo2 bg-no-repeat bg-contain bg-opacity-5 h-3/4 w-3/4"></div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
