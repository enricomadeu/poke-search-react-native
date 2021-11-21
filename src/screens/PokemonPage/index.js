import React, { useState, useEffect } from "react"
import { View, TouchableHighlight, Text, TextInput, Image, ActivityIndicator } from 'react-native'
import styles from "./styles"
import { useNavigation, useRoute } from "@react-navigation/native"
import Background from "../../components/Background"
import Header from "../../components/Header"
import { usePoke } from "../../hooks/usePoke"

function Pokemons() {

    const TYPE_COLORS = {
        bug: '#dced51',
        dark: '#4f3a2d',
        dragon: '#755edf',
        electric: '#f5c038',
        fairy: '#f4b1f4',
        fighting: '#382b38',
        fire: '#ff673d',
        flying: '#a3b3f7',
        ghost: '#6060b2',
        grass: '#9ae65e',
        ground: '#d3b357',
        ice: '#a3e7fd',
        normal: '#c8c4bc',
        poison: '#934594',
        psychic: '#ed4882',
        rock: '#b9a156',
        steel: '#b5b5c3',
        water: '#3295f6',
    };

    const {navigate, goBack} = useNavigation(),
    route = useRoute(),
    {pokemonIndex, name} = route.params,
    {getPokemon} = usePoke(),    
    [themeColor, setThemeColor] = useState(""),
    [currentPokemon, setCurrentPokemon] = useState({
        elementos: [],
        nome: '',
        descricao: '',
    })

    useEffect(() => {
        async function getFullPokeInformation(){
            const response = await getPokemon(pokemonIndex)
            const species = await await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonIndex}`).then((data) => { return data.json()})

            storageInformation(response, species)
        }
        getFullPokeInformation()
    }, [])

    function storageInformation(data, species){

        let nome = data.name, descricao

        const types = data.types.map(type => type.type.name)
        setThemeColor(`${TYPE_COLORS[types[types.length-1]]}`)

        species.flavor_text_entries.some(flavor => {
            if (flavor.language.name === 'en') descricao = flavor.flavor_text.replace(/\s/g, ' ');
        })

        setCurrentPokemon({
            nome: nome.toUpperCase(),
            descricao: descricao
        })

    }

    if(!themeColor){
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <ActivityIndicator size="large" color="#0071b9"/>
            </View>
        )
    }else{
        return (
            <View style={{flex: 1, backgroundColor: themeColor}}>
                <View style={[styles.headerView]}>
                    <TouchableHighlight onPress={() => goBack()} style={styles.headerBackImage}>
                        <Image source={require('../../assets/back-arrow.png')} style={{width: 45, height: 45}}/>
                    </TouchableHighlight>
                    <Text style={styles.headerText}>{name.toUpperCase()}</Text>
                    <TouchableHighlight onPress={() => navigate("Login")} style={styles.headerLogOutImage}>
                        <Image source={require('../../assets/log-out.png')} style={{width: 45, height: 45}}/>
                    </TouchableHighlight>
                </View>
                <View style={styles.view}>
                    <Image source={{uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonIndex}.png?raw=true`}} resizeMode='contain' style={styles.image}/>
                    <View style={styles.contentView}>
                        <Text style={[styles.title, {color: themeColor}]}>{currentPokemon.nome}</Text>
                        <Text style={styles.textDescription}>{currentPokemon.descricao}</Text>
                    </View>
                </View>
            </View>
        );
    }


}

export default Pokemons