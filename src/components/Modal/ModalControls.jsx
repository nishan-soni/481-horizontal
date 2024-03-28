import React, { useEffect, useState } from 'react'
import ModalBody from './ModalBody'

function ModalControls({ children }) {

    const slideList = children
    const [slideNum, setSlideNum] = useState(0);

    useEffect(() => {
        console.log(children);
    }, [])

    return (
        <>
            {/* Right Button */}
            <div className='z-10 absolute top-1/2 right-2 -translate-y-1/2'>
                <button className='bg-opacity-50 backdrop-blur-sm bg-white rounded-full shadow-md p-1'
                    onClick={() => setSlideNum((slideNum + 1) % slideList.length)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-gray-400">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </button>
            </div>

            <div className='fixed flex justify-center h-full w-full pt-2'>
                <p className='text-gray-300'>{slideNum+1}/{slideList.length}</p>
            </div>
            {slideList[slideNum]}

            {/* Left Button */}
            <div className='z-10 absolute top-1/2 left-2 -translate-y-1/2'>
                <button className='bg-opacity-50 backdrop-blur-sm bg-white rounded-full shadow-md p-1'
                    onClick={() => setSlideNum(((slideNum - 1) + slideList.length) % slideList.length)}
                >
                    <svg xmlns="http://www.w3.org/2000/svgh" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-gray-400">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </button>
            </div>
        </>
    )
}

export default ModalControls