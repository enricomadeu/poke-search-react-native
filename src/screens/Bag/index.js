import React, { useState, useEffect } from "react"
import { Text, TextInput, View, TouchableHighlight, Image, Alert } from 'react-native'
import styles from "./styles"
import { useNavigation, useRoute } from "@react-navigation/native"
import Background from "../../components/Background"
import Header from "../../components/Header"

function BagPage() {

  const {navigate, goBack} = useNavigation(),
  route = useRoute(),
  {name} = route.params,
  myBag = true

  return (
    <Background>
        <Header name={name}/>
        <View style={styles.view}>
            <Image source={require('../../assets/pokemon-logo.png')} style={styles.logo}/>
            <Text style={styles.welcomeText}>MOCHILA</Text>
            <TouchableHighlight style={styles.button} onPress={() => navigate("BagPokemons", {name})}>
                <Text style={styles.buttonText}>POKEMONS</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.button} onPress={() => navigate("BagMoves", {name})}>
                <Text style={styles.buttonText}>MOVES</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.button} onPress={() => goBack()}>
                <Text style={styles.buttonText}>VOLTAR</Text>
            </TouchableHighlight>
        </View>
    </Background>
  );
}

export default BagPage