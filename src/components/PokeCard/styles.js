import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
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
        marginLeft: '5%',
        marginTop: '5%', 
        color: 'white'
    },
    imagem: {
        backgroundColor: 'transparent',
        height: 100,
        width: 100
    },
    checkBox:{
        alignSelf: 'flex-end', 
        marginRight: '2%',
        marginTop: '-15%',
        marginBottom: '-5%',
        transform: [{scaleX: 0.8}, {scaleY: 0.8}]
    },

});

export default styles