import React, { useEffect, useState } from "react";
import Cardpages from "../../components/admin.components/Cardpages";
import TableComponent from "../../components/admin.components/TableComponent";
import SupplierNavbar from "../../components/admin.components/Suppliers/SupplierNavbar";
import { Axios } from "../../MainRoute";

const Suppliers = () => {
  const [suppliers, setSuppliers] = useState([]);
  const [filteredSuppliers, setFilteredSuppliers] = useState([]);
  const [isLoding, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Suppliers");

  useEffect(() => {
    const getSupplier = async () => {
      try {
        const response = await Axios.get("/admin/suppliers", {
          headers: {
            "Content-Type": "application/json",
          },
        });
        setSuppliers(response.data.data);
        setFilteredSuppliers(response.data.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getSupplier();
  }, []);

  useEffect(() => {
    const filtered = suppliers.filter(
      (supplier) =>
        supplier.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        supplier.Bone_id.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredSuppliers(filtered);
  }, [searchTerm, suppliers]);

  useEffect(() => {
    const filterSuppliers = suppliers.filter((supplier) =>
      selectedCategory === "All Suppliers"
        ? true
        : supplier.category === selectedCategory
    );
    setFilteredSuppliers(filterSuppliers);
  }, [selectedCategory, suppliers]);

  return (
    <div className="grid gap-3 p-3 bg-gradient-to-b from-[#F1F5F8] to-[#fcfcfc]">
      <SupplierNavbar
        setSearchTerm={setSearchTerm}
        setSelectedCategory={setSelectedCategory}
      />
      <Cardpages suppliers={suppliers} isLoding={isLoding} />
      <TableComponent suppliers={filteredSuppliers} isLoding={isLoding} />
    </div>
  );
};

export default Suppliers;
