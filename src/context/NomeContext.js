import { createContext, useState } from "react";

export const NomeContext = createContext();

export const NomeContextProvider = ({children}) => {
    const [colaborador, setColaborador] = useState({});

    return (
        <NomeContext.Provider value={{ colaborador, setColaborador }}>
            {children}
        </NomeContext.Provider>
    )
};