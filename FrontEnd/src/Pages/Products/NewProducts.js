import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const NewProducts = () => {
    const navigate = useNavigate();
    const [name, setName] = useState();
    const [description, setDescription] = useState();
    const [img, setImg] = useState();


    const addProduct= async(e)=>{
        e.preventDefault();
       let data= await fetch('http://localhost:8000/addproducts', {
        mode:'cors',
        method: "POST",
        body: JSON.stringify({name, description, img}),
        headers: {
            "Content-Type": "application/json",
          }  
        })

        data = await data.json();
        navigate('/admin/productsadmin')
    }
   
    return (
        < >

<div className="flex  flex-1 flex-col justify-center px-6 py-2 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-indigo-600">
           Add New Product
          </h2>
        </div>

        <div className="mt-7 sm:mx-auto  sm:w-full flex items-center justify-between px-7">
          
          <div>
              <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                Name
              </label>
              <div className="mt-2">
                <input
                
                onChange={(e)=>setName(e.target.value)} 
                value={name}
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
          </div>
            <div>
              <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
              Description
              </label>
              <div className="mt-2">
                <input
                onChange={(e)=>setDescription(e.target.value)} 
                value={description}
                  id="description"
                  name="description"
                  type="text"
                  autoComplete="description"
                  required
                  className="block overflow-hidden w-auto rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="img" className="block text-sm font-medium leading-6 text-gray-900">
                  Image
                </label>
               
              </div>
              <div className="mt-2">
                <input
                onChange={(e)=>setImg(e.target.value)} 
                value={img}
                  id="img"
                  name="img"
                  type="text"
                  autoComplete="img"
                  required
                  className="block w-full rounded-md border-0  px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

           
         
        </div>
        <div className='flex items-center justify-center'>
              <button onClick={addProduct}
                className="flex w-1/4  my-10 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
               Add Product
              </button>
            </div>
      </div>


        </>
    )
}

export default NewProducts