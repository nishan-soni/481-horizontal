import React from 'react'

function Requirements({ children }) {
    return (
        <div className="w-full flex items-center justify-between bg-white hover:font-semibold border p-3 rounded-xl hover:shadow transition-all ease-in-out duration-300">
            {children}
        </div>
    )
}

export default Requirements