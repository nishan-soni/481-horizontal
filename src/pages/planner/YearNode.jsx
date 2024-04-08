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
        const confirmed = window.confirm('Adding new terms and semesters is not yet supported');
    };

    return (
        <>
            <div className="border-2 bg-stone-50 bg-opacity-5 border-stone-300 border-dashed w-[500px] h-[450px] year rounded-md">
                {/* Year Indicator */}
                <p className='absolute -top-3 text-white ml-10 px-2 py-0.5 bg-red-500 rounded-full'>{year}</p>

                {/* Add button */}
                <div className='flex justify-end items-center w-full h-full'>
                    <div className='flex items-center absolute right-0 w-3 h-full opacity-0 hover:opacity-100 transition-all duration-200'>
                        <button className='flex justify-center items-center w-6 h-6 rounded-full border-2 border-stone-500 bg-gray-50'
                            onClick={handleButtonClick}
                        >
                            <svg className="w-6 h-6 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7 7V5" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div >
        </>
    );


}

export default memo(YearNode);
