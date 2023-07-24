import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    continer: {
        flexDirection: 'row',
        marginLeft: 10,
        marginRight: 10,
        paddingTop: 10,
        paddingBottom: 10,
    },
    image: {
        height: Dimensions.get('screen').height / 20, 
        width: Dimensions.get('screen').width / 10,
        resizeMode: "contain",
    },
    title: {
        alignSelf: 'center',
        paddingLeft: 15,
        color: 'black',
        flex: 1,
    },
})