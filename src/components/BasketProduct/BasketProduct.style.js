import { Dimensions, StyleSheet } from "react-native";
 
const {height, width} = Dimensions.get('window')


export default StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    inner_container: {
        borderTopColor: 'gray',
        borderEndColor: 'gray',
        borderTopWidth: 0.5,
        borderBottomWidth: 0.5,
        marginTop: height * 0.01,
    },
    header_container:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    content_container:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    footer_container:{
        flexDirection: 'row',
    },
    brand:{
        color: 'blue',
        width: width * 0.91,
        textAlign: 'center',
        paddingLeft: width * 0.09,
    },
    icon:{
        fontSize: 30,
        color: 'red'
    },
    image:{
        height: height * 0.15,
        width: width * 0.3,
    },
    title:{
        flex: 1,
        paddingLeft: width * 0.03,
        color: 'black',
        fontSize: 12,
    },
    count:{
        alignSelf: 'center',
        color: 'black',
    },
    count_container:{
        flexDirection: 'row',
        width: width * 0.80,
        textAlign: 'center',
        paddingLeft: width * 0.20,
        justifyContent: 'center',
        marginBottom: 5,
    },
    price:{
        alignSelf: 'center',
        color: 'red',
        fontSize: 16,
    }
})