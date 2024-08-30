import React, { useState } from 'react'

const users = [
    {
      id: 1,
      name: "Rajan Raju",
      boneId: 2134128,
      TotalWt: 10,
      Jars:2,
      JarWt:4.80,
      LatexWt:200.20,
      FilmWt:0.00,
      DrcPer:0.00,
      DrcQty:0.00,
      phone: "9063214556",
      status: "Approved",
      avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
      id: 2,
      name: "Unias Ubaid",
      boneId: 2141248,
      TotalWt: 11.5,
      Jars:1,
      JarWt:5.80,
      LatexWt:22.10,
      FilmWt:0.00,
      DrcPer:0.00,
      DrcQty:0.00,
      phone: "8563235456",
      status: "Approved",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      id: 3,
      name: "Jabar Kareem",
      boneId: 4677427,
      TotalWt: 555.00,
      Jars:3,
      JarWt:8.5,
      LatexWt:552.60,
      FilmWt:0.00,
      DrcPer:0.00,
      DrcQty:0.00,
      phone: "7563677766",
      status: "Pending",
      avatar: "https://randomuser.me/api/portraits/women/3.jpg",
    },
    {
      id: 4,
      name: "Jaison Jobby",
      boneId: 4677428,
      TotalWt:20.50,
      Jars:1,
      JarWt:3.70,
      LatexWt:4.20,
      FilmWt:0.00,
      DrcPer:0.00,
      DrcQty:0.00,
      phone: "9963214346",
      status: "Approved",
      avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      id: 5,
      name: "Chacko Jackson",
      boneId: 4677429,
      TotalWt:88.05,
      Jars:2,
      JarWt:2.10,
      LatexWt:5.20,
      FilmWt:0.00,
      DrcPer:0.00,
      DrcQty:0.00,
      phone: "7563277888",
      status: "Approved",
      avatar: "https://randomuser.me/api/portraits/women/5.jpg",
    },
  ];

function TableLatex() {
    const [boneIdInput, setBoneIdInput] = useState('');
    const [filteredUsers, setFilteredUsers] = useState([]);
  
    const handleInputChange = (e) => {
      const boneId = e.target.value;
      setBoneIdInput(boneId);
  
      if (boneId) {
        const filteredIndex = users.findIndex(user => user.boneId === parseInt(boneId));
        if (filteredIndex !== -1) {
          const displayedUsers = users[filteredIndex];
          setFilteredUsers([displayedUsers]);
        } else {
          setFilteredUsers([]);
        }
      } else {
        setFilteredUsers([]);
      }
    };
  return (
    <>
    <div className="flex justify-center items-center  bg-gradient-to-r p-4">
    <div className="overflow-x-auto w-full max-w-6xl">
      <table className="min-w-full bg-white shadow-md rounded-lg ">
        <thead className=" bg-gradient-to-b from-[#1f384f] to-[#07a2a2] text-white">
          <tr>
            <th className="py-2 px-4 text-left">boneId</th>
            <th className="py-2 px-4 text-left">Supplier Name</th>
            <th className="py-2 px-4 text-left">Total Wt</th>
            <th className="py-2 px-4 text-left">Jars</th>
            <th className="py-2 px-4 text-left">Jar Wt</th>
            <th className="py-2 px-4 text-left">Latex Wt</th>
            <th className="py-2 px-4 text-left">Film Wt</th>
            <th className="py-2 px-4 text-left">Drc %</th>
            <th className="py-2 px-4 text-left">Drc Qty</th>
            <th className="py-2 px-4 text-left">Mobile</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2 px-4"><input type='number' value={boneIdInput} onChange={handleInputChange} placeholder="Enter Bone ID" /></td>
            <td className="py-2 px-4"></td>
            <td className="py-2 px-4"></td>
            <td className="py-2 px-4"></td>
            <td className="py-2 px-4"></td>
            <td className="py-2 px-4"></td>
            <td className="py-2 px-4"></td>
            <td className="py-2 px-4"></td>
            <td className="py-2 px-4"></td>
            <td className="py-2 px-4"></td>
          </tr>
          {filteredUsers.map((user, index) => (
            <tr key={user.id} className={`border-b ${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}>
              <td className="py-2 px-4">{user.boneId}</td>
              <td className="py-2 px-4">{user.name}</td>
              <td className="py-2 px-4">{user.TotalWt}</td>
              <td className="py-2 px-4">{user.Jars}</td>
              <td className="py-2 px-4">{user.JarWt}</td>
              <td className="py-2 px-4">{user.LatexWt}</td>
              <td className="py-2 px-4">{user.FilmWt}</td>
              <td className="py-2 px-4">{user.DrcPer}</td>
              <td className="py-2 px-4">{user.DrcQty}</td>
              <td className="py-2 px-4">{user.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  </>
  )
}

export default TableLatex