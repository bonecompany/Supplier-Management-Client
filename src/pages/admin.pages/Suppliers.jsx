import React from "react";
import Cardpages from "../../components/admin.components/Cardpages";
import TableComponent from "../../components/admin.components/TableComponent";
import SupplierNavbar from "../../components/admin.components/Suppliers/SupplierNavbar";

const Suppliers = () => {
  return (
    <div className="grid gap-3 p-3 bg-[#F1F5F8]">
      <SupplierNavbar />
      <Cardpages />
      <TableComponent />
    </div>
  );
};

export default Suppliers;
