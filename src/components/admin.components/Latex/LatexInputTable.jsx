import { useState, useEffect } from "react";
import axios from "axios";

const LatexInputTable = () => {
  const [supplierCode, setSupplierCode] = useState("");
  const [supplierName, setSupplierName] = useState("");
  const [grossWeight, setGrossWeight] = useState(0);
  const [bigJarsCount, setBigJarsCount] = useState(0);
  const [smallJarsCount, setSmallJarsCount] = useState(0);
  const [bigJarWeight, setBigJarWeight] = useState(2.4); // Default weight for big jar (kg)
  const [smallJarWeight, setSmallJarWeight] = useState(1.4); // Default weight for small jar (kg)
  const [jarsWeight, setJarsWeight] = useState(0);
  const [latexWeight, setLatexWeight] = useState(0);
  const [selectedDate, setSelectedDate] = useState(
    () => new Date().toISOString().split("T")[0]
  ); // Default to today

  // Fetch supplier name by supplier code
  useEffect(() => {
    if (supplierCode) {
      axios
        .get(`/api/suppliers/${supplierCode}`)
        .then((response) => {
          setSupplierName(response.data.name);
        })
        .catch((error) =>
          console.error("Error fetching supplier data:", error)
        );
    }
  }, [supplierCode]);

  // Calculate jars weight based on the count of big and small jars
  useEffect(() => {
    const totalJarsWeight =
      bigJarsCount * bigJarWeight + smallJarsCount * smallJarWeight;
    setJarsWeight(totalJarsWeight);
  }, [bigJarsCount, smallJarsCount, bigJarWeight, smallJarWeight]);

  // Calculate latex weight
  useEffect(() => {
    setLatexWeight(grossWeight - jarsWeight);
  }, [grossWeight, jarsWeight]);

  return (
    <div className="p-6 bg-[#F1F5F8] min-h-screen flex flex-col items-center">
      <div className="bg-white shadow-lg rounded-lg p-4 w-full">
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold text-gray-800 text-center">
            Latex Input Table
          </h2>
          {/* Date and Jar Weights */}
          <div className="bg-white rounded-lg px-4 mb-4 py-2 flex gap-4">
            <div>
              <label className="block text-gray-700">Big Jar Weight (kg)</label>
              <input
                className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                type="number"
                value={bigJarWeight}
                onChange={(e) => setBigJarWeight(e.target.value)}
                placeholder="Enter Big Jar Weight"
              />
            </div>
            <div>
              <label className="block text-gray-700">
                Small Jar Weight (kg)
              </label>
              <input
                className=" p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                type="number"
                value={smallJarWeight}
                onChange={(e) => setSmallJarWeight(e.target.value)}
                placeholder="Enter Small Jar Weight"
              />
            </div>
            <div className="">
              <div>
                <label className="block text-gray-700">Select Date</label>
                <input
                  className=" p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        {/* Latex Input Table */}
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="border border-gray-300 p-4 text-left">#</th>
              <th className="border border-gray-300 p-4 text-left">
                Supplier code
              </th>
              <th className="border border-gray-300 p-4 text-left">
                Supplier Name
              </th>
              <th className="border border-gray-300 p-4 text-left">
                Gross Weight
              </th>
              <th className="border border-gray-300 p-4 text-left">
                Big Jars Count
              </th>
              <th className="border border-gray-300 p-4 text-left">
                Small Jars Count
              </th>
              <th className="border border-gray-300 p-4 text-left">
                Jars Weight
              </th>
              <th className="border border-gray-300 p-4 text-left">
                Latex Weight
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white hover:bg-gray-50">
              <td className="border border-gray-300 p-4">1</td>
              <td className="border border-gray-300 p-4">
                <input
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  type="text"
                  value={supplierCode}
                  onChange={(e) => setSupplierCode(e.target.value)}
                  placeholder="Enter Supplier Code"
                />
              </td>
              <td className="border border-gray-300 p-4">
                <span className="block p-2 bg-gray-100 rounded">
                  {supplierName || "N/A"}
                </span>
              </td>
              <td className="border border-gray-300 p-4">
                <input
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  type="number"
                  value={grossWeight}
                  onChange={(e) => setGrossWeight(e.target.value)}
                  placeholder="Enter Gross Weight"
                />
              </td>
              <td className="border border-gray-300 p-4">
                <input
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  type="number"
                  value={bigJarsCount}
                  onChange={(e) => setBigJarsCount(e.target.value)}
                  placeholder="Big Jars Count"
                />
              </td>
              <td className="border border-gray-300 p-4">
                <input
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  type="number"
                  value={smallJarsCount}
                  onChange={(e) => setSmallJarsCount(e.target.value)}
                  placeholder="Small Jars Count"
                />
              </td>
              <td className="border border-gray-300 p-4">
                <span className="block p-2 bg-gray-100 rounded">
                  {jarsWeight || 0} kg
                </span>
              </td>
              <td className="border border-gray-300 p-4">
                <span className="block p-2 bg-gray-100 rounded">
                  {latexWeight || 0} kg
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LatexInputTable;
