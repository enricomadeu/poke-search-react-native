import React, { useState, useEffect } from "react"
import { Text, TextInput, View, TouchableHighlight, Image, Alert } from 'react-native'
import styles from "./styles"
import { useNavigation, useRoute } from "@react-navigation/native"
import Background from "../../components/Background"

function Home() {

  const {navigate} = useNavigation(),
  route = useRoute(),
  {name} = route.params

  useEffect(() => {
    async function getPokeApi(){
        const response = await fetch('https://pokeapi.co/api/v2/pokemon')
        const json = await response.json()
        console.log(json)
    }
    getPokeApi()
  }, [])

  return (
    <Background>
        <View style={styles.headerView}>
            <Text style={styles.headerText}>{name.toUpperCase()}</Text>
            <TouchableHighlight onPress={() => navigate("Login")} style={styles.headerImage}>
                <Image source={require('../../assets/log-out.png')} style={{width: 45, height: 45}}/>
            </TouchableHighlight>
        </View>
        <View style={styles.view}>
            <Image source={require('../../assets/pokemon-logo.png')} style={styles.logo}/>
            <TouchableHighlight style={styles.button}>
                <Text style={styles.buttonText}>POKEMONS</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.button}>
                <Text style={styles.buttonText}>HABILIDADES</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.button}>
                <Text style={styles.buttonText}>TIPOS</Text>
            </TouchableHighlight>
        </View>
    </Background>
  );
}

export default Home