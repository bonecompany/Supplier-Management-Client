import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { toast } from "react-toastify";

const EditSupplierProfile = ({ supplier, onClose, onSave }) => {
  const { register, handleSubmit, control } = useForm({
    defaultValues: supplier,
  });

  //   const {
  //     fields: driverFields,
  //     append: appendDriver,
  //     remove: removeDriver,
  //   } = useFieldArray({ control, name: "drivers" });

  //   const {
  //     fields: tapperFields,
  //     append: appendTapper,
  //     remove: removeTapper,
  //   } = useFieldArray({ control, name: "tappers" });

  const onSubmit = (data) => {
    onSave(data);
  };

  return (
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

          <div className="flex space-x-4 mb-4">
            <div className="w-1/2">
              <label className="block text-gray-700">Code</label>
              <input
                type="text"
                className="border p-2 w-full rounded"
                {...register("Bone_id")}
              />
            </div>
            <div className="w-1/2">
              <label className="block text-gray-700">Location</label>
              <input
                type="text"
                className="border p-2 w-full rounded"
                {...register("location")}
              />
            </div>
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
              <label className="block text-gray-700">Category</label>
              <select
                name="category"
                id="category"
                {...register("category")}
                className="border p-2 w-full rounded"
              >
                <option>Daily Collection</option>
                <option>Alternative Day Collection</option>
                <option>Barrel Collection</option>
                <option>Lease Plantation</option>
                <option>Slaughter Plantation</option>
              </select>
            </div>
          </div>

          <div className="flex space-x-4 mb-4">
            <div className="w-1/2">
              <label className="block text-gray-700">Account No</label>
              <input
                type="text"
                className="border p-2 w-full rounded"
                {...register("account_no")}
              />
            </div>
            <div className="w-1/2">
              <label className="block text-gray-700">IFSC</label>
              <input
                type="text"
                className="border p-2 w-full rounded"
                {...register("ifsc")}
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
          {/* <div className="mb-4">
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
          </div> */}

          {/* Tapper Fields */}
          {/* <div className="mb-4">
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
          </div> */}

          {/* Save and Cancel Buttons */}
          <div className="flex justify-end">
            <button
              type="button"
              className="bg-gray-300 text-gray-700 py-2 px-4 rounded mr-2"
              onClick={onClose}
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
  );
};

export default EditSupplierProfile;
