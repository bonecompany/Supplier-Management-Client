import React from 'react'
import { useForm, useFieldArray } from "react-hook-form";
import { toast } from "react-toastify";

function EditProfile({ supplier, onClose, onSave }) {
    const { register, handleSubmit, control } = useForm({
        defaultValues: supplier,
      });     
        const {
          fields: tapperFields,
          append: appendTapper,
          remove: removeTapper,
        } = useFieldArray({ control, name: "tappers" });
      const onSubmit = (data) => {
        onSave(data);
      };
      return (
        <div className="fixed inset-0 bg-black bg-opacity-65 flex justify-center items-center z-50">
          <div className="bg-stone-100 p-6 rounded-lg shadow-md w-full max-h-[80vh]  overflow-y-auto max-w-lg scrollbar-hide">
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
                  <label className="block text-gray-700">Location</label>
                  <input
                    type="text"
                    className="border p-2 w-full rounded"
                    {...register("location")}
                  />
                </div>
                <div className="w-1/2">
                  <label className="block text-gray-700">Phone</label>
                  <input
                    type="number"
                    className="border p-2 w-full rounded"
                    {...register("phone")}
                  />
               
              </div>
              </div>
                
              {/* Tapper Fields */}
               <div className="mb-4">
                <h3 className="text-lg font-semibold mb-1">Edit Supplier ID </h3>
                {  tapperFields.map((field, index) => (
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
    
              Save and Cancel Buttons
              <div className="flex justify-end">
                <button
                  type="button"
                  className="bg-gray-300 py-2 px-4 rounded mr-2 hover:bg-slate-400"
                  onClick={onClose}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      );
}

export default EditProfile