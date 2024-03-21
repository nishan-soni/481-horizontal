import { useCallback, useEffect, useState, useRef } from "react";
import ReactFlow, {
    Background,
    useNodesState,
    useEdgesState,
    addEdge,
    MiniMap,
    Controls,
    // ReactFlowProvider,
    MarkerType,
    useStoreApi,
} from 'reactflow';
import 'reactflow/dist/style.css';
import CustomNode from './CustomeNode';
import { useData } from "../../DataProvider";
import Timeline from "./Timeline";
import normalEdge from "./NormalEdge";
import WarningEdge from "./WarningEdge";
import { red } from "@mui/material/colors";

const nodeTypes = {
    custom: CustomNode,
};



const initialNodes = [
    {
        id: '4',
        data: { label: '🍂 FALL' },
        position: { x: -25, y: -225 },
        style: { backgroundColor: 'rgba(254, 202, 202, 0.2)', width: 250, height: 500, },
        selectable: false,
        draggable: false,
        connectable: false,
        type: 'default',

    },
    {
        id: '5',
        data: { label: '❄ Winter' },
        position: { x: 375, y: -225 },
        style: { backgroundColor: 'rgba(214, 237, 255, 0.2)', width: 250, height: 500 },
        selectable: false,
        draggable: false,
        connectable: false,
        type: 'default',

    },
    {
        id: '1',
        type: 'custom',
        data: { "title": "Add Courses", "id": 1, "grade": "N/A", "status": "in progress", "units": "3.0", "preq": [], "date-complete": "N/A", "description": "🆕 Add courses by dragging them from the side menu into the canvas." },
        position: { x: 0, y: -100 },
    },
    {
        id: '2',
        type: 'custom',
        data: { "title": "Delete Courses", "id": 2, "grade": "B", "status": "complete", "units": "3.0", "preq": [], "date-complete": "2023-04-12", "description": "🔙 Delete courses by selecting the course or link, then press backspace to delete it." },
        position: { x: 0, y: 100 },
    },
    {
        id: '3',
        type: 'custom',
        data: { "title": "Move Canvas", "id": 3, "grade": "N/A", "status": "incomplete", "units": "3.0", "preq": "", "date-complete": "N/A", "description": "🖱 Scroll to zoom and drag the cursor on the canvas to move. Hold and drag courses to move them around as needed." },
        position: { x: 400, y: 0 },
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
        markerEnd: { type: MarkerType.ArrowClosed, width: 20, height: 20, }
        // type: 'normal-edge',
        // animated: true,
        // markerEnd: {
        //     type: MarkerType.ArrowClosed,
        // },
    },
    {
        id: 'e1-3',
        source: '2',
        target: '3',
        markerEnd: { type: MarkerType.ArrowClosed, width: 20, height: 20, }
        // type: 'warning-edge',
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

    const store = useStoreApi(); // access the reactflow store object for access to the internal state
    const reactFlowWrapper = useRef(null);
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
    const [reactFlowInstance, setReactFlowInstance] = useState(null);
    const MIN_DISTANCE = 1000000 // make large value so that prerequisite nodes automatically connect on canvas
    const MIN_HORZ = 100

    // useEffect(() => {
    //     console.log("Nodes: ", nodes);
    //     console.log("Edges: ", edges);
    // }, [nodes, edges])

    let normalEdge = {
        "style": { strokeWidth: 1.5, stroke: '#d4d4d4' },
        "markerEnd": { style: { stroke: '#d4d4d4' }, type: MarkerType.ArrowClosed, width: 20, height: 20, color: "#d4d4d4" },
        "label": "", "labelStyle": {}, "labelBg": {}, animated: false, type: 'smoothstep',

    }

    let warningEdge = {
        "style": { strokeWidth: 1.5, stroke: '#ef4444' },
        "markerEnd": { style: { stroke: '#ef4444' }, type: MarkerType.ArrowClosed, width: 20, height: 20, color: "#ef4444" },
        "label": "", "labelStyle": { fill: '#ef4444', fontWeight: 'bold' }, "labelBg": { fill: '#fafaf9' }, animated: false, type: 'smoothstep',

    }

    let tempEdge = {
        "style": { strokeWidth: 1.5, stroke: '#e5e7eb' },
        "markerEnd": { style: { stroke: '#e5e7eb' }, type: MarkerType.ArrowClosed, width: 20, height: 20, color: "#e5e7eb" },
        "label": "", "labelStyle": { fill: '#e5e7eb', fontWeight: 'bold' }, "labelBg": { fill: '#fafaf9' }, animated: true, type: 'smoothstep',
    }


    function decideEdgePreview(source, target, temp) {

        let sourceNode = nodes.find((node) => node.id === source);
        let targetNode = nodes.find((node) => node.id === target);
        let edgeType = JSON.parse(JSON.stringify(normalEdge));// Default edge attributes; create deep copy to avoid read-only error

        // if the node being dragged is temporary and if the target preq title and id is the same as the source nodes title and id
        if (temp && targetNode.data.preq.includes(sourceNode.data.fullTitle) && targetNode.data.preq.includes(sourceNode.data.id)) {
            // then set it to a temporary edge
            edgeType = JSON.parse(JSON.stringify(tempEdge));
            return edgeType
        }
        // if it is not a temporary node (i.e. the node being dragged is placed on canvas) 
        else if (!temp && targetNode.data.preq.includes(sourceNode.data.fullTitle) && targetNode.data.preq.includes(sourceNode.data.id)) {
            return edgeType // then set it to the normal edge
        }
        else {
            // return null if the source course is not a preq to target and it is not a temporary edge 
            return null;
        }
    }

    /**
     * @TODO Optomize deep copying by creating a custom edge instead
     * 
     * Handles conditionally rendering the type of edge between nodes
     * @param {String} source source node
     * @param {String} target target node
     */
    function decideEdge(source, target, temp) {

        let sourceNode = nodes.find((node) => node.id === source);
        let targetNode = nodes.find((node) => node.id === target);
        let edgeType = JSON.parse(JSON.stringify(normalEdge));// Default edge attributes; create deep copy to avoid read-only error
        // console.log("TEST", sourceNode.data.fullTitle + " " + sourceNode.data.id);

        // if none of the following are defined just display a normal edge
        if (!sourceNode || !sourceNode.data || !targetNode || !targetNode.data || !sourceNode.data.id || !sourceNode.data.id) {
            return edgeType;
        }

        // checks if either the prereq string DOES NOT contain the fullTitle or the prereq string DOES NOT includes the id
        if ((!targetNode.data.preq.includes(sourceNode.data.fullTitle) || !targetNode.data.preq.includes(sourceNode.data.id))) {
            // set the edge type to warningEdge
            edgeType = JSON.parse(JSON.stringify(warningEdge));
            edgeType.label = "❌ Invalid Prereq" // checks if either the prereq string DOES NOT contain the fullTitle or the prereq string DOES NOT includes the id
            console.log(Object.isFrozen(edgeType.style)); // Check if style object is frozen
            console.log(Object.isSealed(edgeType.style));
        }
        // checks if the course ids are in the wrong order. ex 200 before 300 level
        if (parseInt(sourceNode.data.id[0]) > parseInt(targetNode.data.id[0])) {
            edgeType = JSON.parse(JSON.stringify(warningEdge));
            edgeType.label = `❌ ${sourceNode.data.id[0]}00 level before ${targetNode.data.id[0]}00 level`;
            console.log(Object.isFrozen(edgeType.style)); // Check if style object is frozen
            console.log(Object.isSealed(edgeType.style));
        }
        return edgeType
    }


    /**
     * Callback for setting the edges between nodes
     */
    const onConnect = useCallback(
        (params) => {

            const { source, target } = params;

            // console.log("Source ", source);
            // console.log("Target ", target);

            let edgeType = decideEdge(source, target);

            const newEdge = {
                ...params,
                markerEnd: edgeType.markerEnd,
                style: edgeType.style,
                label: edgeType.label,
                labelStyle: edgeType.labelStyle,
                labelBgStyle: edgeType.labelBg,
                animated: edgeType.animated,
                type: edgeType.type,
            };
            setEdges((eds) => addEdge(newEdge, eds));
        },
        [setEdges, nodes]); // call onConnect again when the dependincies setEdges or nodes updates 


    /* ----------- Functions to handle dragging nodes in close proximity to others (Proximity connect) ---------- */

    /**
     * Function to calculate the closest proximity node 
     */
    const getClosestEdge = useCallback((node) => {
        const { nodeInternals } = store.getState();
        const storeNodes = Array.from(nodeInternals.values());

        const closestNode = storeNodes.reduce((res, n) => {
            if (n.id !== node.id) {
                //calculate the distance between the closest node node being dragged 
                const dx = n.positionAbsolute.x - node.positionAbsolute.x;
                const dy = n.positionAbsolute.y - node.positionAbsolute.y;
                const d = Math.sqrt(dx * dx + dy * dy);
                const horizontalDistance = Math.abs(dx); // additional parameter to fix the issue of nodes connecting when right under each other

                if (d < res.distance && d < MIN_DISTANCE && horizontalDistance > MIN_HORZ) {
                    res.distance = d;
                    res.node = n;
                }
            }
            return res;
        }, { distance: Number.MAX_VALUE, node: null, }); //accumulator initial value

        if (!closestNode.node) {
            return null;
        }

        const closeNodeIsSource = closestNode.node.positionAbsolute.x < node.positionAbsolute.x;

        return {
            id: closeNodeIsSource
                ? `${closestNode.node.id}-${node.id}`
                : `${node.id}-${closestNode.node.id}`,
            source: closeNodeIsSource ? closestNode.node.id : node.id,
            target: closeNodeIsSource ? node.id : closestNode.node.id,
        };
    }, []);

    /**
    * Handles when dragging a node in close proximity to another
    */
    const onNodeDrag = useCallback((_, node) => {
        const closeEdge = getClosestEdge(node); // get the closest edge to the node being dragged

        setEdges((es) => {
            const nextEdges = es.filter((e) => e.className !== 'temp'); // filter out non-temp edges

            if (closeEdge &&
                !nextEdges.find((ne) => ne.source === closeEdge.source && ne.target === closeEdge.target,)
            ) {
                const edgeType = decideEdgePreview(closeEdge.source, closeEdge.target, true)

                if (edgeType !== null) { // if the edtype is not null so that there is a temporary edge preview

                    const updatedEdge = {
                        ...closeEdge,
                        markerEnd: edgeType.markerEnd,
                        style: edgeType.style,
                        label: edgeType.label,
                        labelStyle: edgeType.labelStyle,
                        labelBgStyle: edgeType.labelBg,
                        animated: edgeType.animated,
                        type: edgeType.type,
                    };

                    updatedEdge.className = 'temp' // indicator for filter so that the temp edge disconnects when a closer node is found
                    nextEdges.push(updatedEdge);
                }
            }
            return nextEdges;
        });
    }, [getClosestEdge, setEdges, nodes]);


    /**
     * Handles when dragging a node in close proximity to another ENDS
     */
    const onNodeDragStop = useCallback((_, node) => {
        const closeEdge = getClosestEdge(node);

        setEdges((es) => {
            const nextEdges = es.filter((e) => e.className !== 'temp'); // filter out non-temp edges

            if (closeEdge &&
                !nextEdges.find((ne) => ne.source === closeEdge.source && ne.target === closeEdge.target,)
            ) {
                const edgeType = decideEdgePreview(closeEdge.source, closeEdge.target)

                if (edgeType !== null) { // if it is not null so that the source is preq of target, place the normalEdge
                    const updatedEdge = {
                        ...closeEdge,
                        markerEnd: edgeType.markerEnd,
                        style: edgeType.style,
                        label: edgeType.label,
                        labelStyle: edgeType.labelStyle,
                        labelBgStyle: edgeType.labelBg,
                        animated: edgeType.animated,
                        type: edgeType.type,
                    };
                    nextEdges.push(updatedEdge);
                }
            }
            return nextEdges;
        });
    }, [getClosestEdge, nodes]);


    /* ------------------ Functions to handle dragging nodes from node drawer ------------------ */

    /**
     * Handles when the node is finished being dragged onto the canvas from the nodeDrawer 
     */
    const onDragOver = useCallback((event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    }, [])

    /**
     * Handles when a node is dragged from the nodeDrawer and dropped onto the canvas
     */
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

    }, [reactFlowInstance]);

    useEffect(() => {
        // console.log(initialNodes);
    }, [])

    return (
        <>
            <div className="w-full h-full bg-stone-50 shadow-inner relative">
                {/* <Timeline /> */}
                {/* <ReactFlowProvider> */}
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
                        onNodeDrag={onNodeDrag}
                        onNodeDragStop={onNodeDragStop}
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
                {/* </ReactFlowProvider> */}
            </div >
        </>
    )
}

export default Canvas