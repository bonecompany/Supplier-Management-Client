import { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import SupplierRegistration from "./SupplierRegistration";

function SupplierNavbar({ setSearchTerm, setSelectedCategory }) {
  const [open, setOpen] = useState(false);
  
  return (
    <div className="p-4">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between bg-white p-4 rounded-md shadow-md">
        <h1 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-cyan-900 mb-2 lg:mb-0">
          Suppliers List
        </h1>
        
        <div className="flex flex-col lg:flex-row lg:gap-4 w-full lg:w-auto">
          <div className="flex flex-col lg:flex-row lg:gap-2 mb-2 lg:mb-0 w-full">
            <div className="flex flex-grow border-2 border-blue-200 rounded-md overflow-hidden">
              <input
                type="text"
                placeholder="Search B one id or Supplier Name . . . "
                className="w-full p-2 outline-none bg-transparent text-gray-600"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {/* <CiSearch className="text-2xl fill-gray-600 p-2" /> */}
            </div>
            <select
              className="border rounded-md p-2 mt-2 lg:mt-0"
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="All Suppliers">All Suppliers</option>
              <option value="Daily Collection">Daily Collection</option>
              <option value="Alternative Day Collection">Alternative Day Collection</option>
              <option value="Barrel Collection">Barrel Collection</option>
              <option value="Lease Plantation">Lease Plantation</option>
              <option value="Slaughter Plantation">Slaughter Plantation</option>
            </select>
          </div>
          <button
            onClick={() => setOpen(true)}
            className="p-2 bg-cyan-800 text-white font-medium rounded-md flex items-center gap-1"
          >
            <IoMdAdd className="w-6 h-6" />
            <span>Add Supplier</span>
          </button>
        </div>
      </div>

      <SupplierRegistration open={open} onClose={() => setOpen(false)} />
    </div>
  );
}

export default SupplierNavbar;
