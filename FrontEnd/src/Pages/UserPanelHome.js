import React from 'react'
import Sidebar from '../Components/Sidebar1'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import Dashboard from './Dashboard'

const UserPanelHome = () => {
  return (
    <div>

        <main className='flex '>
        <Sidebar />
        <Outlet />
      </main>
      

 
  

    </div>
  )
}

export default UserPanelHome