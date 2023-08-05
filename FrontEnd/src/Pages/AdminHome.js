import React from 'react'
import { BrowserRouter as Router, Routes, Route, Outlet , Navigate} from 'react-router-dom'
import Sidebar from '../Components/Sidebar1'


const AdminHome = () => {
   let auth = localStorage.getItem('login')
   return (
      <>

     {auth? <div className='flex mt-24 '>
      <Sidebar />
     <Outlet />
     </div> : <Navigate to='/login' /> }

      </>
   )
}

export default AdminHome