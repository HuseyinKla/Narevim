import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e0e0e0',
    },
    inner_container: {
        backgroundColor: '#eceff1',
        marginTop: 10,
    },
    input: {
        color: 'black',
        borderWidth: 1,
        flex: 1,
        borderColor: 'gray',
        borderRadius: 5,
        paddingLeft: 15,
        maxWidth: 350,
        marginRight: 15,
        marginLeft: 5,
        paddingTop: 2,
        paddingBottom: 2,
    },
    title_container:{
        margin: 5,
        marginLeft: 0,
        flexDirection: 'row',

    },
    title_icon:{
        alignSelf: 'center',
        marginLeft: 5,
        color: 'black',
    },
    title:{
        alignSelf: 'center',
        color: 'black',
        marginLeft: 37,
    },
    input_container: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 5,
        marginBottom: 5
    },
    icon: {
        fontSize: 35,
        alignSelf: 'center',
        color: '#E91E63'
    },
    button_container: {
        height: 35,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: '#E91E63',
        justifyContent: 'center',
        borderRadius: 5,

    },
    button: {
    }
})