import React, { useState, useEffect } from "react"
import { View, TouchableHighlight, Text, Image, ActivityIndicator, Switch } from 'react-native'
import styles from "./styles"
import { useNavigation, useRoute } from "@react-navigation/native"
import { usePoke } from "../../hooks/usePoke"
import Globais from "../../components/Global"

function PokemonsPage() {

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
    {getSpecific} = usePoke(),    
    [themeColor, setThemeColor] = useState(""),
    [currentPokemon, setCurrentPokemon] = useState({
        nome: '',
        descricao: '',
    }),
    [switchValue, setSwitchValue] = useState(false)
    

    useEffect(() => {
        async function getFullPokeInformation(){
            const response = await getSpecific('pokemon', pokemonIndex)
            const species = await await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonIndex}`).then((data) => { return data.json()})

            storageInformation(response, species)
        }
        getFullPokeInformation()
    }, [])

    function storageInformation(data, species){

        let descricao

        const types = data.types.map(type => type.type.name)
        setThemeColor(`${TYPE_COLORS[types[0]]}`)

        species.flavor_text_entries.some(flavor => {
            if (flavor.language.name === 'en') descricao = flavor.flavor_text.replace(/\s/g, ' ');
        })

        setCurrentPokemon({
            nome: data.name.toUpperCase(),
            descricao: descricao
        })

        if(Globais.currentBag.pokemons.some(pokemon => pokemon.nome === data.name.toUpperCase())){
            setSwitchValue(true)
        }else{
            setSwitchValue(false)
        }
    }
    
    
    function pokeToBag(){

        setSwitchValue(!switchValue);

        if(!switchValue){
            Globais.currentBag.pokemons.push(currentPokemon)
        }else{
            Globais.currentBag.pokemons.forEach((pokemon, index) => {
                if(pokemon.nome === currentPokemon.nome){
                    Globais.currentBag.pokemons.splice(index, 1)
                }
            })
        }
        
    }

    function convertHex(hexCode,opacity){
        var hex = hexCode.replace('#','');
    
        if (hex.length === 3) {
            hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
        }
    
        var r = parseInt(hex.substring(0,2), 16),
            g = parseInt(hex.substring(2,4), 16),
            b = parseInt(hex.substring(4,6), 16);
    
        return 'rgba('+r+','+g+','+b+','+opacity/100+')';
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
                        <View style={styles.horizontalView}>
                            <Text style={styles.addText}>{switchValue ? "Remove from" : "Add to"} bag</Text>
                            <Switch
                                trackColor={{ false: convertHex('#808080', 50), true: convertHex(themeColor, 50)}}
                                thumbColor={switchValue ? themeColor : '#808080'}
                                value={switchValue}
                                onValueChange={pokeToBag}
                            />
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

export default PokemonsPage