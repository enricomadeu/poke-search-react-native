import React, { useEffect, useState } from "react";
import styles from "./styles"
import { useNavigation } from "@react-navigation/native"
import { usePoke } from "../../hooks/usePoke"
import { TouchableHighlight, View, Text, Image } from "react-native"
import CheckBox from '@react-native-community/checkbox'

export default function PokeCard({data, name, pageType}) {
    
    const {navigate} = useNavigation(),
    [selectedCheckBox, setSelectedCheckBox] = useState(false) 

    function selectPokemon(pokemonIndex){
        
        setSelectedCheckBox(!selectedCheckBox)

        setTimeout(() => {navigate("PokemonPage", {pokemonIndex, name, pageType})}, 500)

        setTimeout(() => {setSelectedCheckBox(false)}, 1000)
    }

    // Define a numeração do pokemon
    const url = data.item.url ? data.item.url : false;
    const pokemonIndex = url ? url.split('/')[url.split('/').length - 2] : data.item.id;
    // Pega a imagem do pokemon de acordo com sua numeração
    const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`;

    return(
        <View style={styles.gridButton}>
            <View style={[styles.grid, {backgroundColor: '#0071b9'}]}>
                <Text style={styles.indexFont}>{pokemonIndex}</Text>
                <CheckBox style={styles.checkBox} tintColors={{ true: '#FFCB05', false: 'white'}} value={selectedCheckBox} onValueChange={() => selectPokemon(pokemonIndex)}/>
                <Image resizeMode="contain" source={{uri: imageUrl}} style={styles.imagem}/>
                <Text style={styles.fonte}>{data.item.name.charAt(0).toUpperCase() + data.item.name.slice(1)}</Text>
            </View>
        </View>
    ); 
}