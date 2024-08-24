import { useState } from 'react'
import Cardpages from '../../components/admin.components/Cardpages'
import TableComponent from '../../components/admin.components/TableComponent'
import SupplierRegistration from '../../components/admin.components/Suppliers/SupplierRegistration'



const Suppliers = () => {

  const [open, setOpen] = useState(false)

  return (
    <div className='grid gap-3 p-3'>
      <div className="flex  justify-end relative" >
        <button onClick={() => setOpen(true)} className="bg-gray-700 text-white px-4 py-2 rounded-md flex items-center">
          Add User
        </button>
      </div>
      <SupplierRegistration
        open={open}
        onClose={() => setOpen(false)}
      />
      <Cardpages />
      <TableComponent />



    </div >
  )
}

export default Suppliers