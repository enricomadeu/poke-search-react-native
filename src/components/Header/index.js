import React from "react";
import { View, Text, TouchableHighlight, Image } from "react-native"
import styles from "./styles"
import { useNavigation } from "@react-navigation/native"
import Globais from "../Global"

export default function Header(props) {

    const {name} = props,
    {navigate} = useNavigation()

    function saveBag(){

        Globais.allBags.forEach(user => {
            if(user.user == Globais.currentBag.user){
                user.pokemons = Globais.currentBag.pokemons
                user.moves = Globais.currentBag.moves
            }
        })

        Globais.currentBag = {
            user: '',
            pokemons: [],
            moves: []
        }
        
        navigate("Login")
    }
    
    return (        
        <View style={styles.headerView}>
            <Text style={styles.headerText}>{name.toUpperCase()}</Text>
            <TouchableHighlight onPress={saveBag} style={styles.headerImage}>
                <Image source={require('../../assets/log-out.png')} style={{width: 45, height: 45}}/>
            </TouchableHighlight>
        </View>
    )
}