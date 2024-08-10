import React from 'react'
import { inputLabel, inputStyle } from '../../styles/style'
function Registration() {



  return (
    <div>
        {/* You can open the modal using document.getElementById('ID').showModal() method */}
<button className="btn" onClick={()=>document.getElementById('my_modal_4').showModal()}>open modal</button>
<dialog id="my_modal_4" className="modal">
  <div className="modal-box w-full max-w-5xl">

<div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
   
    

    <label >
     <p className={inputLabel}>name</p>
    <input className={`${inputStyle} `} />
    </label>
    <label >
     <p className={inputLabel}>Bone id</p>
    <input className={`${inputStyle} `} />
    </label>
    <label >
     <p className={inputLabel}>adress</p>
    <input className={`${inputStyle} `} />
    </label>
    <label >
     <p className={inputLabel}>GST</p>
    <input className={`${inputStyle} `} />
    </label>
    <label >
     <p className={inputLabel}>code</p>
    <input className={`${inputStyle} `} />
    </label>
    <label >
     <p className={inputLabel}>code</p>
    <input className={`${inputStyle} `} />
    </label>
    <label >
     <p className={inputLabel}>code</p>
    <input className={`${inputStyle} `} />
    </label>
   
</div>

  

 
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
    </div>
  )
}

export default Registration



  


