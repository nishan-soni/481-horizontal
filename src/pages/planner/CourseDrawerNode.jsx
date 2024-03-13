import React, { useEffect, useState } from 'react'

function CourseDrawerNode({ course, onRemove }) {

    const { title, id, grade, preq, status, units } = course;
    const [dragging, setDragging] = useState(false);

    // useEffect(() => {
    //     console.log("Title", title);
    // }, [])

    // define a function to handle the drag start event
    const onDragStart = (event, type, courseProp) => {
        const data = { type, courseProp };
        event.dataTransfer.setData('application/reactflow', JSON.stringify(data)); // set data to be transferred with the drag event
        event.dataTransfer.effectAllowed = 'move'; // set the effect that will be allowed when the data is dropped
        // setDragging(true);
    }

    const onDragEnd = () => {
        setDragging(false);
    }

    const onDrop = () => {
        if (dragging) {
            console.log("Removing node: ", id);
            onRemove(id);
        }
    }

    return (
        <div className="rounded-lg w-fit bg-white border border-stone-200 active:animate-pulse"
            onDragStart={(event) => onDragStart(event, 'custom', course)}  //set the node to be the custom node defined in Canvas; Toss the data to Canvas
            draggable
            // onDrop={onDrop} // call onDrop when an item is dropped onto Canvas
            // onDragEnd={onDragEnd} // call onDragEnd to set the dragging state to false
        >
            {/* Header */}
            <div className='flex justify-between items-center w-full min-w-fit lg:min-w-44 px-3 py-1 gap-3 hover:cursor-pointer active:cursor-grabbing'>
                <svg className="h-6 w-6 text-stone-200" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="9" cy="5" r="1" />
                    <circle cx="9" cy="12" r="1" />
                    <circle cx="9" cy="19" r="1" />
                    <circle cx="15" cy="5" r="1" />
                    <circle cx="15" cy="12" r="1" />
                    <circle cx="15" cy="19" r="1" />
                </svg>
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