import React from "react"
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AuthProvider from "./contexts/AuthContext"

import Login from "./screens/Login"
import Register from "./screens/Register"
import Home from "./screens/Home"
import Tela1 from "./Tela1"
import Tela2 from "./Tela2"

const Stack = createNativeStackNavigator()

function App() {

  
  return (
    <NavigationContainer>
      <AuthProvider>
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Login">
          <Stack.Screen name="Login" component={Login}/>
          <Stack.Screen name="Register" component={Register}/>
          <Stack.Screen name="Home" component={Home}/>
          <Stack.Screen name="Tela1" component={Tela1}/>
          <Stack.Screen name="Tela2" component={Tela2}/>
        </Stack.Navigator>
      </AuthProvider>
    </NavigationContainer>  
  );  
}

export default App