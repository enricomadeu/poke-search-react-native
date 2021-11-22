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
    image:{
        backgroundColor: 'transparent',
        height: 150,
        width: 150,
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
        marginTop: '8%',
        fontFamily: 'sans-serif-condensed',
    },
    title:{
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 30,
        marginBottom: '2%',
        marginTop: '5%',
        fontFamily: 'sans-serif-condensed',   
    },
    secondTitle:{
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 26,
        marginBottom: '1%',
        marginTop: '3%',
        fontFamily: 'sans-serif-condensed',       
    },
    textDescription: {
        fontSize: 18,
        color: 'grey',
        alignSelf: 'center',
        marginHorizontal: '8%',
        fontFamily: 'sans-serif-condensed',       
    },
    addText: {
        fontSize: 18,
        color: 'grey',
        alignSelf: 'center',
        marginRight: '3%',
        fontFamily: 'sans-serif-condensed',
    },
    horizontalViewAddMove: {
        flexDirection: "row",
        justifyContent: 'flex-end',
        marginHorizontal: '1%',
        marginTop: '2%'
    }
});

export default styles