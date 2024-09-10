import React from 'react'
import LatexChart from "../../components/admin.components/Suppliers/LatexChart";
import LatexTable from "../../components/admin.components/Suppliers/LatexTable";
import ActivityCheck from "../../components/admin.components/Tappers/ActivityCheck"
import PieChart from "../../components/admin.components/PieChart"
function TapperProfile() {
    
  return (
    <div>
      <div className='flex h-fit justify-around items-center bg-slate-200 p-3 m-3'>
      <div className='mt-10'><PieChart /></div>
      <div className=''>
        <ActivityCheck/>
      </div>
      </div>
 
    <LatexChart/>
    <LatexTable tapper={"from tapper"}/>
    
    </div>
  )
}

export default TapperProfile