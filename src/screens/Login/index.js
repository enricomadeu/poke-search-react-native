import React, { useState } from "react"
import { Text, TextInput, View, TouchableHighlight, Image, Alert } from 'react-native'
import styles from "./styles"
import { useNavigation } from "@react-navigation/native"
import { useAuth } from "../../hooks/useAuth"
import Background from "../../components/Background"

function Login() {

  const {navigate} = useNavigation(),  
  [name, setName] = useState(""),
  [password, setPassword] = useState(""),
  {signIn} = useAuth()

  function handleSignIn(){    
    if(name.trim() && password.trim()){
      signIn(name, password)
    }else{
      Alert.alert("Preencha todos os campos!")
    }
  }

  return (
    <Background>
      <View style={styles.view}>
        <View>
          <Image source={require('../../assets/pokemon-logo.png')} style={styles.logo}/>
          <Text style={styles.welcomeText} onPress={() => {navigate("Tela1")}}>
              BEM VINDO AO{'\n'}POKESEARCH
          </Text>
        </View>
        <View style={styles.inputView}>
          <TextInput placeholder="USUÁRIO" style={styles.textInput} textAlign="left" value={name} onChangeText={setName}/>
          <TextInput placeholder="SENHA" style={styles.textInput} textAlign="left" value={password} onChangeText={setPassword} secureTextEntry={true}/>
          <View style={styles.horizontalView}>
            <TouchableHighlight style={styles.button} onPress={() => navigate("Register")}>
              <Text style={styles.buttonText}>
                SIGN UP
              </Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.button} onPress={handleSignIn}>
              <Text style={styles.buttonText}>
                SIGN IN
              </Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    </Background>
  );
}

export default Login