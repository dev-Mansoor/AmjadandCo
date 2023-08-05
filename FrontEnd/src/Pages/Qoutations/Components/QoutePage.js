import React from 'react'

const QoutePage = (props) => {
    
    return (
        <>
            <div className='w-3/4 mb-5 mx-auto border-1 shadow-md container'>
            <h1 className='text-center text-3xl font-bold my-5 '> Qoutation</h1>
            <div className='px-10'>
                                <div className=' w-full flex items-center justify-between'>
                                    <div className='flex'>
                                        <h1 className="block text-sm font-medium leading-6 text-gray-900 me-2">
                                            Q No:
                                        </h1>
                                       <p><u>{props.Qno}</u></p>
                                    </div>

                                    <div className='flex'>
                                        <h1 className="block text-sm font-medium leading-6 text-gray-900 me-2">
                                            Date:
                                        </h1>
                                       <p><u>{props.Date}</u></p>
                                    </div>

                                </div >
                                <div className='flex mt-3' >
                                        <h1 className="block text-sm font-medium leading-6 text-gray-900 me-2">
                                            Messer:
                                        </h1>
                                       <p><u>{props.Ms}</u></p>
                                    </div>
                            </div>
                <div className='p-3 mt-2 container'>
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg ">
                        <table className="w-full table-auto p-5 text-sm text-left text-gray-500 dark:text-gray-400" >
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Sr
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Description
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Qty
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Unit
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Unit Rate
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Amount
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                {props.allData.map((data) => {
                                        return(
                                            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                {data.Sr}
                                            </th>
                                            <td className="px-6 py-4">
                                            {data.Description}
                                            </td>
                                            <td className="px-6 py-4">
                                            {data.Qty}
                                            </td>
                                            <td className="px-6 py-4">
                                            {data.Unit}
                                            </td>
                                            <td className="px-6 py-4">
                                            {data.UnitRate}
                                            </td>
                                            <td className="px-6 py-4">
                                            {data.Amount}
                                            </td>
                                        </tr> 
                                        )
                                })
                            }
                                
                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default QoutePage