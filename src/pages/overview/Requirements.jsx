import React from 'react'

function Requirements({ children }) {
    return (
        <button className="w-full flex items-center justify-between bg-white border hover:text-red-500 p-3 rounded-xl hover:shadow transition-all ease-in-out duration-300">
            {children}
        </button>
    )
}

export default Requirements