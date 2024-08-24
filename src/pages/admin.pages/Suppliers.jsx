import React from "react";
import Cardpages from "../../components/admin.components/Cardpages";
import TableComponent from "../../components/admin.components/TableComponent";
import { IoMdAdd } from "react-icons/io";
import { CiSearch } from "react-icons/ci";

const Suppliers = () => {
  const suppliers = [
    {
      id: 1,
      name: "Rajan Raju",
      boneId: 2134128,
      Lupdate: "06/02/2020",
      phone: "9063214556",
      status: "Approved",
      avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
      id: 2,
      name: "Unias Ubaid",
      boneId: 2141248,
      Lupdate: "06/02/2020",
      phone: "8563235456",
      status: "Approved",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      id: 3,
      name: "Jabar Kareem",
      boneId: 21241248,
      Lupdate: "06/02/2020",
      phone: "7563677766",
      status: "Pending",
      avatar: "https://randomuser.me/api/portraits/women/3.jpg",
    },
    {
      id: 4,
      name: "Jaison Jobby",
      boneId: 4677428,
      Lupdate: "06/02/2020",
      phone: "9963214346",
      status: "Approved",
      avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      id: 5,
      name: "Chacko Jackson",
      boneId: 4364628,
      Lupdate: "06/02/2020",
      phone: "7563277888",
      status: "Approved",
      avatar: "https://randomuser.me/api/portraits/women/5.jpg",
    },
    {
      id: 2,
      name: "Unias Ubaid",
      boneId: 2141248,
      Lupdate: "06/02/2020",
      phone: "8563235456",
      status: "Approved",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      id: 3,
      name: "Jabar Kareem",
      boneId: 21241248,
      Lupdate: "06/02/2020",
      phone: "7563677766",
      status: "Pending",
      avatar: "https://randomuser.me/api/portraits/women/3.jpg",
    },
    {
      id: 4,
      name: "Jaison Jobby",
      boneId: 4677428,
      Lupdate: "06/02/2020",
      phone: "9963214346",
      status: "Approved",
      avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      id: 5,
      name: "Chacko Jackson",
      boneId: 4364628,
      Lupdate: "06/02/2020",
      phone: "7563277888",
      status: "Approved",
      avatar: "https://randomuser.me/api/portraits/women/5.jpg",
    },
    {
      id: 2,
      name: "Unias Ubaid",
      boneId: 2141248,
      Lupdate: "06/02/2020",
      phone: "8563235456",
      status: "Approved",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      id: 3,
      name: "Jabar Kareem",
      boneId: 21241248,
      Lupdate: "06/02/2020",
      phone: "7563677766",
      status: "Pending",
      avatar: "https://randomuser.me/api/portraits/women/3.jpg",
    },
    {
      id: 4,
      name: "Jaison Jobby",
      boneId: 4677428,
      Lupdate: "06/02/2020",
      phone: "9963214346",
      status: "Approved",
      avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      id: 5,
      name: "Chacko Jackson",
      boneId: 4364628,
      Lupdate: "06/02/2020",
      phone: "7563277888",
      status: "Approved",
      avatar: "https://randomuser.me/api/portraits/women/5.jpg",
    },
    {
      id: 2,
      name: "Unias Ubaid",
      boneId: 2141248,
      Lupdate: "06/02/2020",
      phone: "8563235456",
      status: "Approved",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      id: 3,
      name: "Jabar Kareem",
      boneId: 21241248,
      Lupdate: "06/02/2020",
      phone: "7563677766",
      status: "Pending",
      avatar: "https://randomuser.me/api/portraits/women/3.jpg",
    },
    {
      id: 4,
      name: "Jaison Jobby",
      boneId: 4677428,
      Lupdate: "06/02/2020",
      phone: "9963214346",
      status: "Approved",
      avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      id: 5,
      name: "Chacko Jackson",
      boneId: 4364628,
      Lupdate: "06/02/2020",
      phone: "7563277888",
      status: "Approved",
      avatar: "https://randomuser.me/api/portraits/women/5.jpg",
    },
  ];

  return (
    <div className="grid gap-3 bg-[#F1F5F8] py-3 px-4">
      <div className="grid grid-cols-4 grid-rows-1 gap-4 bg-white z-20 sticky top-0 p-2 rounded-md">
        <div className="col-span-1">
          <h1 className="text-4xl font-bold text-cyan-900">Suppliers List</h1>
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
          <button className="p-2 bg-cyan-800 text-white font-medium rounded-md flex items-center gap-2">
            <IoMdAdd className="w-10 h-5" />
            <span>Add Supplier</span>
          </button>
        </div>
      </div>
      <Cardpages />
      <TableComponent suppliers={suppliers} />
    </div>
  );
};

export default Suppliers;
