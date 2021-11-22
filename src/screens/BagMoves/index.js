import React, { useState, useEffect } from "react"
import { View, TouchableHighlight, Text, TextInput, Image, FlatList } from 'react-native'
import styles from "./styles"
import { useNavigation, useRoute } from "@react-navigation/native"
import Background from "../../components/Background"
import Header from "../../components/Header"
import { usePoke } from "../../hooks/usePoke"
import MovesList from "../../components/MovesList"
import Globais from "../../components/Global"

function BagMoves() {

    const {navigate, goBack} = useNavigation(),
    route = useRoute(),
    {name} = route.params,    
    [moves, setMoves] = useState([])
    

    useEffect(() => {
      function getMovesBag(){
        setMoves(Globais.currentBag.moves)
      }
      getMovesBag()
    }, [Globais.currentBag.moves])  

    return (
        <Background>
            <Header name={name}/>
            <View style={styles.view}>
                <Text style={styles.welcomeText}>MEUS MOVIMENTOS</Text>
                <FlatList 
                    numColumns={1}
                    data={moves}
                    refreshing={true}
                    renderItem={(item) => <MovesList data={item} name={name} pageType={true}/>}
                    keyExtractor={(item) => item.name}
                    ListEmptyComponent={() => <Text>Nenhum movimento adicionado a bag.</Text>}
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

export default BagMoves