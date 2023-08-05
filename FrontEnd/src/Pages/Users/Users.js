import React from 'react'
import { useNavigate,Link, Outlet,} from 'react-router-dom'
import NewUser from './NewUser';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import UpdateUser from './UpdateUser';


const Users = () => {
    const navigate = useNavigate();

    
  return (
    <div className='w-full'>
        <div className=" bg-white shadow h-20 w-full flex items-center ">
          <div className="w-[90%] mx-auto  px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900"><Link to={'allusers'}>All Users</Link></h1>
          </div>

            <div className='flex-end me-5 '>
           <button 
                onClick={()=>navigate('adduser')}  className='bg-blue-500 rounded  py-2 px-2 text-white hover:bg-blue-700'>Add New</button>
           </div>
        </div>

        <Outlet />
        
    </div>

    
  )
}


export default Users