import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    view:{
        flex: 1,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    logo:{
        width: 300,
        height: 110,
        marginBottom: 50,
        marginTop: -100,
    },
    welcomeText:{
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 30,
        marginBottom: 20,
        marginTop: 40,
        color: '#000'
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
        marginBottom: 15
    },
    button: {
        backgroundColor: '#0071b9',
        paddingHorizontal: 33,
        paddingVertical: 15,
        borderRadius: 10,
        marginVertical: 10,
        width: 220,        
    },
    buttonText:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFCB05',
        textAlign: 'center'
    }

});

export default styles