import React, { useEffect, useState } from 'react';
import { Axios } from '../../../MainRoute';
import { useParams } from 'react-router-dom';

const LatexTable = () => {
  const [data,setData] = useState([])

  const { supplierId } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await Axios.get(`/admin/suppliers/latexdata?supplierId=${supplierId}`);
        // console.log(response);
        setData(response.data?.data.latex); 
      } catch (err) {
        console.error("Error fetching latex data:", err);
      }
    };

    getData();
  }, [supplierId]); 

console.log(data)


  const latexData = [
    { date: '01-08-2024', quantity: 65 },
    { date: '02-08-2024', quantity: 59 },
    { date: '03-08-2024', quantity: 80 },
    { date: '04-08-2024', quantity: 81 },
    { date: '05-08-2024', quantity: 56 },
    { date: '06-08-2024', quantity: 55 },
    { date: '07-08-2024', quantity: 40 },
  ];  



  return (
    <div className="p-4 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-2">Latex Purchase Table</h2>
      <table className="min-w-full  ">
        <thead>
          <tr>
            <th className=" border border-black 0">SL No</th>
            <th className=" border border-black 0">Date</th>
            <th className=" border border-black 0">Total Weight (Kg)</th>
            <th className=" border border-black 0">Latex Weight (Kg)</th>
            <th className=" border border-black 0">Jar Weight (Kg)</th>
            <th className=" border border-black 0">Jars </th>
            <th className=" border border-black 0">Big Jars </th>
            <th className=" border border-black 0">small Jars </th>
 
          </tr>
        </thead>
        <tbody>
          {data.map((value,index) => (
            <tr key={index} className='text-center'>
              
              <td className="border border-black">
              {index+1}
              </td>
              <td className="border border-black">
              {new Date(value.date).toLocaleDateString('en-GB')}
              </td>
              <td className="border border-black">
              {value.total_weight}
              </td>
              <td className="border border-black">
              {value.latex_weight}
              </td>
              <td className="border border-black">
              {value.jars_weight}
              </td>
              <td className="border border-black">
              {value.jars}
              </td>
              <td className="border border-black">
              {value.big_jar}
              </td>
              <td className="border border-black">
              {value.small_jar}
              </td>
              
              
          
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LatexTable;
