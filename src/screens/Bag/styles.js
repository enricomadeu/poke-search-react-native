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
        marginBottom: 20,
        marginTop: -100,
    },
    welcomeText:{
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 30,
        marginBottom: 20,
        color: '#000',
        fontFamily: 'sans-serif-condensed',
    },
    horizontalView: {        
        flexDirection: "row",
        marginBottom: 30,
        alignItems: "center",
    },
    button: {
        backgroundColor: '#0071b9',
        paddingHorizontal: 30,
        paddingVertical: 15,
        borderRadius: 10,
        marginVertical: 10,
        width: 200,        
    },
    buttonText:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFCB05',
        textAlign: 'center',
        fontFamily: 'sans-serif-condensed',
    }

});

export default styles