import React, { useEffect, useState } from "react";
import { Axios } from "../../MainRoute";
import { useNavigate } from "react-router-dom";
import Skeleton from "../Loding/Skelton";
function TableComponent({suppliers, isLoding}) {
  // const [suppliers, setSuppliers] = useState([]);
  // const [isLoding, setIsLoading] = useState(true);

  const navigate = useNavigate();

  // useEffect(() => {
  //   const getSupplier = async () => {
  //     try {
  //       const response = await Axios.get("/admin/suppliers", {
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       });
  //       setSuppliers(response.data);
  //       setIsLoading(false);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   getSupplier();
  // }, []);

  if (isLoding) {
    return (
      <div className="space-y-4">
        <Skeleton width="w-full" height="h-8" />
        <Skeleton width="w-full" height="h-8" />
        <Skeleton width="w-full" height="h-8" />
        <Skeleton width="w-full" height="h-8" />
        <Skeleton width="w-full" height="h-8" />
        <Skeleton width="w-full" height="h-8" />
      </div>
    );
  }

  return (
    <div>
      <div className="p-2">
        <table className="min-w-full bg-white shadow-md rounded-md overflow-hidden mt-5 capitalize">
          <thead className="bg-gray-50">
            <tr>
              <th className="p-2 text-left text-lg font-medium text-gray-500">
                #
              </th>
              <th className="p-2 text-left text-lg font-medium text-gray-500">
                B-one ID
              </th>
              <th className="p-2 text-left text-lg font-medium text-gray-500">
                Name
              </th>
              <th className="p-2 text-left text-lg font-medium text-gray-500">
                Location
              </th>
              <th className="p-2 text-left text-lg font-medium text-gray-500">
                Supplier Category
              </th>
              <th className="p-2 text-left text-lg font-medium text-gray-500">
                Phone
              </th>
              <th className="p-2 text-left text-lg font-medium text-gray-500">
                Active Date
              </th>
              <th className="p-2 text-left text-lg font-medium text-gray-500">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {suppliers.map((supplier, index) => (
              <tr
                key={index}
                className="border-t hover:bg-slate-200 duration-300 cursor-pointer"
                onClick={() => navigate(`/admin/supplier/${supplier?.Bone_id}`)}
              >
                <td className="py-2 px-2 flex items-center space-x-2 text-gray-700">
                  <span>{index + 1}</span>
                </td>
                <td className="p-2 text-gray-700">
                  <span>{supplier?.Bone_id}</span>
                </td>
                <td className="p-2 flex items-center space-x-2 ">
                  <span>{supplier?.name}</span>
                </td>
                <td className="p-2">
                  <span>{supplier?.location}</span>
                </td>
                <td className="p-2">
                  <span>{supplier?.category}</span>
                </td>
                <td className="p-2">
                  <span>{supplier?.phone}</span>
                </td>
                <td className="p-2">
                  <span>{new Date(supplier?.createdAt).toLocaleDateString()}</span>
                </td>
                <td className={`p-2 font-medium ${supplier?.isActive ? "text-green-700" : "text-red-500"}`}>{supplier?.isActive ? "Active" : "Inactive"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TableComponent;
