import React, { useState ,useEffect} from 'react';
import { Axios } from '../../../MainRoute';
import { useLocation } from 'react-router-dom';
import CalendarApp from '../../calendar/CalendarApp';

const Calendar = () => {
  const location = useLocation()
  console.log(location)
  const tapper = location.state?.tapper
  useEffect( () => {
    const getActivity = async () => {
      if(tapper && tapper._id){
         try {
          const id=tapper._id
          console.log(id)
          const response = await Axios.get(`/admin/tappers/${id}`)
          console.log(response?.data?.data)
         } catch (error) {
          console.error("Error fetching data:", error);
         }
    }
  }
    getActivity()
  }),[tapper]
  return (
    <>
      <CalendarApp id={tapper}/>
    </>
  );
};

export default Calendar;