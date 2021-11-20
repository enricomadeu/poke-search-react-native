import React, { createContext } from "react";

export const PokeContext = createContext({})

export default function PokeProvider({children}) {
    
    return (
        <PokeContext.Provider value={{}}>
            { children }
        </PokeContext.Provider>
    )
}
