import { Dimensions, StyleSheet } from "react-native";

const {width, height} = Dimensions.get('window')



export default StyleSheet.create({
    container: {
        margin: 10,
    },
    image: {
        height: height * 0.28,
        resizeMode: 'contain'
    }
})