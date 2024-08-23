import React from "react";
import { useNavigate } from "react-router-dom";

function TableComponent({suppliers}) {
    const navigate = useNavigate()


  return (
    <div>
      <div className="p-2">
       

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
            {suppliers.map((supplier, index) => (
              <tr onClick={() => navigate(`/admin/supplier/${supplier.boneId}`)} key={supplier.id} className="border-t hover:bg-slate-200 duration-300 cursor-pointer">
                <td className="py-2 px-4  text-gray-700">{index + 1}</td>
                <td className="py-2 px-4  text-gray-700">
                  <span className="bg-yellow-100 text-black px-2 py-1 rounded-full ">
                    {supplier.boneId}
                  </span>
                </td>
                <td className="py-2 px-4 flex items-center space-x-2  text-gray-700">
                  <span>{supplier.name}</span>
                </td>

                <td className="py-2 px-4  ">
                  <span className="bg-blue-100 text-black px-2 py-1 rounded-full">
                    {supplier.Lupdate}
                  </span>
                </td>
                <td className="py-2 px-4  text-gray-700">{supplier.phone}</td>
                <td className="py-2 px-4 ">
                  <span
                    className={`${
                      supplier.status === "Approved"
                        ? "bg-gray-200 text-blue-800"
                        : "bg-gray-200 text-yellow-800"
                    } px-2 py-1 rounded-full text-xs`}
                  >
                    {supplier.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TableComponent;
