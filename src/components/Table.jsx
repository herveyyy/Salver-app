
import React, { useState, useEffect } from 'react';
import {
  getDocs,
  collection,
  doc,
  setDoc,
  deleteDoc
} from 'firebase/firestore';
import { database } from '../../firebaseConfig';
const databaseReference = collection(database, 'SoftwareEngineers');
function DataTable() {
  const [fireData, setFireData] = useState([]);
  const getData = async () => {
    await getDocs(databaseReference)
    .then((response) => {
        setFireData(response.docs.map((data) => {
            return {...data.data(), id: data.id}
        }))
    })
}

    return ( 
    
        <div ref={getData} className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
           
              <th scope="col" className="px-6 py-3">
                Engineers Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email Address
              </th>
              <th scope="col" className="px-6 py-3">
                Skills
              </th>
              <th scope="col" className="px-6 py-3">
                <span></span>
              </th>
            </tr>
          </thead>
          <tbody>
          {fireData.map((data) => {
  return (
    <tr key={data.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {data.engineerName}
      </th>
      <td className="px-6 py-4">{data.emailAddress}</td>
      <td className="px-6 py-4">
        <ul className="list-disc list-inside">
          {data.skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </td>
      <td className="px-6 py-4">
        <a className="text-red-800 hover:text-red-500 cursor-pointer">Delete</a>
      </td>
    </tr>
  );
})}
          </tbody>
        </table>
        
      </div> );
}

export default DataTable;