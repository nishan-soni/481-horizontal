import React from 'react'

function Card({imgsrc, course}) {
    return (
        <div className="w-full h-full relative rounded-2xl hover:shadow-lg ease-in-out duration-300 transition-all">
            <img src={imgsrc} alt="" className="absolute inset-0 w-full h-full rounded-2xl object-cover" />
            <div className="absolute border-gray-200 inset-0 flex flex-col rounded-2xl p-4 text-gray-100 bg-gray-300 bg-opacity-25 saturate-50 hover:backdrop-blur-0 backdrop-blur-sm ease-in-out duration-150 transition-all">
            {/* <div className="absolute border-1 border bg-gray-50 bg-opacity-75 backdrop-blur-sm border-gray-200 inset-0 flex flex-col rounded-2xl p-4 text-white"> */}
                <p className="text-2xl font-semibold">{course}</p>
            </div>
        </div>
    )
}

export default Card