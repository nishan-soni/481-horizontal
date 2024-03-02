import React, { memo, useState } from 'react';
import { Handle, Position } from 'reactflow';

function CustomNode({ data }) {

    const { title, id, status } = data;

    const desc = "An introduction to operations and supply chain management's strategic importance, wide applicability, and sustainability integration. Topics include management of inventory, quality, global supply chains, capacity, projects and process improvement."
    const [showDetails, setShowDetails] = useState(false);

    const truncateText = (text, numWords) => {
        const words = text.split(' ');
        if (words.length <= numWords) {
            return text;
        }
        return words.slice(0, numWords).join(' ') + '...';
    };


    return (
        <div className="shadow-md rounded-lg w-full bg-white border-2 border-stone-300 active:animate-pulse">
            {/* Header */}
            <div className='flex justify-start items-center w-full border-b px-3 py-1 gap-3'>
                <button
                    onClick={() => setShowDetails(!showDetails)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-stone-300">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                </button>
                <p className='font-semibold'>{title + " " + id}</p>
                <div className={`rounded-full w-2.5 h-2.5 border-2 
                ${status === "complete" ? 'bg-green-200 border-green-300'
                        : status === "incomplete" ? 'bg-red-200 border-red-300'
                            : 'bg-amber-200 border-amber-300'}
                `}
                >
                </div>
            </div>
            {/* Description */}
            {showDetails ?
                < div className={`px-3 py-2 max-w-44 transition-opacity duration-500 ease-in-out ${showDetails ? 'opacity-100' : 'opacity-0'}`}>
                    <p className='text-stone-300 text-sm pb-4'>{truncateText(desc, 10)}</p>
                    <p className={`w-fit text-xs rounded-full py-0.5 px-2
                    ${status === "complete" ? 'bg-green-200 text-green-400'
                            : status === "incomplete" ? 'bg-red-200 text-red-400'
                                : 'bg-amber-200 text-amber-400'}
                    `}
                    >
                        {status}
                    </p>
                </div>
                : ""
            }
            <Handle type="target" position={Position.Top} />
            <Handle type="source" position={Position.Bottom} />
        </div >
    );
}

export default memo(CustomNode);
