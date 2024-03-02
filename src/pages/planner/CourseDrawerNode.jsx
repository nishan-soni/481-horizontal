import React, { useEffect } from 'react'

function CourseDrawerNode({ course }) {

    const { title, id, grade, preq, status, units } = course;

    useEffect(() => {
        console.log("Title", title);
    }, [])

    // define a function to handle the drag start event
    const onDragStart = (event, type, courseProp) => {
        const data = { type, courseProp };
        event.dataTransfer.setData('application/reactflow', JSON.stringify(data)); // set data to be transferred with the drag event
        event.dataTransfer.effectAllowed = 'move'; // set the effect that will be allowed when the data is dropped
    }

    return (
        <div className="rounded-lg w-fit bg-white border border-stone-200 active:animate-pulse">
            {/* Header */}
            <div className='flex justify-between items-center w-full min-w-fit lg:min-w-44 px-3 py-1 gap-3 hover:cursor-pointer active:cursor-grabbing'
                onDragStart={(event) => onDragStart(event, 'custom', course)} draggable //set the node to be the custom node defined in Canvas; Toss the data to Canvas
            >
                <svg class="h-6 w-6 text-stone-200"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="9" cy="5" r="1" />  <circle cx="9" cy="12" r="1" />  <circle cx="9" cy="19" r="1" />  <circle cx="15" cy="5" r="1" />  <circle cx="15" cy="12" r="1" />  <circle cx="15" cy="19" r="1" /></svg>
                <p className='font-semibold'>{title + " " + id}</p>
                <div className={` 
                    rounded-full p-1 w-2.5 h-2.5 border-2
                    ${status === "complete" ? 'bg-green-200 border-green-300'
                        : status === "incomplete" ? 'bg-red-200 border-red-300'
                            : 'bg-amber-200 border-amber-300'}
                    `}
                >
                </div>
            </div>
        </div >
    )
}

export default CourseDrawerNode