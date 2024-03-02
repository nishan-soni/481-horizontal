import React from 'react'
import CourseDrawerNode from './CourseDrawerNode'


function CourseDrawer({children}) {
    return (
        <div className='flex flex-col border-b bg-red-00 w-full h-[350px] p-8 gap-2 overflow-y-auto '>
            {children}
        </div>
    )
}

export default CourseDrawer