import React from 'react'

const Slider = () => {


  return (
    <>
      <div>
        <div className="h-4/5 w-full overflow-hidden flex flex-nowrap text-center" >
          <div className="bg-blue-600 text-white space-y-4 flex-none w-full flex flex-col items-center justify-center">
            <h2 className="text-4xl max-w-md">Your Big Ideia</h2>
            <p className="max-w-md">It's fast, flexible, and reliable — with zero-runtime.</p>
          </div>
          <div className="bg-pink-400 text-white space-y-4 flex-none w-full flex flex-col items-center justify-center">
            <h2 className="text-4xl max-w-md">Tailwind CSS works by scanning all of your HTML</h2>
            <p className="max-w-md">It's fast, flexible, and reliable — with zero-runtime.</p>
          </div>
          <div className="bg-teal-500 text-white space-y-4 flex-none w-full flex flex-col items-center justify-center">
            <h2 className="text-4xl max-w-md">React, Vue, and HTML</h2>
            <p className="max-w-md">Accessible, interactive examples for React and Vue powered by Headless UI, plus vanilla HTML if you’d rather write any necessary JS yourself.</p>
          </div>
        </div>
      </div>
    </>


  )
}

export default Slider