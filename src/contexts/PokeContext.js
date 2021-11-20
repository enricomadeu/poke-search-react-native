import React, { createContext } from "react";

export const PokeContext = createContext({})

export default function PokeProvider({children}) {
    
    async function getPokeApi(param){
        const response = await fetch(`https://pokeapi.co/api/v2/${param}/?offset=0&limit=1118`)
        const data = await response.json()
        
        return data
    }    

    return (
        <PokeContext.Provider value={{getPokeApi}}>
            { children }
        </PokeContext.Provider>
    )
}
