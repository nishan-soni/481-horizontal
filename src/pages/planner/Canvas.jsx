import { useCallback, useEffect, useState } from "react";
import ReactFlow, { Background, useNodesState, useEdgesState, addEdge } from 'reactflow';
import 'reactflow/dist/style.css';
import CustomNode from './CustomeNode';

const nodeTypes = {
    custom: CustomNode,
};

const initialNodes = [
    {
        id: '1',
        type: 'custom',
        data: { name: 'Jane Doe', job: 'CEO', emoji: '😎' },
        position: { x: 0, y: 50 },
    },
    {
        id: '2',
        type: 'custom',
        data: { name: 'Tyler Weary', job: 'Designer', emoji: '🤓' },

        position: { x: -200, y: 200 },
    },
    {
        id: '3',
        type: 'custom',
        data: { name: 'Kristi Price', job: 'Developer', emoji: '🤩' },
        position: { x: 200, y: 200 },
    },
];

const initialEdges = [
    {
        id: 'e1-2',
        source: '1',
        target: '2',
    },
    {
        id: 'e1-3',
        source: '1',
        target: '3',
    },
];

function Canvas() {

    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    const onConnect = useCallback(
        (params) => setEdges((eds) => addEdge(params, eds)),
        [setEdges],
    );

    return (
        <div className="w-full h-full bg-stone-50">
            <ReactFlow
                fitView
                nodes={nodes}
                edges={edges}
                nodeTypes={nodeTypes}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                
            >
                <Background color="#e7e5e4" variant="dots" size="2" />
            </ReactFlow>
        </div>
    )
}

export default Canvas