import { createContext, useState } from "react";

export const RecordContext = createContext()

export const RecordContextProvider = ({children}) => {
    const [ctA,setCountA] = useState(0);
    const [ctB,setCountB] = useState(0);

    const handleClickCountA = () => {
        setCountA(prev=>prev +1)
    }

    const handleClickCountB = () => {
        setCountB(prev=>prev +1)
    }

    return (
        <RecordContext.Provider value={{ctA, ctB, handleClickCountA, handleClickCountB}}> 
            {children}
        </RecordContext.Provider>
    )
}
