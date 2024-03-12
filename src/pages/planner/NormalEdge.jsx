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
            {/* overlay custom arrowhead on edge */}
            <svg style={{ position: 'absolute', width: 0, height: 0 }}>
                <defs>
                    <marker id="arrowClosed" markerWidth="8" markerHeight="8" refX="5" refY="3" orient="auto">
                        <path d="M0,0 L0,6 L6,3 z" fill="#FF0072" />
                    </marker>
                </defs>
            </svg>
            <BaseEdge
                id={id}
                path={edgePath}
                label="marker size and color"
                style={{
                    strokeWidth: 2,
                    stroke: '#FF0072',
                }}
                markerEnd='url(#arrowClosed)'
            />
        </>
    );
}
