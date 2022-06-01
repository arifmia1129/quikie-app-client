import React from 'react';
import { useNavigate } from 'react-router-dom';
import useSavedStock from "../hooks/useSavedStock";
import Loading from '../shared/Loading';
import SavedStockDetail from './SavedStockDetail';

const SavedStockDetails = () => {
    const [savedStock, isLoading, refetch] = useSavedStock();
    const navigate = useNavigate();
    if (isLoading) {
        return <Loading />
    }
    return (
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg max-w-6xl mx-auto my-10 border">
            <div class="p-4 flex justify-start items-center">
                <p className='font-semibold mx-auto'>Saved Data Table</p>
            </div>
            <table class="w-full mx-auto text-center text-sm text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>

                        <th scope="col" class="px-6 py-3">
                            Company Name
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Symbol
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Market Cap
                        </th>
                        <th scope="col" class="px-6 py-3">
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Current Price
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        savedStock.map(stock => <SavedStockDetail
                            key={stock.id}
                            stock={stock}
                            refetch={refetch}
                        />)
                    }
                </tbody>
            </table>
            <div className='py-5 mx-auto flex justify-center items-center'>
                <button onClick={() => navigate(-1)} className='bg-[#6D5BD0] w-[99px] h-[40px] rounded-lg text-white'>Back</button>
            </div>
        </div>
    );
};

export default SavedStockDetails;