import React, { useState, useEffect } from "react"
import { View, FlatList, TouchableHighlight, Text, TextInput, Image } from 'react-native'
import styles from "./styles"
import { useNavigation, useRoute } from "@react-navigation/native"
import Background from "../../components/Background"
import Header from "../../components/Header"
import { usePoke } from "../../hooks/usePoke"
import CheckBox from '@react-native-community/checkbox'
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
    const response = await getId(search.toLowerCase())

    setPokemon(response.results)
  }

  function PokemonCards(data){
    // Define a numeração do pokemon
    const url = data.item.url;
    const pokeIndex = url.split('/')[url.split('/').length - 2];
    // Pega a imagem do pokemon de acordo com sua numeração
    const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokeIndex}.png?raw=true`;

    return(
        <View style={styles.gridButton}>
            <View style={[styles.grid, {backgroundColor: '#0071b9'}]}>
                <Text style={styles.indexFont}>{pokeIndex}</Text>
                <CheckBox style={styles.checkBox} tintColors={{ true: '#FFCB05', false: 'white'}}  />
                <Image resizeMode="contain" source={{uri: imageUrl}} style={styles.imagem}/>
                <Text style={styles.fonte}>{data.item.name}</Text>
            </View>
        </View>
    ); 
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
          <View style={styles.horizontalViewSearch}>
            <TextInput placeholder="PESQUISAR POKEMON" placeholderTextColor="#d6d6d6" style={styles.textInput} textAlign="center" value={search} onChangeText={setSearch}/>
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
          <View style={styles.horizontalView}>
            <TouchableHighlight style={styles.button} onPress={() => goBack()}>
              <Text style={styles.buttonText}>
                VOLTAR
              </Text>
            </TouchableHighlight>            
            <TouchableHighlight style={styles.button} onPress={() => goBack()}>
              <Text style={styles.buttonText}>
                SELECIONAR
              </Text>
            </TouchableHighlight> 
          </View>
        </View>
    </Background>
  );
}

export default Pokemons