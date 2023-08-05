import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';



const ClientContacts = () => {
  
 const navigate = useNavigate()
    // Getting USer data from Backend
    const [allContacts, setAllContacts] = useState([]);

    const getAllContacts = async () => {
        let res = await fetch('http://localhost:8000/getcontacts')
        res = await res.json();
        setAllContacts(res);
    }

    useEffect(() => {
        getAllContacts();

    }, [])

   


    return (
        <>

<div className='w-3/4'>
            <div className='container py-5 px-16 '>

                <div className="relative overflow-x-auto shadow-md sm:rounded-lg ">
                <div className='bg-gray-500 p-3 w-full'>
                    <h1 className='text-center font-bold text-lg text-white'>All Contact Data</h1>
                     </div>
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr><th></th> </tr>
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Sr No.
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                   Phone Number
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Email
                                </th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {allContacts.map((x, ind) => {

                                return (

                                    <>
                                        <tr key={ind} className="bg-white dark:bg-gray-800">

                                            <td className="px-6 py-4">
                                                {ind + 1}
                                            </td>
                                            <td className="px-6 py-4">
                                                {x.name}
                                            </td>
                                            <td className="px-6 py-4">
                                                {x.phone}
                                            </td>
                                            <td  className="px-6 py-4">
                                            {x.email}
                                            </td>
                                            {/* <td className="px-6 py-4">
                                                <button onClick={() => navigate(`updateproducts/${x._id}`)} className='text-blue-500'>  <i className="fas fa-edit mx-3 text-blue"></i></button>
                                                <button onClick={() => deleteProduct(x._id)} className='text-red-500'>  <i className="fa fa-remove mx-3"></i></button>
                                            </td> */}
                                        </tr>

                                    </>
                                )
                            })}


                        </tbody>
                    </table>
                </div>
            </div>
            </div>

        </>

    
  )
}

export default ClientContacts