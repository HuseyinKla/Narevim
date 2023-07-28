import { StyleSheet, Dimensions } from "react-native";

const {height, width} = Dimensions.get('screen')

export default StyleSheet.create({
    container: {
    },
    image:{
        width: width * 0.9,
        height: height * 0.6,
        alignSelf: 'center',
    },
    inner_container:{
    },
    bottom_container: { 
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#eceff0',
        width: width,
        height: height * 0.07,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    title: {
        width: width * 0.9,
        alignSelf: 'center',
        marginVertical: 20,
        color: 'black',
        fontSize: 16,
    },
    text: {
        width: width * 0.9,
        alignSelf: 'center',
        marginBottom: 20,
        fontWeight: 'bold',
        color: 'black',
        fontSize: 16,
    },
    description: {
        width: width * 0.9,
        alignSelf: 'center',
        color: 'black',
    },
    price: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 16,
    },
    icon: {
        fontSize: 30,
    },
    buton: {
        height: height * 0.05,
        width: width * 0.23,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E91E63',
        borderRadius: 5,
    }

})