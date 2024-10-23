import { useState, useEffect, useRef } from "react";
import { Axios } from "../../../MainRoute";
import { toast } from "react-toastify";

const LatexInputTable = () => {
  const [selectedDate, setSelectedDate] = useState(
    () => new Date().toISOString().split("T")[0]
  ); // Default to today
  const [suppliers, setSuppliers] = useState([
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
  const [bigJarWeight, setBigJarWeight] = useState(2.4); // Default weight for big jar (kg)
  const [smallJarWeight, setSmallJarWeight] = useState(1.4); // Default weight for small jar (kg)
  const grossWeightInputRefs = useRef([]); // Ref to focus on gross weight input after fetching supplier name

  useEffect(() => {
    // Handle page refresh confirmation
    const handleBeforeUnload = (e) => {
      e.preventDefault();
      e.returnValue = ""; // Show a browser-specific confirmation dialog
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  // Fetch supplier name by supplier code
  const fetchSupplierName = async (index) => {

    const { supplierCode } = suppliers[index];

    if (supplierCode) {
      // Check for duplicate supplier codes
      const isDuplicate = suppliers.some(
        (supplier, idx) => idx !== index && supplier.supplierCode === supplierCode
      );

      if (isDuplicate) {
        toast.error("Supplier already entered.");
        return;
      }

      try {
        const response = await Axios.get(`/admin/supplier/${supplierCode}`);
        const newSuppliers = [...suppliers];
        newSuppliers[index].supplierName = response.data.data.name;
        setSuppliers(newSuppliers);
        console.log(suppliers);
        // Focus on gross weight input after fetching supplier name
        if (grossWeightInputRefs.current[index]) {
          grossWeightInputRefs.current[index].focus();
        }
      } catch (error) {
        console.error("Error fetching supplier data:", error);
        toast.error("Supplier not found. Please check the supplier code.");
      }
    } else {
      toast.warn("Please enter a supplier code.");
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
      newSuppliers[index].jarsWeight = totalJarsWeight
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

    console.log(suppliers)
    const confirmSubmit = window.confirm("Are you sure you want to submit?");
    if (!confirmSubmit) return;
    const isValid = suppliers.every(
      (supplier) => supplier.supplierCode && supplier.grossWeight
    );
    if (!isValid) {
      alert("Please fill in all required fields.");
      return;
    }
    try {
      suppliers.unshift(selectedDate)
      console.log(suppliers)
      const response = await Axios.post("/admin/supplier/latex", { data: suppliers });
      console.log(response);
    } catch (error) {
      console.error("Error submitting latex data:", error);
    }
  };

  // Handle form cancel
  const handleCancel = () => {
    const confirmCancel = window.confirm(
      "Are you sure you want to cancel? This will reset all data."
    );
    if (!confirmCancel) return;

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

  // Handle Enter key press to fetch supplier name and move focus
  const handleKeyDown = (index, e) => {

    if (e.key === "Enter") {
      fetchSupplierName(index);
    }
  };

  return (
    <div className="p-6 bg-[#F1F5F8] min-h-screen flex flex-col items-center">
      <div className="bg-white shadow-lg rounded-lg p-4 w-full">
        <div className="flex flex-col md:flex-row justify-between mb-4">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-4 md:mb-0">
            Latex Input Table
          </h2>
          {/* Date and Jar Weights */}
          <div className="bg-white rounded-lg p-4 flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-gray-700">Big Jar Weight (kg)</label>
              <input
                className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full max-w-xs"
                type="number"
                value={bigJarWeight}
                onChange={(e) => setBigJarWeight(e.target.value)}
                placeholder="Enter Big Jar Weight"
              />
            </div>
            <div className="flex-1">
              <label className="block text-gray-700">Small Jar Weight (kg)</label>
              <input
                className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full max-w-xs"
                type="number"
                value={smallJarWeight}
                onChange={(e) => setSmallJarWeight(e.target.value)}
                placeholder="Enter Small Jar Weight"
              />
            </div>
            <div className="flex-1">
              <label className="block text-gray-700">Select Date</label>
              <input
                className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full max-w-xs"
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
              />
            </div>
          </div>
        </div>
        {/* Latex Input Table */}
        <div className="overflow-x-auto">
          <table className="table-auto min-w-full border-collapse border border-gray-300">
            <thead className="bg-gray-200">
              <tr>
                <th className="border border-gray-300 p-4 text-left">#</th>
                <th className="border border-gray-300 p-4 text-left">Supplier Code</th>
                <th className="border border-gray-300 p-4 text-left">Supplier Name</th>
                <th className="border border-gray-300 p-4 text-left">Gross Weight</th>
                <th className="border border-gray-300 p-4 text-left">Big Jars Count</th>
                <th className="border border-gray-300 p-4 text-left">Small Jars Count</th>
                <th className="border border-gray-300 p-4 text-left">Jars Weight</th>
                <th className="border border-gray-300 p-4 text-left">Latex Weight</th>
              </tr>
            </thead>
            <tbody>
              {suppliers.map((supplier, index) => (
                <tr className="bg-white hover:bg-gray-50" key={index}>
                  <td className="border border-gray-300 p-4">{index + 1}</td>
                  <td className="border border-gray-300 p-3 w-full flex flex-col">
                    {!supplier.supplierCode && (
                      <span className="text-red-500 text-sm">Required</span>
                    )}
                    <input
                      className={`p-2 border ${!supplier.supplierCode ? "border-red-500" : "border-gray-300"
                        } rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full max-w-xs`}
                      type="text"
                      value={supplier.supplierCode}
                      onChange={(e) =>
                        handleSupplierChange(index, "supplierCode", e.target.value)
                      }
                      onKeyDown={(e) => handleKeyDown(index, e)}
                      placeholder="Enter B-one ID"
                    />
                  </td>
                  <td className="border border-gray-300 p-4">
                    <span
                      className={`block p-2 bg-gray-100 rounded ${!supplier.supplierName && "text-gray-400 select-none"
                        }`}
                    >
                      {supplier.supplierName ? supplier.supplierName : "name"}
                    </span>
                  </td>
                  <td className="border border-gray-300 p-4">
                    <input
                      ref={(el) => (grossWeightInputRefs.current[index] = el)} // Store reference to gross weight input
                      className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full max-w-xs"
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
                      className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full max-w-xs"
                      type="number"
                      value={supplier.bigJarsCount}
                      onChange={(e) =>
                        handleSupplierChange(index, "bigJarsCount", e.target.value)
                      }
                      placeholder="Big Jars Count"
                    />
                  </td>
                  <td className="border border-gray-300 p-4">
                    <input
                      className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full max-w-xs"
                      type="number"
                      value={supplier.smallJarsCount}
                      onChange={(e) =>
                        handleSupplierChange(index, "smallJarsCount", e.target.value)
                      }
                      placeholder="Small Jars Count"
                    />
                  </td>
                  <td className="border border-gray-300 p-4">
                    <span className="block p-2 bg-gray-100 rounded">
                      {supplier.jarsWeight.toFixed(2)}
                    </span>
                  </td>
                  <td className="border border-gray-300 p-4">
                    <span className="block p-2 bg-gray-100 rounded">
                      {supplier.latexWeight.toFixed(2)}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-end space-x-4 mt-4">
          <button
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            onClick={addSupplierRow}
          >
            Add Supplier
          </button>
          <button
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default LatexInputTable;
