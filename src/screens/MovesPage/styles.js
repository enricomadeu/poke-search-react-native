import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    view:{
        flex: 1,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
    },
    horizontalView: {        
        flexDirection: "row",
        justifyContent: 'space-between',
        marginHorizontal: '9%'
    },
    contentView:{
        flex: 1,
        backgroundColor: 'white',
        width: '100%',
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,        
    },
    textInput: {
        fontSize: 20,
        backgroundColor: 'white',
        paddingHorizontal: 15,
        borderRadius: 10,
        width: '80%',
        borderWidth: 3,
        borderColor: '#0071b9',
        color: 'black'
    },
    button: {
        backgroundColor: '#0071b9',
        paddingHorizontal: 30,
        paddingVertical: 15,
        borderRadius: 10,
        marginHorizontal: 8,
    },
    buttonText:{
        fontSize: 23,
        fontWeight: 'bold',
        color: '#FFCB05',
        textAlign: 'center'
    },
    searchButton:{
        backgroundColor: '#0071b9',
        padding: 8,
        borderRadius: 10,
        marginHorizontal: 5,
    },
    image:{
        backgroundColor: 'transparent',
        height: 100,
        width: 100,
        marginBottom: '5%'
    },
    headerView: {
        flexDirection: 'row',
        height: 65,
        width: '100%',
        justifyContent: 'space-between',   
        alignItems: 'center',
        padding: 10,
    },
    headerText:{
        fontSize: 30,
        fontWeight: 'bold',
        color: '#000'
    },
    headerLogOutImage: {
        width: 45,
        height: 45,       
    },
    headerBackImage: {
        width: 45,
        height: 45,        
    },
    pokeName:{
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 30,
        marginBottom: '2%',
        marginTop: '8%' 
    },
    title:{
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 30,
        marginBottom: '2%',
        marginTop: '5%'          
    },
    secondTitle:{
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 26,
        marginBottom: '1%',
        marginTop: '3%',        
    },
    textDescription: {
        fontSize: 18,
        color: 'grey',
        alignSelf: 'center',
        marginHorizontal: '8%',        
    }
});

export default styles