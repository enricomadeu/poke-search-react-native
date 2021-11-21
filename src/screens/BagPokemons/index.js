import React, { useState, useEffect } from "react"
import { View, FlatList, TouchableHighlight, Text, TextInput, Image } from 'react-native'
import styles from "./styles"
import { useNavigation, useRoute } from "@react-navigation/native"
import Background from "../../components/Background"
import Header from "../../components/Header"
import { usePoke } from "../../hooks/usePoke"
import PokeCard from "../../components/PokeCard"
import Globais from "../../components/Global"

function BagPokemons() {

  const {navigate, goBack} = useNavigation(),
  route = useRoute(),
  {name} = route.params,
  [pokemon, setPokemon] = useState([])

  useEffect(() => {
    function getPokemonsBag(){
      setPokemon(Globais.currentBag.pokemons)
    }
    getPokemonsBag()
  }, [Globais.currentBag.pokemons])  

  return (
    <Background>
        <Header name={name}/>
        <View style={styles.view}>
          <Text style={styles.welcomeText}>MEUS POKEMONS</Text>
          <FlatList 
            numColumns={2}
            data={pokemon}
            refreshing={true}
            renderItem={(item) => <PokeCard data={item} name={name} pageType={true}/>}
            keyExtractor={(item) => item.name}
            style={{width: '100%'}}
          />
          <TouchableHighlight style={styles.button} onPress={() => goBack()}>
            <Text style={styles.buttonText}>
              VOLTAR
            </Text>
          </TouchableHighlight>
        </View>
    </Background>
  );
}

export default BagPokemons