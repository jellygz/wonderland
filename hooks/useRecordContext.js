import { RecordContext } from "../context/RecordContext";
import { useContext } from "react";

export const useRecordContext = () => {
    const context = useContext(RecordContext)

    if(!context){
        throw new Error('useRecordContext must be inside an RecordContext Provider.')
    }

    return context
}