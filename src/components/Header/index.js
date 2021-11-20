import React from "react";
import { View, Text, TouchableHighlight, Image } from "react-native"
import styles from "./styles"
import { useNavigation } from "@react-navigation/native"

export default function Header(props) {

    const {name} = props,
    {navigate} = useNavigation()
    
    return (        
        <View style={styles.headerView}>
            <Text style={styles.headerText}>{name.toUpperCase()}</Text>
            <TouchableHighlight onPress={() => navigate("Login")} style={styles.headerImage}>
                <Image source={require('../../assets/log-out.png')} style={{width: 45, height: 45}}/>
            </TouchableHighlight>
        </View>
    )
}