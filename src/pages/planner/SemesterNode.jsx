import { data } from 'autoprefixer';
import React, { memo, useEffect, useState } from 'react';
import { Position, NodeResizer } from 'reactflow';
import { drag } from 'd3-drag';
import { select } from 'd3-selection';



function SemesterNode({ id, data }) {

    const { color } = data
    // const rotateControlRef = useRef(null);
    // const [resizeable, setResizeable] = useState(!!data.resizeable);

    // useEffect(() => {

    //     if(!rotateControlRef.current) {
    //         return;
    //     }


    useEffect(() => {
        console.log(id, color);
    })

    // })

    return (
        <div className={`flex justify-center bg-${color}-100 border-[1px] border-${color}-400 w-44 h-72 rounded-md`}>
            <p className={`pt-2 text-${color}-500 px-2`} placeholder='🍂 Fall'>🍂 Fall</p>
        </div>
    );


}

export default memo(SemesterNode);
