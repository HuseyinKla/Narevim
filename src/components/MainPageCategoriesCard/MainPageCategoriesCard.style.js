import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        margin: 10,
    },
    image: {
        height: Dimensions.get('window').height/ 3,
        resizeMode: 'cover'
    }
})