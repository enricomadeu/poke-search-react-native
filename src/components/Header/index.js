import React from "react";
import { View, Text, TouchableHighlight, Image, Alert } from "react-native"
import styles from "./styles"
import { useNavigation } from "@react-navigation/native"
import Globais from "../Global"

export default function Header(props) {

    const {name} = props,
    {navigate} = useNavigation()

    const showAlert = () => Alert.alert(

            "Logout!",
            "Deseja mesmo fazer logout?",
            [
            {
                text: "Cancel",
                style: "cancel",
            },
            {
                text: "Logout",
                onPress: () => saveBag(),
                style: 'destructive'
            }
            ],
            {
            cancelable: true,
            }
    );

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

        Alert.alert(
            "Usuário deslogado com sucesso!"
            )
    }
    
    return (        
        <View style={styles.headerView}>
            <Text style={styles.headerText}>{name.toUpperCase()}</Text>
            <TouchableHighlight onPress={showAlert} style={styles.headerImage}>
                <Image source={require('../../assets/log-out.png')} style={{width: 35, height: 35}}/>
            </TouchableHighlight>
        </View>
    )
}