import { Dimensions, StyleSheet } from "react-native";

const {width, height} = Dimensions.get('window')

export default StyleSheet.create({
    container: {
    },
    image: {
        height: Dimensions.get('screen').height/7,
        width: Dimensions.get('screen').width/1.4,
        alignSelf: 'center',
        marginBottom: 30,
        tintColor: '#E91E63',
        resizeMode: 'contain',
        marginTop: height * 0.15,
    },
    icon: {
        color: '#E91E63',
        fontSize: 35,
        alignSelf: 'center',
        marginLeft: width * 0.03
    },
    inner_container: {
        flexDirection: 'row',
        marginTop: height * 0.01,
    },
    input: {
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#e0e0e0',
        flex: 1,
        marginHorizontal: width * 0.06,
        color: 'black'
    },
    button: {
        height: height * 0.06,
        width: width * 0.8,
        backgroundColor: '#E91E63',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginTop: height * 0.05,
    }
})