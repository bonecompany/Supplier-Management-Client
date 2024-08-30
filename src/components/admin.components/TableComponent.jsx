import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Skeleton from "../Loding/Skelton";
import ReactPaginate from "react-paginate";

function TableComponent({ suppliers, isLoding }) {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage] = useState(10); // Adjust per page items here

  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  const paginatedSuppliers = suppliers.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

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
        <table className="min-w-full bg-white shadow-md rounded-md overflow-hidden mt-3 capitalize">
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
            {paginatedSuppliers.map((supplier, index) => (
              <tr
                key={index}
                className="border-t hover:bg-slate-200 duration-300 cursor-pointer"
                onClick={() => navigate(`/admin/supplier/${supplier?.Bone_id}`)}
              >
                <td className="py-2 px-2 flex items-center space-x-2 text-gray-700">
                  <span>{currentPage * itemsPerPage + index + 1}</span>
                </td>
                <td className="p-2 text-gray-700">
                  <span>{supplier?.Bone_id}</span>
                </td>
                <td className="p-2 flex items-center space-x-2">
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
                  <span>
                    {new Date(supplier?.createdAt).toLocaleDateString()}
                  </span>
                </td>
                <td
                  className={`p-2 font-medium ${
                    supplier?.isActive ? "text-green-700" : "text-red-500"
                  }`}
                >
                  {supplier?.isActive ? "Active" : "Inactive"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={Math.ceil(suppliers.length / itemsPerPage)}
          onPageChange={handlePageClick}
          containerClassName={"flex justify-center mt-4"}
          pageClassName={"mx-1"}
          pageLinkClassName={
            "px-3 py-1 border border-gray-300 rounded text-blue-600 hover:bg-gray-200"
          }
          previousClassName={"mx-1"}
          previousLinkClassName={
            "px-3 py-1 border border-gray-300 rounded text-blue-600 hover:bg-gray-200"
          }
          nextClassName={"mx-1"}
          nextLinkClassName={
            "px-3 py-1 border border-gray-300 rounded text-blue-600 hover:bg-gray-200"
          }
          breakClassName={"mx-1"}
          breakLinkClassName={
            "px-3 py-1 border border-gray-300 rounded text-blue-600 hover:bg-gray-200"
          }
          activeClassName={"bg-slate-300 text-slate-50 border-blue-600"}
        />
      </div>
    </div>
  );
}

export default TableComponent;
