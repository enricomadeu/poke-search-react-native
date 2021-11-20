import React, { useState, useEffect } from "react"
import { View, FlatList   } from 'react-native'
import styles from "./styles"
import { useNavigation, useRoute } from "@react-navigation/native"
import Background from "../../components/Background"
import Header from "../../components/Header"
import { usePoke } from "../../hooks/usePoke"
import PokeCard from "../../components/PokeCard"

function Pokemons() {

  const route = useRoute(),
  {name} = route.params,
  [pokemon, setPokemon] = useState([])  

  let pokemonIndex = 1

  const {getPokeApi} = usePoke()

    useEffect(() => {
        async function getPokemons(){
            const response = await getPokeApi('pokemon')

            setPokemon(response)
        }
        getPokemons()
    }, [])


  return (
    <Background>
        <Header name={name}/>
        <View style={styles.view}>
            <FlatList 
                numColumns={2}
                data={pokemon.results}
                extraData={pokemonIndex}
                refreshing={true}
                renderItem={(item) => <PokeCard data={item}/>}
                keyExtractor={(item) => item.name}/>
        </View>
    </Background>
  );
}

export default Pokemons