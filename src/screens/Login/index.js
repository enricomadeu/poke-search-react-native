import React, { useState } from "react"
import { Text, TextInput, View, TouchableHighlight, Image, Alert, Modal } from 'react-native'
import styles from "./styles"
import { useNavigation } from "@react-navigation/native"
import { useAuth } from "../../hooks/useAuth"
import Background from "../../components/Background"
import Register from "../Register"

function Login() {

  const {navigate} = useNavigation(),  
  [name, setName] = useState(""),
  [password, setPassword] = useState(""),
  [openModal, setOpenModal] = useState(false),
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
          <Text style={styles.welcomeText}>
              BEM VINDO AO{'\n'}POKEBAG
          </Text>
        </View>
        <View style={styles.inputView}>
          <TextInput placeholder="USUÁRIO" placeholderTextColor="#d6d6d6" style={styles.textInput} textAlign="left" value={name} onChangeText={setName}/>
          <TextInput placeholder="SENHA" placeholderTextColor="#d6d6d6" style={styles.textInput} textAlign="left" value={password} onChangeText={setPassword} secureTextEntry={true}/>
          <View style={styles.horizontalView}>
            <TouchableHighlight style={styles.button} onPress={() => setOpenModal(true)}>
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
      <Modal visible={openModal} animationType="slide">
        <Register setOpenModal={setOpenModal}/>
      </Modal>
    </Background>
  );
}

export default Login