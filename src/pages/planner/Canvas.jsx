import { useCallback, useEffect, useState, useRef } from "react";
import ReactFlow, {
    Background,
    useNodesState,
    useEdgesState,
    addEdge,
    MiniMap,
    Controls,
    ReactFlowProvider,
    MarkerType
} from 'reactflow';
import 'reactflow/dist/style.css';
import CustomNode from './CustomeNode';
import { useData } from "../../DataProvider";
import Timeline from "./Timeline";
import normalEdge from "./NormalEdge";
import WarningEdge from "./WarningEdge";

const nodeTypes = {
    custom: CustomNode,
};



const initialNodes = [
    {
        id: '4',
        data: { label: '🍂 FALL' },
        position: { x: -400, y: -300 },
        className: 'light',
        style: { backgroundColor: 'rgba(254, 202, 202, 0.2)', width: 1000, height: 200, },
        selectable: false,
        draggable: false,
    },
    {
        id: '5',
        data: { label: '❄ Winter' },
        position: { x: -400, y: -50 },
        className: 'light',
        style: { backgroundColor: 'rgba(214, 237, 255, 0.2)', width: 1000, height: 200 },
        selectable: false,
        draggable: false,

    },
    {
        id: '1',
        type: 'custom',
        data: { "title": "Add Courses", "id": 1, "grade": "N/A", "status": "in progress", "units": "3.0", "preq": [], "date-complete": "N/A", "description": "🆕 Add courses by dragging them from the side menu into the canvas." },
        position: { x: -200, y: -200 },
    },
    {
        id: '2',
        type: 'custom',
        data: { "title": "Delete Courses", "id": 2, "grade": "B", "status": "complete", "units": "3.0", "preq": [], "date-complete": "2023-04-12", "description": "🔙 Delete courses by selecting the course or link, then press backspace to delete it." },
        position: { x: 200, y: -200 },
    },
    {
        id: '3',
        type: 'custom',
        data: { "title": "STAT", "id": 201, "grade": "N/A", "status": "incomplete", "units": "3.0", "preq": ["CSPC 331", "CPSC 355"], "date-complete": "N/A", "description": "🖱 Scroll to zoom and drag the cursor on the canvas to move. Hold and drag courses to move them around as needed." },
        position: { x: 20, y: 50 },
        // parentNode: '4'
    },
];

const edgeTypes = {
    'normal-edge': normalEdge,
    'warning-edge': WarningEdge,
};

// TODO: problem: when you try to use a custom edge, then you cant apply a marker to it. But if you universally apply a marker without a custom edge
// then it will show.s

const initialEdges = [
    {
        id: 'e1-2',
        source: '1',
        target: '3',
        markerEnd: {
            type: MarkerType.ArrowClosed,
        },
        type: 'normal-edge',
        // animated: true,
        // markerEnd: {
        //     type: MarkerType.ArrowClosed,
        // },
    },
    {
        id: 'e1-3',
        source: '2',
        target: '3',
        type: 'warning-edge',
        // animated: true,
        // markerEnd: {
        //     type: MarkerType.ArrowClosed,
        //     width: 20,
        //     height: 20,
        //     color: '#FF0072',
        // },
        // label: 'marker size and color',
        // style: {
        //     strokeWidth: 2,
        //     stroke: '#FF0072',
        // },

    },
];


let id = 0;
const getId = () => `dndnode_${id++}`;

