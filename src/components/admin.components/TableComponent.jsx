import React from 'react'

function TableComponent() {
    const users = [
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
    ];

    return (
        <div>

            < div className="p-2" >
                <div className="flex justify-between items-center mb-6">
                    <div className="flex w-[70%]">
                        <div className="flex px-4 py-3 w-[50%] rounded-md border-2 bg-white border-blue-200 overflow-hidden max-w-md  font-[sans-serif]">
                            <input
                                type="email"
                                placeholder="Search Something..."
                                className="w-full outline-none bg-transparent text-gray-600  "
                            />
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 192.904 192.904"
                                width="16px"
                                class="fill-gray-600"
                            >
                                <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
                            </svg>
                        </div>
                        <select className="border rounded-md p-2">
                            <option>Filter</option>
                        </select>
                    </div>
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
                        {users.map((user) => (
                            <tr key={user.id} className="border-t">
                                <td className="py-2 px-4  text-gray-700">{user.id}</td>
                                <td className="py-2 px-4  text-gray-700">
                                    <span className="bg-yellow-100 text-black px-2 py-1 rounded-full ">
                                        {user.boneId}
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
                                            : "bg-gray-200 text-yellow-800"
                                            } px-2 py-1 rounded-full text-xs`}
                                    >
                                        {user.status}
                                    </span>
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    )

}

export default TableComponent