import { StyleSheet, Dimensions } from "react-native";

const {width, height} = Dimensions.get('screen')

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
    },
    inner_container: {
        marginTop: 5,
        height: height * 0.48,
    },
    title:{
        width: width * 0.45,
        maxHeight: height * 0.045,
        paddingLeft: 10,
        paddingTop: 5,
        fontSize: 13,
        color: 'black'
    },
    brand:{
        paddingTop: 20,
        paddingLeft: 10,
        color: 'blue'
    },
    image: {
        width:  width * 0.45,
        height: height * 0.25,
    },
    star_container: {
        flexDirection: 'row',
        paddingLeft: 8,
    },
    star: {
        fontSize: 20,
        color: 'orange'
    },
    price: {
        alignSelf: 'center',
        marginTop: 10,
        color: '#E91E63',
    },
    button: {
        borderWidth: 1,
        borderRadius: 5,
        height: height * 0.04,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#e0e0e0',
        marginTop: 10,
    }
})