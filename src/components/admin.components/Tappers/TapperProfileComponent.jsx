
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


import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Axios } from "../../../MainRoute"; // Ensure Axios is correctly imported

function TapperProfile() {
  const location = useLocation();
  const tapper = location.state?.tapper;
  const [tapperDetails, setTapperDetails] = useState(null);

  useEffect(() => {
    const getActivity = async () => {
      if (tapper && tapper._id) {
        try {
          const id = tapper._id;
          console.log("Fetching tapper ID:", id);
          const response = await Axios.get(`/admin/tappers/${id}`);
          setTapperDetails(response?.data?.data);
          console.log("Fetched tapper details:", response?.data?.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };

    getActivity();
  }, [tapper]);


  if (!tapper) {
    return <div>Loading Tapper Data...</div>; // Handle case where tapper is undefined
  }

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


      {/* Additional Tapper Details */}
      {tapperDetails && (
        <div className="bg-[#d9d9d9] p-6 mt-4 rounded-2xl">
          <h2 className="font-semibold text-xl">Activity Details</h2>
          {/* Render additional tapper details if available */}
          <p>Latex Collected: {tapperDetails?.latexCollected || "N/A"}</p>
          {/* Add more activity-related fields if needed */}
        </div>
      )}
    </div>
  );
}

export default TapperProfileComponent

