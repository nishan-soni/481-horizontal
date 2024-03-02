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
        <div className="rounded-lg w-full bg-white border-2 border-stone-200 active:animate-pulse">
            {/* Header */}
            <div className='flex justify-center items-center w-full px-3 py-1 gap-3'
                onDragStart={(event) => onDragStart(event, 'custom', course)} draggable //set the node to be the custom node defined in Canvas; Toss the data to Canvas
            >
                <p className='font-semibold'>{title + " " + id}</p>
                <div className={` 
                    rounded-full w-2.5 h-2.5 border-2
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