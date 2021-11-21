import React, { createContext, useState } from "react";
import { Alert } from "react-native"

export const PokeContext = createContext({})

export default function PokeProvider({children}) {

    async function getSpecific(route, id){

        const pokemon = await fetch(`https://pokeapi.co/api/v2/${route}/${id}`).then((response) => { return response.json() })

        return pokemon
    }

    async function getId(id ,route, limit){
        // Pega o id do pokemon de acordo com o nome ou id digitado
        const check = await fetch(`https://pokeapi.co/api/v2/${route}/${id}`)
        .then((response) => { return response.json()})
        .catch(() => { return false;});
        
        const valueId = parseInt((check.id-1));

        // Faz a busca utilizando o id pesquisado
        if(valueId){
            const response = await fetch(`https://pokeapi.co/api/v2/${route}/?offset=${valueId}&limit=${limit-valueId}`).then((data) => { return data.json()});
            return response
        }else{
            Alert.alert("Erro na busca!", "O nome/ID digitado não foi encontrado!");
            const response = await fetch(`https://pokeapi.co/api/v2/${route}/?offset=0&limit=${limit}`).then((data) => { return data.json()});
            return response
        }
    }
    
    async function getPokeApi(route, limit){
        const response = await fetch(`https://pokeapi.co/api/v2/${route}/?offset=0&limit=${limit}`).then((data) => { return data.json()})
        return response
    }

    return (
        <PokeContext.Provider value={{getPokeApi, getId, getSpecific}}>
            { children }
        </PokeContext.Provider>
    )
}
