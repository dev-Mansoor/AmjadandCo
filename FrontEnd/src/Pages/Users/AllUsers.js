import { Delete } from '@mui/icons-material';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';




const AllUsers = () => {
    const navigate = useNavigate()
    // Getting USer data from Backend
    const [usersData, setUsersdata] = useState([]);

    const getAllUsers = async () => {
        let res = await fetch('http://localhost:8000/getuser')
        res = await res.json();
        setUsersdata(res);
    }

    useEffect(() => {
        getAllUsers();

    }, [])

// Edit User

const editUser = (id) => {
    console.log(id)
}

    // Delete User from both sides
    const deleteUser = async (id) => {
        let del = await fetch(`http://localhost:8000/deleteuser/${id}`,{
            method: 'DELETE'
        })
        del = await del.json();
        
        if (del) {
            getAllUsers();
        } 

        alert('User deleted successfully');
    }


    return (
        <>
        
            <h1 className='text-center font-bold text-3xl text-blue-500 mt-5'>All Users</h1>

            <div className='container py-5 px-16 '>



                <div className="relative overflow-x-auto shadow-md sm:rounded-lg ">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Sr No.
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Username
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Password
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {usersData.map((x, ind) => {

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
                                                {x.username}
                                            </td>
                                            <td className="px-6 py-4">
                                                {x.password}
                                            </td>
                                            <td className="px-6 py-4">
                                                <button onClick={()=>navigate(`updateuser/${x._id}`)} className='text-blue-500'>  <i className="fas fa-edit mx-3 text-blue"></i></button>
                                                <button onClick={()=>deleteUser(x._id)} className='text-red-500'>  <i className="fa fa-remove mx-3"></i></button>
                                            </td>
                                        </tr>

                                    </>
                                )
                            })}


                        </tbody>
                    </table>
                </div>
</div>

                
        </>
    )
}

export default AllUsers