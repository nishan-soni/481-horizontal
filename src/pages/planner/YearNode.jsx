import { data } from 'autoprefixer';
import React, { memo, useEffect, useState } from 'react';
import { Position, NodeResizer } from 'reactflow';
import { drag } from 'd3-drag';
import { select } from 'd3-selection';



function YearNode({id, data}) {

    const {year} = data

    // const rotateControlRef = useRef(null);
    // const [resizeable, setResizeable] = useState(!!data.resizeable);

    // useEffect(() => {
     
    //     if(!rotateControlRef.current) {
    //         return;
    //     }


    // })

    return (
        <div className="border-2 bg-stone-50 bg-opacity-5 border-stone-300 border-dashed w-[500px] h-[450px] year rounded-md">
            <p className='absolute -top-3 text-white ml-10 px-2 py-0.5 bg-red-500 rounded-full'>{year}</p>
        </div >
    );


}

export default memo(YearNode);
