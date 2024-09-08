import { useState, useEffect } from "react";
import { Axios } from "../../../MainRoute";
import { toast } from "react-toastify";

const LatexInputTable = () => {
    const [selectedDate, setSelectedDate] = useState(
      () => new Date().toISOString().split("T")[0]
    ); // Default to today
  const [suppliers, setSuppliers] = useState([
    {
      date: selectedDate,
      supplierCode: "",
      supplierName: "",
      grossWeight: 0,
      bigJarsCount: 0,
      smallJarsCount: 0,
      jarsWeight: 0,
      latexWeight: 0,
    },
  ]);
  const [bigJarWeight, setBigJarWeight] = useState(2.4); // Default weight for big jar (kg)
  const [smallJarWeight, setSmallJarWeight] = useState(1.4); // Default weight for small jar (kg)

  // Fetch supplier name by supplier code
  const fetchSupplierName = async (index) => {
    const { supplierCode } = suppliers[index];
    if (supplierCode) {
      try {
        const response = await Axios.get(`/admin/supplier/${supplierCode}`);
        const newSuppliers = [...suppliers];
        newSuppliers[index].supplierName = response.data.data.name;
        setSuppliers(newSuppliers);
      } catch (error) {
        console.error("Error fetching supplier data:", error);
      }
    }
  };

  // Handle change for supplier data
  const handleSupplierChange = (index, field, value) => {
    const newSuppliers = [...suppliers];
    newSuppliers[index][field] = value;
    if (field === "bigJarsCount" || field === "smallJarsCount") {
      const totalJarsWeight =
        newSuppliers[index].bigJarsCount * bigJarWeight +
        newSuppliers[index].smallJarsCount * smallJarWeight;
      newSuppliers[index].jarsWeight = totalJarsWeight;
    }
    newSuppliers[index].latexWeight =
      newSuppliers[index].grossWeight - newSuppliers[index].jarsWeight;
    setSuppliers(newSuppliers);
  };

  // Add new supplier row
  const addSupplierRow = () => {
    setSuppliers([
      ...suppliers,
      {
        supplierCode: "",
        supplierName: "",
        grossWeight: 0,
        bigJarsCount: 0,
        smallJarsCount: 0,
        jarsWeight: 0,
        latexWeight: 0,
      },
    ]);
  };

  // Handle form submission
  const handleSubmit = async () => {
    // Check if all suppliers have required fields
    const isValid = suppliers.every((supplier) =>
      supplier.supplierCode && supplier.date && supplier.grossWeight
    );
  
    if (!isValid) {
      alert("Please fill in all required fields.");
      return;
    }
  
    try {
      const response = await Axios.post("/admin/latex-purchase", suppliers);
      console.log("Latex data submitted: ", response.data);
    } catch (error) {
      console.error("Error submitting latex data:", error);
    }
  };
  

  // Handle form cancel
  const handleCancel = () => {
    setSuppliers([
      {
        supplierCode: "",
        supplierName: "",
        grossWeight: 0,
        bigJarsCount: 0,
        smallJarsCount: 0,
        jarsWeight: 0,
        latexWeight: 0,
      },
    ]);
  };

  // Handle Enter key press to fetch supplier name
  const handleKeyDown = (index, e) => {
    if (e.key === "Enter") {
      fetchSupplierName(index);
    }
  };

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
                className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 w-32"
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
                className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 w-32"
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
                  className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 w-40"
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
            {suppliers.map((supplier, index) => (
              <tr className="bg-white hover:bg-gray-50" key={index}>
                <td className="border border-gray-300 p-4">{index + 1}</td>
                <td className="border border-gray-300 p-4">
                  <input
                    className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 w-32"
                    type="text"
                    value={supplier.supplierCode}
                    onChange={(e) =>
                      handleSupplierChange(
                        index,
                        "supplierCode",
                        e.target.value
                      )
                    }
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    placeholder="Enter Supplier Code"
                  />
                </td>
                <td className="border border-gray-300 p-4">
                  <span
                    className={`block p-2 bg-gray-100 rounded ${
                      !supplier.supplierName && "text-red-500"
                    }`}
                  >
                    {supplier.supplierName ? supplier.supplierName : "N/A"}
                  </span>
                </td>
                <td className="border border-gray-300 p-4">
                  <input
                    className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 w-40"
                    type="number"
                    value={supplier.grossWeight}
                    onChange={(e) =>
                      handleSupplierChange(index, "grossWeight", e.target.value)
                    }
                    placeholder="Enter Gross Weight"
                  />
                </td>
                <td className="border border-gray-300 p-4">
                  <input
                    className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 w-32"
                    type="number"
                    value={supplier.bigJarsCount}
                    onChange={(e) =>
                      handleSupplierChange(
                        index,
                        "bigJarsCount",
                        e.target.value
                      )
                    }
                    placeholder="Big Jars Count"
                  />
                </td>
                <td className="border border-gray-300 p-4">
                  <input
                    className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 w-32"
                    type="number"
                    value={supplier.smallJarsCount}
                    onChange={(e) =>
                      handleSupplierChange(
                        index,
                        "smallJarsCount",
                        e.target.value
                      )
                    }
                    placeholder="Small Jars Count"
                  />
                </td>
                <td className="border border-gray-300 p-4">
                  <span className="block p-2 bg-gray-100 rounded">
                    {supplier.jarsWeight.toFixed(2)} kg
                  </span>
                </td>
                <td className="border border-gray-300 p-4">
                  <span className="block p-2 bg-gray-100 rounded">
                    {supplier.latexWeight.toFixed(2)} kg
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-end mt-4">
          <button
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
            onClick={handleSubmit}
          >
            Submit
          </button>
          <button
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded ml-4"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded ml-4"
            onClick={addSupplierRow}
          >
            Add Supplier
          </button>
        </div>
      </div>
    </div>
  );
};

export default LatexInputTable;
