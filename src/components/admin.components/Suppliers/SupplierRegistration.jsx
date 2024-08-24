import { inputLabel, inputStyle, inputError } from '../../../styles/style.jsx';
import { RxCross2 } from "react-icons/rx";
import { useForm } from 'react-hook-form';
import { toast } from "react-toastify";
import { Axios } from '../../../MainRoute.jsx';


const SupplierRegistration = ({ open, onClose }) => {


    const { register, formState: { errors }, handleSubmit } = useForm({
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
            RDB: "",
            ifsc: "",
            category: ""
        }

    });

    const onSubmit = async (data) => {
        try {
            console.log("Submitted data:", data);
            const response = await Axios.post('/supplier/registration', data);
            console.log("API response:", response.data);
        } catch (error) {
            console.error("Error submitting data:", error.response?.data || error.message);
            window.alert(error.response?.data.errors)
            console.log(error.response?.data.errors)
        }
    };

    return (
        <div className={`fixed inset-0 flex justify-center items-center transition-colors z-50 ${open ? "visible bg-black/80" : "invisible"}`}>

            <div className={`bg-gray-200 h-fit max-h-[80vh] overflow-y-auto rounded-xl shadow p-8 transition-all ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"} scrollbar-hide`}>
                <div onClick={onClose} className='flex justify-end'>
                    <RxCross2 size={25} className='hover:text-red-500 hover:duration-300 hover:scale-125 cursor-pointer' />
                </div>
                <h1 className='text-center text-2xl font-bold mb-5 text-gray-700'>Supplier Add Form</h1>

                <form onSubmit={handleSubmit(onSubmit)}>


                    <div className='grid grid-cols-6 gap-2'>
                        <label className='col-span-4'>
                            <p className={inputLabel}>Name</p>
                            <input className={inputStyle} {...register('name', {
                                required: "Name is required"
                            })} />
                            {errors.name && (
                                <p className={inputError}>{errors.name.message}</p>
                            )}
                        </label>

                        <label className='col-span-2'>
                            <p className={inputLabel}>B-oneID</p>
                            <input className={inputStyle} {...register('Bone_id', {
                                required: "B OneId is required"
                            })} />
                            {errors.Bone_id && (
                                <p className={inputError}>{errors.Bone_id.message}</p>
                            )}
                        </label>

                        <label className='col-span-6'>
                            <p className={inputLabel}>Address</p>
                            <textarea className='w-full h-16 bg-white text-gray-700 mb-2 p-2 text-lg outline-none rounded-md shadow-custom-dark border-t-border-top'
                                {...register('address', {
                                    required: 'Address is required'
                                })}
                            />
                            {errors.address && (
                                <p className={inputError}>{errors.address.message}</p>
                            )}
                        </label>

                        <label className='col-span-2'>
                            <p className={inputLabel}>Mobile</p>
                            <input className={inputStyle}
                                {...register('phone', {
                                    required: "phone is required"
                                })}
                            />
                            {errors.phone && (
                                <p className={inputError}>{errors.phone.message}</p>
                            )}
                        </label>

                        <label className='col-span-2'>
                            <p className={inputLabel}>Location</p>
                            <input className={inputStyle}
                                {...register("location", {
                                    required: 'Location is required'
                                })} />
                            {errors.location && (
                                <p className={inputError}>{errors.location.message}</p>
                            )}
                        </label>

                        <label className='col-span-2'>
                            <p className={inputLabel}>GST</p>
                            <input className={inputStyle} {...register('GST')} />
                        </label>

                        <label className='col-span-3'>
                            <p className={inputLabel}>A/C No</p>
                            <input className={inputStyle}
                                {...register('account_no')} />

                        </label>

                        <label className='col-span-3'>
                            <p className={inputLabel}>IFSC</p>
                            <input className={inputStyle}
                                {...register('ifsc')} />
                        </label>

                        <label className='col-span-3'>
                            <p className={inputLabel}>RDB No</p>
                            <input className={inputStyle} {...register('RDB')} />
                        </label>

                        <label className='col-span-3'>
                            <p className={inputLabel}>Type</p>
                            <select className={inputStyle} {...register('category', {
                                required: "Supplier type is required"
                            })}>
                                <option>Daily Collection</option>
                                <option>Alternative Day Collection</option>
                                <option>Barrel Collection</option>
                                <option>Lease plantation</option>
                                <option>Slaughter Plantation</option>
                            </select>
                            {errors.category && (
                                <p className={inputError}>{errors.category.message}</p>
                            )}
                        </label>

                        <label className='col-span-3'>
                            <p className={inputLabel}>Remarks</p>
                            <input className={inputStyle} {...register('remarks')} />
                        </label>

                        <label className='col-span-3'>
                            <p className={inputLabel}>State</p>
                            <input className={inputStyle} {...register('state')} />
                        </label>
                        {/* {errors.root && <p className={inputError}>{errors.root.message}</p>} */}

                    </div>


                    <div className='flex gap-5 mx-3 mt-5 relative justify-end text-lg text-white'>
                        <button type="reset" onClick={onClose} className='px-8 py-1 bg-slate-700 hover:bg-red-500 hover:duration-500 hover:text-white hover:scale-105 outline-none rounded-md shadow-custom-dark border-t-border-top'>
                            Cancel
                        </button>
                        <button type="submit" className='px-8 py-1 bg-slate-700 hover:duration-500 hover:bg-blue-500 hover:scale-105 rounded-md shadow-custom-dark border-t-border-top outline-none' >
                            Save
                        </button>
                    </div>
                </form >
            </div >

        </div >
    );
}

export default SupplierRegistration;
