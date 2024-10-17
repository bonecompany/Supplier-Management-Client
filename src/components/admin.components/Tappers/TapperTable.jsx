import React from 'react'
import { useNavigate } from 'react-router-dom'
function TapperTable({ tappers }) {
    const navigate = useNavigate()
    console.log(tappers)
    const handleRowClick = (tapper) => {
         navigate(`/admin/tapper/${tapper.phone}`,{state:{tapper}})
    }
    return (
        <div>
            <table className="min-w-full bg-white shadow-md rounded-md overflow-hidden mt-3 capitalize">
                <thead className="bg-gray-50">
                    <tr className=''>
                        <th className="p-2 text-left text-lg font-medium text-gray-500">
                            #
                        </th>
                        <th className="p-2 text-left text-lg font-medium text-gray-500">
                            Name
                        </th>
                        <th className="p-2 text-left text-lg font-medium text-gray-500">
                            Phone
                        </th>
                        <th className="p-2 text-left text-lg font-medium text-gray-500">
                            place
                        </th>
                        <th className="p-2 text-left text-lg font-medium text-gray-500">
                            Supplier
                        </th>
                        <th className="p-2 text-left text-lg font-medium text-gray-500">
                            Rating
                        </th>
                        <th className="p-2 text-left text-lg font-medium text-gray-500">
                            Created Date
                        </th>
                    </tr>
                </thead>
                <tbody className=''>
                    {tappers.map((tapper, index) => (
                      
                        <tr
                            className="border-t hover:bg-slate-200 duration-300 cursor-pointer"
                            onClick={() => handleRowClick(tapper)}
                        >
                            <td className="py-2 px-2 flex items-center space-x-2 text-gray-700">
                                <p>{index + 1}</p>
                            </td>
                            <td className="p-2 text-gray-700">
                                <p>{tapper.name}</p>
                            </td>
                            <td className="p-2 flex items-center space-x-2">
                                <p>{tapper.phone}</p>
                            </td>
                            <td className="p-2">
                                <p>{tapper.place}</p>
                            </td>
                            <td className="p-2">
                                <p>{tapper.supplier?.name}</p>
                            </td>
                            <td className="p-2">
                                5
                            </td>
                            <td className="p-2">
                                <p>{new Date(tapper?.createdAt).toLocaleDateString()}</p>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    )
}
export default TapperTable