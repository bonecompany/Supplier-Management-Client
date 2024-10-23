import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/Bone-logo.png";
import { IoIosNotifications } from "react-icons/io";
import { RiAdminLine } from "react-icons/ri";
import MessageDropdown from "./MessageDropdown";
import NotificationDropdown from "./NotificationDropdown";
import LogoutDropdown from "./LogoutDropdown";
import { toast } from "react-toastify";

const AdminNavbar = ({ toggleSidebar, isExpanded, screen }) => {
  const [showMessageDropdown, setShowMessageDropdown] = useState(false);
  const [showNotificationDropdown, setShowNotificationDropdown] =
    useState(false);
  const [showLogoutDropdown, setShowLogoutDropdown] = useState(false);

  const navigate = useNavigate();

  const messages = [
    { sender: "John Doe", text: "Meeting at 3 PM" },
    { sender: "Jane Smith", text: "New task assigned" },
    // Add more messages here
  ];

  const notifications = [
    {
      title: "System Update",
      description: "System will be down at 12 AM",
    },
    {
      title: "New Comment",
      description: "You have a new comment on your post",
    },
    // Add more notifications here
  ];

  const handleClickMessageIcon = () => {
    setShowMessageDropdown(!showMessageDropdown);
    setShowNotificationDropdown(false);
  };

  const handleClickNotificationIcon = () => {
    setShowNotificationDropdown(!showNotificationDropdown);
    setShowMessageDropdown(false);
  };

  const handleClickLogoutIcon = () => {
    setShowLogoutDropdown(!showLogoutDropdown);
    setShowMessageDropdown(false);
    setShowNotificationDropdown(false);
  };

  const handleLogout = () => {
    sessionStorage.removeItem("adminToken");
    toast.success("Successfully logged out!");
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  return (
    <div className="flex items-center justify-between w-full bg-slate-100 shadow-md p-4">
      <div className={`flex items-center ${isExpanded ? "w-64" : "w-auto"}`}>
        <Link to="/admin" className="transition-all duration-500 ease-in-out">
          <img src={Logo} alt="B One Rubbers" className="w-28" />
        </Link>
        <button
          onClick={toggleSidebar}
          className="ml-4 p-2 text-cyan-950 hover:bg-gray-300 rounded-full transition-all duration-500 ease-in-out"
        >
          <FaBars className="text-2xl" />
        </button>
      </div>

      <div className="flex items-center relative">
        <div className="hidden md:flex flex-grow justify-center gap-12 font-medium">
          <Link to="#" className="py-1 border-b-4 border-gray-100 hover:border-red-500 duration-500">
            Employee
          </Link>
          <Link to="#" className="py-1 border-b-4 border-gray-100 hover:border-red-500 duration-500">
            Vehicles
          </Link>
          <Link to="#" className="py-1 border-b-4 border-gray-100 hover:border-red-500 duration-500">
            Latex Rate
          </Link>
        </div>

        <div className="flex items-center gap-4 relative">
          <span onClick={handleClickMessageIcon} className="cursor-pointer relative hover:bg-slate-300 p-1 rounded-full">
            <MdMessage className="text-2xl" />
            {messages.length > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">
                {messages.length}
              </span>
            )}
            <MessageDropdown
              isOpen={showMessageDropdown}
              messages={messages}
              onClose={() => setShowMessageDropdown(false)}
            />
          </span>

          <span onClick={handleClickNotificationIcon} className="cursor-pointer relative hover:bg-slate-300 p-1 rounded-full">
            <IoIosNotifications className="text-2xl" />
            {notifications.length > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">
                {notifications.length}
              </span>
            )}
            <NotificationDropdown
              isOpen={showNotificationDropdown}
              notifications={notifications}
              onClose={() => setShowNotificationDropdown(false)}
            />
          </span>

          <span onClick={handleClickLogoutIcon} className="cursor-pointer relative hover:bg-slate-300 p-1 rounded-full ">
            <RiAdminLine className="text-2xl" />
            <LogoutDropdown
              isOpen={showLogoutDropdown}
              onClose={() => setShowLogoutDropdown(false)}
              onLogout={handleLogout}
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default AdminNavbar;
