import React from "react";
import { ImageBackground } from "react-native"

export default function Background({children}) {
    
    return (        
        <ImageBackground source={require('../../assets/background_mainpage.png')} resizeMode='cover' style={{flex: 1}}>
            { children }
        </ImageBackground>
    )
}