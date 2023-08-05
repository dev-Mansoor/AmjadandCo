import React from 'react'
import DashboardComps from '../Components/DashboardComps'

const Dashboard = () => {
  return (
    <>
    <div className='w-full'>
      <div className=" bg-white  h-20 w-full">
          <div className="mx-auto w-full px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
          </div>
        </div>
          <DashboardComps />
      </div>
    </>
  )
}

export default Dashboard