import React from 'react';

const Detail = ({ stock }) => {
    const { name, symbol, market_cap, current_price } = stock;
    return (
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">

            <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                {name}
            </th>
            <td class="px-6 py-4">
                {symbol}
            </td>
            <td class="px-6 py-4">
                {market_cap}
            </td>
            <td class="px-6 py-4">
                btn
            </td>
            <td class="px-6 py-4">
                ${current_price}
            </td>
        </tr>
    );
};

export default Detail;