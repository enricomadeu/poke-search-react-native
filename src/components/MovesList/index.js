import React, { useEffect, useState } from "react";
import styles from "./styles"
import { useNavigation } from "@react-navigation/native"
import { usePoke } from "../../hooks/usePoke"
import { TouchableHighlight, View, Text, Image } from "react-native"
import CheckBox from '@react-native-community/checkbox'

export default function MovesList({data, name, pageType}) {
    
    const {navigate} = useNavigation(),
    [selectedCheckBox, setSelectedCheckBox] = useState(false) 

    function selectMove(moveIndex){
        
        setSelectedCheckBox(!selectedCheckBox)

        setTimeout(() => {navigate("MovesPage", {moveIndex, name, pageType})}, 500)

        setTimeout(() => {setSelectedCheckBox(false)}, 1000)
    }
    // Define a numeração do pokemon
    const url = data.item.url ? data.item.url : false;
    const moveIndex = url ? url.split('/')[url.split('/').length - 2] : data.item.id;
    // Pega a imagem do pokemon de acordo com sua numeração

    return(
        <View style={styles.grid}>
            <Text style={styles.fonte}>{moveIndex} - {data.item.name.charAt(0).toUpperCase() + data.item.name.slice(1).replace("-", " ")}</Text>
            <CheckBox style={styles.checkBox} tintColors={{ true: '#FFCB05', false: 'white'}} value={selectedCheckBox} onValueChange={() => selectMove(moveIndex)}/>            
        </View>
    ); 
}