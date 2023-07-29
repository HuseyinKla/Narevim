import { Dimensions, StyleSheet } from "react-native";

const {width, height} = Dimensions.get('window')

export default StyleSheet.create({
    container: {

    },
    inner_container: {
        margin: 20,
        borderWidth: 1,
        borderColor: '#e0e0e0',
        borderRadius: 10,
        height: height * 0.15,
        width: width * 0.8,
        alignSelf: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#E91E63'
    },
    id: {
        alignSelf: 'center',
        color: 'black',
    },
    date: {
        alignSelf: 'center',
        color: 'black',

    },
    amount: {
        alignSelf: 'center',
        color: 'black',
    },
    text: {
        alignSelf: 'center',
        color: 'white',
    }
})