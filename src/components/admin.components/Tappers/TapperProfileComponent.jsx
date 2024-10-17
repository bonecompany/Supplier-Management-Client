import React, { useEffect,useState } from 'react'
import { useLocation } from 'react-router-dom'
import TapperEdit from './TapperEdit'
function TapperProfileComponent() {

  const [openEdit,setOpenEdit] = useState(false)

  console.log("-----------------------------")
  const location = useLocation()
  console.log(location)
  const tapper = location.state?.tapper
  console.log("-----------------------------")



  return (
    <div className='lg:ml-28 mt-10'>
      <div className='bg-[#F0F8FF] w-full  max-w-[60vw]  overflow-auto text-white scrollbar-hide'>
    <div className='relative bg-[#4391a4]   rounded-t-2xl flex flex-col gap-1'>
      <div className= 'bg-[#1a3258] p-3 rounded-t-2xl flex flex-col gap-1'> 
      <h1 className='font-semibold text-2xl'>Tapper</h1>
      <h1 className='font-medium text-lg relative left-5'>Name : {tapper.name}</h1>
      </div>
        <div className=' rounded-b-2xl px-8 flex flex-col gap-1'>
        <h1>Phone : {tapper.phone}</h1>
        <h1>Place : {tapper.place}</h1>
        </div>
      
       <button className=' absolute right-6 top-24 mt-3 text-xl font-bold w-fit hover:scale-110 duration-200'onClick={() => setOpenEdit(true)} >EDIT</button>
    </div>   
    {
      openEdit&&(
        <TapperEdit
        tapper={tapper}
        onClose={() => setOpenEdit(false)}
        />
      )
    }
    <div className='bg-[#1a3258] rounded-b-2xl p-8 flex flex-col gap-1'> 
        <h1 className='font-semibold text-2xl relative right-3'>supplier</h1>
       <h1>Name : {tapper?.supplier?.name}</h1>
       <h1>Bone ID : {tapper?.supplier?.Bone_id}</h1>
       <h1>Phone: {tapper?.supplier?.phone}</h1>
       <h1>Category : {tapper?.supplier?.category}</h1>
       <h1>Place : {tapper?.supplier?.location}</h1>
    </div>
      </div>
    </div>
  )
}
export default TapperProfileComponent
