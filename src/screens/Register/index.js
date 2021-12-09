import React, { useState } from "react"
import { Text, TextInput, View, TouchableHighlight, Alert } from 'react-native'
import styles from "./styles"
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../../hooks/useAuth"
import Background from "../../components/Background"

function Register({setOpenModal}) {

  const {navigate, goBack} = useNavigation(),
  [name, setName] = useState(""),
  [password, setPassword] = useState(""),
  [confirmPassword, setConfirmPassword] = useState(""),
  [hidden, setHidden] = useState(true),
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
      {hidden && (
        <View>        
          <Text style={styles.welcomeText}>
              REGISTRAR NOVO USUÁRIO
          </Text>
        </View>
      )}
      <View>
        <TextInput placeholder="USUÁRIO" placeholderTextColor="#d6d6d6" style={[styles.textInput, {marginTop: 35}]} textAlign="left" value={name} onChangeText={setName} onFocus={() => setHidden(false)}/>
        <TextInput placeholder="SENHA" placeholderTextColor="#d6d6d6" style={styles.textInput} textAlign="left" value={password} onChangeText={setPassword} secureTextEntry={true} onFocus={() => setHidden(false)}/>
        <TextInput placeholder="CONFIRME A SENHA" placeholderTextColor="#d6d6d6" style={styles.textInput} textAlign="left" value={confirmPassword} onChangeText={setConfirmPassword} secureTextEntry={true} onFocus={() => setHidden(false)}/>
        <View style={styles.horizontalView}>
          <TouchableHighlight style={styles.button} onPress={() => setOpenModal(false)}>
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