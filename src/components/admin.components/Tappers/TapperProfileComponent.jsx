import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
function TapperProfile() {

  const location = useLocation()
  console.log(location)
  const tapper = location.state?.tapper
  // useEffect( () => {
  //   const getActivity = async () => {
  //     if(tapper && tapper._id){
  //        try {
  //         const id=tapper._id
  //         console.log(id)
  //         const response = await Axios.get(`/admin/tappers/${id}`)
  //         console.log(response?.data?.data)
  //        } catch (error) {
  //         console.error("Error fetching data:", error);
  //        }
  //   }
  // }
  //   getActivity()
  // }),[tapper]


  return (
    <div>
      <div className='bg-[#F0F8FF] max-w-[50vw] max-h-fit overflow-auto text-white'>
    <div className='bg-[#091d27c6] p-8 rounded-t-2xl flex flex-col gap-1'>
    <h1 className='font-semibold text-2xl relative right-3'>Tapper</h1>
       <h1 className='font-medium text-lg'>Name : {tapper.name}</h1>
       <h1>Phone : {tapper.phone}</h1>
       <h1>Place : {tapper.place}</h1>
    </div>   
    <div className='bg-[#686f70] rounded-b-2xl p-8 flex flex-col gap-1'> 
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
export default TapperProfile