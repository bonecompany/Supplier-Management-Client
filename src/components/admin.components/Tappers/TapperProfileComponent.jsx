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
    <div className="bg-[#F0F8FF] max-w-[50vw] max-h-fit overflow-auto text-white">
      {/* Tapper Info Section */}
      <div className="bg-[#091d27c6] p-8 rounded-t-2xl flex flex-col gap-1">
        <h1 className="font-semibold text-2xl relative right-3">Tapper</h1>
        <h1 className="font-medium text-lg">Name: {tapper.name}</h1>
        <h1>Phone: {tapper.phone}</h1>
        <h1>Place: {tapper.place}</h1>
      </div>

      {/* Supplier Info Section */}
      <div className="bg-[#686f70] rounded-b-2xl p-8 flex flex-col gap-1">
        <h1 className="font-semibold text-2xl relative right-3">Supplier</h1>
        <h1>Name: {tapper?.supplier?.name || "N/A"}</h1>
        <h1>Bone ID: {tapper?.supplier?.Bone_id || "N/A"}</h1>
        <h1>Phone: {tapper?.supplier?.phone || "N/A"}</h1>
        <h1>Category: {tapper?.supplier?.category || "N/A"}</h1>
        <h1>Place: {tapper?.supplier?.location || "N/A"}</h1>
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

export default TapperProfile;
