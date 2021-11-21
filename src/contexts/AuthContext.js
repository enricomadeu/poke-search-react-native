import React, { createContext } from "react";
import { Alert } from "react-native"
import { useNavigation } from "@react-navigation/native";
import Globais from "../components/Global"

export const AuthContext = createContext({})

export default function AuthProvider({children}) {

    const {navigate} = useNavigation()

    const users = [["Joao", "abc1r1"],  ["Jose", "fy63u*"], ["MaLu", "th678"],  ["Luck", "lsji48se"], ["Hansol",  "stwr478"], ["a", "a"]]

    function signIn(name, password){        
        for(let i = 0; i < users.length; i++){
            if(users[i][0] == name && users[i][1] == password){
                Alert.alert("Usuário logado com sucesso!")
                navigate("Home", {name})

                if(Globais.allBags.some(bag => bag.user === name)){
                    Globais.allBags.forEach(bag => {
                        if(bag.user === name){
                            Globais.currentBag = {
                                user: name,
                                pokemons: bag.pokemons,
                                moves: bag.moves
                            }
                        }
                    })
                }else{
                    Globais.allBags.push({
                        user: name,
                        pokemons: [],
                        moves: []
                    })
                    Globais.allBags.forEach(bag => {
                        if(bag.user === name){
                            Globais.currentBag = {
                                user: name,
                                pokemons: bag.pokemons,
                                moves: bag.moves
                            }
                        }
                    })
                }
                
                i = users.lengh+1
            }else if( i + 1 == users.length){
                Alert.alert("Usuário ou Senha inválidos!")
            }
        }
    }

    function signUp(name, password){

        users.push([name, password])
        
        Alert.alert("Usuário registrado com sucesso!")
    }

    return(
        <AuthContext.Provider value={{users, signIn, signUp}}>
            {children}
        </AuthContext.Provider>
    )
}