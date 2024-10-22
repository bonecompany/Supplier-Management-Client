import React from 'react';
import ActivityCheck from "../../components/admin.components/Tappers/ActivityCheck";
import TapperProfileComponent from '../../components/admin.components/Tappers/TapperProfileComponent';
import LatexTable from "../../components/admin.components/Suppliers/LatexTable";

function TapperProfile() {
  return (
    <div className="p-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 m-10">
        <div className="col-span-1">
          <ActivityCheck />
        </div>
        <div className="col-span-1">
          <TapperProfileComponent />
        </div>
      </div>

      <LatexTable tapper={"from tapper"} />
    </div>
  );
}


export default TapperProfile;

