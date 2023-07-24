import { Dimensions, StyleSheet } from "react-native";



export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginLeft: 10,
        marginRight: 10,
        paddingTop: 10,
        paddingBottom: 10,
    },
    image: {
        height: Dimensions.get('screen').height / 15, 
        width: Dimensions.get('screen').width / 10,
        resizeMode: "stretch",
    },
    title: {
        alignSelf: 'center',
        paddingLeft: 15,
        color: 'black',
        flex: 1,
    },
})