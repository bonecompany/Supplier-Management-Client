import React from 'react';
import DriverAreaAdd from '../../components/admin.components/Drivers/DriverAreaAdd';
import { useLocation } from 'react-router-dom';
import DriverSupplier from '../../components/admin.components/Drivers/DriverSupplier';

function DriverProfile() {
  const location = useLocation();
  const driver = location.state?.driver;
  const id = driver?._id;

  return (
    <div className="p-5 md:p-10">
      <div className="flex flex-col md:flex-row justify-between gap-5">
        <div className="w-full md:w-1/2 h-fit px-5 py-3 bg-gradient-to-r from-[#212e48] to-[#143c82] rounded-sm text-white">
          <p className="text-3xl font-bold">{driver?.name}</p>
          <p className="mt-5 text-xl font-semibold">Contact</p>
          <div className="m-1">
            <p>Phone: {driver?.phone}</p>
            <p>Location: {driver?.location}</p>
          </div>
          <p className="m-3 text-lg font-semibold">Area</p>
          <div className="max-h-48 overflow-auto scrollbar-hide border-y-2 border-slate-600">
            {driver?.latex_area.map((ele, ind) => (
              <div className="m-3" key={ind}>
                <p>{ind + 1}. {ele}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <DriverAreaAdd id={id} />
        </div>
      </div>

      <div className="mt-5">
        <DriverSupplier id={id} />
      </div>
    </div>
  );
}

export default DriverProfile;
