import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import Contact from '../Contact/Contact';

const Executives = [

  {
    name: 'Ch Muhammad Iqbal (late)',
    Designation:
      'CEO',

  },
  {
    name: 'Ch Muhammad Amjad',
    Designation:
      'Proproetor',

  },
  {
    name: 'Ch Tassaduq Hussain',
    Designation:
      'Managing Director',

  },

]

const Team = [

  {
    name: 'Muhammad Abubakar',
    Designation:
      'Admin & Finace Manager',

  },
  {
    name: 'Qazi Muhammad Ammar (LLM)',
    Designation:
      'Legal Advisor',

  },

  {
    name: 'Qazi Muhammad Mansoor',
    Designation:
      'IT Expert',

  },
  {
    name: 'SHeikh M Raheel',
    Designation:
      'Purchase Officer',

  },

]

const CompanyProfile = () => {
  return (
    <div className='mt-32'>
      {/* <div className='mx-10'>
        <h1 className='text-4xl text-blue-800 font-extrabold'>About Amjad & Co.</h1>
      </div> */}
{/* Date of Establishment */}
      <div className="mx-auto max-w-6xl px-6  mt-10 lg:px-8">
        <div className="bg-[#00004d] mx-auto py-7 mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="mx-auto max-w-5xl sm:text-center ">
            <h2 className="text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl uppercase">Date of Establishment</h2>
            <p className="mt-6 text-lg leading-8 text-gray-200">
              Amjad & Company is a <b>Sole Proprietorship.</b> Company is doing business as
              Government Contractors and General Order Suppliers since 1980.
              <b>Our firm is registered for Manufacturers, Traders, General Order Supplier &
                Importers.</b> <br />
              Our company is registered with both FBR (Income Tax and Sales Tax Department)
              and Pakistan Engineering Council (PEC). We are already registered/pre-qualified
              with WAPDA, Pakistan Institute of Fashion & Design (PIFD) and Lahore Museum.
            </p>
          </div>
        </div>
      </div>
{/* Team */}
      <div className="mx-auto max-w-7xl px-6  mt-16 lg:px-8">
        <div className="mx-auto max-w-5xl sm:text-center ">
          <h2 className="text-3xl font-bold tracking-tight text-[#262674] sm:text-4xl">PERSONNEL & CAPABILITIES</h2>
          <div className="section relative pt-16  md:pt-16 bg-white dark:bg-gray-800">
            <div className="container xl:max-w-6xl mx-auto px-4">
              <div className="text-center mx-auto mb-5 shadow-md border-2 pt-5">
                <h2 className="uppercase text-2xl leading-normal mb-7 font-bold text-gray-800 dark:text-gray-100">
                  Executives
                </h2>
                <div className="flex flex-wrap flex-row -mx-4 justify-center ">
                  {
                    Executives.map((x) => {
                      return (
                        <>
                          <div className=" max-w-full px-4 w-2/3 sm:w-1/2 md:w-5/12 lg:w-1/4 xl:px-6">
                            <div className="relative overflow-hidden bg-white dark:bg-gray-800 mb-12 hover-grayscale-0 wow fadeInUp" data-wow-duration="1s" style={{ visibility: 'visible', animationDuration: '1s', animationName: 'fadeInUp' }}>

                              <div className="relative overflow-hidden px-6">
                                <img src='../Images/userIcon.png' className="max-w-full h-auto mx-auto rounded-full bg-gray-50 grayscale" alt="title image" />
                              </div>
                              <div className="pt-6 text-center">
                                <p className="text-lg leading-normal font-bold mb-1">{x.name}</p>
                                <p className="text-gray-500 leading-relaxed font-light">{x.Designation}</p>
                              </div>
                            </div>
                          </div>
                        </>
                      )
                    })}
                </div>
              </div>
              <div className="text-center mx-auto  pt-10">
                <h2 className="text-2xl leading-normal mb-7 font-bold text-gray-800 dark:text-gray-100">
                  OUR TEAM
                </h2>
                <div className="flex flex-wrap flex-row -mx-4 justify-center ">
                  {
                    Team.map((x) => {

                      return (
                        <>
                          <div className=" max-w-full px-4 w-2/3 sm:w-1/2 md:w-5/12 lg:w-1/4 xl:px-6">
                            <div className="relative overflow-hidden bg-white dark:bg-gray-800 mb-12 hover-grayscale-0 wow fadeInUp" data-wow-duration="1s" style={{ visibility: 'visible', animationDuration: '1s', animationName: 'fadeInUp' }}>

                              <div className="relative overflow-hidden px-6">
                                <img src='../Images/userIcon.png' className="max-w-full h-auto mx-auto rounded-full bg-gray-50 grayscale" alt="title image" />
                              </div>
                              <div className="pt-6 text-center">
                                <p className="text-lg leading-normal font-bold mb-1">{x.name}</p>
                                <p className="text-gray-500 leading-relaxed font-light">{x.Designation}</p>
                              </div>
                            </div>

                          </div>
                        </>
                      )
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
{/* Contact */}
<Contact />

    </div>


  )
}

export default CompanyProfile