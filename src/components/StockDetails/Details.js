import React, { useEffect, useState } from 'react';
import Detail from './Detail';
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

const Details = () => {
    const [fullStocks, setFullStocks] = useState([]);
    const [stocks, setStocks] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [searchText, setSearchText] = useState("");
    const [searchStocks, setSearchStocks] = useState(null);
    useEffect(() => {
        fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false")
            .then(res => res.json())
            .then(data => {
                setFullStocks(data);
                const totalPage = Math.ceil(data.length / 5);
                if (totalPage > currentPage) {
                    setStocks(data.slice(currentPage * 5, (5 * (currentPage + 1))));
                }
                else {
                    setCurrentPage(0);
                }
            })
    }, [currentPage])

    useEffect(() => {
        const searched = fullStocks.filter(s => s.name.toLowerCase().includes(searchText.toLowerCase()));
        setSearchStocks(searched);
    }, [searchText, fullStocks])


    const handleIncreasePage = () => {
        setCurrentPage(currentPage + 1);
    }
    const handleDecreasePage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    }
    return (
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg max-w-6xl mx-auto my-10 border">
            <div class="p-4 flex justify-start items-center">
                <p className='font-semibold mr-10'>Stock Details Table</p>
                <label for="table-search" class="sr-only">Search</label>
                <div class="relative mt-1">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                    </div>
                    <input onChange={e => setSearchText(e?.target?.value)} type="text" id="table-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search by name" />
                </div>
            </div>
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
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
                        (searchText ? searchStocks : stocks)?.map(stock => <Detail
                            key={stock.id}
                            stock={stock}
                        />)
                    }
                </tbody>

            </table>
            {
                !searchText && <div className='px-5'>
                    <div className='flex justify-end items-center'>
                        <div class="px-6 py-4">{(currentPage * 5) + 1}-{5 * (currentPage + 1)} of {fullStocks?.length}</div>
                        <div>
                            <div className='flex items-center'>
                                <button className='pr-10' onClick={handleDecreasePage}>
                                    <MdOutlineKeyboardArrowLeft />
                                </button>
                                <button onClick={handleIncreasePage}>
                                    <MdOutlineKeyboardArrowRight />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default Details;