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
        justifyContent: 'flex-end',
        marginHorizontal: '1%',
        marginTop: '2%'
    },
    contentView:{
        flex: 1,
        backgroundColor: 'white',
        width: '100%',
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
        padding: '5%',      
    },
    textInput: {
        fontSize: 20,
        backgroundColor: 'white',
        paddingHorizontal: 15,
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
    },
    image:{
        backgroundColor: 'transparent',
        height: 390,
        width: 390
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
        color: '#fff',
        fontFamily: 'sans-serif-condensed',
    },
    headerLogOutImage: {
        width: 35,
        height: 35,       
    },
    headerBackImage: {
        width: 35,
        height: 35,        
    },
    pokeName:{
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 30,
        marginBottom: '2%',
        fontFamily: 'sans-serif-condensed',
    },
    title:{
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 30,
        marginBottom: '3%',
        fontFamily: 'sans-serif-condensed',     
    },
    textDescription: {
        fontSize: 18,
        color: 'grey',
        alignSelf: 'center',
        marginHorizontal: '4%',
        fontFamily: 'sans-serif-condensed',       
    },
    addText: {
        fontSize: 18,
        color: 'grey',
        alignSelf: 'center',
        marginRight: '3%',
        fontFamily: 'sans-serif-condensed',
    }
});

export default styles