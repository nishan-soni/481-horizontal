import React from 'react';
import { getBezierPath } from 'react-flow-renderer';
import { BaseEdge } from 'reactflow';

export default function NormalEdge({ id, sourceX, sourceY, targetX, targetY }) {
    const edgePath = getBezierPath({
        sourceX,
        sourceY,
        targetX,
        targetY,
    });

    return (
        <>
            <svg style={{ position: 'absolute', width: 0, height: 0 }}>
                <defs>
                    <marker id="arrowClosed" markerWidth="8" markerHeight="8" refX="5" refY="3" orient="auto">
                        <path d="M0,0 L0,6 L6,3 z" fill="#b9b9be" />
                    </marker>
                </defs>
            </svg>
            <BaseEdge
                id={id}
                path={edgePath}
                style={{
                    strokeWidth: 1.5,
                    // markerWidth: 2,
                    stroke: '#b9b9be',
                    labelStyle: { fill: '#b9b9be', fontWeight: 'bold', stroke: 2 },
                }}
                markerEnd='url(#arrowClosed)'
            />
        </>
    );
}

// import React from 'react';
// import { getBezierPath } from 'react-flow-renderer';
// import { BaseEdge } from 'reactflow';

// export default function NormalEdge({ id, sourceX, sourceY, targetX, targetY }) {
//     // Determine if the edge is horizontal or vertical
//     const isHorizontal = Math.abs(targetX - sourceX) > Math.abs(targetY - sourceY);
//     let edgePath;
    
//     // Calculate the edge path based on orientation
//     if (isHorizontal) {
//         const centerX = (sourceX + targetX) / 2;
//         edgePath = `M${sourceX},${sourceY} C${centerX},${sourceY} ${centerX},${targetY} ${targetX},${targetY}`;
//     } else {
//         edgePath = getBezierPath({
//             sourceX,
//             sourceY,
//             targetX,
//             targetY,
//         });
//     }

//     return (
//         <>
//             <svg style={{ position: 'absolute', width: 0, height: 0 }}>
//                 <defs>
//                     <marker id="arrowClosed" markerWidth="8" markerHeight="8" refX="5" refY="3" orient="auto">
//                         <path d="M0,0 L0,6 L6,3 z" fill="#b9b9be" />
//                     </marker>
//                 </defs>
//             </svg>
//             <BaseEdge
//                 id={id}
//                 path={edgePath}
//                 style={{
//                     strokeWidth: 1.5,
//                     // markerWidth: 2,
//                     stroke: '#b9b9be',
//                     labelStyle: { fill: '#b9b9be', fontWeight: 'bold', stroke: 2 },
//                 }}
//                 markerEnd='url(#arrowClosed)'
//             />
//         </>
//     );
// }

