import React, { useState, useEffect } from "react"
import { View, TouchableHighlight, Text, Image, ActivityIndicator, FlatList } from 'react-native'
import styles from "./styles"
import { useNavigation, useRoute } from "@react-navigation/native"
import { usePoke } from "../../hooks/usePoke"

function MovesPage() {

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
    {moveIndex, name} = route.params,
    {getSpecific} = usePoke(),    
    [themeColor, setThemeColor] = useState(""),
    [typeImageUrl, setTypeImageUrl] = useState(""),
    [currentMove, setCurrentMove] = useState({
        elementos: [],
        nome: '',
        descricao: '',
        tipo: '',
        efeito: '',
        poder: '',
        forteContra: [],
        fracoContra: []
    })

    useEffect(() => {
        async function getFullMoveInformation(){
            const response = await getSpecific('move', moveIndex)

            storageInformation(response)
        }
        getFullMoveInformation()
    }, [])

    function storageInformation(data){

        let descricao, efeito

        setThemeColor(`${TYPE_COLORS[data.type.name]}`)

        data.flavor_text_entries.some(flavor => {
            if (flavor.language.name === 'en') descricao = flavor.flavor_text.replace(/\s/g, ' ');
        })

        data.effect_entries.some(effect => {
            if (effect.language.name === 'en') efeito = effect.effect.replace(/\s/g, ' ').replace('$effect_chance% ', '');
        })

        setCurrentMove({
            nome: data.name.toUpperCase(),
            descricao: descricao,
            efeito: efeito,
            poder: data.power,
            tipo: data.type.name
        })

        
    }

    function getImageType(type){
        switch (type){
            case 'bug':
                return require(`../../assets/Pokemon_Type_Icon_bug.png`)
                
            case 'dark': 
                return require(`../../assets/Pokemon_Type_Icon_dark.png`)
                
            case 'dragon': 
                return require(`../../assets/Pokemon_Type_Icon_dragon.png`)
                
            case 'electric': 
                return require(`../../assets/Pokemon_Type_Icon_electric.png`)
                
            case 'fairy': 
                return require(`../../assets/Pokemon_Type_Icon_fairy.png`)
                
            case 'fighting': 
                return require(`../../assets/Pokemon_Type_Icon_fighting.png`)
                
            case 'fire': 
                return require(`../../assets/Pokemon_Type_Icon_fire.png`)
                
            case 'flying': 
                return require(`../../assets/Pokemon_Type_Icon_flying.png`)
                
            case 'ghost':
                return require(`../../assets/Pokemon_Type_Icon_ghost.png`)
                
            case 'grass': 
                return require(`../../assets/Pokemon_Type_Icon_grass.png`)
                
            case 'ground':
                return require(`../../assets/Pokemon_Type_Icon_ground.png`)
                
            case 'ice': 
                return require(`../../assets/Pokemon_Type_Icon_ice.png`)
                
            case 'normal':
                return require(`../../assets/Pokemon_Type_Icon_normal.png`)
                
            case 'poison':
                return require(`../../assets/Pokemon_Type_Icon_poison.png`)
                
            case 'psychic':
                return require(`../../assets/Pokemon_Type_Icon_psychic.png`)
                
            case 'rock':
                return require(`../../assets/Pokemon_Type_Icon_rock.png`)
                
            case 'steel':
                return require(`../../assets/Pokemon_Type_Icon_steel.png`)
                
            case 'water':
                return require(`../../assets/Pokemon_Type_Icon_bug.png`)
                
            default:
                break
        }
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
                    <Image source={() => getImageType(currentMove.tipo)} resizeMode='cover' style={styles.image}/>
                    <View style={styles.contentView}>
                        <Text style={[styles.title, {color: themeColor}]}>{currentMove.nome.replace("-", " ")}</Text>
                        <Text style={[styles.secondTitle, {color: themeColor}]}>Descrição</Text>
                        <Text style={styles.textDescription}>{currentMove.descricao}</Text>
                        <Text style={[styles.secondTitle, {color: themeColor}]}>Efeito</Text>
                        <Text style={styles.textDescription}>{currentMove.efeito}</Text>
                        <View style={styles.horizontalView}>
                            <Text style={[styles.secondTitle, {color: themeColor}]}>Poder</Text>
                            <Text style={styles.textDescription}>{currentMove.poder}</Text>
                        </View>
                        <View style={styles.horizontalView}>
                            <Text style={[styles.secondTitle, {color: themeColor}]}>Tipo</Text>
                            <Text style={styles.textDescription}>{currentMove.tipo.toUpperCase()}</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

export default MovesPage