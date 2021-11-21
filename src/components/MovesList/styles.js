import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    grid: {
        flex: 1,
        margin: '2.8%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 10,
        elevation: 5.5,
        borderBottomWidth: 0,
        backgroundColor: '#0071b9',
        width: 340
    },
    fonte: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        marginHorizontal: '7%',
        marginVertical: '3%',
        textAlign: 'center',
    },
    checkBox:{
        alignSelf: 'flex-end', 
        marginRight: '5%',
        marginBottom: '2%',        
        transform: [{scaleX: 1}, {scaleY: 1}]
    },

});

export default styles