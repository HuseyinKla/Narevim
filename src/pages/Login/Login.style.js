import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    container:{
        backgroundColor: '#eceff0',
        flex: 1,
    },
    inner_container: {
        flexDirection: 'row',
    },
    input: {
        borderWidth: 1,
        margin: 10,
        borderRadius: 5,
        borderColor: 'gray',
        flex: 1,
        color: 'black',
    },
    button_login:{
        backgroundColor: '#E91E63',
        height: Dimensions.get('screen').height/17,
        width: Dimensions.get('screen').width/1.2,
        marginLeft: 56,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems:'center'
    },
    button_signin:{
        borderColor: '#E91E63',
        height: Dimensions.get('screen').height/17,
        width: Dimensions.get('screen').width/1.2,
        marginLeft: 56,
        justifyContent: 'center',
        alignItems:'center',
        borderWidth: 1,
        marginTop: 10,
        borderRadius: 10,
    },
    login_title:{
        textAlign: 'center',
        color: 'white',
        fontWeight :'bold',
        fontSize: 15,
    },

    signin_title: {
        color: '#E91E63',
        textAlign: 'center',
        fontWeight :'bold',
        fontSize: 15,
    },
    image: {
        height: Dimensions.get('screen').height/7,
        width: Dimensions.get('screen').width,
        alignSelf: 'center',
        marginBottom: 30,
        backgroundColor: '#eceff0',
        tintColor: '#E91E63',
        resizeMode: 'contain',
        marginTop: 30,
    },
    icon : {
        alignSelf: 'center',
        color: '#E91E63',
        marginLeft: 10,
        marginRight: 5,
    },
    textContainer: {
        marginLeft: 56,
        marginTop: 15,
    },
    text:{
        color: 'black',
        fontSize: 12
    },
})