import React from 'react'
import { IoMdAdd } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import SupplierRegistration from './SupplierRegistration';

function SupplierNavbar() {
    const [open, setOpen] = React.useState(false)
    return (
        <div>
            <div className="grid grid-cols-4 grid-rows-1 gap-2 bg-white z-50 sticky top-0 p-2 rounded-md">
                <div className="col-span-1">
                    <h1 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-cyan-900">Suppliers List</h1>
                </div>
                <div className="col-span-3 flex justify-end gap-4">
                    <div className="grid grid-cols-3 gap-2">
                        <div className="col-span-2 flex px-4 py-3 grow rounded-md border-2 bg-white border-blue-200 overflow-hidden max-w-md  font-[sans-serif]">
                            <input
                                type="text"
                                placeholder="Search B one id or Supplier Name . . . "
                                className="w-full outline-none bg-transparent text-gray-600  "
                            />
                            <CiSearch className=" text-2xl fill-gray-600" />
                        </div>
                        <select className="col-span-1 border rounded-md p-2">
                            <option value="All Suppliers">All Suppliers</option>
                            <option value="Daily Collection">Daily Collection</option>
                            <option value="Alternative Day Collection">
                                Alternative Day Collection
                            </option>
                            <option value="Barrel Collection">Barrel Collection</option>
                            <option value="Lease Plantation">Lease Plantation</option>
                            <option value="Slaughter Plantation">Slaughter Plantation</option>
                        </select>
                    </div>
                    <button onClick={() => setOpen(true)} className="p-2 bg-cyan-800 text-white font-medium rounded-md flex items-center gap-1">
                        <IoMdAdd className="w-10 h-5" />
                        <span>Add Supplier</span>
                    </button>
                </div>
            </div>

            <SupplierRegistration
                open={open}
                onClose={() => setOpen(false)}
            />

        </div >
    )
}

export default SupplierNavbar