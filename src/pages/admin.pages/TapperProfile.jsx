import React, { useEffect } from 'react'
import LatexChart from "../../components/admin.components/Suppliers/LatexChart";
import LatexTable from "../../components/admin.components/Suppliers/LatexTable";
import ActivityCheck from "../../components/admin.components/Tappers/ActivityCheck"
import PieChart from "../../components/admin.components/PieChart"
import TapperProfileComponent from '../../components/admin.components/Tappers/TapperProfileComponent';
import async_handler from '../../../../Supplier-Management-Server/src/utils/asyncHandler';
import { Axios } from '../../MainRoute';
import EditProfile from '../../components/admin.components/EditProfile';
function TapperProfile() {



    
  return (
    <div >
      <div className=' grid grid-cols-1 lg:grid-cols-2 m-10 '>
      
    <ActivityCheck/>
     <TapperProfileComponent/>

      </div>

    <LatexTable tapper={"from tapper"}/>
    
    </div>
  )
}

export default TapperProfile