import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Axios } from '../../../MainRoute';

const SupplierProfile = () => {
  const { supplierId } = useParams();
  const [supplier, setSupplier] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    Axios.get(`/admin/supplier/${supplierId}`)
      .then((response) => {
        setSupplier(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log("Supplier fetching error", error);
      });
  }, [supplierId]);

  if (isLoading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-lg mx-auto capitalize">
      <div className="mb-4">
        <h2 className="text-3xl font-bold mb-2">{supplier?.name}</h2>
        <p className="text-gray-600">Code: {supplier?.Bone_id}</p>
        <p className="text-gray-600">Location: {supplier?.location}</p>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-1">Contact Information</h3>
        <p className="text-gray-600">Phone: {supplier?.phone}</p>
        <p className="text-gray-600">Address: {supplier?.address}</p>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-1">Drivers</h3>
        {supplier?.drivers.length > 0 ? (
          <ul className="list-disc list-inside text-gray-600">
            {supplier.drivers.map((driver, index) => (
              <li key={index}>{driver.name}</li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">No drivers assigned</p>
        )}
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-1">Tappers</h3>
        {supplier?.tappers.length > 0 ? (
          <ul className="list-disc list-inside text-gray-600">
            {supplier.tappers.map((tapper, index) => (
              <li key={index}>{tapper.name}</li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">No tappers assigned</p>
        )}
      </div>

      <div className="flex justify-between mt-6">
        <p className="text-gray-500 text-sm">
          Created: {new Date(supplier?.createdAt).toLocaleDateString()}
        </p>
        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default SupplierProfile;



// const SupplierProfile = ({supplier}) => {
//     console.log("ugh",supplier);
    
//     return (
//       <div className="bg-white row-span-6 shadow-md rounded-lg p-4">
//         <div className="flex items-center">
//           <div className="">
//             <h3 className="text-xl font-semibold">{supplier?.name}</h3>
//           </div>
//         </div>
//         <div className="mt-4 capitalize">
//           <p className="font-medium">Code: <span className="text-gray-900 font-normal">{supplier?.Bone_id}</span></p>
//           <p className="font-medium">Phone: <span className="text-gray-900 font-normal">{supplier?.phone}</span></p>
//           <p className="font-medium">Location: <span className="text-gray-900 font-normal">{supplier?.location}</span></p>
//           <p className="font-medium">Address: <span className="text-gray-900 font-normal">{supplier?.address}</span></p>
//           <p className="font-medium">Category: <span className="text-gray-900 font-normal ">{supplier?.category}</span> </p>
//           <p className="font-medium">Acccount: <span className="text-gray-900 font-normal ">{supplier?.account_no}</span> </p>
//           <p className="font-medium">IFCE: <span className="text-gray-900 font-normal ">{supplier?.IFCE_code}</span> </p>
//         </div>
//         <button className="mt-4 bg-blue-500 text-white font-medium py-2 px-4 rounded-md">Edit</button>
//       </div>
//     );
//   };

//   export default SupplierProfile
  