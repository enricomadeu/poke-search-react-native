import React, { useState } from "react"
import { Image, View, TextInput, TouchableOpacity, Text } from 'react-native'
import styles from "./styles"
import { useNavigation } from "@react-navigation/native";

function Tela1() {

  const {navigate, goBack} = useNavigation()

  const [dolar, setDolar] = useState(""),
  [euro, setEuro] = useState(""),
  [libra, setLibra] = useState("")

  function handleCotar(){
    navigate("Login")
  }

  return (
    <View style={styles.viewTela1}>
      <View style={styles.horizontalView}>
        <Image source={require('./assets/dolar.png')} style={styles.cotationImage}/>
        <TextInput placeholder="Dolar" keyboardType="numeric" style={styles.textInput} value={dolar} onChangeText={setDolar}/>
      </View>
      <View style={styles.horizontalView}>
        <Image source={require('./assets/euro.png')} style={styles.cotationImage}/>
        <TextInput placeholder="Euro" keyboardType="numeric" style={styles.textInput} value={euro} onChangeText={setEuro}/>
      </View>
      <View style={styles.horizontalView}>
        <Image source={require('./assets/libra.png')} style={styles.cotationImage}/>
        <TextInput placeholder="Libra" keyboardType="numeric" style={styles.textInput} value={libra} onChangeText={setLibra}/>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => goBack()}>
        <Text style={{color: '#fff', fontSize: 35}}>COTAR</Text>
      </TouchableOpacity>
    </View>
  );  
}

export default Tela1