import { useState, useEffect, useRef } from "react";
import { Axios } from "../MainRoute";
import { toast } from "react-toastify";

function UpdatingTableComponents() {
  const [selectedDate, setSelectedDate] = useState(
    () => new Date().toISOString().split("T")[0]
  );


  const [boneId, setBoneId] = useState("")
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")
  const [latexData, setLatexData] = useState([])
  const [drcData, setDrcData] = useState([])
  const [filWeight, setFilWeight] = useState(0)
  const [drcPercentage, setDrcPercentage] = useState(0)
  const [dryQuantity, setDryQuantity] = useState(0)

  const handleSearch = async () => {
    try {
      const response = await Axios.get(`/admin/suppliers/latexdata?supplierId=${boneId}&start=${startDate}&end=${endDate}`);
      setLatexData(response.data.data.latex)
      setDrcData(latexData.map (({_id,owner,date,latex_weight}) =>  ({
        latexId  : _id ,
        owner,
        date,
        latex_weight
      })))

    } catch (err) {
      console.error("Error fetching latex data:", err);
    }
  };

  const handleFilm = (e, index) => {
    const updatedValue = e.target.value;
  
 
    const updatedDrcData = drcData.map((item, ind) => {
      if (ind === index) {
        return {
          ...item, 
          filWeight: updatedValue,  
          drcPercentage: updatedValue * 5,  
          dryQuantity: item.latex_weight * (updatedValue * 5) / 100,  
        };
      }
      return item;
    });
  
    setDrcData(updatedDrcData);  
    console.log(drcData)
  };

  const handleSubmit = async() => {
    try {
      const response = await Axios.get(`/admin//suppliers/drcupdation`,drcData);
      setLatexData(response.data.data.latex)
      setDrcData(latexData.map (({_id,owner,date,latex_weight}) =>  ({
        latexId  : _id ,
        owner,
        date,
        latex_weight
      })))

    } catch (err) {
      console.error("Error fetching latex data:", err);
    }
  };
  


  return (
    <div className="p-6 bg-[#F1F5F8] min-h-screen flex flex-col items-center">
      <div className="bg-white shadow-lg rounded-lg p-4 w-full">
        <div className="flex justify-between">
          <div>
            <h2 className=" p-2 text-2xl font-bold text-gray-800 text-center">
              Drc Updation Table
            </h2>
            <div className="p-2 px-5 font-semibold text-lg">Name : {latexData[0]?.supplierName} </div>
          </div>
          <div className="bg-white rounded-lg px-4 mb-4 py-2 flex gap-4">
            <div>
              <label className="block text-gray-700">B-one ID</label>
              <input
                className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 w-32"
                type="number"
                placeholder="Enter Code"
                onChange={(e) => setBoneId(e.target.value)}
              />
            </div>
            <div>
            </div>
            <div>
             <label className="block text-gray-700">Start Date</label>
              <input
                className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 w-40"
                type="date"
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-gray-700">End Date</label>
              <input
                className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 w-40"
                type="date"
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>
          </div>
        </div>
        <button className="float-right mb-8 mx-5 bg-slate-300 px-3 py-2 rounded-md font-semibold hover:bg-slate-700 hover:text-white duration-100"
          onClick={handleSearch}>

          Search
        </button>
        {/* Latex Input Table */}
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="border border-gray-300 p-3 text-center">#</th>
              <th className="border border-gray-300 p-3 text-center">
                Date
              </th>
              <th className="border border-gray-300 p-3 text-center">
                Wet Weight
              </th>
              <th className="border border-gray-300 p-3 text-center">
                Flm Weight
              </th>
              <th className="border border-gray-300 p-3 text-center">DRC Percentage </th>
              <th className="border border-gray-300 p-3 text-center">Dry Quantity</th>
              <th className="border border-gray-300 p-3 text-center">Serial No</th>
              <th className="border border-gray-300 p-3 text-center">Mode</th>
            </tr>
          </thead>
          <tbody>
            {drcData?.map((element, index) => (
              <tr className="bg-white hover:bg-gray-50 text-center" key={index}>
                <td className="border border-gray-300 p-3">{index + 1}</td>
                <td className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 w-28">

                  {new Date(element.date).toLocaleDateString('en-GB')}

                </td>
                <td className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 w-24">
                  {element.latex_weight}
                </td>
                <td className="border border-gray-300 p-3">
                  <input
                    className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 w-24"
                    type="number"
                    onChange={(e) => handleFilm(e, index)}
                  />
                </td>
                <td className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 w-24">
                  {element.drcPercentage || 0}
                </td>
                <td className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 w-24">
                  {element.dryQuantity || 0}
                </td>
                <td className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 w-24">
                  view
                </td>
                <td className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 w-24">
                  Fied
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex justify-between px-2 mt-4">
          <button
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
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

export default UpdatingTableComponents