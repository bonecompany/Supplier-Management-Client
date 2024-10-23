import React, { useEffect } from 'react';
import { Axios } from '../../../MainRoute';
import { useLocation } from 'react-router-dom';
import CalendarApp from '../../calendar/CalendarApp';

const Calendar = () => {
  const location = useLocation();
  const tapper = location.state?.tapper;

  useEffect(() => {
    const getActivity = async () => {
      if (tapper && tapper._id) {
        try {
          const id = tapper._id;
          const response = await Axios.get(`/admin/tappers/${id}`);
          console.log(response?.data?.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };
    getActivity();
  }, [tapper]);

  return (
    <div className="p-4 md:p-6 lg:p-8"> {/* Wrapper for padding */}
      <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-center mb-4">Activity Calendar</h1>
      <div className="w-full max-w-4xl mx-auto"> {/* Centering CalendarApp */}
        <CalendarApp id={tapper} />
      </div>
    </div>
  );
};

export default Calendar;
