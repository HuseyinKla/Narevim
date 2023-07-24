import { StyleSheet, Dimensions } from "react-native";

const {height, width} = Dimensions.get('screen')

export default StyleSheet.create({
    continer:{
        alignItems: 'center',
    },
    inner_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: width,
        paddingRight: 40,
        paddingLeft: 40,
        paddingTop: 20,
    },
    content_container: {
        flexDirection: 'row',
    },
    title:{
        fontSize: 18,
        color: 'black',
        paddingLeft: 10,
    },
    icon: {
        color: 'black',
    },
    divider: {
        height: 1,
        width: "80%",
        backgroundColor: "#e0e0e0",
        marginTop: 10,
    }
})