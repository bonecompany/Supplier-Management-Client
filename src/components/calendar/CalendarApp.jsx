import { generateDate, months } from './calendar';
import dayjs from "dayjs";
import React, { useState, useEffect } from "react";
import cn from "./class";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { TiTick } from "react-icons/ti";
// import { FaXmark } from "react-icons/fa6";
import { Axios } from '../../MainRoute';

function CalendarApp({ id }) {
    const days = ["S", "M", "T", "W", "T", "F", "S"];
    const currentDate = dayjs();

    const [today, setToday] = useState(currentDate);
    const [selectDate, setSelectDate] = useState(currentDate);
    const [activeDates, setActiveDates] = useState([]);

    // Fetch active dates on mount or when `id` changes
    useEffect(() => {
        const getActivity = async () => {
            if (id && id._id) {
                try {
                    const response = await Axios.get(`/admin/tappers/${id._id}`);
                    setActiveDates(response?.data?.data?.tappingData || []);
                } catch (error) {
                    console.error("Error fetching data:", error);
                }
            }
        };

        getActivity();
    }, [id]);

    // Function to format activeDates to 'YYYY-MM-DD'
    const formatActiveDates = () => {
        return activeDates.map(item => dayjs(item.createdAt).format('YYYY-MM-DD'));
    };

    const activeFormattedDates = formatActiveDates();

    return (
        <div className="flex gap-10 justify-end mr-9 ">
            <div className="w-96 h-60  ">
                <div className="flex justify-between items-center">
                    <h1 className="select-none font-semibold">
                        {months[today.month()]}, {today.year()}
                    </h1>

                    <div className="flex gap-10 items-center ">
                        <GrFormPrevious
                            className="w-5 h-5 cursor-pointer hover:scale-105 transition-all"
                            onClick={() => {
                                setToday(today.month(today.month() - 1));
                            }}
                        />
                        <h1
                            className=" cursor-pointer hover:scale-105 transition-all"
                            onClick={() => {
                                setToday(currentDate);
                            }}
                        >
                            Today
                        </h1>
                        <GrFormNext
                            className="w-5 h-5 cursor-pointer hover:scale-105 transition-all"
                            onClick={() => {
                                setToday(today.month(today.month() + 1));
                            }}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-7 ">
                    {days.map((day, index) => {
                        return (
                            <h1
                                key={index}
                                className="text-base text-center h-10 grid place-content-center text-red-400 font-medium select-none"
                            >
                                {day}
                            </h1>
                        );
                    })}
                </div>

                <div className="grid grid-cols-7 ">
                    {generateDate(today.month(), today.year()).map( 
                        ({ date, currentMonth, today }, index) => {
                            const formattedDate = date.format('YYYY-MM-DD');
                            const isActiveDate = activeFormattedDates.includes(formattedDate);  // Check if the date is an active date

                            return (
                                <div
                                    key={index}
                                    className="p-2 text-center h-10 grid place-content-center text-sm border-t"
                                >
                                  <div className='relative'>
                                  {isActiveDate ? <div className='absolute top-3 left-5 z-20'>
                                      <TiTick size={25} className='text-red-500 '/>
                                     </div>  : ""}
                                  </div>
                                    <h1
                                        className={cn(
                                            currentMonth ? "" : "text-gray-400",
                                            today ? " scale-110 text-red-600 font-bold " : "",
                                            selectDate.toDate().toDateString() === date.toDate().toDateString()
                                                ,
                                            isActiveDate ? "bg-[#303b53] text-white" : "",  // Special styling for active dates
                                            "h-8 w-8 rounded-full grid place-content-center transition-all  select-none"
                                        )}
                                        onClick={() => {
                                            setSelectDate(date);
                                        }}
                                    >
                                   
                                        {date.date()}
                                    </h1>
                                </div>
                            );
                        }
                    )}
                </div>
            </div>
        </div>
    );
}

export default CalendarApp;
