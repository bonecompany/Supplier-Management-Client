import { Phone } from '@mui/icons-material';
import React, { useState } from 'react';
import TableLatex from './TableLatex';
import { Axios } from '../../MainRoute';

const SupplierData = [
  {
    id: 1,
    name: "Rajan Raju",
    boneId: 213,
    TotalWt: 10,
    Jars: 2,
    JarWt: 4.80,
    LatexWt: 200.20,
    FilmWt: 0.00,
    DrcPer: 0.00,
    DrcQty: 0.00,
    phone: "9063214556",
    status: "Approved",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    id: 2,
    name: "Unias Ubaid",
    boneId: 214,
    TotalWt: 11.5,
    Jars: 1,
    JarWt: 5.80,
    LatexWt: 22.10,
    FilmWt: 0.00,
    DrcPer: 0.00,
    DrcQty: 0.00,
    phone: "8563235456",
    status: "Approved",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 3,
    name: "Jabar Kareem",
    boneId: 467,
    TotalWt: 555.00,
    Jars: 3,
    JarWt: 8.5,
    LatexWt: 552.60,
    FilmWt: 0.00,
    DrcPer: 0.00,
    DrcQty: 0.00,
    phone: "7563677766",
    status: "Pending",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    id: 4,
    name: "Jaison Jobby",
    boneId: 4677428,
    TotalWt: 20.50,
    Jars: 1,
    JarWt: 3.70,
    LatexWt: 4.20,
    FilmWt: 0.00,
    DrcPer: 0.00,
    DrcQty: 0.00,
    phone: "9963214346",
    status: "Approved",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    id: 5,
    name: "Chacko Jackson",
    boneId: 4677429,
    TotalWt: 88.05,
    Jars: 2,
    JarWt: 2.10,
    LatexWt: 5.20,
    FilmWt: 0.00,
    DrcPer: 0.00,
    DrcQty: 0.00,
    phone: "7563277888",
    status: "Approved",
    avatar: "https://randomuser.me/api/portraits/women/5.jpg",
  },
];

function FormLLatex() {
  const [boneId, setBoneId] = useState('');
  const [selectedSupplier, setSelectedSupplier] = useState();
  const [jar,setJar] = useState('')

  const handleBoneIdChange = (event) => {
    const enteredBoneId = event.target.value;
    setBoneId(enteredBoneId);

    // Find supplier by boneId
    const supplier = SupplierData.find(
      (supplier) => supplier.boneId.toString() === enteredBoneId
    );
    setSelectedSupplier(supplier);
    setJar(supplier.Jars)
  };


// const getLatex = async ()=> {

//   const response = await Axios.get("")
// }



  const handleClose = () => {
    setSelectedSupplier(null);
    setBoneId('');
  };

  return (
    <>
      
      <div className="max-w-sm mx-auto my-5">
        <div className="flex">
          <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
            </svg>
          </span>
          <input
            type="text"
            id="website-admin"
            className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter Bone ID"
            value={boneId}
            onChange={handleBoneIdChange}
          />
        </div>
      </div>

      {selectedSupplier && (
        <div className=" bg-gradient-to-b from-[#38505f] to-[#0c1c23] shadow-lg rounded-lg overflow-hidden mx-36  flex flex-col md:flex-row w-fit  max-w-3xl xl:max-w-7xl">
                    <button
            className="absolute top-2 right-2  font-bold"
            onClick={handleClose}
          >
            &times;
          </button>
        <div className=" bg-gradient-to-b from-[#0c1c23] to-[#38505f]  text-white p-8 md:w-1/3 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-4">Supplier Data</h2>
            <p className="text-sm ">
            Bone ID: {selectedSupplier.boneId}
            </p>
            <p className="text-lg mb-5 ">
            {selectedSupplier.name}
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                
              <span>Total Wt: <span class="font-semibold">{selectedSupplier.TotalWt}</span></span>
              </div>
              <div className="flex items-center gap-5">
              <span>Jars: <span class="font-semibold">{selectedSupplier.Jars}</span></span>
              <span>Jar Wt: <span class="font-semibold">{selectedSupplier.JarWt}</span></span>
              </div>
              <div className="flex items-center gap-5">
              <span>Latex Wt: <span class="font-semibold">{selectedSupplier.LatexWt}</span></span>
              <span>Film Wt: <span class="font-semibold">{selectedSupplier.FilmWt}</span></span>
              </div>
              <div className="flex items-center gap-5">
              <span>Drc %: <span class="font-semibold">{selectedSupplier.DrcPer}</span></span>
              <span>Drc Qt: <span class="font-semibold">{selectedSupplier.DrcQty}</span></span>
              </div>
              <div className="flex items-center gap-2">
                < Phone/>
                <span>{selectedSupplier.phone}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="p-8 md:w-2/3 text-white">
          <h2 className="text-2xl font-bold mb-6">Update Data</h2>
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className='flex items-center gap-3'>
                <span className=" text-sm font-medium ">
                  Full Name:-  
                </span>
                <span class="font-semibold text-lg">{selectedSupplier.name}</span>
         
              </div>
              <div className='flex items-center gap-2 '>
                <label className=" text-sm font-medium ">
                  Total Wt:-
                </label>
                <input
                  type="number"
                  className="mt-1 w-20% px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                  value={selectedSupplier.TotalWt}
                />
              </div>
            </div>
            <div className="mb-4 flex items-center justify-between gap-3">
              <span>
              <label className="block text-sm font-medium ">
                Jars
              </label>
              <input
                type="number"
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                value={jar}
              />
              </span>
              <span>
              <label className="block text-sm font-medium ">
                Jar Wt
              </label>
              <input
                type="number"
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                value={selectedSupplier.JarWt}
              />
              </span>
              <span>
              <label className="block text-sm font-medium ">
                Latex Wt
              </label>
              <input
                type="number"
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                value={selectedSupplier.LatexWt}
              />
              </span>
            </div>
            <div className="mb-4 flex items-center justify-between gap-3">
            <span>
              <label className="block text-sm font-medium ">
                Film Wt
              </label>
              <input
                type="number"
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                value={selectedSupplier.FilmWt}
              />
              </span>
              <span>
              <label className="block text-sm font-medium ">
                Drc %
              </label>
              <input
                type="number"
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                value={selectedSupplier.DrcPer}
              />
              </span>
              <span>
              <label className="block text-sm font-medium ">
                Drc Qty
              </label>
              <input
                type="number"
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                value={selectedSupplier.DrcQty}
              />
              </span>
            </div>
            {/* <div className='flex items-center gap-2 mb-5'>
                <label className=" text-sm font-medium ">
                  Phone:-
                </label>
                <input
                  type="number"
                  className="mt-1 w-20% px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                  
                />
              </div> */}
            <button
              type="submit"
              className="w-full bg-[#38505f]  text-white font-bold py-2 px-4 rounded-md hover:bg-[#1b4151] duration-300 focus:outline-none focus:ring-2 focus:ring-[#0c1c23] focus:ring-opacity-50"
            >
              update
            </button>
          </form>
        </div>
      </div>
      )}
  
    </>
  );
}

export default FormLLatex;
