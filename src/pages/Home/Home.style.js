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
    },
    input: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 5,
        borderWidth: 1,
        borderColor:'#E91E63',
        marginHorizontal: 10,
        paddingLeft: 10,
        justifyContent: 'space-between',
        marginTop: 5,
    },
    icon: {
        color:"#E91E63",
        fontSize: 35,
        paddingRight: 10,
    }
})