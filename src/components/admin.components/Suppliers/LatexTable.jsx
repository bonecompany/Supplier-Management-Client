import React from "react";
import { IoArrowBackOutline, IoArrowForwardOutline } from "react-icons/io5";

const LatexTable = ({ data, filter, currentPage, handlePageChange, itemsPerPage }) => {
  return (
    <div className="p-6 bg-white shadow-lg rounded-lg mt-6">
      {filter === "yearly" && (
        <div className="flex justify-between items-center mb-4">
          <button
            className="p-2 text-indigo-600 hover:text-indigo-800 rounded-full cursor-pointer"
            onClick={() => handlePageChange("prev")}
            disabled={currentPage === 1}
          >
            <IoArrowBackOutline className="text-2xl" />
          </button>
          <p className="text-gray-700">{currentPage}</p>
          <button
            className="p-2 text-indigo-600 hover:text-indigo-800 rounded-full cursor-pointer"
            onClick={() => handlePageChange("next")}
            disabled={currentPage * itemsPerPage >= data.length}
          >
            <IoArrowForwardOutline className="text-2xl" />
          </button>
        </div>
      )}
      <table className="w-full text-left">
        <thead>
          <tr>
            <th className="border-b-2 border-gray-200 p-4 text-gray-700">Date</th>
            <th className="border-b-2 border-gray-200 p-4 text-gray-700">Day</th>
            <th className="border-b-2 border-gray-200 p-4 text-gray-700">Latex</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((entry) => {
              const formattedDate = new Date(entry.date).toLocaleDateString("en-GB");
              return (
                <tr key={entry.date} className="hover:bg-gray-100 transition-colors">
                  <td className="border-b border-gray-200 p-4 text-gray-600">{formattedDate}</td>
                  <td className="border-b border-gray-200 p-4 text-gray-600">{entry.name}</td>
                  <td className="border-b border-gray-200 p-4 text-gray-600">{entry.latex}</td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan="3" className="border-b border-gray-200 p-4 text-center text-gray-600">
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default LatexTable;
