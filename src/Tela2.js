import React, { useState } from "react"
import { Image, View, TextInput, TouchableOpacity, Text } from 'react-native'
import styles from "./styles"
import { useNavigation, useRoute } from "@react-navigation/native";

function Tela2() {

  const {navigate} = useNavigation(),
  route = useRoute(),
  [real, setReal] = useState(""),
  [cotDolar, setCotDolar] = useState(""),
  [cotEuro, setCotEuro] = useState(""),
  [cotLibra, setCotLibra] = useState(""),
  {dolar, euro, libra} = route.params

  function cotar(){
     setCotDolar(Number(real)/Number(dolar))
     setCotEuro(Number(real)/Number(euro))
     setCotLibra(Number(real)/Number(libra))
  }

  return (
    <View style={styles.viewTela2}>
      <View style={styles.horizontalView}>
        <Image source={require('./assets/real.png')} style={styles.cotationImage}/>
        <TextInput placeholder="Real" keyboardType="numeric" style={styles.textInput} value={real} onChangeText={setReal}/>
      </View>
      <TouchableOpacity style={styles.button} onPress={cotar}>
        <Text style={{color: '#fff', fontSize: 35}}>CALCULAR</Text>
      </TouchableOpacity>
      <Text style={{color: '#000', fontSize: 35, marginTop: 20}}>{cotDolar ? `U$${cotDolar.toFixed(2).replace('.', ',')}` : ""}</Text>
      <Text style={{color: '#000', fontSize: 35}}>{cotEuro ? `€$${cotEuro.toFixed(2).replace('.', ',')}` : ""}</Text>
      <Text style={{color: '#000', fontSize: 35, marginBottom: 20}}>{cotLibra ? `£$${cotLibra.toFixed(2).replace('.', ',')}` : ""}</Text>
      <TouchableOpacity style={styles.button} onPress={() => {navigate("Tela1")}}>
        <Text style={{color: '#fff', fontSize: 35}}>COTAÇÕES</Text>
      </TouchableOpacity>
    </View>
  );  
}

export default Tela2