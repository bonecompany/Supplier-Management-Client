import React, { useState } from 'react'
import { driverInput } from '../../../styles/style'
import { useForm } from 'react-hook-form'
import { Axios } from '../../../MainRoute'
import { toast } from 'react-toastify'
import PasswordCopy from '../PasswordCopy'
import { inputError } from '../../../styles/style'

function DriversRegistration({ close }) {

  const [passwordStore, setPasswordStore] = useState("")

  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      name: "",
      phone: "",
      location: ""
    }
  })
  const submit = async (data) => {

    try {
      const response = await Axios.post("/driver/registration", data);
      toast.success(response.data.message)
      setPasswordStore(response.data.data.passwordREAL)


    } catch (error) {
      console.log(error);
    }

  }

  return (
    <div className='flex justify-center '>

      <div className='w-full max-w-md mx-auto space-y-4 flex justify-center'>
        <form onSubmit={handleSubmit(submit)} className='flex flex-col'>

          <div>
            <div className='flex flex-col'>
              <input
                type='text'
                placeholder='Name'
                className={driverInput}
                {...register("name", {
                  required: "Name is required",
                })}
              />
              {errors.name && <p className={inputError}>{errors.name.message}</p>}

              <input
                type='text'
                placeholder='Phone'
                className={driverInput}
                {...register("phone", {
                  required: "Phone number is required",
                })}
              />
              {errors.phone && <p className={inputError}>{errors.phone.message}</p>}

              <input
                type='text'
                placeholder='Location'
                className={driverInput}
                {...register("location")}
              />
            </div>

            <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-2 font-medium">
              <button
                className="w-full sm:w-1/2 h-12 bg-gray-400 text-gray-800 p-2 outline-none rounded-sm border border-gray-400 transition duration-300 hover:bg-gray-200 hover:text-gray-900"
                type='reset'
                onClick={close}
              >
                Cancel
              </button>
              <button
                className="w-full sm:w-1/2 h-12 bg-gray-400 text-gray-800 p-2 outline-none rounded-sm border border-gray-400 transition duration-300 hover:bg-gray-200 hover:text-gray-900"
                type="submit"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>

      {
        passwordStore && (
          <PasswordCopy text={passwordStore} close={close} />
        )
      }
    </div>

  )
}
export default DriversRegistration