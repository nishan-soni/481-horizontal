const onConnect = useCallback(
    (params) => {

        const { source, target } = params;

        let edgeType = ''
        let style = {
            strokeWidth: 1.5,
            stroke: '#ef4444',
            labelStyle: { fill: '#ef4444', fontWeight: 'bold'},
        }
        let markerEnd = {
            style: {stroke: '#b9b9be'},
            type: MarkerType.ArrowClosed,
            width: 20,
            height: 20,
            color: "red"
        }
        let label = "invalid"
        let sourceNode = nodes.find((node) => node.id === source);
        let targetNode = nodes.find((node) => node.id === target);

        // try {
        //     console.log(sourceNode);
        // } catch (error) {
        //     console.log("source node undefined");
        // }

        if (sourceNode && targetNode) {
            console.log(sourceNode.data.title + " " + sourceNode.data.id);
            // show warning edge if the source node is not one of the pre-requisites to the target node
            if (!targetNode.data.preq.includes(sourceNode.data.title + " " + sourceNode.data.id)) {
                // if (targetNode.data.preq.includes(sourceNode.data.title + sourceNode.data.id)) {
                // if (parseInt(sourceNode.data.id) > parseInt(targetNode.data.id)) {
                console.log("Warning-edge");
                edgeType = ''
                markerEnd = {
                    style: {stroke: '#b9b9be'},
                    type: MarkerType.ArrowClosed,
                    width: 20,
                    height: 20,
                    color: "red"
                }
                label = "invalid"

            }
        }

        const newEdge = {
            ...params,
            type: edgeType,
            markerEnd: markerEnd,
            style: style,
            label: label
        };
        setEdges((eds) => addEdge(newEdge, eds));
    },
    [setEdges]
);