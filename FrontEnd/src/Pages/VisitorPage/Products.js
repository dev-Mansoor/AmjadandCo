import React, { useEffect, useState } from 'react'

import { CheckIcon } from '@heroicons/react/20/solid'



const Products =()=> {

  const [allProducts, setAllProducts] = useState([]);

  const getAllProducts = async () => {
      let res = await fetch('http://localhost:8000/getproducts')
      res = await res.json();
      setAllProducts(res);
  }

  useEffect(() => {
      getAllProducts();

  }, [])
  console.log(allProducts)
  return (
    <div className="bg-white py-24 sm:py-32 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-5xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#00004d] sm:text-4xl">Quality Prducts We Supply</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          As a premier general order supplier, we take pride in providing a comprehensive range of products and services to meet all your procurement needs. With an extensive network of trusted suppliers and manufacturers, we ensure that we source the best quality products at competitive prices. Our dedicated team strives to deliver exceptional customer service, ensuring prompt order fulfillment, reliable logistics, and personalized assistance throughout the entire procurement process. Whether you require office supplies, equipment, or any other goods, we are your trusted partner, committed to delivering the best solutions and exceeding your expectations every step of the way.
          </p>
        </div>
        {allProducts.map((x, ind) => {

return (

    <>
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-[#00004d]">{x.name}</h3>
          
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">Description</h4>
              <div className="h-px flex-auto bg-gray-100" />
            </div>
            <ul
              role="list"
              className="mt-8 text-sm leading-6 text-gray-600 "
            >
             {x.description}
            </ul>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-gray-50  text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-10">
              <div className="mx-auto max-w-xs  ">
               <img className='h-64' src={x.img} alt="Hardware Item" />
                
              </div>
            </div>
          </div>
        </div>
    </>
)
})}

        

      </div>

    </div>
  )
}


export default Products