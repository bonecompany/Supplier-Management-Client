import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useForm, useFieldArray } from "react-hook-form";
import { Axios } from "../../../MainRoute";
import Spinner from "../../Loding/Spinner";
import { toast } from "react-toastify";

const SupplierProfile = () => {
  const { supplierId } = useParams();
  const [supplier, setSupplier] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { register, handleSubmit, reset, control } = useForm();
  const {
    fields: driverFields,
    append: appendDriver,
    remove: removeDriver,
  } = useFieldArray({ control, name: "drivers" });
  const {
    fields: tapperFields,
    append: appendTapper,
    remove: removeTapper,
  } = useFieldArray({ control, name: "tappers" });

  useEffect(() => {
    Axios.get(`/admin/supplier/${supplierId}`)
      .then((response) => {
        setSupplier(response.data);
        setIsLoading(false);
        reset(response.data); // Populate the form with supplier data
      })
      .catch((error) => {
        console.log("Supplier fetching error", error);
      });
  }, [supplierId, reset]);

  const onSubmit = (data) => {
    Axios.put(`/admin/supplier/${supplierId}`, data)
      .then((response) => {
        const {message, updatedSupplier} = response.data
        setSupplier(updatedSupplier);
        setIsModalOpen(false);
        toast.success(message)
      })
      .catch((error) => {
        console.log("Supplier updating error", error);
      });
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-8">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-lg mx-auto capitalize">
      {/* Supplier Details */}
      <div className="mb-4">
        <h2 className="text-3xl font-bold mb-2">{supplier?.name}</h2>
        <p className="text-xl font-medium">Code: {supplier?.Bone_id}</p>
        <p className="text-gray-600">Location: {supplier?.location}</p>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-1">Contact Information</h3>
        <p className="text-gray-600">Phone: {supplier?.phone}</p>
        <p className="text-gray-600">Address: {supplier?.address}</p>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-1">Account Details</h3>
        <p className="text-gray-600">A/C No: {supplier?.account_no}</p>
        <p className="text-gray-600">IFSC: {supplier?.IFSC_code}</p>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-1">Drivers</h3>
        {supplier?.drivers?.length > 0 ? (
          <ul className="list-disc list-inside text-gray-600">
            {supplier?.drivers?.map((driver, index) => (
              <li key={index}>{driver.name}</li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">No drivers assigned</p>
        )}
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-1">Tappers</h3>
        {supplier?.tappers?.length > 0 ? (
          <ul className="list-disc list-inside text-gray-600">
            {supplier?.tappers?.map((tapper, index) => (
              <li key={index}>{tapper.name}</li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">No tappers assigned</p>
        )}
      </div>

      {/* Edit Profile Button */}
      <div className="flex justify-between mt-6">
        <p className="text-gray-500">
          Joined: {new Date(supplier?.createdAt).toLocaleDateString()}
        </p>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          onClick={() => setIsModalOpen(true)}
        >
          Edit Profile
        </button>
      </div>

      {/* Modal for Editing Profile */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-65 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg">
            <h2 className="text-xl font-bold mb-4">Edit Profile</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  className="border p-2 w-full rounded"
                  {...register("name")}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Code</label>
                <input
                  type="text"
                  className="border p-2 w-full rounded"
                  {...register("Bone_id")}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Location</label>
                <input
                  type="text"
                  className="border p-2 w-full rounded"
                  {...register("location")}
                />
              </div>
              <div className="flex space-x-4 mb-4">
                <div className="w-1/2">
                  <label className="block text-gray-700">Phone</label>
                  <input
                    type="number"
                    className="border p-2 w-full rounded"
                    {...register("phone")}
                  />
                </div>
                <div className="w-1/2">
                  <label className="block text-gray-700">Account No</label>
                  <input
                    type="text"
                    className="border p-2 w-full rounded"
                    {...register("account_no")}
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Address</label>
                <input
                  type="text"
                  className="border p-2 w-full rounded"
                  {...register("address")}
                />
              </div>

              {/* Driver Fields */}
              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-1">Drivers</h3>
                {driverFields.map((field, index) => (
                  <div key={field.id} className="flex space-x-2 mb-2">
                    <input
                      type="text"
                      placeholder="Driver Name"
                      className="border p-2 w-1/2 rounded"
                      {...register(`drivers.${index}.name`)}
                    />
                    <input
                      type="text"
                      placeholder="Driver Phone"
                      className="border p-2 w-1/2 rounded"
                      {...register(`drivers.${index}.phone`)}
                    />
                    <button
                      type="button"
                      className="bg-red-500 text-white px-2 py-1 rounded"
                      onClick={() => removeDriver(index)}
                    >
                      Remove
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  className="bg-green-500 text-white py-2 px-4 rounded"
                  onClick={() => appendDriver({ name: "", phone: "" })}
                >
                  Add Driver
                </button>
              </div>

              {/* Tapper Fields */}
              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-1">Tappers</h3>
                {tapperFields.map((field, index) => (
                  <div key={field.id} className="flex space-x-2 mb-2">
                    <input
                      type="text"
                      placeholder="Tapper Name"
                      className="border p-2 w-1/2 rounded"
                      {...register(`tappers.${index}.name`)}
                    />
                    <input
                      type="text"
                      placeholder="Tapper Phone"
                      className="border p-2 w-1/2 rounded"
                      {...register(`tappers.${index}.phone`)}
                    />
                    <button
                      type="button"
                      className="bg-red-500 text-white px-2 py-1 rounded"
                      onClick={() => removeTapper(index)}
                    >
                      Remove
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  className="bg-green-500 text-white py-2 px-4 rounded"
                  onClick={() => appendTapper({ name: "", phone: "" })}
                >
                  Add Tapper
                </button>
              </div>

              {/* Save and Cancel Buttons */}
              <div className="flex justify-end">
                <button
                  type="button"
                  className="bg-gray-300 text-gray-700 py-2 px-4 rounded mr-2"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default SupplierProfile;
