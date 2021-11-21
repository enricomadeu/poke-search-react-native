import React, { useState, useEffect } from "react"
import { View, FlatList, TouchableHighlight, Text, TextInput, Image } from 'react-native'
import styles from "./styles"
import { useNavigation, useRoute } from "@react-navigation/native"
import Background from "../../components/Background"
import Header from "../../components/Header"
import { usePoke } from "../../hooks/usePoke"
import PokeCard from "../../components/PokeCard"

function Pokemons() {

  const {navigate, goBack} = useNavigation(),
  route = useRoute(),
  {name} = route.params,
  [pokemon, setPokemon] = useState([]),
  [search, setSearch] = useState("")  

  let pokemonIndex = 1

  const {getPokeApi, getId} = usePoke()

  async function searchPokemon(){
    const response = await getId(search.toLowerCase(), 'pokemon', 1118)

    setPokemon(response.results)
  }

  useEffect(() => {
      async function getPokemons(){
          const response = await getPokeApi('pokemon', 1118)
          
          setPokemon(response.results)
      }
      getPokemons()
  }, [])


  return (
    <Background>
        <Header name={name}/>
        <View style={styles.view}>
          <View style={styles.horizontalViewSearch}>
            <TextInput placeholder="PESQUISAR POKEMON" placeholderTextColor="#d6d6d6" style={styles.textInput} textAlign="left" value={search} onChangeText={setSearch}/>
            <TouchableHighlight style={styles.searchButton} onPress={searchPokemon}>
              <Image source={require('../../assets/loupe.png')} resizeMode='contain' style={styles.image}/>
            </TouchableHighlight>
          </View>
          <FlatList 
            numColumns={2}
            data={pokemon}
            extraData={pokemonIndex}
            refreshing={true}
            renderItem={(item) => <PokeCard data={item} name={name}/>}
            keyExtractor={(item) => item.name}
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

export default Pokemons