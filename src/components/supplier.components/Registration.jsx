import React from 'react'
import { inputLabel, inputStyle } from '../../styles/style'
function Registration() {



  return (
    <div>


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

  

 

    </div>
  )
}

export default Registration



  


