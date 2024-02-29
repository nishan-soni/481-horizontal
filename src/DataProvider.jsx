import React, { createContext, useEffect, useState } from "react";

const DataContext = createContext();

// children are the nested components that we wrap with the DataProvider
export const DataProvider = ({ children }) => {

    const [data, setData] = useState(null);

    // define state to hold the data fetched from the json
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('https://raw.githubusercontent.com/nishan-soni/481-horizontal/master/src/UserData.json');
            const jsonData = await response.json();
            setData(jsonData);
            console.log("Json:", jsonData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    // provide the data state to all components wrapped inside this provider
    return (
        <DataContext.Provider value={{ data }}>
            {children}
        </DataContext.Provider>
    )

};

// custom hook to access the data from any component
export const useData = () => React.useContext(DataContext); // initialize the useContext hook with DataContext