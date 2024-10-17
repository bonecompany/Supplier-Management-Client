import React from 'react'
import DriverAreaAdd from '../../components/admin.components/Drivers/DriverAreaAdd'
import { useLocation } from 'react-router-dom'
import DriverSupplier from '../../components/admin.components/Drivers/DriverSupplier'

function DriverProfile() {
 
  const location = useLocation()
  console.log(location)
  const driver = location.state?.driver
  const id  = driver._id

  return (
    <div>
    <div className='flex justify-between m-10'>
    <div className='w-fit h-fit px-5 py-3 bg-gradient-to-r from-[#212e48] to-[#143c82]  rounded-sm text-white '>
    <p className='text-3xl font-bold'>{driver.name}</p>
    <p className='mt-5 text-xl font-semibold'>contact</p>
      <div className='m-1'>
      <p> phone : {driver.phone}</p>
      <p>location : {driver.location}</p>
      </div>
      <p className=' m-3 text-lg font-semibold'>AREA</p>
      <div className=' max-h-48 overflow-auto scrollbar-hide border-y-2 border-slate-600'>
     
        {
          driver && (
            driver.latex_area.map((ele,ind) => {
              return(
                <div className='m-3 '>
                  <p>{ind+1} . {ele}</p>
                </div>
              )
            })
          )
        }
      </div>
    </div>

      <div>
        <DriverAreaAdd id={id}/>
    </div>
    </div>

    <div>
    <DriverSupplier id={id}/>
    </div>

    </div>

  )
}

export default DriverProfile