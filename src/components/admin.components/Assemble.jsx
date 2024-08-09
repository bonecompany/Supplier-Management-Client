import React from 'react'
import { Outlet } from 'react-router-dom'
import Graph from './Graph'
import Navbar from './Navbar'
import Sidebar from './SideBar'
import StatusCards from './StatusCards'

function Assemble() {
  return (
    <div>
        
        <Sidebar/>
        <div class="p-1 sm:ml-64 h-screen" style={{ backgroundColor: 'rgb(220, 220, 220)' }}>
          <Navbar/>
          <Outlet/>
    
        </div>
   
    </div>
  )
}

export default Assemble