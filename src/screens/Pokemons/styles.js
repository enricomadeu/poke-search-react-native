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
        marginTop: 20,        
        alignItems: "center",
    },
    textInput: {
        fontSize: 20,
        backgroundColor: 'white',
        paddingHorizontal: 15,
        borderRadius: 10,
        width: 355,
        borderWidth: 3,
        borderColor: '#0071b9',
        marginBottom: 25,
        marginTop: 10
    },
    button: {
        backgroundColor: '#0071b9',
        paddingHorizontal: 33,
        paddingVertical: 15,
        borderRadius: 10,
        marginHorizontal: 10,
    },
    buttonText:{
        fontSize: 23,
        fontWeight: 'bold',
        color: '#FFCB05',
        textAlign: 'center'
    },
    grid: {
        flex: 1,
        margin: '5%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        elevation: 5.5,
        borderBottomWidth: 0
    },
    gridButton: {
        backgroundColor: 'transparent', 
        width: '50%'
    },
    fonte: {  
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
        marginHorizontal: '7%',
        marginBottom: '10%'
    },
    indexFont: {
        alignSelf: 'flex-start', 
        marginLeft: '3%',
        marginTop: '2%', 
        color: 'white'
    },
    imagem: {
        backgroundColor: 'transparent',
        height: 100,
        width: 100
    },

});

export default styles