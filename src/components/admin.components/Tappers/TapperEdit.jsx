import React from 'react'
import { useForm } from 'react-hook-form'
import { Axios } from "../../../MainRoute.jsx"
import {inputError} from "../../../styles/style.jsx"
function TapperEdit({ tapper, onClose }) {
  const { register, handleSubmit,formState:{errors} } = useForm({
    defaultValues: tapper,
  });
  const onSubmit = async (data) => {  
    try {
      const id = data._id
      const {_id,...body} = data
      console.log(body)
      const response = await Axios.put(`/admin/tappers/updates?id=${id}`, body)
      window.alert(response.data)
    } catch (error) {
    }
  };
  console.log(tapper)
  return (
    <div className="fixed inset-0 bg-black bg-opacity-65 flex justify-center items-center z-50">
      <div className="bg-stone-100 p-6 rounded-lg shadow-md w-full max-h-[80vh]  overflow-y-auto max-w-lg text-black scrollbar-hide">
        <h2 className="text-xl font-bold mb-4 ">Edit Profile</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              className="border p-2 w-full rounded"
              {...register("name", {
                required: "Name is required",
              })}
            />
                {errors.name && (
                  <p className={inputError}>{errors.name.message}</p>
                )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Phone</label>
            <input
              type="text"
              className="border p-2 w-full rounded"
              {...register("phone", {
                required: "phone number is required",
              })}
            />
             {errors.name && (
                  <p className={inputError}>{errors.name.message}</p>
                )} {errors.phone && (
                  <p className={inputError}>{errors.phone.message}</p>
                )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Place</label>
            <input
              type="text"
              className="border p-2 w-full rounded"
              {...register("place", {
                required: "place is required",
              })}
            />
             {errors.place && (
                  <p className={inputError}>{errors.place.message}</p>
                )}
          </div>
          <div className="flex justify-end">
            <button
              type="reset"
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
  )
}
export default TapperEdit