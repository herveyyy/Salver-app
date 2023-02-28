import React from "react";

function DataTable() {
    return ( 
    
        <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Book name
              </th>
              <th scope="col" className="px-6 py-3">
                Borrowers Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email Address
              </th>
              <th scope="col" className="px-6 py-3">
                Contact Number
              </th>
              <th scope="col" className="px-6 py-3">
                <span></span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Bookers Book
              </th>
              <td className="px-6 py-4">
                Hervey Geralph C. Mapano
              </td>
              <td className="px-6 py-4">
                hmapano@askdlak.com
              </td>
              <td className="px-6 py-4">
                90909210390
              </td>
              <td className="px-6 py-4">
               <a className="text-red-800 hover:text-red-500 cursor-pointer">Delete</a>
              </td>
            </tr>
           
          </tbody>
        </table>
      </div> );
}

export default DataTable;