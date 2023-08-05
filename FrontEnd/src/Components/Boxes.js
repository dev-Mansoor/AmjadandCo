import React from 'react'

const Boxes = (props) => {
    return (
        <div>
            <div className="w-full my-4 bg-[#00004de0] shadow-lg rounded-lg p-5 flex flex-col justify-center items-center">
                <div className="mb-8">
                </div>
                <div className="text-center">
                    <p className="text-base text-gray-100 font-bold mb-2">Qoutations </p>
                </div>
                <div className="text-center">
                    <p className="text-xl text-gray-100 font-bold mb-2">5 </p>
                </div>
            </div>
            <div className="w-full bg-[#00004de0] shadow-lg rounded-lg p-5 flex flex-col justify-center items-center">
                <div className="mb-8">
                </div>
                <div className="text-center">
                    <p className="text-xl text-gray-100 font-bold mb-2">Products </p>
                </div>
                <div className="text-center">
                    <p className="text-xl text-gray-100 font-bold mb-2">10 </p>
                </div>
            </div>

        </div>
    )
}

export default Boxes