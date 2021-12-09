import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    view:{
        flex: 1,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    horizontalViewSearch:{
        flexDirection: "row",
        alignItems: 'center',
        marginBottom: 15,
        marginTop: 10
    },
    textInput: {
        fontSize: 20,
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        width: '80%',
        borderWidth: 3,
        borderColor: '#0071b9',
        color: 'black',
        fontFamily: 'sans-serif-condensed',
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