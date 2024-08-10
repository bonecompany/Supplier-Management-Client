import React from 'react'
import { Outlet } from 'react-router-dom'
import Graph from './Graph'
import Navbar from './Navbar'
import Sidebar from './SideBar'
import StatusCards from './StatusCards'
import AdminSidebar from "./AdminSidebar";

function Assemble() {
  return (
    <div className=''>
        
        {/* <Sidebar/> */}
        <AdminSidebar/>
        {/* <div className="p-1  h-screen dark:bg-slate-800 bg-slate-50">
          <Navbar/>
          <Outlet/>
    
        </div> */}
   
    </div>
  )
}

export default Assemble