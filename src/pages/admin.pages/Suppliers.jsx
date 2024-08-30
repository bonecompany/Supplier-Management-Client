import React, { useEffect, useState } from "react";
import Cardpages from "../../components/admin.components/Cardpages";
import TableComponent from "../../components/admin.components/TableComponent";
import SupplierNavbar from "../../components/admin.components/Suppliers/SupplierNavbar";
import { Axios } from "../../MainRoute";

const Suppliers = () => {
  const [suppliers, setSuppliers] = useState([]);
  const [isLoding, setIsLoading] = useState(true);

  useEffect(() => {
    const getSupplier = async () => {
      try {
        const response = await Axios.get("/admin/suppliers", {
          headers: {
            "Content-Type": "application/json",
          },
        });
        setSuppliers(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getSupplier();
  }, []);

  return (
    <div className="grid gap-3 p-3 bg-[#F1F5F8]">
      <SupplierNavbar />
      <Cardpages suppliers={suppliers}/>
      <TableComponent suppliers={suppliers} isLoding={isLoding} />
    </div>
  );
};

export default Suppliers;
