import React, { useEffect, useState } from 'react';
import { Axios } from '../../../MainRoute';
import { useNavigate } from 'react-router-dom';

function DriverSupplier({ id }) {
  const [mapData, setMapData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getSupplier = async () => {
      try {
        const response = await Axios.get(`/admin/driver/supplier?id=${id}`);
        setMapData(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getSupplier();
  }, [id]);
  

  return (
    <div className="p-4">
      <p className="text-center text-3xl md:text-4xl font-bold p-2 py-10">Area Suppliers</p>
      <div className="w-full max-h-[400px] overflow-auto scrollbar-hide p-2">
        <div className="flex justify-center">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
            {mapData?.map((ele, ind) => (
              <div
                key={ind}
                className="w-full max-w-xs h-full max-h-28 bg-gradient-to-r from-[#303a52] to-[#13284d] cursor-pointer 
                rounded-md shadow-[#0f131e] text-white overflow-hidden transition-all duration-300 ease-in-out p-2
                hover:brightness-125 hover:saturate-150"
                onClick={() => navigate(`/admin/supplier/${ele?.Bone_id}`)}
              >
                <div className="flex gap-2 mx-2">
                  <p>Name:</p>
                  <p className="font-medium">{ele.name}</p>
                </div>
                <div className="m-2">
                  <p>Contact: {ele.phone}</p>
                  <p>Location: {ele.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DriverSupplier;
