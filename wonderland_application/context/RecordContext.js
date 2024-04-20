import { createContext, useState } from "react";

export const RecordContext = createContext()

export const RecordContextProvider = ({children}) => {
    const [ctA,setCountA] = useState(0);
    const [ctB,setCountB] = useState(0);
    const [activeOption, setActiveOption] = useState(null);

    const handleClickCountA = (option) => {
        setCountA(prev=>prev +1)
        setActiveOption(option)
    }

    const handleClickCountB = (option) => {
        setCountB(prev=>prev +1)
        setActiveOption(option)
    }

    return (
        <RecordContext.Provider value={{ctA, ctB, handleClickCountA, handleClickCountB, activeOption, setActiveOption}}> 
            {children}
        </RecordContext.Provider>
    )
}