function Canvas({ onRemove }) {

    const reactFlowWrapper = useRef(null);
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
    const [reactFlowInstance, setReactFlowInstance] = useState(null);

    useEffect(() => {

        console.log("Nodes: ", nodes);
        console.log("Edges: ", edges);

    }, [nodes, edges])

    const normalEdge = {
        "style": { strokeWidth: 1.5, stroke: '#b9b9be' },
        "markerEnd": { style: { stroke: '#b9b9be' }, type: MarkerType.ArrowClosed, width: 20, height: 20, color: "#b9b9be" },
        "label": "", "labelStyle": {}, "labelBg": {}
    }

    const warningEdge = {
        "style": { strokeWidth: 1.5, stroke: '#ef4444' },
        "markerEnd": { style: { stroke: '#ef4444' }, type: MarkerType.ArrowClosed, width: 20, height: 20, color: "#ef4444" },
        "label": "", "labelStyle": { fill: '#ef4444', fontWeight: 'bold' }, "labelBg": { fill: '#fafaf9' }
    }

    // callback for setting the edges on nodes
    const onConnect = useCallback(
        (params) => {


            //TODO: source and target node are not yet added as object to the nodes list until the callback finishes

            console.log("Params", params);
            console.log("NODESSSS ", nodes);
            const { source, target } = params;

            // Default edge attributes
            console.log("Source ", source);
            console.log("Target ", target);


            // let sourceNode = source
            // let targetNode = target

            let sourceNode = nodes.find((node) => node.id === source);
            let targetNode = nodes.find((node) => node.id === target);

            console.log("Find result", sourceNode, " ", targetNode);

            // if (sourceNode == undefined || targetNode == undefined) {
            //     console.log(undefined);
            // }
            let edgeType = normalEdge


            if (sourceNode && targetNode) {
                console.log("BRUSDHAHASD", sourceNode.data.fullTitle + " " + sourceNode.data.id);

                // show warning edge if the source node is not one of the pre-requisites to the target node
                // checks if either the prereq string DOES NOT contain the fullTitle or the prereq string DOES NOT includes the id
                if ((!targetNode.data.preq.includes(sourceNode.data.fullTitle) || !targetNode.data.preq.includes(sourceNode.data.id))) {

                    console.log("Warning-edge");
                    // set the edge type to warningEdge
                    warningEdge.label = "Invalid Prereq"
                    edgeType = warningEdge


                }
                // checks if the course ids are in the wrong order. ex 200 before 300 level
                if (parseInt(sourceNode.data.id[0]) > parseInt(targetNode.data.id[0])) { 
                    warningEdge.label = "Invalid course ID order"
                    edgeType = warningEdge
                }

            }

            const newEdge = {
                ...params,
                markerEnd: edgeType.markerEnd,
                style: edgeType.style,
                label: edgeType.label,
                labelStyle: edgeType.labelStyle,
                labelBgStyle: edgeType.labelBg,
                // animated: true
            };
            setEdges((eds) => addEdge(newEdge, eds));
        },
        [setEdges, nodes] // call onConnect again when the dependincies setEdges or nodes updates 
    );

    const onDragOver = useCallback((event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    }, [])

    const onDrop = useCallback((event) => {
        event.preventDefault();
        const dataString = event.dataTransfer.getData('application/reactFlow'); // catch the data transfered from CourseDrawerNode
        const { type, courseProp } = JSON.parse(dataString);

        // console.log(dataString);
        // console.log(type);
        // console.log("courseProp ", courseProp);
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
            data: { ...courseProp },
        }; // set the properties of the new node

        setNodes((nds) => nds.concat(newNode)); // add the node to the list of nodes
        // console.log("removing node: ", courseProp.title + courseProp.id);
        onRemove(courseProp);

    }, [reactFlowInstance]
    );

    useEffect(() => {
        // console.log(initialNodes);
    }, [])

    return (
        <>
            <div className="w-full h-full bg-stone-50 shadow-inner relative">
                <Timeline />
                <ReactFlowProvider>
                    <div className="w-full h-full" ref={reactFlowWrapper}>
                        <ReactFlow
                            fitView
                            maxZoom={1.1}
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
                            edgeTypes={edgeTypes}
                        >
                            <Background color="#e7e5e4" variant="dots" size="2" />
                            {/* <MiniMap /> */}
                            <Controls />
                        </ReactFlow>
                    </div>
                </ReactFlowProvider>
            </div >
        </>
    )
}

export default Canvas