import React, { useState, useEffect } from "react"
import { View, TouchableHighlight, Text, TextInput, Image, FlatList } from 'react-native'
import styles from "./styles"
import { useNavigation, useRoute } from "@react-navigation/native"
import Background from "../../components/Background"
import Header from "../../components/Header"
import { usePoke } from "../../hooks/usePoke"
import MovesList from "../../components/MovesList"

function Moves() {

    const {navigate, goBack} = useNavigation(),
    route = useRoute(),
    {name} = route.params,
    [search, setSearch] = useState(""),
    [moves, setMoves] = useState([]),
    {getPokeApi, getId} = usePoke()

    let moveIndex = 1

    async function searchMove(){
        const response = await getId(search.toLowerCase().replace(" ", "-"), 'move', 844)
    
        setMoves(response.results)
    }

    useEffect(() => {
        async function getMoves(){
            const response = await getPokeApi('move', 844)

            setMoves(response.results)
        }
        getMoves()
    }, [])    

    return (
        <Background>
            <Header name={name}/>
            <View style={styles.view}>
                <View style={styles.horizontalViewSearch}>
                    <TextInput placeholder="PESQUISAR MOVIMENTO" placeholderTextColor="#d6d6d6" style={styles.textInput} textAlign="left" value={search} onChangeText={setSearch}/>
                    <TouchableHighlight style={styles.searchButton} onPress={() => searchMove()}>
                        <Image source={require('../../assets/loupe.png')} resizeMode='contain' style={styles.image}/>
                    </TouchableHighlight>
                </View>
                <FlatList 
                    numColumns={1}
                    data={moves}
                    extraData={moveIndex}
                    refreshing={true}
                    renderItem={(item) => <MovesList data={item} name={name}/>}
                    keyExtractor={(item) => item.name}
                />
                <TouchableHighlight style={styles.button} onPress={() => goBack()}>
                    <Text style={styles.buttonText}>
                        VOLTAR
                    </Text>
                </TouchableHighlight>
            </View>            
        </Background>
    );
}

export default Moves