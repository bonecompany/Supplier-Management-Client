import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { IoArrowBackOutline, IoArrowForwardOutline } from "react-icons/io5";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const initialData = [
  { name: "Sunday", latex: 34.5, date: "28-07-2024" },
  { name: "Monday", latex: 42.4, date: "29-07-2024" },
  { name: "Tuesday", latex: 30.3, date: "30-07-2024" },
  { name: "Wednesday", latex: 40.2, date: "31-07-2024" },
  { name: "Thursday", latex: 29.9, date: "01-08-2024" },
  { name: "Friday", latex: 45.6, date: "02-08-2024" },
  { name: "Saturday", latex: 60.7, date: "03-08-2024" },
  { name: "Sunday", latex: 34.5, date: "04-08-2024" },
  { name: "Monday", latex: 42.4, date: "05-08-2024" },
  { name: "Tuesday", latex: 30.3, date: "06-08-2024" },
  { name: "Wednesday", latex: 40.2, date: "07-08-2024" },
  { name: "Thursday", latex: 29.9, date: "08-08-2024" },
  { name: "Friday", latex: 45.6, date: "09-08-2024" },
  { name: "Saturday", latex: 60.7, date: "10-08-2024" },
  { name: "Sunday", latex: 34.5, date: "11-08-2024" },
  { name: "Monday", latex: 42.4, date: "12-08-2024" },
  { name: "Tuesday", latex: 30.3, date: "13-08-2024" },
  { name: "Wednesday", latex: 40.2, date: "14-08-2024" },
  { name: "Thursday", latex: 29.9, date: "15-08-2024" },
  { name: "Friday", latex: 45.6, date: "16-08-2024" },
  { name: "Saturday", latex: 60.7, date: "17-08-2024" },
  { name: "Sunday", latex: 34.5, date: "18-08-2024" },
  { name: "Monday", latex: 42.4, date: "19-08-2024" },
  { name: "Tuesday", latex: 30.3, date: "20-08-2024" },
  { name: "Wednesday", latex: 40.2, date: "21-08-2024" },
  { name: "Thursday", latex: 29.9, date: "22-08-2024" },
  { name: "Friday", latex: 45.6, date: "23-08-2024" },
  { name: "Saturday", latex: 60.7, date: "24-08-2024" },
  { name: "Sunday", latex: 34.5, date: "25-08-2024" },
  { name: "Monday", latex: 42.4, date: "26-08-2024" },
  { name: "Tuesday", latex: 30.3, date: "27-08-2024" },
  { name: "Wednesday", latex: 40.2, date: "28-08-2024" },
  { name: "Thursday", latex: 29.9, date: "29-08-2024" },
  { name: "Friday", latex: 45.6, date: "30-08-2024" },
  { name: "Saturday", latex: 60.7, date: "31-08-2024" },
];

const LatexData = () => {
  const [data, setData] = useState(initialData);
  const [filter, setFilter] = useState("weekly");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = filter === "weekly" ? 7 : 30;

  // Handle filter changes
  const handleFilterChange = (e) => {
    const filterValue = e.target.value;
    setFilter(filterValue);

    // Apply filter logic
    let filteredData = [];
    if (filterValue === "weekly") {
      filteredData = initialData.slice(-7);
    } else if (filterValue === "monthly") {
      filteredData = initialData.slice(-31); // Use actual monthly data logic
    } else if (filterValue === "yearly") {
      filteredData = initialData; // Use actual yearly data logic
    }

    setData(filteredData);
    setCurrentPage(1);
  };

  // Pagination logic
  const handlePageChange = (direction) => {
    if (direction === "next") {
      setCurrentPage((prev) => prev + 1);
    } else if (direction === "prev") {
      setCurrentPage((prev) => Math.max(prev - 1, 1));
    }
  };

  // Paginate the data if viewing by year
  const paginatedData =
    filter === "yearly"
      ? data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
      : data;

  // Change date format to dd-mm-yyyy
  const handleDateChange = (date) => {
    setSelectedDate(date);
    const formattedDate = date.toLocaleDateString("en-GB").split('/').reverse().join('-');
    const filteredData = initialData.filter(
      (entry) => entry.date === formattedDate
    );
    setData(filteredData);
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-3xl text-center font-semibold text-gray-800">Latex Data</h3>
        <div className="flex gap-4 items-center">
          <select
            className="p-2 border rounded-md bg-gray-100 text-gray-700"
            value={filter}
            onChange={handleFilterChange}
          >
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
          </select>
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            dateFormat="dd-MM-yyyy"
            className="p-2 border rounded-md bg-gray-100 text-gray-700"
          />
        </div>
      </div>
      <ResponsiveContainer width="100%" height={350}>
        <LineChart data={paginatedData}>
          <Line type="monotone" dataKey="latex" stroke="#4f46e5" strokeWidth={2} />
          <CartesianGrid stroke="#e2e8f0" />
          <XAxis dataKey="name" tick={{ fill: "#4b5563" }} />
          <YAxis tick={{ fill: "#4b5563" }} />
          <Tooltip contentStyle={{ backgroundColor: "#f9fafb", borderColor: "#e5e7eb" }} />
        </LineChart>
      </ResponsiveContainer>
      <div className="mt-6">
        {filter === "yearly" && (
          <div className="flex justify-between items-center mt-4">
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
        <table className="w-full text-left mt-4">
          <thead>
            <tr>
              <th className="border-b-2 border-gray-200 p-4 text-gray-700">Date</th>
              <th className="border-b-2 border-gray-200 p-4 text-gray-700">Date</th>
              <th className="border-b-2 border-gray-200 p-4 text-gray-700">Day</th>
              <th className="border-b-2 border-gray-200 p-4 text-gray-700">Latex</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.length > 0 ? (
              paginatedData.map((entry, index) => {
                const formattedDate = new Date(entry.date).toLocaleDateString("en-GB");
                return (
                  <tr key={entry.date} className="hover:bg-gray-100 transition-colors">
                    <td className="border-b border-gray-200 p-4 text-gray-600">{index + 1}</td>
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
    </div>
  );
};

export default LatexData;
