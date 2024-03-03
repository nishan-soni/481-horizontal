import React from 'react'

function Timeline() {
    return (
        <div className="absolute -top-5 flex  justify-center items-center w-full z-10">
            <div className="flex flex-row  justify-center items-center max-w-96 w-full">
                <button className="flex items-center justify-center bg-green-100 border-2 border-green-400 p min-w-10 min-h-10 rounded-full hover:border-green-400 
          text-green-400 hover:text-stone-500 text-center font-semibold italic"
                >
                    1'
                </button>
                <div className="bg-gradient-to-r from-green-300 to-amber-300 w-1/3 h-0.5"></div>
                <button className="flex items-center justify-center bg-amber-100 border-2 border-amber-300 p min-w-10 min-h-10 rounded-full hover:border-amber-400 
          text-amber-400 hover:text-stone-500 text-center font-semibold italic"
                >
                    2'
                </button>
                <div className="bg-gradient-to-r from-amber-300 to-orange-300 w-1/3 h-0.5"></div>
                <button className="flex items-center justify-center bg-orange-100 border-2 border-orange-300 p min-w-10 min-h-10 rounded-full hover:border-orange-400 
          text-orange-400 hover:text-stone-500 text-center font-semibold italic"
                >
                    3'
                </button>
                <div className="bg-gradient-to-r from-orange-300 to-stone-500 w-1/3 h-0.5"></div>
                <button className="flex items-center justify-center bg-red-100 border-2 border-red-300 p min-w-10 min-h-10 rounded-full hover:border-red-400 
          text-red-400 hover:text-stone-500 text-center font-semibold italic"
                >
                    4'
                </button>
            </div>
        </div>
    )
}

export default Timeline