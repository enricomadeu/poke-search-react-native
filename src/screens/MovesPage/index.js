import React, { useState, useEffect } from "react"
import { View, TouchableHighlight, Text, Image, ActivityIndicator, Switch } from 'react-native'
import styles from "./styles"
import { useNavigation, useRoute } from "@react-navigation/native"
import { usePoke } from "../../hooks/usePoke"
import Globais from "../../components/Global"

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
    {moveIndex, name, pageType} = route.params,
    {getSpecific} = usePoke(),    
    [themeColor, setThemeColor] = useState(""),
    [currentMove, setCurrentMove] = useState({        
        nome: '',
        descricao: '',
        tipo: '',
        efeito: '',
        poder: '',
        index: moveIndex
    }),
    [switchValue, setSwitchValue] = useState(false),
    [move, setMove] = useState([])

    function storageInformation(data){

        let descricao, efeito

        setThemeColor(`${TYPE_COLORS[data.type.name]}`)

        data.flavor_text_entries.some(flavor => {
            if (flavor.language.name === 'en') descricao = flavor.flavor_text.replace(/\s/g, ' ');
        })

        data.effect_entries.some(effect => {
            if (effect.language.name === 'en') efeito = effect.short_effect.replace(/\s/g, ' ').replace('$effect_chance% ', '');
        })

        setCurrentMove({
            nome: data.name.toUpperCase(),
            descricao: descricao,
            efeito: efeito,
            poder: data.power,
            tipo: data.type.name
        })

        if(Globais.currentBag.moves.some(move => move.name === data.name)){
            setSwitchValue(true)
        }else{
            setSwitchValue(false)
        }

        setMove(data)
        
    }

    function moveToBag(){

        setSwitchValue(!switchValue);

        if(!switchValue){
            Globais.currentBag.moves.push(move)
        }else{
            Globais.currentBag.moves.forEach((moves, index) => {
                if(moves.name === move.name){
                    Globais.currentBag.moves.splice(index, 1)
                }
            })
        }
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
                return require(`../../assets/Pokemon_Type_Icon_water.png`)
                
            default:
                break
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
            navigate("BagMoves", {name})
        }else{
            goBack()
        }
    }

    useEffect(() => {
        async function getFullMoveInformation(){
            const response = await getSpecific('move', moveIndex)

            storageInformation(response)
        }
        getFullMoveInformation()
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
                        <Image source={require('../../assets/back-arrow.png')} style={{width: 45, height: 45}}/>
                    </TouchableHighlight>
                    <Text style={styles.headerText}>{name.toUpperCase()}</Text>
                    <TouchableHighlight onPress={() => navigate("Login")} style={styles.headerLogOutImage}>
                        <Image source={require('../../assets/log-out.png')} style={{width: 45, height: 45}}/>
                    </TouchableHighlight>
                </View>
                <View style={styles.view}>
                    <Image source={getImageType(currentMove.tipo)} resizeMode='cover' style={styles.image}/>
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
                        <View style={styles.horizontalViewAddMove}>
                            <Text style={styles.addText}>{switchValue ? "Remove from" : "Add to"} bag</Text>
                            <Switch
                                trackColor={{ false: convertHex('#808080', 50), true: convertHex(themeColor, 50)}}
                                thumbColor={switchValue ? themeColor : '#808080'}
                                value={switchValue}
                                onValueChange={moveToBag}
                            />
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

export default MovesPage