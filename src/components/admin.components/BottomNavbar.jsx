import React from "react";
import {
  FaHome,
  FaTruck,
  FaUserTie,
  FaTree,
  FaFlask,
  FaBalanceScale,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const BottomNavbar = ({ isMenu, setIsMenu }) => {
  const navigate = useNavigate();

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-b from-[#303b53] to-[#172131] text-white shadow-lg">
      <div className="flex justify-around py-2">
        <button
          className={`flex flex-col items-center ${isMenu === "Home" ? "text-yellow-500" : ""}`}
          onClick={() => {
            navigate("/admin");
            setIsMenu("Home");
          }}
        >
          <FaHome size={24} />
          <span className="text-xs">Home</span>
        </button>
        <button
          className={`flex flex-col items-center ${isMenu === "Latex Parchase" ? "text-yellow-500" : ""}`}
          onClick={() => {
            navigate("/admin/latex-parchase");
            setIsMenu("Latex Parchase");
          }}
        >
          <FaFlask size={24} />
          <span className="text-xs">Latex</span>
        </button>
        <button
          className={`flex flex-col items-center ${isMenu === "DRC Updation" ? "text-yellow-500" : ""}`}
          onClick={() => {
            navigate("/admin/drc-updation");
            setIsMenu("DRC Updation");
          }}
        >
          <FaBalanceScale size={24} />
          <span className="text-xs">DRC</span>
        </button>
        <button
          className={`flex flex-col items-center ${isMenu === "Suppliers" ? "text-yellow-500" : ""}`}
          onClick={() => {
            navigate("/admin/suppliers");
            setIsMenu("Suppliers");
          }}
        >
          <FaUserTie size={24} />
          <span className="text-xs">Suppliers</span>
        </button>
        <button
          className={`flex flex-col items-center ${isMenu === "Drivers" ? "text-yellow-500" : ""}`}
          onClick={() => {
            navigate("/admin/drivers");
            setIsMenu("Drivers");
          }}
        >
          <FaTruck size={24} />
          <span className="text-xs">Drivers</span>
        </button>
        <button
          className={`flex flex-col items-center ${isMenu === "Tapers" ? "text-yellow-500" : ""}`}
          onClick={() => {
            navigate("/admin/tapers");
            setIsMenu("Tapers");
          }}
        >
          <FaTree size={24} />
          <span className="text-xs">Tapers</span>
        </button>
      </div>
    </nav>
  );
};

export default BottomNavbar;
