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
        marginTop: 10,
        color: '#000',
        fontFamily: 'sans-serif-condensed',
    },
    horizontalViewSearch:{
        flexDirection: "row",
        alignItems: 'center',
        marginBottom: 15,
        marginTop: 10
    },
    button: {
        backgroundColor: '#0071b9',
        paddingHorizontal: 30,
        paddingVertical: 15,
        borderRadius: 10,
        marginHorizontal: 8,
        marginTop: 20,
    },
    buttonText:{
        fontSize: 23,
        fontWeight: 'bold',
        color: '#FFCB05',
        textAlign: 'center',
        fontFamily: 'sans-serif-condensed',
    },
    searchButton:{
        backgroundColor: '#0071b9',
        padding: 8,
        borderRadius: 10,
        marginHorizontal: 5,
    },
    image:{
        backgroundColor: 'transparent',
        height: 40,
        width: 40
    },    
});

export default styles