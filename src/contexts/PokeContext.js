import React, { createContext, useState } from "react";
import { Alert } from "react-native"

export const PokeContext = createContext({})

export default function PokeProvider({children}) {

    async function getId(value){
        // Pega o id do pokemon de acordo com o nome ou id digitado
        const check = await fetch(`https://pokeapi.co/api/v2/pokemon/${value}`)
        .then((response) => { return response.json()})
        .catch(() => { return false;});
        
        const valueId = parseInt((check.id-1));

        // Faz a busca utilizando o id pesquisado
        if(valueId){
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${valueId}&limit=${1118-valueId}`).then(function(data){ return data.json()});
            return response
        }else{
            Alert.alert("Erro na busca!", "O nome/ID digitado não foi encontrado!");
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1118`).then(function(data){ return data.json()});
            return response
        }
    }
    
    async function getPokeApi(param){
        const response = await fetch(`https://pokeapi.co/api/v2/${param}/?offset=0&limit=1118`).then(function(data){ return data.json()})
        return response
    }

    return (
        <PokeContext.Provider value={{getPokeApi, getId}}>
            { children }
        </PokeContext.Provider>
    )
}
