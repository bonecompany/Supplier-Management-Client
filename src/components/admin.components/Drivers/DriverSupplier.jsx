import React, { useEffect, useState } from 'react'
import { Axios } from '../../../MainRoute'
import { useNavigate } from 'react-router-dom';


function DriverSupplier({id}) {

    const [mapData,setMapData] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        const getSupplier = async () => {
          try {
            
            const response = await Axios.get(`/admin/driver/supplier?id=${id}`)
      
            setMapData(response.data);
            console.log(response.data)

          } catch (error) {
            console.log(error);
          }
        };
    
        getSupplier();
      }, [id]);
    
    return (
        <div className='p-2'>
            <p className='text-center text-2xl font-semibold p-2'>Area Suppliers</p>
            <div className='w-full p-10 max-h-[400px] overflow-auto scrollbar-hide'>
                <div className='flex justify-center'>
                    <div className=' grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 scrollbar-hide'>
                        {
                            mapData?.map ((ele,ind) => (
                                <div 
                                key={ind} 
                                className='w-72 p-2 h-fit max-h-28 bg-gradient-to-r from-[#303a52] to-[#13284d] cursor-pointer 
                                rounded-md shadow-[#0f131e] text-white overflow-auto scrollbar-hide shadow-sm hover:brightness-125 hover:saturate-150
                                transition-all duration-1000 ease-in-out'
                                onClick={() => navigate(`/admin/supplier/${ele?.Bone_id}`)}
                              >
                              
                                <div className='flex gap-2 mx-2'>
                                    <p>Name : </p>
                                    <p className='font-medium'>{ele.name}</p>
                                </div>
                                <div className='m-2'>
                                    <p>Contact : {ele.phone} </p>
                                     <p>Location : {ele.location} </p>
                                </div>
                            </div>
                            ))
                        }
                       
                    </div>
                </div>
            </div>
        </div>

    )
}

export default DriverSupplier