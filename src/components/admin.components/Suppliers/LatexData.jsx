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
  const itemsPerPage = 30;

  // Handle filter changes
  const handleFilterChange = (e) => {
    const filterValue = e.target.value;
    setFilter(filterValue);

    // Apply filter logic
    let filteredData = [];
    if (filterValue === "weekly") {
      filteredData = initialData.slice(-7); // Last 7 days for weekly
    } else if (filterValue === "monthly") {
      // Filtering logic for monthly (use selected month from date picker or predefined month data)
      filteredData = initialData; // Replace with actual monthly data
    } else if (filterValue === "yearly") {
      // Filtering logic for yearly (all data grouped by month)
      filteredData = initialData; // Replace with actual yearly data
    }

    setData(filteredData);
    setCurrentPage(1); // Reset pagination when filter changes
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
    <div className="p-4 bg-white shadow-md rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-2xl text-center font-semibold">Latex</h3>
        <div className="flex gap-4 items-center">
          <select
            className="p-2 border rounded-md"
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
            className="p-2 border rounded-md"
          />
        </div>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={paginatedData}>
          <Line type="monotone" dataKey="latex" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
      <div className="mt-4">
        {filter === "yearly" && (
          <div className="flex justify-end items-center gap-5 mt-4">
            <button
              className="p-2 text-cyan-900  rounded-full cursor-pointer hover:bg-slate-300"
              onClick={() => handlePageChange("prev")}
              disabled={currentPage === 1}
            >
              <IoArrowBackOutline className="text-2xl font-medium" />
            </button>
            <p>{currentPage}</p>
            <button
              className="p-2 text-cyan-900  rounded-full cursor-pointer hover:bg-slate-300"
              onClick={() => handlePageChange("next")}
              disabled={currentPage * itemsPerPage >= data.length}
            >
              <IoArrowForwardOutline className="text-2xl font-medium" />
            </button>
          </div>
        )}
        <table className="w-full text-left">
          <thead>
            <tr>
              <th className="border p-2">Date</th>
              <th className="border p-2">Day</th>
              <th className="border p-2">Latex</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.length > 0 ? (
              paginatedData.map((entry) => {
                const formattedDate = new Date(entry.date).toLocaleDateString("en-GB");
                return (
                  <tr key={entry.date}>
                    <td className="border p-2">{formattedDate}</td>
                    <td className="border p-2">{entry.name}</td>
                    <td className="border p-2">{entry.latex}</td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="3" className="border p-2 text-center">
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
