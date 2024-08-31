import { useEffect, useState } from "react";
import SupplierProfile from "../../components/admin.components/Suppliers/SupplierProfile";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";
import LatexTable from "../../components/admin.components/Suppliers/LatexTable";
import LatexChart from "../../components/admin.components/Suppliers/LatexChart";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Axios } from "../../MainRoute";
import Spinner from "../../components/Loding/Spinner";

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

const SupplierDetailsPage = () => {
  const { supplierId } = useParams();
  const [data, setData] = useState(initialData);
  const [filter, setFilter] = useState("weekly");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = filter === "weekly" ? 7 : 30;
  const [supplier, setSupplier] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  console.log(supplierId);

  useEffect(() => {
    Axios.get(`/admin/supplier/${supplierId}`)
      .then((response) => {
        setSupplier(response.data);
        setIsLoading(false);
        console.log(response.data);
      })
      .catch((error) => {
        console.log("Supplier fetching error", error);
      });
  }, [supplierId]);

  const handleFilterChange = (e) => {
    const filterValue = e.target.value;
    setFilter(filterValue);

    let filteredData = [];
    if (filterValue === "weekly") {
      filteredData = initialData.slice(-7);
    } else if (filterValue === "monthly") {
      filteredData = initialData.slice(-31);
    } else if (filterValue === "yearly") {
      filteredData = initialData;
    }

    setData(filteredData);
    setCurrentPage(1);
  };

  const handlePageChange = (direction) => {
    if (direction === "next") {
      setCurrentPage((prev) => prev + 1);
    } else if (direction === "prev") {
      setCurrentPage((prev) => Math.max(prev - 1, 1));
    }
  };

  const paginatedData =
    filter === "yearly"
      ? data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
      : data;

  const handleDateChange = (date) => {
    setSelectedDate(date);
    const formattedDate = date
      .toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      })
      .split("/")
      .join("-");
    const filteredData = initialData.filter(
      (entry) => entry.date === formattedDate
    );
    setData(filteredData);
  };

  if (isLoading) {
    return (
      <div className="h-screen w-full fle">
        <Spinner />
      </div>
    );
  }

  // const supplier = {
  //   Bone_id: 1,
  //   name: "1-MOOSA HAJI N",
  //   phone: "9539507184",
  //   address: "NEDUMBA HOUSE, ODOMPATTA",
  //   location: "Odompatta",
  //   category: "Daily Collection",
  //   account_no: "112345875462454",
  //   IFCE_code: "FDRL0001120",
  // };

  return (
    <div className="min-h-screen bg-[#F1F5F8] p-6 grid grid-cols-1 gap-4 md:grid-cols-12">
      <div className="flex items-center gap-2 col-span-12">
        <button
          onClick={() => navigate(-1)}
          className="text-2xl p-2 rounded-full hover:bg-slate-300 ml-[-10px]"
        >
          <IoMdArrowRoundBack />
        </button>
        <h1 className="text-3xl font-bold text-cyan-900">Supplier Profile</h1>
      </div>

      <div className="col-span-12 md:col-span-4">
        <SupplierProfile supplier={supplier} />
      </div>

      <div className="col-span-12 md:col-span-8 bg-white rounded-lg shadow-lg py-3 pr-4">
        <div className="flex justify-between items-center mb-4 ">
          <h3 className="text-2xl font-semibold px-6">Latex</h3>
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
              className="p-2 border rounded-md w-28"
            />
          </div>
        </div>
        <LatexChart data={paginatedData} />
      </div>

      <div className="col-span-12">
        <LatexTable
          data={paginatedData}
          filter={filter}
          currentPage={currentPage}
          handlePageChange={handlePageChange}
          itemsPerPage={itemsPerPage}
        />
      </div>
    </div>
  );
};

export default SupplierDetailsPage;
