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
    <div>
      <div className='flex h-fit justify-around m-9'>
      {/* <div className='mt-10'><PieChart /></div> */}
    <div><ActivityCheck/></div>
     <TapperProfileComponent/>

      </div>
    {/* <LatexChart/>  */}
    <LatexTable tapper={"from tapper"}/>
    
    {/* <EditProfile/> */}
    </div>
  )
}

export default TapperProfile