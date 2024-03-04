import React from 'react'
import CourseDrawerNode from './CourseDrawerNode'


function CourseDrawer({ children }) {


    return (
        <>
            <input className='w-full flex justify-center items-center text-center rounded-md shadow-inner bg-white h-10' placeholder='Search...'>
                {/* <p className='font-semibold text-stone-300'>
                    Search...
                </p> */}
            </input>
            <div className='flex flex-col items-center border-b w-full h-[270px] p-4 gap-3 overflow-y-auto '>
                {children}
            </div>
        </>
    )
}

export default CourseDrawer