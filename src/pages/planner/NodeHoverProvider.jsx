import React, { createContext, useEffect, useState } from "react";

const NodeHoverContext = createContext();

// children are the nested components that we wrap with the DataProvider
export const NodeHoverProvider = ({ children }) => {

    const [isHidden, setIsHidden] = useState(false);
    
    useEffect(() => {
        console.log(isHidden);
    },[isHidden, setIsHidden])

    // provide the data state to all components wrapped inside this provider
    return (
        <NodeHoverContext.Provider value={{ isHidden, setIsHidden }}>
            {children}
        </NodeHoverContext.Provider>
    )

};

// custom hook to access the data from any component
export const useNodeHover = () => React.useContext(NodeHoverContext); // initialize the useContext hook with NodeHoverContext