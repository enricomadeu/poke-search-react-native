import React, { useEffect } from "react";
import styles from "./styles"
import { usePoke } from "../../hooks/usePoke"
import { TouchableHighlight, View, Text, Image } from "react-native"

export default function PokeCard({data}) {
    
    // Define a numeração do pokemon
    const url = data.item.url;
    const pokemonIndex = url.split('/')[url.split('/').length - 2];
    // Pega a imagem do pokemon de acordo com sua numeração
    const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`;

    return(
        <TouchableHighlight style={styles.gridButton}>
            <View style={[styles.grid, {backgroundColor: '#0071b9'}]}>
                <Text style={styles.indexFont}>{pokemonIndex}</Text>
                <Image resizeMode="contain" source={{uri: imageUrl}} style={styles.imagem}/>
                <Text style={styles.fonte}>{data.item.name}</Text>
            </View>
        </TouchableHighlight>
    ); 
}