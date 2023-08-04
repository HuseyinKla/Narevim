import { Dimensions, StyleSheet } from "react-native";

const {width, height} = Dimensions.get('window')


export default StyleSheet.create({
    container: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    inner_container:{
        backgroundColor: 'white',
        width: width * 0.9,
        height: height * 0.2
    },
    upper_container: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
        justifyContent: 'space-between',
    },
    lower_container:{
        flex: 1,
        justifyContent: 'space-around',
    },
    icon: {
        fontSize: 25,
        backgroundColor: '#E91E63',
        color: 'white',
        borderRadius: 5,
    },
    button_icon: {
        marginLeft: width * 0.04,
        color: '#E91E63',
        fontSize: 30,
    },
    text: {
        flex :1,
        fontSize: 17,
        color: '#E91E63',
        paddingVertical: height * 0.01,
    },
    sort_button: {
        flexDirection: 'row',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderBottomColor: '#E91E63',
        borderTopColor: 'white',
        borderLeftColor: 'white',
        borderRightColor: 'white',
        width: width,
        height: height * 0.06,
        
    }
})