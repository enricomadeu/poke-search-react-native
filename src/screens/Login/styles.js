import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    view:{
        flex: 1,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 20
    },
    inputView:{                
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo:{
        width: 300,
        height: 110
    },
    welcomeText:{
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 30,
        marginBottom: 20,
        marginTop: 40,
        color: '#000',
        fontFamily: 'sans-serif-condensed',
    },
    horizontalView: {        
        flexDirection: "row",
        marginBottom: 30,
        alignItems: "center",
    },
    textInput: {
        fontSize: 20,
        backgroundColor: 'white',
        paddingHorizontal: 15,
        borderRadius: 10,
        width: 300,
        borderWidth: 3,
        borderColor: '#0071b9',
        marginBottom: 15,
        color: 'black',
        fontFamily: 'sans-serif-condensed',
    },
    button: {
        backgroundColor: '#0071b9',
        paddingHorizontal: 33,
        paddingVertical: 15,
        borderRadius: 10,
        marginHorizontal: 10,
        elevation: 3
    },
    buttonText:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFCB05',
        fontFamily: 'sans-serif-condensed',
    }

});

export default styles