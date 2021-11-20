import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    headerView: {
        flexDirection: 'row',
        backgroundColor: '#0071b9',
        height: 65,
        width: '100%',
        justifyContent: 'center',   
        alignItems: 'center',
        padding: 10
    },
    headerText:{
        fontSize: 30,
        fontWeight: 'bold',
        color: '#FFCB05'
    },
    headerImage: {
        width: 45,
        height: 45,
        position: 'absolute',
        right: 10,
        top: 10,
    },

});

export default styles