import React from 'react'
import Logo from "../../assets/Bone Logo.png"
function AdminSidebar() {
  return (
    <div>
        <div className="h-screen w-[18%] bg-[#3B5260] bg-opacity-[40%]">
           <div>
            <img src={Logo} alt="" />
           </div>
        </div>
        <nav className="h-[13%] w-[82%] bg-[#3B5260] bg-opacity-[40%] absolute top-0 left-[18%]">

        </nav>
    </div>
  )
}

export default AdminSidebar