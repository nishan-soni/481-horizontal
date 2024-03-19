import React from 'react'


function ModalBody({ header, description, photo, onClose }) {
    return (
        <>
            {/* Topbar */}
            < div className='absolute top-0 w-full flex justify-between text-gray-300 p-4 pt-2' >
                <p className='bg-zinc-50 border-[0.25px] rounded-xl py-0.5 px-2 shadow-gray-100 shadow-md bg-opacity-50 backdrop-blur-sm'>Help</p>
                <button
                    onClick={onClose}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 drop-shadow">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </button>
            </div >
            {/* Video */}
            < img src={photo} className={`rounded-xl rounded-b-none object-cover`}></img >
            {/* Description */}
            < div className='flex flex-col gap-4 p-8 border-b-4 border-red-500' >
                {/* < div className='flex flex-col gap-4 p-8' > */}
                <div className='gap-2'>
                    <p className='text-gray-800 text-xl font-semibold'>{header}</p>
                    <p className='text-gray-700'>{description}</p>
                </div>
            </div >
        </>
    )
}

export default ModalBody