import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    image: {
        height: Dimensions.get('screen').height/10,
        width: Dimensions.get('screen').width,
        alignSelf: 'center',
        marginTop: 5,
        marginBottom: 5,
        backgroundColor: '#eceff0',
        tintColor: '#E91E63',
        resizeMode: 'contain'
    }
})