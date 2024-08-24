
import React, { useEffect, useState } from "react";
import { Axios } from '../../MainRoute';

function TableComponent() {
    const [users, setUsers] = useState([])

    c
    // const users = [
    //     {
    //         id: 1,
    //         name: "Rajan Raju",
    //         boneId: 2134128,
    //         Lupdate: "06/02/2020",
    //         phone: "9063214556",
    //         status: "Approved",
    //         avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    //     },
    //     {
    //         id: 2,
    //         name: "Unias Ubaid",
    //         boneId: 2141248,
    //         Lupdate: "06/02/2020",
    //         phone: "8563235456",
    //         status: "Approved",
    //         avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    //     },
    //     {
    //         id: 3,
    //         name: "Jabar Kareem",
    //         boneId: 21241248,
    //         Lupdate: "06/02/2020",
    //         phone: "7563677766",
    //         status: "Pending",
    //         avatar: "https://randomuser.me/api/portraits/women/3.jpg",
    //     },
    //     {
    //         id: 4,
    //         name: "Jaison Jobby",
    //         boneId: 4677428,
    //         Lupdate: "06/02/2020",
    //         phone: "9963214346",
    //         status: "Approved",
    //         avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    //     },
    //     {
    //         id: 5,
    //         name: "Chacko Jackson",
    //         boneId: 4364628,
    //         Lupdate: "06/02/2020",
    //         phone: "7563277888",
    //         status: "Approved",
    //         avatar: "https://randomuser.me/api/portraits/women/5.jpg",
    //     },
    //     {
    //         id: 5,
    //         name: "Chacko Jackson",
    //         boneId: 4364628,
    //         Lupdate: "06/02/2020",
    //         phone: "7563277888",
    //         status: "Approved",
    //         avatar: "https://randomuser.me/api/portraits/women/5.jpg",
    //     },
    //     {
    //         id: 5,
    //         name: "Chacko Jackson",
    //         boneId: 4364628,
    //         Lupdate: "06/02/2020",
    //         phone: "7563277888",
    //         status: "Approved",
    //         avatar: "https://randomuser.me/api/portraits/women/5.jpg",
    //     },
    //     {
    //         id: 5,
    //         name: "Chacko Jackson",
    //         boneId: 4364628,
    //         Lupdate: "06/02/2020",
    //         phone: "7563277888",
    //         status: "Approved",
    //         avatar: "https://randomuser.me/api/portraits/women/5.jpg",
    //     },
    //     {
    //         id: 5,
    //         name: "Chacko Jackson",
    //         boneId: 4364628,
    //         Lupdate: "06/02/2020",
    //         phone: "7563277888",
    //         status: "Approved",
    //         avatar: "https://randomuser.me/api/portraits/women/5.jpg",
    //     },
    //     {
    //         id: 5,
    //         name: "Chacko Jackson",
    //         boneId: 4364628,
    //         Lupdate: "06/02/2020",
    //         phone: "7563277888",
    //         status: "Approved",
    //         avatar: "https://randomuser.me/api/portraits/women/5.jpg",
    //     },
    //     {
    //         id: 5,
    //         name: "Chacko Jackson",
    //         boneId: 4364628,
    //         Lupdate: "06/02/2020",
    //         phone: "7563277888",
    //         status: "Approved",
    //         avatar: "https://randomuser.me/api/portraits/women/5.jpg",
    //     },
    //     {
    //         id: 5,
    //         name: "Chacko Jackson",
    //         boneId: 4364628,
    //         Lupdate: "06/02/2020",
    //         phone: "7563277888",
    //         status: "Approved",
    //         avatar: "https://randomuser.me/api/portraits/women/5.jpg",
    //     },

    // ];

    return (
        <div>

            < div className="p-2" >
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




                <table className="min-w-full bg-white shadow-md rounded-md overflow-hidden mt-5">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="py-2 px-4 text-left text-lg font-medium text-gray-500">
                                #
                            </th>
                            <th className="py-2 px-4 text-left text-lg  font-medium text-gray-500">
                                B-one ID
                            </th>
                            <th className="py-2 px-4 text-left text-lg  font-medium text-gray-500">
                                Name
                            </th>

                            <th className="py-2 px-4 text-left text-lg font-medium text-gray-500">
                                Update
                            </th>
                            <th className="py-2 px-4 text-left text-lg  font-medium text-gray-500">
                                Phone
                            </th>
                            <th className="py-2 px-4 text-left text-lg  font-medium text-gray-500">
                                Activity
                            </th>

                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={index} className="border-t">
                                <td className="py-2 px-4  text-gray-700">{index + 1}</td>
                                <td className="py-2 px-4  text-gray-700">
                                    <span className="bg-yellow-100 text-black px-2 py-1 rounded-full ">
                                        {user.Bone_id}
                                    </span>
                                </td>
                                <td className="py-2 px-4 flex items-center space-x-2  text-gray-700">
                                    <span>{user.name}</span>
                                </td>

                                <td className="py-2 px-4  ">
                                    <span className="bg-blue-100 text-black px-2 py-1 rounded-full">
                                        {user.Lupdate}
                                    </span>
                                </td>
                                <td className="py-2 px-4  text-gray-700">{user.phone}</td>
                                <td className="py-2 px-4 ">
                                    <span
                                        className={`${user.status === "Approved"
                                            ? "bg-gray-200 text-blue-800"
                                            : "bg-gray-200 text-yellow-500"
                                            } px-2 py-1 rounded-full text-xs`}
                                    >
                                        {new Date(user.createdAt).toLocaleDateString()}
                                    </span>
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div >
    )
}

export default TableComponent


