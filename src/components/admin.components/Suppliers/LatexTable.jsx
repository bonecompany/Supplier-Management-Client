import React, { useState } from 'react';

const LatexTable = (props) => {


const [data,setData] = useState('')

  const latexData = [
    { date: '01-08-2024', quantity: 65 },
    { date: '02-08-2024', quantity: 59 },
    { date: '03-08-2024', quantity: 80 },
    { date: '04-08-2024', quantity: 81 },
    { date: '05-08-2024', quantity: 56 },
    { date: '06-08-2024', quantity: 55 },
    { date: '07-08-2024', quantity: 40 },
  ];  

  

// setData(props)
console.log(props)

  return (
    <div className="p-4 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-2">Latex Purchase Table</h2>
      <table className="min-w-full  ">
        <thead>
          <tr>
            <th className=" border border-black 0">Date</th>
            <th className=" border border-black 0">Quantity (Kg)</th>
            <th className=" border border-black 0">Quantity (Kg)</th>
            <th className=" border border-black 0">Quantity (Kg)</th>
          </tr>
        </thead>
        <tbody>
          {latexData.map((entry, index) => (
            <tr key={index} className='text-center'>
              
              <td className=" border border-black ">{entry.date}</td>
              <td className=" border border-black ">{entry.quantity}</td>
              <td className=" border border-black ">{entry.quantity}</td>
              <td className=" border border-black ">{entry.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LatexTable;
