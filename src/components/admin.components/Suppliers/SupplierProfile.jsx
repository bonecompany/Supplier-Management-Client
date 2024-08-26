

const SupplierProfile = ({supplier}) => {
    
    return (
      <div className="bg-white row-span-6 shadow-md rounded-lg p-4">
        <div className="flex items-center">
          <div className="">
            <h3 className="text-xl font-semibold">{supplier.name}</h3>
          </div>
        </div>
        <div className="mt-4 capitalize">
          <p className="font-medium">Code: <span className="text-gray-900 font-normal">{supplier.Bone_id}</span></p>
          <p className="font-medium">Phone: <span className="text-gray-900 font-normal">{supplier.phone}</span></p>
          <p className="font-medium">Location: <span className="text-gray-900 font-normal">{supplier.location}</span></p>
          <p className="font-medium">Address: <span className="text-gray-900 font-normal">{supplier.address}</span></p>
          <p className="font-medium">Category: <span className="text-gray-900 font-normal ">{supplier.category}</span> </p>
          <p className="font-medium">Acccount: <span className="text-gray-900 font-normal ">{supplier.account_no}</span> </p>
          <p className="font-medium">IFCE: <span className="text-gray-900 font-normal ">{supplier.IFCE_code}</span> </p>
        </div>
        <button className="mt-4 bg-blue-500 text-white font-medium py-2 px-4 rounded-md">Edit</button>
      </div>
    );
  };

  export default SupplierProfile
  