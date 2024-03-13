import React from 'react';
import { getBezierPath } from 'react-flow-renderer';
import { BaseEdge } from 'reactflow';
// import { EdgeProps } from 'reactflow';

export default function WarningEdge({ id, sourceX, sourceY, targetX, targetY }) {
    const edgePath = getBezierPath({
        sourceX,
        sourceY,
        targetX,
        targetY,
    });

    const labelX = (sourceX + targetX) / 2;
    const labelY = (sourceY + targetY) / 2;

    return (
        <>
            {/* overlay custom arrowhead on edge */}
            <svg style={{ position: 'absolute', width: 0, height: 0 }}>
                <defs>
                    <marker id="arrowClosed" markerWidth="8" markerHeight="8" refX="5" refY="3" orient="auto">
                        <path d="M0,0 L0,6 L6,3 z" fill="#ef4444" />
                    </marker>
                </defs>
            </svg>
            <BaseEdge
                id={id}
                path={edgePath}
                label="hello"
                style={{
                    strokeWidth: 1.5,
                    stroke: '#ef4444',
                    labelStyle: { fill: '#ef4444', fontWeight: 'bold'},
                }}
                markerEnd='url(#arrowClosed)'
                

            />
            {/* Add label */}
            <rect x={labelX - 20} y={labelY - 10} width={40} height={20} fill="#fafaf9" />
            {/* Main label text */}
            <text x={labelX} y={labelY} textAnchor="middle" fill="#ef4444" dominantBaseline="middle" className="pointer-events-none text-sm font-semibold font-sans">
                Missing prerequisites
            </text>
        </>
    );
}
