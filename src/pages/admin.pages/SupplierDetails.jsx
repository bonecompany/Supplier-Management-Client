import React from "react";
import SupplierProfile from "../../components/admin.components/Suppliers/SupplierProfile";
import LatexChart from "../../components/admin.components/Suppliers/LatexChart";
import LatexTable from "../../components/admin.components/Suppliers/LatexTable";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const SupplierDetails = () => {

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F1F5F8] p-6 grid grid-cols-1 gap-4 md:grid-cols-12">
      <div className="flex items-center gap-2 col-span-12">
        <button
          onClick={() => navigate(-1)}
          className="text-2xl p-2 rounded-full hover:bg-slate-300 ml-[-10px]"
        >
          <IoMdArrowRoundBack />
        </button>
        <h1 className="text-3xl font-bold text-cyan-900">Supplier Profile</h1>
      </div>
      <div className="col-span-12 md:col-span-4">
        <SupplierProfile />
      </div>
      <div className="col-span-12 md:col-span-8 bg-white rounded-lg shadow-lg py-3 pr-4">
        <LatexChart />
      </div>
      <div className="col-span-12">
        <LatexTable supplier={"from supplier"} />
      </div>
    </div>
  );
};

export default SupplierDetails;
