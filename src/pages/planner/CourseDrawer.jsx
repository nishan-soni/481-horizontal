import React from 'react'
import CourseDrawerNode from './CourseDrawerNode'


function CourseDrawer({ children }) {


    return (
        <>
            <div className='w-full flex justify-center items-center border-b h-10'>
                <p className='font-semibold text-stone-300'>
                    Search...
                </p>
            </div>
            <div className='flex flex-col items-center border-b w-full h-[270px] p-4 gap-2 overflow-y-auto shadow-inner'>
                {children}
            </div>
        </>
    )
}

export default CourseDrawer