import { useCallback, useEffect, useState, useRef } from "react";
import ReactFlow, {
    Background,
    useNodesState,
    useEdgesState,
    addEdge,
    MiniMap,
    Controls,
    ReactFlowProvider
} from 'reactflow';
import 'reactflow/dist/style.css';
import CustomNode from './CustomeNode';
import { useData } from "../../DataProvider";

const nodeTypes = {
    custom: CustomNode,
};

const initialNodes = [
    {
        id: '1',
        type: 'custom',
        data: {"title":"CPSC","id":355,"grade":"N/A","status":"in progress","units":"3.0","preq":[],"date-complete":"N/A"},
        position: { x: -200, y: -200 },
    },
    {
        id: '2',
        type: 'custom',
        data: {"title":"CPSC","id":331,"grade":"B","status":"complete","units":"3.0","preq":[],"date-complete":"2023-04-12"},
        position: { x: 200, y: -200 },
    },
    {
        id: '3',
        type: 'custom',
        data: {"title":"CPSC","id":441,"grade":"N/A","status":"incomplete","units":"3.0","preq":["CSPC 331", "CPSC 355"],"date-complete":"N/A"},
        position: { x: 0, y: 50 },
    }
];


const initialEdges = [
    {
        id: 'e1-2',
        source: '1',
        target: '3',
    },
    {
        id: 'e1-3',
        source: '2',
        target: '3',
    },
];

let id = 0;
const getId = () => `dndnode_${id++}`;

function Canvas() {

    const reactFlowWrapper = useRef(null);
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
    const [reactFlowInstance, setReactFlowInstance] = useState(null);

    // callback for setting the edges on nodes
    const onConnect = useCallback(
        (params) => setEdges((eds) => addEdge(params, eds)),
        [setEdges],
    );

    const onDragOver = useCallback((event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    }, [])

    const onDrop = useCallback((event) => {
        event.preventDefault();
        const dataString = event.dataTransfer.getData('application/reactFlow'); // catch the data transfered from CourseDrawerNode
        const { type, courseProp } = JSON.parse(dataString);
        console.log(dataString);
        // console.log(type);
        console.log("courseProp ", courseProp);
        // console.log(typeof (type));

        // checking if the dragged element is a valid
        if (typeof type === 'undefined' || !type) {
            return;
        }

        const position = reactFlowInstance.screenToFlowPosition({
            x: event.clientX,
            y: event.clientY,
        }); // get the position of the node

        const newNode = {
            id: getId(),
            type,
            position,
            data: {...courseProp},
        }; // set the properties of the new node

        setNodes((nds) => nds.concat(newNode)); // add the node to the list of nodes
    }, [reactFlowInstance]
    );

    useEffect(() => {
        console.log(initialNodes);
    }, [])

    return (
        <div className="w-full h-full bg-stone-50">
            <ReactFlowProvider>
                <div className="w-full h-full" ref={reactFlowWrapper}>
                    <ReactFlow
                        fitView
                        snapToGrid={[100, 100]}
                        nodes={nodes}
                        edges={edges}
                        nodeTypes={nodeTypes}
                        onNodesChange={onNodesChange}
                        onEdgesChange={onEdgesChange}
                        onConnect={onConnect}
                        onInit={setReactFlowInstance}
                        onDrop={onDrop}
                        onDragOver={onDragOver}
                    >
                        <Background color="#e7e5e4" variant="dots" size="2" />
                        {/* <MiniMap /> */}
                        <Controls />
                    </ReactFlow>
                </div>
            </ReactFlowProvider>
        </div>
    )
}

export default Canvas