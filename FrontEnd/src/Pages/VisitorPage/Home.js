import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import SecurityIcon from '@mui/icons-material/Security';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import HighQualityIcon from '@mui/icons-material/HighQuality';
import Clients from '../../Components/Clients';

const features = [
  
  {
    name: 'Competetive Prices',
    description:
      '',
    icon: LocalAtmIcon ,
  },
  {
    name: 'High Quality',
    description:
      '',
    icon: HighQualityIcon ,
  },
  {
    name: 'Secure Deleviry',
    description:
      '',
    icon: SecurityIcon ,
  },
  {
    name: 'On Time Delivery',
    description:
      '',
    icon: AccessTimeIcon ,
  },
  
]





const VisitorHome = () => {

  return (

    <>
<div className="mx-auto max-w-2xl px-10 py-32 sm:py-48 lg:py-32">
<div className="hidden sm:mt-8 sm:flex ">
  <div className=" relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
    
    <a href="#" className="font-semibold text-indigo-600">
      <span className="absolute inset-0" aria-hidden="true" />
      We are 
    </a>
  </div>
</div>
<div className="text-center">
  <h1 className="text-4xl font-bold tracking-tight text-[#00004d] sm:text-6xl">
    General Order Suppliers
  </h1>
  <p className="mt-6 text-lg leading-8 text-gray-600">
  Quality is our utmost priority. We take pride in supplying our customers with top-notch products that meet and exceed their expectations. From the selection of trusted manufacturers to rigorous quality control processes, we ensure that every item we supply is built to last and perform at its best.  
          
  </p>
  <div className="mt-10 flex items-center justify-center gap-x-6">
    <Link
      to={'/contact'}
      className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      Contact Us
    </Link>
    <Link to={'/products'} className="text-sm font-semibold leading-6 text-gray-900">
      Products <span aria-hidden="true">→</span>
    </Link>
  </div>
</div>
</div>

<div className='h-screen bg-[#00004d] py-7 ' >

  <div className=' p-5 mx-auto max-w-5xl'>
    <h1 className='font-bold text-4xl tracking-tight text-center text-gray-300'>About Us</h1>
    <div className='px-10 py-5'>
    <p className=' text-center text-md text-gray-200'>We are a leading general order supply firm dedicated to delivering high-quality products and exceptional service to businesses, organizations, and individuals. With a focus on customer satisfaction, we offer a wide range of supplies sourced from trusted manufacturers. Our streamlined operations and efficient logistics ensure timely delivery and reliable service. Committed to sustainability, we prioritize eco-friendly practices and responsible sourcing. Trust us as your reliable partner for all your supply needs. </p>
    </div>
   </div>
  
  <div className='my-5 mx-10 p-5  flex'>
          <div className="mx-3 max-w-sm rounded-lg border-2 overflow-hidden shadow-lg ">
             <div className="px-6 py-5">
              <div className="font-bold text-xl mb-2 text-center text-gray-300">Our Mission</div>
              <p className="text-gray-200 text-base ">
              Our mission is to be the premier provider of general order supplies, delivering exceptional value, reliability, and service while upholding the highest standards of quality, sustainability, and social responsibility.
              </p>
            </div>
          </div>

          <div className="mx-3 max-w-sm rounded-lg border-2 overflow-hidden shadow-lg ">
            <div className="px-6 py-5">
              <div className="font-bold text-xl mb-2 text-gray-300 text-center">Our Vision</div>
              <p className="text-gray-200 text-base">
              Our vision is to be the industry leader in general order supply, setting new standards for quality, innovation, and customer satisfaction.
              </p>
            </div>
          </div>

          <div className="mx-3 max-w-sm rounded-lg border-2 overflow-hidden shadow-lg ">
            <div className="px-6 py-5 ">
              <div className="font-bold text-xl mb-2 text-gray-300 text-center">Our Goal</div>
              <p className="text-gray-200 text-base">
              Our goal is to be the trusted and preferred provider of general order supplies, delivering exceptional quality and service to our customers.
              </p>
            </div>
          </div>


</div>

</div>

<div className="conatiner mt-5 mx-10 py-5 sm:py-10 rounded-xl border-gray-800 bg-transparent border-md shadow-lg ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className=" max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Why Us?</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-[#00004d] sm:text-4xl">
            Everything you need is here
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We Provide as wide range of Products and services with the highest rating amoung the competitors. 
          </p>
        </div>
        <div className=" mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative  pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>




<Clients />



      
    </>


  )
}

export default VisitorHome