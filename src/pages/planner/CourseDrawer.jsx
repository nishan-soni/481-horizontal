import React from 'react'
import CourseDrawerNode from './CourseDrawerNode'


function CourseDrawer({children}) {
    return (
        <div className='flex flex-col items-center border-b w-full h-[350px] p-4 gap-2 overflow-y-auto '>
            {children}
        </div>
    )
}

export default CourseDrawer