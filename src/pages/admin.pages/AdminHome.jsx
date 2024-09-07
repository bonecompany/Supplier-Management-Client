import React from "react";
import StatusCards from "../../components/admin.components/StatusCards";
import Graph from "../../components/admin.components/Graph";


const AdminHome = () => {
  return (
    <div className="pt-6">

      <StatusCards />
      <Graph/>      
    </div>
  );
};

export default AdminHome;
