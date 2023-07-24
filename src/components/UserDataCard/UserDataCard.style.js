import { StyleSheet, Dimensions } from "react-native";

const {height, width} = Dimensions.get('screen')


export default StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 20
    },
    inner_container: {
        flexDirection: 'row',
        borderWidth: 1,
        marginTop: 10,
        borderRadius: 10,
        width: width * 0.9,
        height: height * 0.06, 
        borderColor: '#e0e0e0',
        padding: 5,
    },
    icon: {
        color: '#E91E63',
    },
    title:{
        color: '#E91E63',
        marginLeft: 5,
        fontSize: 14,
        fontWeight: 'bold'
    },
    data:{
        marginLeft: 5,
    },
    content_container:{
        flexDirection: 'row',
        alignItems: 'center'
    }
})