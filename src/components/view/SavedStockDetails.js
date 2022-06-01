import React from 'react';
import useSavedStock from "../hooks/useSavedStock";

const SavedStockDetails = () => {
    const [savedStock, isLoading, refetch] = useSavedStock();
    if (isLoading) {

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

                </tbody>

            </table>
        </div>
    );
};

export default SavedStockDetails;