import React, { useState } from "react"
import { Text, TextInput, View, TouchableHighlight, Alert } from 'react-native'
import styles from "./styles"
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../../hooks/useAuth"

function Register() {

  const {navigate, goBack} = useNavigation(),
  [name, setName] = useState(""),
  [password, setPassword] = useState(""),
  [confirmPassword, setConfirmPassword] = useState(""),
  {signUp} = useAuth()


  function handleSignUp(){
    if(name.trim() && password.trim() && confirmPassword.trim()){
      if(password == confirmPassword){          
          signUp(name, password)
      }else{
          Alert.alert("Falha ao confirmar senha!")
      }
    }else{
        Alert.alert("Preencha todos os campos!")
    }
  } 

  return (
    <View style={styles.view}>
      <View>        
        <Text style={styles.welcomeText} onPress={() => {navigate("Tela1")}}>
            REGISTRAR NOVO USUÁRIO
        </Text>
      </View>
      <View>
        <TextInput placeholder="USUÁRIO" style={styles.textInput} textAlign="left" value={name} onChangeText={setName}/>
        <TextInput placeholder="SENHA" style={styles.textInput} textAlign="left" value={password} onChangeText={setPassword} secureTextEntry={true}/>
        <TextInput placeholder="CONFIRME A SENHA" style={styles.textInput} textAlign="left" value={confirmPassword} onChangeText={setConfirmPassword} secureTextEntry={true}/>
        <View style={styles.horizontalView}>
          <TouchableHighlight style={styles.button} onPress={() => goBack()}>
            <Text style={styles.buttonText}>
              BACK
            </Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button} onPress={handleSignUp}>
            <Text style={styles.buttonText}>
              SIGN UP
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
}

export default Register