import React, { useEffect, useState } from "react";
import { Axios } from '../../MainRoute';
import { IoMdAdd } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
function TableComponent() {
    const [users, setUsers] = useState([])


    useEffect(() => {
        const getSupplier = async () => {
            try {
                const response = await Axios.get('/admin/suppliers', {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                setUsers(response.data);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        getSupplier();
    }, []);

    return (
        <div>

            < div className="p-2" >

                <table className="min-w-full bg-white shadow-md rounded-md overflow-hidden mt-5">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="py-2 px-4 text-left text-lg  font-medium text-gray-500">
                                B-one ID
                            </th>
                            <th className="py-2 px-4 text-left text-lg  font-medium text-gray-500">
                                Name
                            </th>

                            <th className="py-2 px-4 text-left text-lg font-medium text-gray-500">
                                Location
                            </th>
                            <th className="py-2 px-4 text-left text-lg  font-medium text-gray-500">
                                Supplier Category
                            </th>
                            <th className="py-2 px-4 text-left text-lg  font-medium text-gray-500">
                                Phone
                            </th>
                            <th className="py-2 px-4 text-left text-lg  font-medium text-gray-500">
                                Active Date
                            </th>

                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={index} className="border-t">
                                <td className="py-2 px-4  text-gray-700">
                                    {user?.Bone_id ? <span className="bg-yellow-600  text-black px-2 py-1 rounded-md ">
                                        {user.Bone_id}
                                    </span> : null}

                                </td>
                                <td className="py-2 px-4 flex items-center space-x-2  text-gray-700">
                                    <span>{user.name}</span>
                                </td>

                                <td className="py-2 px-4  ">
                                    {user?.location ? <span className="bg-blue-100 text-black px-2 py-1 rounded-full">
                                        {user.location}
                                    </span> : null}

                                </td>
                                <td className="py-2 px-4  ">
                                    {user?.category ? <span className="bg-blue-100 text-black px-2 py-1  rounded-full">
                                        {user.category}
                                    </span> : null}

                                </td>
                                <td className="py-2 px-4  text-gray-700">{user.phone}</td>
                                <td className="py-2 px-4 ">
                                    {
                                        user?.createdAt ?
                                            < span
                                                className={`${user.status === "Approved"
                                                    ? "bg-gray-200 text-blue-800"
                                                    : "bg-gray-200 text-yellow-500"
                                                    } px-2 py-1 rounded-full text-xs`}
                                            >
                                                {new Date(user.createdAt).toLocaleDateString()}
                                            </span>
                                            : null}
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


