import React, { useEffect, useState } from 'react';
import { Axios } from '../../../MainRoute';
import { useNavigate } from 'react-router-dom';

function DriversTable() {

  const [driverData, setDriverData] = useState([]);

  const navigate = useNavigate()



  const handleRowClick = (driver) => {
       navigate(`/admin/driver/${driver.phone}`,{state:{driver}})
  }



  useEffect(() => {
    const getDriver = async () => {
      try {
        const response = await Axios.get('/admin/drivers');
        setDriverData(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    getDriver();
  }, []);


  return (
    <div className="mx-10 px-3 grid grid-cols-1 gap-4 sm:grid-cols-2    xl:grid-cols-4 2xl:grid-cols-5 scrollbar-hide">
      {driverData?.map((ele, ind) => {
        return (
          <div
            key={ind}
            className="  bg-gradient-to-r from-[#0e1421] to-[#41506a] rounded-xl hover:shadow-[#0e1421] hover:shadow-xl shadow-[#41506a] shadow-lg flex flex-col justify-center items-center p-5 text-white mb-4 hover:scale-110 cursor-pointer duration-300"
            onClick={() => handleRowClick (ele)}
         >
            <p>name : {ele.name}</p>
            <p>phone : {ele.phone}</p>

          </div>
        );
      })}
    </div>
  );
}

export default DriversTable;
