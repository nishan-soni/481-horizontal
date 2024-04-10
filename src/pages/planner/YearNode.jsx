import { data } from 'autoprefixer';
import React, { memo, useEffect, useState } from 'react';
import { Position, NodeResizer } from 'reactflow';
import { drag } from 'd3-drag';
import { select } from 'd3-selection';



function YearNode({ id, data }) {

    const { year } = data

    // const rotateControlRef = useRef(null);
    // const [resizeable, setResizeable] = useState(!!data.resizeable);

    // useEffect(() => {

    //     if(!rotateControlRef.current) {
    //         return;
    //     }
    // })

    const handleButtonClick = () => {
        const confirmed = window.confirm('Adding/Removing new terms and semesters is not yet supported');
    };

    return (
        <>
            <div className="border-2 bg-stone-50 bg-opacity-5 border-stone-300 border-dashed w-[500px] h-[450px] year rounded-md">
                {/* Year Indicator */}
                <p className='absolute -top-3 text-white ml-10 px-2 py-0.5 bg-red-500 rounded-full'>{year}</p>

                {/* Add button */}
                <div className='flex justify-end items-center w-full h-full'>
                    <div className='flex flex-col justify-center gap-2 absolute right-0 w-3 h-full opacity-50 hover:opacity-100 transition-all duration-200'>
                        <button className='flex justify-center items-center w-6 h-6 rounded-full'
                        // <button className='flex justify-center items-center w-6 h-6 rounded-full border-2 border-stone-400 bg-gray-50'
                            onClick={handleButtonClick}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-stone-400">
                                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z" clipRule="evenodd" />
                            </svg>

                        </button>
                        <button className='flex justify-center items-center w-6 h-6 rounded-full'
                            onClick={handleButtonClick}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-stone-400">
                                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm3 10.5a.75.75 0 0 0 0-1.5H9a.75.75 0 0 0 0 1.5h6Z" clipRule="evenodd" />
                            </svg>

                        </button>
                    </div>
                </div>
            </div >
        </>
    );


}

export default memo(YearNode);
