import React from 'react'
import CalendarApp from '../../components/calendar/CalendarApp'
import TapperProfile from '../../components/admin.components/Tappers/TapperProfileComponent'
const DrcUpdation = () => {
  return (
    <div className=' bg-sky-800 flex flex-col items-center justify-center h-fit m-10 px-10 text-white gap-10'>
      <CalendarApp/>
      <TapperProfile/>


    </div>
  )
}

export default DrcUpdation