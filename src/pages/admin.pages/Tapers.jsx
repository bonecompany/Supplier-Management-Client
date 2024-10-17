import React, { useState,useEffect } from 'react'
import TapperTable from '../../components/admin.components/Tappers/TapperTable'
import { Axios } from '../../MainRoute'
const Tapers = () => {
  const [tappers,setTappers] = useState([])

  useEffect(() => {
    const getTapper = async () => {
      try {
        const response = await Axios.get("/admin/tappers", {
        });
        console.log(response.data.data)
        setTappers(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getTapper();
  }, []);
  return (
    <div className='p-2'>
      <TapperTable tappers={tappers}/>
    </div>
  )
}

export default Tapers