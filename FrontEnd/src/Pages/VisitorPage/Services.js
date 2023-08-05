import React from 'react'
import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'

const services = [
  {
    name: 'General Contrator',
  },
  {
    name: 'Manufactureres',
  },
  {
    name: 'General Order Supplier',
  },
  {
    name: 'Supply of HArdware and Electrical Items ',
  },
  {
    name: 'All Type of Office Furniture',
  },
  {
    name: 'Supply of Stationary ',
  },
  {
    name: 'Supply of  Sports and Gym Items',
  },
  {
    name: 'Supply of IT Equipments ',
  },
  {
    name: 'Supply of Chemicals ',
  },

]

const Services = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-5xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600"></h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Providing the Quality Services
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We pride ourselves on delivering top-notch services as a general order supplier. With a focus on quality and customer satisfaction, we strive to provide a seamless procurement experience. Our dedicated team ensures prompt communication, reliable sourcing, and efficient logistics, all tailored to meet your unique requirements. Trust us to streamline your procurement process and provide you with exceptional service every step of the way.
          </p>
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((x) => {
              return (
                <>
                  <div className="w-full bg-[#00004de0] shadow-lg rounded-lg p-12 flex flex-col justify-center items-center">
                    <div className="mb-8">
                     </div>
                    <div className="text-center">
                      <p className="text-xl text-gray-100 font-bold mb-2">{x.name}</p>
                     
                    </div>
                  </div>

                  
                </>

              )

            })}
          </div>
        </div>
      </div>


      



    </div>
  )
}


export default Services