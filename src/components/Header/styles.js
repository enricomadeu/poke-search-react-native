import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    headerView: {
        flexDirection: 'row',
        backgroundColor: '#0071b9',
        height: 65,
        width: '100%',
        justifyContent: 'center',   
        alignItems: 'center',
        padding: 10,
    },
    headerText:{
        fontSize: 30,
        fontWeight: 'bold',
        color: '#FFCB05',
        fontFamily: 'sans-serif-condensed',
    },
    headerImage: {
        width: 35,
        height: 35,
        position: 'absolute',
        right: 10,
        top: 12.5,
    },

});

export default styles