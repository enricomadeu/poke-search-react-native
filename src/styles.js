import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: 'center',
        width: '100%',
        height: '100%'
    },
    view:{
        flex: 1,
    },
    viewTela1:{
        flex: 1,
        backgroundColor: '#1ff0e2',
        alignItems: "center",
        justifyContent: "center",
    },
    viewTela2:{
        flex: 1,
        backgroundColor: '#74fc86',
        alignItems: "center",
        justifyContent: "center",
    },
    homeText:{
        color: 'white',
        textAlign: 'center',
        fontSize: 30
    },
    horizontalView: {
        width: '60%',
        flexDirection: "row",
        marginBottom: 30,
        alignItems: "center",
        justifyContent: "space-between"

    },
    cotationImage: {
        width: 100,
        height: 60,
    },
    textInput: {
        fontSize: 40,
        width: '100%',
        marginLeft: 50
    },
    button: {
        width: 200,
        height: 60,
        backgroundColor: "#00690e",
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default styles