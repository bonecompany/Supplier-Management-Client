import { useState } from "react";
import { Axios } from "../../../MainRoute";
import { toast } from "react-toastify";


function BillingComponents() {

    // const [selectedDate, setSelectedDate] = useState(
    //     () => new Date().toISOString().split("T")[0]
    // );

    const [boneId, setBoneId] = useState("");
    const [name, setName] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    // const [latexData, setLatexData] = useState([]);
    const [drcData, setDrcData] = useState([]);
    const [submitData, setSubmitData] = useState({})
    const [pdfPreview, setPdfPreview] = useState(null);


    const handleSearch = async () => {
        console.log(boneId)
        try {
            const response = await Axios.get(
                `/admin/suppliers/drcdata?supplierId=${boneId}&start=${startDate}&end=${endDate}`
            );
            setName(response.data.data.name);
            setDrcData(response.data.data.drcdata);
            console.log(response.data);
            toast.success("Data fetched successfully");
        } catch (err) {

            toast.error(err.response.data.errors[0]);
        }
    };


    const handleSubmit = async () => {
        console.log(drcData);
        const preparedSubmitData = drcData.map((ele) => ({
            drcdata: ele._id,
            owner:ele.owner,
            date: ele.date,
            wetWeight: ele.latexId?.latex_weight || 0,
            drcPercentage: ele.drcPercentage || 0,
            dryQuantity: ele.dryQuantity || 0,
            rate: ele.latexId?.daily_latex_rate || 0 ,
        }));

        console.log(preparedSubmitData);

        try {
            const response = await Axios.post(
                '/admin/suppliers/billing',
                preparedSubmitData
            );
            console.log("response");       
            console.log(response);       
            const { pdf } = response.data;  
            setPdfPreview(pdf);
            toast.success("Submission successful");
        } catch (err) {
            console.error("Error submitting data:", err);
            toast.error("Error during submission");
        }
    };

    const totalAmount = drcData?.reduce((acc, element) => {
        const amount = (element.dryQuantity || 0) * (element.latexId?.daily_latex_rate || 0);
        return acc + amount;
    }, 0) || 0;
    const totalWetWeight = drcData?.reduce((acc, element) => {
        const amount = element.dryQuantity || 0;
        return acc + amount;
    }, 0) || 0;

    return (
        <div className="p-4 m-2 bg-[#F1F5F8] min-h-screen flex flex-col items-center">
            <div className="bg-white shadow-lg rounded-lg p-4 w-full max-w-screen-lg">
                <div className="flex flex-col lg:flex-row justify-between mb-4">
                    <div>
                        <h2 className="p-2 text-2xl font-bold text-gray-800 text-center lg:text-left">
                            Latex Billing
                        </h2>
                        <div className="p-2 px-5 font-semibold text-lg">
                            Name: {name}
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-4 bg-white rounded-lg px-4 py-2 items-end">
                        <div>
                            <label className="block text-gray-700">B-one ID</label>
                            <input
                                className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 w-32 sm:w-40"
                                type="number"
                                placeholder="Enter Code"
                                onChange={(e) => setBoneId(e.target.value)}
                            />
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
                        <button
                            className="bg-slate-300 px-3 py-2 rounded-md font-semibold hover:bg-slate-700 hover:text-white duration-100"
                            onClick={handleSearch}
                        >
                            Search
                        </button>
                    </div>
                </div>


                <div className="overflow-x-auto">
                    <table className="table-auto w-full border-collapse border border-gray-300">
                        <thead className="bg-gray-200">
                            <tr>
                                <th className="border border-gray-300 p-3 text-center">#</th>
                                <th className="border border-gray-300 p-3 text-center">Date</th>
                                <th className="border border-gray-300 p-3 text-center">
                                    Wet Weight
                                </th>
                                <th className="border border-gray-300 p-3 text-center">
                                    DRC Percentage
                                </th>
                                <th className="border border-gray-300 p-3 text-center">
                                    Dry Quantity
                                </th>
                                <th className="border border-gray-300 p-3 text-center">
                                    Rate
                                </th>
                                <th className="border border-gray-300 p-3 text-center">Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {drcData?.map((element, index) => {
                                const amount = ((element.dryQuantity || 0) * (element.latexId?.daily_latex_rate || 0)).toFixed(2);

                                return (
                                    <tr className="bg-white hover:bg-gray-50 text-center" key={index}>
                                        <td className="border border-gray-300 p-3">{index + 1}</td>
                                        <td className="border border-gray-300 p-3">
                                            {new Date(element.date).toLocaleDateString("en-GB")}
                                        </td>
                                        <td className="border border-gray-300 p-3">{element.latexId?.latex_weight || 0}</td>
                                        <td className="border border-gray-300 p-3">{element.drcPercentage || 0}</td>
                                        <td className="border border-gray-300 p-3">{element.dryQuantity || 0}</td>
                                        <td className="border border-gray-300 p-3">{element.latexId?.daily_latex_rate || 0}</td>
                                        <td className="border border-gray-300 p-3">{amount}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>

                <div className="flex justify-between px-2 mt-4">
                    <button className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                        onClick={() => window.location.reload()}>
                        clear
                    </button>
                    <button
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                        onClick={handleSubmit}
                    >
                        Submit
                    </button>
                </div>
                {
                    !drcData.length == 0 && (

                        <div className="my-5 p-2 border-t-2 w-full grid justify-center grid-cols-1 sm:grid-cols-2 gap-x-32">
                            <div className="flex justify-between gap-5 w-full p-2 rounded-sm m-2 shadow-custom-dark">
                                <span className="font-semibold">Total Amount</span>
                                <div>{totalAmount.toFixed(2)}</div>
                            </div>
                            <div className="flex justify-between gap-5 w-full p-2 rounded-sm m-2 shadow-custom-dark">
                                <span className="font-semibold">Total Dry Weight</span>
                                <div>{totalWetWeight.toFixed(2)}</div>
                            </div>
                            <div className="flex justify-between gap-5 w-full p-2 rounded-sm m-2 shadow-custom-dark">
                                <span className="font-semibold">PR Charge</span>
                                <div className="flex gap-2 sm:gap-10" >
                                    <div>{(totalWetWeight) * 15}</div>
                                    =
                                    <div>{totalWetWeight} x 15</div>
                                </div>
                            </div>
                            <div className="flex justify-between gap-5 w-full p-2 rounded-sm m-2 shadow-custom-dark">
                                <span className="font-semibold">Net Amount</span>
                                <div>{((totalAmount) - (totalWetWeight) * 15).toFixed(2)}</div>
                            </div>

                        </div>

                    )
                }
            </div>
            <div>
            {pdfPreview && (
        <embed
          src={`data:application/pdf;base64,${pdfPreview}`}
          width="100%"
          height="600px"
          type="application/pdf"
        />
      )}
            </div>
        </div>
    )
}

export default BillingComponents

