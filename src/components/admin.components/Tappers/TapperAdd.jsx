// import React, { useState } from 'react';
// import { inputLabel, inputStyle, inputError } from "../../../styles/style.jsx";
// import { useForm } from 'react-hook-form';
// import { Axios } from '../../../MainRoute.jsx';
// import { toast } from 'react-toastify';

// function TapperAdd({ onCloseTapper }) {
//   const [errorRes, setErrorRes] = useState([]);

//   const {
//     register,
//     formState: { errors },
//     reset,
//     handleSubmit,
//   } = useForm({
//     defaultValues: {
//       name: "",
//       phone: "",
//       supplier: "",
//       place: "",
//     },
//   });




//   const onSubmit = async (data) => {
//     try {
//       console.log("Submitted data:", data);
//       const response = await Axios.post("/tapper/registration", data);
//       console.log(response.data.message)
//       toast.success(response.data.message)
//       reset()
//       onClose()
//       console.log("API response:", response.data);
//     } catch (error) {
//       console.error(
//         "Error submitting data:",
//         error.response?.data.errors || error.message
//       );

//       setErrorRes(error.response?.data.errors);
//       toast.error(errorRes.map((ele) => ele));
//     }
//   };





//   return (
//     <div>
//       <h1 className="text-center text-2xl font-bold mb-5 text-gray-700">
//         Add Tapper
//       </h1>
//       <div>
//         <label>
//           <p className={inputLabel}>Name *</p>
//           <input className={inputStyle} {...register("name", {
//             required: "Name is required",
//           })} />
//           {errors.name && (
//             <p className={inputError}>{errors.name.message}</p>
//           )}
//         </label>
//         <label>
//           <p className={inputLabel}>Phone *</p>
//           <input className={inputStyle} {...register("phone", {
//             required: "Phone is required",
//           })} />
//           {errors.phone && (
//             <p className={inputError}>{errors.phone.message}</p>
//           )}
//         </label>
//         <label>
//           <p className={inputLabel}>Supplier ID *</p>
//           <input className={inputStyle} {...register("supplier", {
//             required: "Supplier ID is required",
//           })} />
//           {errors.supplier && (
//             <p className={inputError}>{errors.supplier.message}</p>
//           )}
//         </label>
//         <label>
//           <p className={inputLabel}>Place</p>
//           <input className={inputStyle} {...register("place")} />
//         </label>
//       </div>
//       <div className="flex gap-5 m-3 text-lg text-white">
//         <button
//           onClick={onCloseTapper}
//           className="px-8 py-1 bg-slate-700 hover:bg-red-500 hover:duration-500 hover:text-white hover:scale-105 outline-none rounded-md shadow-custom-dark border-t-border-top"
//         >
//           Cancel
//         </button>
//         <button
//           type="submit"
//           className="px-8 py-1 bg-slate-700 hover:duration-500 hover:bg-blue-500 hover:scale-105 rounded-md shadow-custom-dark border-t-border-top outline-none"
//         >
//           Save
//         </button>
//       </div>
//     </div>
//   );
// }

// export default TapperAdd;
