import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Entries from './Components/Entries';
import QoutePage from './Components/QoutePage';



const NewQoute = () => {
    const navigate = useNavigate();
    const QouteData = {
        Sr: '',
        Description: '',
        Qty: '',
        Unit: '',
        UnitRate: '',
        Amount: '',
    }

    const [Qno, setQouteNo] = useState();
    const [Date, setDate] = useState();
    const [Ms, setMs] = useState();

    const [Sr, setSr] = useState();
    const [Description, setDescription] = useState();
    const [Qty, setQty] = useState();
    const [Unit, setUnit] = useState();
    const [UnitRate, setUnitRate] = useState();
    const [Amount, setAmount] = useState();

    
    const [uprData, setUprData] = useState();
    const [AllData, setAllData] = useState([]);
    const [Data, setData] = useState(QouteData);
    let totalAmount = 0;

    const addToTable = (e) => {
        e.preventDefault();

        let Rate = parseInt(Amount)
        let Qtty = parseInt(Qty)
        let amount = parseInt(Amount)
         totalAmount = Qtty * Rate;

        setData({Sr, Description, Qty : Qtty, Unit, UnitRate : Rate, Amount: amount})
        setAllData([...AllData, Data])
        
        console.log( amount, AllData)
        // console.log(allData)
    }
    console.log(totalAmount)

    console.log()
    const handleInput = (event) => {
        const { name, value } = event.target;
        
        //updating the data using hook
        setData({ ...Data, [name]: value });
        // console.log(Data);
    }
     

    const AddQoutation= async()=>{
        
       let data= await fetch('http://localhost:8000/addQoute', {
        mode:'cors',
        method: "POST",
        body: JSON.stringify({Qno, Date, Ms, Data : AllData}),
        headers: {
            "Content-Type": "application/json",
          }  
        })

        data = await data.json();
        navigate('/admin/qoutations')
        console.log("Qoutation Saved Successfully!")
    }



    return (
        <div className='w-[80%]'>


            <div className=" bg-white  h-20 w-full flex items-center ">
              
                <div className='flex-end me-5 '>
                    <button
                        onClick={()=>AddQoutation()} className='bg-blue-500 rounded  py-2 px-2 text-white hover:bg-blue-700'>Save Record</button>
                </div>
            </div>

            {/* <Entries addData = {addData}/> */}
            <div className=''>
                <div className='w-auto  container p-5 m-5'>
                    <h1 className='text-center text-2xl font-bold text-blue-500'>New Qoutation</h1>
                    <form >

                        <div>
                            <div className='w-full flex items-center justify-between'>
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                                        Q No:
                                    </label>
                                    <div className="mt-2">
                                        <input

                                            onChange={(e) => setQouteNo(e.target.value)}
                                            value={Qno}
                                            id="name"
                                            name="name"
                                            type="number"
                                            autoComplete="name"
                                            required
                                            className="block  rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                                        Date:
                                    </label>
                                    <div className="mt-2">
                                        <input

                                            onChange={(e) => setDate(e.target.value)}
                                            value={Date}
                                            id="name"
                                            name="name"
                                            type="date"
                                            autoComplete="name"
                                            required
                                            className="block  rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                            </div>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                                    Messer:
                                </label>
                                <div className="mt-2">
                                    <input

                                        onChange={(e) => setMs(e.target.value)}
                                        value={Ms}
                                        id="name"
                                        name="name"
                                        type="text"
                                        autoComplete="name"
                                        required
                                        className="block w-3/4 rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='mt-7 container'>
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
                                        <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                <input

                                                    onChange={(e) => setSr(e.target.value)}
                                                    value={Sr}
                                                    id="Sr"
                                                    name="Sr"
                                                    type="text"
                                                    autoComplete="Sr"
                                                    required
                                                    className="w-14 px-3 py-1 "
                                                />
                                            </th>
                                            <td className="px-6 py-4">
                                                <input

                                                    onChange={(e) => setDescription(e.target.value)}
                                                    value={Description}
                                                    id="Description"
                                                    name="Description"
                                                    type="text"
                                                    autoComplete="Description"
                                                    required
                                                    className="w-auto px-3 py-1 "
                                                />
                                            </td>
                                            <td className="px-6 py-4">
                                                <input

                                                    onChange={(e) => setQty(e.target.value)}
                                                    value={Qty}
                                                    id="Qty"
                                                    name="Qty"
                                                    type="text"
                                                    autoComplete="Qty"
                                                    required
                                                    className="w-auto px-3 py-1 "
                                                />
                                            </td>
                                            <td className="px-6 py-4">
                                                <input

                                                    onChange={(e) => setUnit(e.target.value)}
                                                    value={Unit}
                                                    id="Unit"
                                                    name="Unit"
                                                    type="text"
                                                    autoComplete="Unit"
                                                    required
                                                    className="w-auto px-3 py-1 "
                                                />
                                            </td>
                                            <td className="px-6 py-4">
                                                <input

                                                    onChange={(e) => setUnitRate(e.target.value)}
                                                    value={UnitRate}
                                                    id="UnitRate"
                                                    name="UnitRate"
                                                    type="text"
                                                    autoComplete="UnitRate"
                                                    required
                                                    className="w-auto px-3 py-1 "
                                                />
                                            </td>
                                            <td className="px-6 py-4"> <input

                                                onChange={(e) => setAmount(e.target.value)}
                                                value={Amount}
                                                id="Amount"
                                                name="Amount"
                                                type="text"
                                                autoComplete="Amount"
                                                required
                                                className="w-auto px-3 py-1 "
                                            />
                                            </td>
                                        </tr>
                                    </tbody>

                                </table>
                            </div>
                            <div>
                                <button onClick={addToTable}
                                    className="m-5 flex  justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Add Record to Table
                                </button>
                            </div>
                        </div>



                    </form>
                </div>

            </div>


            <div className='w-3/4 mb-5 mx-auto bg-gray-300 border-1 shadow-md container'>
                <h1 className='text-center text-3xl font-bold my-5 '> Qoutation</h1>
                <div className='px-10'>
                    <div className=' w-full flex items-center justify-between'>
                        <div className='flex'>
                            <h1 className="block text-sm font-medium leading-6 text-gray-900 me-2">
                                Q No:
                            </h1>
                            <p><u>{Qno}</u></p>
                        </div>

                        <div className='flex'>
                            <h1 className="block text-sm font-medium leading-6 text-gray-900 me-2">
                                Date:
                            </h1>
                            <p><u>{Date}</u></p>
                        </div>

                    </div >
                    <div className='flex mt-3' >
                        <h1 className="block text-sm font-medium leading-6 text-gray-900 me-2">
                            Messer:
                        </h1>
                        <p><u>{Ms}</u></p>
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
                                {
                                    AllData.map((data) => {
                                        return (
                                            <>
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
                                            </>
                                        )
                                    })
                                }

                            </tbody>

                        </table>

                    </div>
                    <div className='justify-end m-10'>
                        <h1 className='tetx-2xl font-bold '>
                            Regards,
                        </h1>
                        <br />
                        <br />
                        <h1 className='tetx-2xl font-bold '>Amjad & Co.</h1>
                    </div>
                </div>



            </div>
        </div>



    )
}

export default NewQoute