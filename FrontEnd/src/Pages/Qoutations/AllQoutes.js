import React, { useEffect, useState } from 'react'

const AllQoutes = () => {
const [Qoutes, setQoutes] = useState([]);

    const getQoutations = async () => {
      let res = await fetch('http://localhost:8000/getQoutes')
      res = await res.json();
      setQoutes(res);
    }


  useEffect(() => {
    getQoutations();
  },[])

  console.log(Qoutes)

  return (
    <div>
        
<div className="relative overflow-x-auto shadow-md sm:rounded-lg m-5">
  <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" className="px-6 py-3">
          Q No.
        </th>
        <th scope="col" className="px-6 py-3">
          Description / MS
        </th>
        <th scope="col" className="px-6 py-3">
          Date
        </th>
        <th scope="col" className="px-6 py-3">
          Status
        </th>
       
      </tr>
    </thead>
    <tbody>
      {Qoutes.map((x)=>{
        return (
            <>
            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
             {x.Qno}
            </th>
            <td className="px-6 py-4">
            {x.Ms}
            </td>
            <td className="px-6 py-4">
            {x.Date}
            </td>
            <td className="px-6 py-4">
            Ok
            </td>
            
          </tr>
            </>
        )
      })}
     
      
    </tbody>
  </table>
</div>

    </div>
  )
}

export default AllQoutes