import { createContext, useState } from "react";

export const RecordContext = createContext()

export const RecordContextProvider = ({children}) => {
    const [activeOption, setActiveOption] = useState(null);
    const [ selectedOptions, setSelectedOptions ] = useState([]);

    return (
        <RecordContext.Provider value={{
            activeOption, 
            setActiveOption, 
            selectedOptions, 
            setSelectedOptions 
        }}> 
            {children}
        </RecordContext.Provider>
    )
}
