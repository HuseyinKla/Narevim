import { Dimensions, StyleSheet } from "react-native";

const {width, height} = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        height: height * 0.2,
        width: width * 0.3,
        resizeMode: 'contain',
    }
})