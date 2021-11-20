import React, { useState, useEffect } from "react"
import { View, FlatList, TouchableHighlight, Text, TextInput } from 'react-native'
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
    const response = await getId(search)

    setPokemon(response.results)
  }

  useEffect(() => {
      async function getPokemons(){
          const response = await getPokeApi('pokemon')
          
          setPokemon(response.results)
      }
      getPokemons()
  }, [])


  return (
    <Background>
        <Header name={name}/>
        <View style={styles.view}>
          <TextInput placeholder="PESQUISAR POKEMON" style={styles.textInput} textAlign="center" value={search} onChangeText={setSearch}/>
          <FlatList 
            numColumns={2}
            data={pokemon}
            extraData={pokemonIndex}
            refreshing={true}
            renderItem={(item) => <PokeCard data={item}/>}
            keyExtractor={(item) => item.name}
          />
          <View style={styles.horizontalView}>
            <TouchableHighlight style={styles.button} onPress={() => goBack()}>
              <Text style={styles.buttonText}>
                VOLTAR
              </Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.button} onPress={searchPokemon}>
              <Text style={styles.buttonText}>
                PESQUISAR
              </Text>
            </TouchableHighlight>
          </View>
        </View>
    </Background>
  );
}

export default Pokemons