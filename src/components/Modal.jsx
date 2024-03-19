import React, { useEffect, useState } from 'react'
import Preview from "../assets/Preview.png"

function Modal() {

    const [open, setOpen] = useState(false)

    useEffect(() => {
        setOpen(!open)
    }, [])

    // useEffect(() => {
    //     setTimeout(() => {
    //         setOpen(false);
    //     }, 3000);
    // }, [!open])

    return (
        <>
            {/* <div className={`w-full h-full transition-all delay-1000 absolute ${open ? "" : "hidden"}`}> */}
            <div class={`${open ? 'opacity-100' : 'opacity-0 max-h-0 max-w-0 overflow-hidden'} flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-full max-h-full `}>
                <div class="relative p-4 w-full max-w-2xl h-5/6  max-h-full">
                    <div class={`w-full h-full relative overflow-auto cust-scrollbar bg-white rounded-lg shadow ${open ? 'opacity-100 cale-100 translate-y-0' : 'opacity-0 cale-0 translate-y-96'} transition-all duration-300`}>
                        {/* Topbar */}
                        <div className='absolute top-0 w-full flex justify-between text-gray-300 p-4 pt-2'>
                            <p className='bg-zinc-50 border-[0.25px] rounded-xl py-0.5 px-2 shadow-gray-100 shadow-md bg-opacity-50 backdrop-blur-sm'>Help</p>
                            <button
                                onClick={() => setOpen(!open)}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 drop-shadow">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        {/* Video */}
                        <img src={Preview} className='rounded-lg rounded-b-none object-cover'></img>
                        <div className='flex flex-col gap-4 p-8'>
                            <div className='gap-2'>
                                <p className='text-gray-800 text-xl font-semibold'>Adding and Deleting Courses</p>
                                <p className='text-gray-700'>Drag courses from the sidebar onto the canvas to add them</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Modal Backdrop */}
                <div className={`${open ? '' : 'hidden'} -z-10 inset-0 absolute h-full w-full flex justify-center items-center bg-black bg-opacity-20 backdrop-blur-[1px]`}
                // onClick={() => setOpen(!open)}
                >
                </div>
            </div>
            {/* </div> */}
        </>
    )
}

export default Modal