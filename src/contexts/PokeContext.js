import React, { createContext, useState } from "react";
import { Alert } from "react-native"

export const PokeContext = createContext({})

export default function PokeProvider({children}) {  

    async function especificPage(cont){

        // Puxa os dados da página específica da busca
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${cont}&limit=${1118-cont}`);
        const data = await response.json();

        return data
    };

    async function getId(value){
        // Pega o id do pokemon de acordo com o nome ou id digitado
        const check = await fetch(`https://pokeapi.co/api/v2/pokemon/${value}`);
        const data = await check.json()
        const valueId = parseInt((data.id-1));

        // Faz a busca utilizando o id pesquisado
        if(valueId){
            if(valueId < 0){
                Alert.alert("Erro na busca!", "Não existem pokemons com ID menores ou iguais à zero!")
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1118`);
                const data = await response.json();

                return data
            }else{
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${valueId}&limit=${1118-valueId}`);
                const data = await response.json();

                return data
            }
        }else{
            Alert.alert("Erro na busca!", "O nome/ID digitado não foi encontrado!");
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1118`);
            const data = await response.json();

            return data
        }
    }
    
    async function getPokeApi(param){
        const response = await fetch(`https://pokeapi.co/api/v2/${param}/?offset=0&limit=1118`)
        const data = await response.json()
        
        return data
    }

    return (
        <PokeContext.Provider value={{getPokeApi, getId}}>
            { children }
        </PokeContext.Provider>
    )
}
