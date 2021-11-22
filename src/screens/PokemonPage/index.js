import React, { useState, useEffect } from "react"
import { View, TouchableHighlight, Text, Image, ActivityIndicator, Switch, Alert } from 'react-native'
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
    {pokemonIndex, name, pageType} = route.params,
    {getSpecific} = usePoke(),    
    [themeColor, setThemeColor] = useState(""),
    [currentPokemon, setCurrentPokemon] = useState({
        nome: '',
        descricao: '',
        index: pokemonIndex,
        item: []
    }),    
    [switchValue, setSwitchValue] = useState(false),
    [pokemon, setPokemon] = useState([])

    function storageInformation(data, species){

        let descricao

        const types = data.types.map(type => type.type.name)
        setThemeColor(`${TYPE_COLORS[types[0]]}`)

        species.flavor_text_entries.some(flavor => {
            if (flavor.language.name === 'en') descricao = flavor.flavor_text.replace(/\s/g, ' ');
        })

        setCurrentPokemon({
            nome: data.name.toUpperCase(),
            descricao: descricao,
            item: data.item
        })

        if(Globais.currentBag.pokemons.some(pokemon => pokemon.name === data.name)){
            setSwitchValue(true)
        }else{
            setSwitchValue(false)
        }

        setPokemon(data)
    }
    
    
    function pokeToBag(){

        setSwitchValue(!switchValue);

        if(!switchValue){
            Globais.currentBag.pokemons.push(pokemon)
        }else{
            Globais.currentBag.pokemons.forEach((pokemons, index) => {
                if(pokemons.name === pokemon.name){
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

    function pageBack(){
        if(pageType){
            navigate("BagPokemons", {name})
        }else{
            goBack()
        }
    }

    const showAlert = () => Alert.alert(

        "Logout!",
        "Deseja mesmo fazer logout?",
        [
        {
            text: "Cancel",
            style: "cancel",
        },
        {
            text: "Logout",
            onPress: () => saveBag(),
            style: 'destructive'
        }
        ],
        {
        cancelable: true,
        }
    );

    function saveBag(){

        Globais.allBags.forEach(user => {
            if(user.user == Globais.currentBag.user){
                user.pokemons = Globais.currentBag.pokemons
                user.moves = Globais.currentBag.moves
            }
        })

        Globais.currentBag = {
            user: '',
            pokemons: [],
            moves: []
        }
        
        navigate("Login")

        Alert.alert(
            "Usuário deslogado com sucesso!"
            )
    }

    useEffect(() => {
        async function getFullPokeInformation(){
            const response = await getSpecific('pokemon', pokemonIndex)
            const species = await await fetch(response.species.url).then((data) => { return data.json()})

            storageInformation(response, species)
        }
        getFullPokeInformation()
    }, [])

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
                    <TouchableHighlight onPress={pageBack} style={styles.headerBackImage}>
                        <Image source={require('../../assets/back-arrow.png')} style={{width: 35, height: 35}}/>
                    </TouchableHighlight>
                    <Text style={styles.headerText}>{name.toUpperCase()}</Text>
                    <TouchableHighlight onPress={showAlert} style={styles.headerLogOutImage}>
                        <Image source={require('../../assets/log-out.png')} style={{width: 35, height: 35}}/>
                    </TouchableHighlight>
                </View>
                <View style={styles.view}>
                    <Image source={{uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemonIndex}.png`}} resizeMode='contain' style={styles.image}/>
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