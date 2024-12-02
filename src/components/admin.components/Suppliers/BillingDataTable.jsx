import React, { useState } from 'react'
import { Axios } from '../../../MainRoute'
import { useParams } from 'react-router-dom';
import { CloudDone } from '@mui/icons-material';

const BillingDataTable = () => {

    const { supplierId } = useParams();
    const [data, setData] = useState([])

    useState(() => {
        const getData = async () => {
            try {
                const response = await Axios.get(`/admin/suppliers/billing?supplierId=${supplierId}`)
                const { data } = response.data
                setData(data)
            } catch (error) {
                console.log(error)
            }
        }
        getData()
    }, [])
    console.log(data);
    return (
        <div >
            <table className=" w-full text-center">
                <thead>
                    <tr className="bg-gray-800 text-white">
                        <th className="border border-white">SL No</th>
                        <th className="border border-white">Date</th>
                        <th className="border border-white">Net Weight</th>
                        <th className="border border-white">DRC %</th>
                        <th className="border border-white">DRC Weight</th>
                        <th className="border border-white">Rate</th>
                        <th className="border border-white">Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((data, index) => {
                        const amount = ((data.dryQuantity || 0) * (data.rate || 0)).toFixed(2);
                        return (
                            <tr className='' key={index}>
                                <td className="border border-black">{index + 1}</td>
                                <td className="border border-black">{new Date(data.date).toLocaleDateString('en-GB')}</td>
                                <td className="border border-black">{data.wetWeight}</td>
                                <td className="border border-black">{data.drcPercentage}</td>
                                <td className="border border-black">{data.dryQuantity}</td>
                                <td className="border border-black">{data.rate}</td>
                                <td className="border border-black">{amount}</td>
                            </tr>
                        );  
                    })}
                </tbody>
            </table>
        </div>
    )
}
export default BillingDataTable