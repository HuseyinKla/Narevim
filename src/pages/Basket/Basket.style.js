import { Dimensions, StyleSheet } from "react-native";

const {width, height} = Dimensions.get('window')


export default StyleSheet.create({
    footer_container:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderTopColor: 'gray',
        borderTopWidth: 0.5,
        borderBottomColor: 'gray',
        borderBottomWidth: 0.5,
        paddingVertical: 10,
    },
    title:{
        fontWeight: 'bold',
        fontStyle: 'italic',
        paddingLeft: width * 0.02,
    },
    price: {
        color: 'red',
        alignSelf: 'center'
    },
    button:{
        backgroundColor:'#E91E63',
        borderRadius: 5,
        justifyContent: 'center',
        width: width * 0.35,
        marginRight: width * 0.02,
    },
    text: {
        color: 'white',
        alignSelf: 'center'
    },
    header: {
        height: height * 0.06,
        width: width,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomColor: 'gray',
        borderBottomWidth: 0.7,
    },
})