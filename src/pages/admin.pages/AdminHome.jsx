import React from "react";
import StatusCards from "../../components/admin.components/StatusCards";
import Graph from "../../components/admin.components/Graph";
import PieChart from "../../components/admin.components/PieChart"


const AdminHome = () => {
  return (
    <div className="p-2 mt-10 ">

      <StatusCards />
      <div className="grid grid-cols-1 md:grid-cols-2 m-10 gap-8" >
        <PieChart />
        <Graph />
      </div>

    </div>
  );
};

export default AdminHome;
