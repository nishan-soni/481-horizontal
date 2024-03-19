import React, { memo, useState } from 'react';
import { Handle, Position } from 'reactflow';

function CustomNode({ data }) {

    const { title, id, status, description, overview, preq, units, grade } = data;

    const [showDetails, setShowDetails] = useState(false);
    const [showDesc, setShowDesc] = useState(false);

    const truncateText = (text, numWords) => {
        const words = text.split(' ');
        if (words.length <= numWords) {
            return text;
        }
        return words.slice(0, numWords).join(' ') + "..."
    };

    const HANDLE_STYLE = {
        "width": 10,
        "height": 10,
        "border": "3px solid white",
    }

    const DESC_TRUNC_LENGTH = 25
    // const PREQ_TRUNC_LENGTH = 6



    return (
        <div className={`shadow-md rounded-lg w-full bg-white border-[1.5px] border-stone-300 active:animate-pulse ${showDetails ?  'bg-opacity-[87%] backdrop-blur-sm' : ""}`}>
            {/* Header */}
            <div className='flex justify-between items-center w-full border-b px-3 py-1 gap-3'>
                <button
                    onClick={() => setShowDetails(!showDetails)}
                >
                    {
                        showDetails ?
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-stone-300 transition-all duration-500">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                            </svg> :
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-stone-300 transition-all duration-300 rotate-180">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                            </svg>
                    }
                </button>
                <p className='font-semibold'>{title + " " + id}</p>
                <div className={`rounded-full w-2.5 h-2.5 border-2 
                ${status === "complete" ? 'bg-green-200 border-green-300'
                        : status === "incomplete" ? 'bg-red-200 border-red-300'
                            : status === "in progress" ? 'bg-amber-200 border-amber-300'
                                : 'bg-sky-200 border-sky-300'}
                `}
                >
                </div>
            </div>

            {/* < div className={`transition-all duration-150 ease-in-out ${showDetails ? 'px-3 py-2 max-w-72 max-h-fit' : 'opacity-0 w-0 max-h-0 max-w-fit'}`}> */}

            {/* Description and Preq */}
            {/* {showDetails ? */}
            < div className={`transition-all ${showDetails ? 'px-3 py-2 pt-3 max-w-72 max-h-fit duration-200 ease-in' : 'opacity-0 overflow-hidden w-0 max-h-0 max-w-fit duration-150 ease-out'}`}>
                <div className={`${showDetails ? 'opacity-100 transition-all delay-100 duration-500 ease-in' : 'opacity-0 transition-all duration-0'}`}>
                    {description != "" && overview != "" &&
                        <p className='text-stone-600 font-semibold text-sm pb-3'>{overview}</p>
                    }
                    {description != "" &&
                        <>
                            <span className='text-neutral-400 text-sm flex flex-col items-start'>
                                {showDesc ? description : truncateText(description, DESC_TRUNC_LENGTH)}
                                <button
                                    className='font-semibold text-xs pb-3 text-stone-300 transition-all duration-300'
                                    onClick={() => setShowDesc(!showDesc)}
                                >
                                    {/* check if the length of the description is greater than TRUNC LEN then check if showDesc is true */}
                                    {description.split(" ").length > DESC_TRUNC_LENGTH ? (showDesc ? "Hide" : "Read More") : ""}
                                </button>
                            </span>
                        </>
                    }

                    {preq != "" &&
                        <div>
                            <p className='text-stone-600 font-semibold text-sm pb-1'>Prerequisties</p>
                            <p className='text-neutral-400 text-sm pb-4'>{preq}</p>
                        </div>
                    }
                    {/* <p className='text-stone-300 text-sm pb-4'>{description}</p> */}


                    <div className='flex flex-row justify-between w-full h-fit'>
                        <p className={`w-fit h-fit text-center text-sm rounded-full py-0.5 px-2 capitalize
                            ${status === "complete" ? 'bg-green-200 border-green-300 text-green-500'
                                : status === "incomplete" ? 'bg-red-200 border-red-300 text-red-500'
                                    : status === "in progress" ? 'bg-amber-200 border-amber-300 text-amber-500'
                                        : 'bg-sky-200 border-sky-300 text-sky-500'}
                            `}
                        >
                            {status}
                        </p>
                        <p className='text-stone-300 font-semibold text-sm'>{units}</p>
                    </div>
                </div>
            </div>
            {/* : ""
            } */}
            <Handle type="target" position={Position.Left} style={{ ...HANDLE_STYLE, background: "#9ca3af" }} />
            <Handle type="source" position={Position.Right} style={{ ...HANDLE_STYLE, background: "#9ca3af" }} />
        </div >
    );
}

export default memo(CustomNode);
