import { inputLabel, inputStyle, inputError } from "../../../styles/style.jsx";
import { RxCross2 } from "react-icons/rx";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Axios } from "../../../MainRoute.jsx";
import { useState } from "react";
// import TapperAdd from "../Tappers/TapperAdd.jsx";

const SupplierRegistration = ({ open, onClose }) => {
const [openTapper, setOpenTapper] = useState(true);
const [errorRes, setErrorRes] = useState([]);

  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm({
    defaultValues: {
      name: "",
      Bone_id: "",
      address: "",
      phone: "",
      location: "",
      GST: "",
      account_no: "",
      state: "",
      remarks: "",
      RBD_no: "",
      ifsc: "",
      category: "",
      tappername: "",
      tapperphone: "",
      tapperplace: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      console.log("Submitted data:", data);
      const response = await Axios.post("/supplier/registration", data);
      toast.success(response.data.message)
      reset()
      onClose()
      console.log("API response:", response.data);
    } catch (error) {
      console.error(
        "Error submitting data:",
        error.response?.data || error.message
      );
      setErrorRes(error.response?.data.errors);
      toast.error(errorRes.map((ele) => ele));
    }
  };

  return (
    <div
    className={`fixed inset-0 flex justify-center items-center transition-colors z-50 ${open ? "visible bg-black/80" : "invisible"
      }`}
  >
    <div
      className={`bg-gray-200 w-11/12 max-w-lg h-[90vh] max-h-[90vh] overflow-y-auto rounded-xl shadow p-8 transition-transform duration-500 ${open ? "scale-110 opacity-100" : "scale-125 opacity-0"
        } scrollbar-hide`}
    >
        <div onClick={onClose} className="flex justify-end">
          <RxCross2
            size={25}
            className="hover:text-red-500 hover:duration-300 hover:scale-125 cursor-pointer"
          />
        </div>
        <h1 className="text-center text-2xl font-bold mb-5 text-gray-700">
          Supplier Add Form
        </h1>

        <div className="flex justify-center " >
          <form onSubmit={handleSubmit(onSubmit)}>

            <div className="grid grid-cols-6 gap-2 ">
              <label className="col-span-4">
                <p className={inputLabel}>Name *</p>
                <input
                  className={inputStyle}
                  {...register("name", {
                    required: "Name is required",
                  })}
                />
                {errors.name && (
                  <p className={inputError}>{errors.name.message}</p>
                )}
              </label>

              <label className="col-span-2">
                <p className={inputLabel}>B-oneID *</p>
                <input
                  className={inputStyle}
                  {...register("Bone_id", {
                    required: "B OneId is required",
                  })}
                />
                {errors.Bone_id && (
                  <p className={inputError}>{errors.Bone_id.message}</p>
                )}
              </label>

              <label className="col-span-6">
                <p className={inputLabel}>Address *</p>
                <textarea
                  className="w-full h-16 bg-white text-gray-700 mb-2 p-2 text-lg outline-none rounded-md shadow-custom-dark border-t-border-top"
                  {...register("address", {
                    required: "Address is required",
                  })}
                />
                {errors.address && (
                  <p className={inputError}>{errors.address.message}</p>
                )}
              </label>

              <label className="col-span-2">
                <p className={inputLabel}>Mobile *</p>
                <input
                  className={inputStyle}
                  {...register("phone", {
                    required: "phone is required",
                  })}
                />
                {errors.phone && (
                  <p className={inputError}>{errors.phone.message}</p>
                )}
              </label>

              <label className="col-span-2">
                <p className={inputLabel}>Location *</p>
                <input
                  className={inputStyle}
                  {...register("location", {
                    required: "Location is required",
                  })}
                />
                {errors.location && (
                  <p className={inputError}>{errors.location.message}</p>
                )}
              </label>

              <label className="col-span-2">
                <p className={inputLabel}>GST</p>
                <input className={inputStyle} {...register("GST")} />
              </label>

              <label className="col-span-3">
                <p className={inputLabel}>A/C No</p>
                <input className={inputStyle} {...register("account_no")} />
              </label>

              <label className="col-span-3">
                <p className={inputLabel}>IFSC</p>
                <input className={inputStyle} {...register("ifsc")} />
              </label>

              <label className="col-span-3">
                <p className={inputLabel}>RBD No</p>
                <input className={inputStyle} {...register("RBD_no")} />
              </label>

              <label className="col-span-3">
                <p className={inputLabel}>Type *</p>
                <select
                  className={inputStyle}
                  {...register("category", {
                    required: "Supplier type is required",
                  })}
                >
                  <option>Daily Collection</option>
                  <option>Alternative Day Collection</option>
                  <option>Barrel Collection</option>
                  <option>Lease Plantation</option>
                  <option>Slaughter Plantation</option>
                </select>
                {errors.category && (
                  <p className={inputError}>{errors.category.message}</p>
                )}
              </label>
              <label className="col-span-3">
                <p className={inputLabel}>Remarks</p>
                <input className={inputStyle} {...register("remarks")} />
              </label>
              <label className="col-span-3">
                <p className={inputLabel}>State</p>
                <input className={inputStyle} {...register("state")} />
              </label>
              {/* {errors.root && <p className={inputError}>{errors.root.message}</p>} */}
            </div>


            <div className="flex justify-center">
            {
              openTapper ?
                <div className={`${openTapper ? "relative inset-5 mt-1 w-[60%] " : ""}`}>
                  <div
                    className={`bg-gray-200 max-h-[60vh] overflow-y-auto rounded-xl shadow-custom-dark-2 px-4 py-2 duration-[2000ms] ${openTapper ? "scale-100 opacity-100" : "scale-150 opacity-0"
                      } scrollbar-hide`}
                  >

                    <div>
                    <div onClick={() => setOpenTapper(false)} className="flex justify-end">
          <RxCross2
            size={25}
            className="hover:text-red-500 hover:duration-300 hover:scale-125 cursor-pointer"
          />
        </div>
                      <h1 className="text-center text-2xl font-bold mb-5 text-gray-700">
                        Add Tapper
                      </h1>
                      <div>
                        <label>
                          <p className={inputLabel}>Name *</p>
                          <input className={inputStyle} {...register("tappername", {
                            required: "Name is required",
                          })} />
                          {errors.name && (
                            <p className={inputError}>{errors.name.message}</p>
                          )}
                        </label>
                        <label>
                          <p className={inputLabel}>Phone *</p>
                          <input className={inputStyle} {...register("tapperphone", {
                            required: "Phone is required",
                          })} />
                          {errors.phone && (
                            <p className={inputError}>{errors.phone.message}</p>
                          )}
                        </label>
                        <label>
                          <p className={inputLabel}>Place</p>
                          <input className={inputStyle} {...register("tapperplace")} />
                        </label>
                      </div>
                    </div>


                  </div>
                </div>

                : <div className="flex justify-center mt-6">
                  <button className="p-2 w-fit bg-slate-600 font-medium text-white hover:duration-500 hover:scale-105 rounded-md shadow-custom-dark outline-none" onClick={() => setOpenTapper(true)}>
                    Add Tapper</button>
                </div>
            }
            </div>

            <div className="flex justify-center gap-5 m-10 text-lg text-white">
              <button
                type="reset"
                onClick={onClose}
                className="px-8 py-1 bg-slate-700 hover:bg-red-500 hover:duration-500 hover:text-white hover:scale-105 outline-none rounded-md shadow-custom-dark border-t-border-top"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-8 py-1 bg-slate-700 hover:duration-500 hover:bg-blue-500 hover:scale-105 rounded-md shadow-custom-dark border-t-border-top outline-none"
              >
                Save
              </button>
            </div>

   
          </form>
        </div>
      </div>
    </div>
  );
};

export default SupplierRegistration;
