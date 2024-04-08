import { data } from 'autoprefixer';
import React, { memo, useEffect, useState } from 'react';
import { Position, NodeResizer } from 'reactflow';
import { drag } from 'd3-drag';
import { select } from 'd3-selection';



function SemesterNode({ id, data }) {

    const { color } = data

    const DICTIONARY = {
        blue: "bg-sky-100 border-sky-300 text-sky-500",
        red: "bg-red-100 border-red-300 text-red-500"
    }
    // const rotateControlRef = useRef(null);
    // const [resizeable, setResizeable] = useState(!!data.resizeable);

    // useEffect(() => {

    //     if(!rotateControlRef.current) {
    //         return;
    //     }


    // useEffect(() => {
    //     console.log(id, color);
    // })

    // })

    return (
        <div className={`flex flex-col justify-start items-center w-48 h-[400px] bg-opacity-30 ${DICTIONARY[color]} border-[1px] rounded-md`}>
            <p className={`pt-2 px-2 font-semibold`} placeholder='🍂 Fall'>{color == 'red' ? "🍁 Fall" : "❄ Winter"}</p>
            <div className='flex flex-col items-center justify-evenly h-full w-full gap-6 px-2    pt-2'>
                {/* <div className='h-8 w-full'></div>
                <div className='h-8 w-full'></div>
                <div className='h-8 w-full'></div>
                <div className='h-8 w-full'></div>
                <div className='h-8 w-full'></div> */}
            </div>
        </div>
    );


}

export default memo(SemesterNode);
