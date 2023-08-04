import { Dimensions, StyleSheet } from "react-native";

const {height, width} = Dimensions.get('window')

export default StyleSheet.create({
    dropdown: {
        height: 50,
        borderColor: '#e0e0e0',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
        marginBottom: 15,
        width: width * 0.9,
    },
    placeholderStyle: {
        fontSize: 16,
        color: 'gray',
    },
    selectedTextStyle: {
        fontSize: 16,
        color: 'black',

    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
        color: 'black',

    },
    container: {
        alignItems: 'center'
    },
    payment_container: {
        width: width * 0.9,
        alignItems: 'center',
        marginTop: height * 0.03,
    },
    cargo_container:{
        alignItems: 'center',
        marginTop: height * 0.02,
    },
    discount_container:{
        marginTop: height * 0.03,
        width: width * 0.9,
    },
    note_container: {
        marginTop: height * 0.03,
        width: width * 0.9,

    },
    text: {
        color: 'black',
        alignSelf: 'baseline'
    },
    text_bold: {
        color: 'black',
        fontWeight: 'bold',
    },
    input: {
        marginTop: height * 0.02,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#e0e0e0',
        width: width * 0.7,
        color: 'black',
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E91E63',
        marginLeft: width * 0.06,
        marginTop: height * 0.02,
        width: width* 0.15,
        borderRadius: 10,
    },
    long_input: {
        marginTop: height * 0.02,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#e0e0e0',
        width: width * 0.9,
        color: 'black',
    },
    long_button: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E91E63',
        marginTop: height * 0.02,
        width: width* 0.9,
        height: height * 0.06,
        borderRadius: 10,
    }
})