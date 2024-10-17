import { useState } from "react";
import DriversRegistration from "../../components/admin.components/Drivers/DriversRegistration";
import DriversTable from "../../components/admin.components/Drivers/DriversTable";

const Drivers = () => {
  const [showDriverReg, setShowDriverReg] = useState(false);

  return (
    <div className="w-full h-screen flex flex-col ">
      <p className="self-center text-2xl font-medium">DRIVERS</p>
      <div className="self-center m-2 ">
      <button
        onClick={() => setShowDriverReg(true)}
        className={` bg-slate-600 text-white px-4 py-2 rounded ${showDriverReg ? "hidden" : "visible"}`}
      >
        Add Driver
      </button>
      </div>
<div className="m-2">
{showDriverReg && (
         <DriversRegistration close={() => setShowDriverReg(false)} />

      )}
</div>
<div >
<DriversTable/>
</div>

    </div>
  );
};

export default Drivers;
