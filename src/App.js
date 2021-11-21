import React from "react"
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AuthProvider from "./contexts/AuthContext"
import PokeProvider from "./contexts/PokeContext"

import Login from "./screens/Login"
import Register from "./screens/Register"
import Home from "./screens/Home"
import Pokemons from "./screens/Pokemons"
import PokemonPage from "./screens/PokemonPage"
import Moves from "./screens/Moves"
import MovesPage from "./screens/MovesPage"
import BagPage from "./screens/Bag"
import BagPokemons from "./screens/BagPokemons"
import BagMoves from "./screens/BagMoves"

const Stack = createNativeStackNavigator()

function App() {

  
  return (
    <NavigationContainer>
      <AuthProvider>
        <PokeProvider>
          <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Login">
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Register" component={Register}/>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Pokemons" component={Pokemons}/>
            <Stack.Screen name="PokemonPage" component={PokemonPage}/>
            <Stack.Screen name="Moves" component={Moves}/>
            <Stack.Screen name="MovesPage" component={MovesPage}/>
            <Stack.Screen name="BagPage" component={BagPage}/>
            <Stack.Screen name="BagPokemons" component={BagPokemons}/>
            <Stack.Screen name="BagMoves" component={BagMoves}/>
          </Stack.Navigator>
        </PokeProvider>
      </AuthProvider>
    </NavigationContainer>  
  );  
}

export default App