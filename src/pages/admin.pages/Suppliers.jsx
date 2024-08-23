import React from 'react'
import Cardpages from '../../components/admin.components/Cardpages'
import TableComponent from '../../components/admin.components/TableComponent'

const Suppliers = () => {

  return (
    <div className='grid gap-3 p-3'>
      <div className="flex  justify-end ">
        <button className="bg-gray-700 text-white px-4 py-2 rounded-md flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-10 h-5 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4v16m8-8H4"
            />
          </svg>
          Add User
        </button>
      </div>
      <Cardpages />
      <TableComponent />

    </div >
  )
}

export default Suppliers