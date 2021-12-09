import React, { useState, useEffect } from "react"
import { Text, TextInput, View, TouchableHighlight, Image, Alert } from 'react-native'
import styles from "./styles"
import { useNavigation, useRoute } from "@react-navigation/native"
import Background from "../../components/Background"
import Header from "../../components/Header"

function Home() {

  const {navigate} = useNavigation(),
  route = useRoute(),
  {name} = route.params

  return (
    <Background>
        <Header name={name}/>
        <View style={styles.view}>
            <Image source={require('../../assets/pokemon-logo.png')} style={styles.logo}/>
            <TouchableHighlight style={styles.button} onPress={() => navigate("Pokemons", {name})}>
                <Text style={styles.buttonText}>POKEMONS</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.button} onPress={() => navigate("Moves", {name})}>
                <Text style={styles.buttonText}>MOVES</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.button} onPress={() => navigate("BagPage", {name})}>
                <Text style={styles.buttonText}>MOCHILA</Text>
            </TouchableHighlight>
        </View>
    </Background>
  );
}

export default Home