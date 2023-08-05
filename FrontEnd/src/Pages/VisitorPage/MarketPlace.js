import React from "react"
import Clients from "../../Components/Clients"

const MarketPlace= ()=> {
    return (
     <div className="mt-24">
      <Clients />
<div className="flex flex-col justify-center items-center mt-10 h-screen">  
  <div className="relative flex flex-col items-center rounded-[20px] w-3/4 max-w-[95%] mx-auto bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:!shadow-none p-3">
    <div className="mt-2 mb-8 w-full">
      <h4 className="px-2 text-3xl text-center font-bold text-navy-700 dark:text-white">
        List of Our Major Clients
      </h4>
      
    </div> 
    <div className="grid grid-cols-2 gap-4 px-2 w-full">
      <div className="flex flex-col items-start justify-center rounded-2xl bg-gray-200 bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
        
        <p className="text-base font-medium text-navy-700 dark:text-white">
        WAPDA 
        </p>
        <p className="text-sm text-gray-600gu">
        (Mangla Dam, Tarbela Dam, WAPDA House, WAPDA Sunny view. 
          All over Pakistan Electricity Area Boards)
          </p>
      </div>
      <div className="flex flex-col justify-center rounded-2xl bg-gray-200 bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
       
        <p className="text-base font-medium text-navy-700 dark:text-white">
        Civil Services Academy, Walton (CSA)
        </p>
      </div>
      <div className="flex flex-col items-start justify-center rounded-2xl bg-gray-200 bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
      
        <p className="text-base font-medium text-navy-700 dark:text-white">
        Virtual University
        </p>
      </div>
      <div className="flex flex-col justify-center rounded-2xl bg-gray-200 bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
    
        <p className="text-base font-medium text-navy-700 dark:text-white">
        Nespak
        </p>
      </div>
      <div className="flex flex-col items-start justify-center rounded-2xl bg-gray-200 bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
        <p className="text-base font-medium text-navy-700 dark:text-white">
        Air Blue Airlines
        </p>
      </div>
      <div className="flex flex-col justify-center rounded-2xl bg-gray-200 bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
        <p className="text-base font-medium text-navy-700 dark:text-white">
        Post Graduate College of Nursing, Lahore (PGCN)
        </p>
      </div>
      <div className="flex flex-col justify-center rounded-2xl bg-gray-200 bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
        <p className="text-base font-medium text-navy-700 dark:text-white">
        Lahore College for Women University (LCWU)
        </p>
      </div>
      <div className="flex flex-col justify-center rounded-2xl bg-gray-200 bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
        <p className="text-base font-medium text-navy-700 dark:text-white">
        Punjab University
        </p>
      </div>
      <div className="flex flex-col justify-center rounded-2xl bg-gray-200 bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
        <p className="text-base font-medium text-navy-700 dark:text-white">
        COMSATS Institute of Information Technology
        </p>
      </div>
      <div className="flex flex-col justify-center rounded-2xl bg-gray-200 bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
        <p className="text-base font-medium text-navy-700 dark:text-white">
        Pakistan Institute of Fashion & Design

        </p>
      </div>
      <div className="flex flex-col justify-center rounded-2xl bg-gray-200 bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
        <p className="text-base font-medium text-navy-700 dark:text-white">
        Lahore Museum
        </p>
      </div>
    </div>
  </div>  
 </div>


     </div> 
    )
  }
  
export default MarketPlace