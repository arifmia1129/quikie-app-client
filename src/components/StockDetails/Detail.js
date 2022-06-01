import React, { useEffect, useState } from 'react';
import { GoPrimitiveDot } from 'react-icons/go';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useSavedStock from '../hooks/useSavedStock';
const Detail = ({ stock }) => {
    const { name, symbol, market_cap, current_price, id } = stock; const [savedStatus, setSavedStatus] = useState(false);
    const [savedStock, isLoading, refetch] = useSavedStock();
    const navigate = useNavigate();
    useEffect(() => {
        savedStock?.forEach(s => {
            if (s.id === id) {
                setSavedStatus(true);
            }
        })
    }, [id, savedStock])
    const handleSaved = () => {
        fetch("http://localhost:5000/stock", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(stock)
        })
            .then(res => res.json())
            .then(result => {
                if (result.acknowledged && result.insertedId) {
                    toast.success("Data saved success!");
                    refetch();
                }
            })

    }
    return (
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">

            <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                {name}
            </th>
            <td class="px-6 py-4 m-0">
                <div class="flex justify-center items-center bg-[#e6e6f3] p-1 m-0 w-16 mx-auto rounded-xl text-[#4A4AFF]">
                    <p>
                        <GoPrimitiveDot />
                    </p>
                    <p className='ml-1'>
                        {symbol}
                    </p>
                </div>
            </td>
            <td class="px-6 py-4">
                {market_cap}
            </td>
            <td class="px-6 py-4">
                {
                    savedStatus ? <button onClick={() => navigate("/view")} className='bg-[#6D5BD0] w-[99px] h-[40px] rounded-lg text-white'>View</button> : <button onClick={handleSaved} className='bg-[#18A0FB] w-[130px] h-[40px] rounded-lg text-white'>Save Data</button>
                }
            </td>
            <td class="px-6 py-4">
                ${current_price}
                <br />
                USD
            </td>
        </tr>
    );
};

export default Detail;