import { Dimensions, StyleSheet } from "react-native";

const {width, height} = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        backgroundColor: '#e0e0e0',
        flex: 1,
    },
    inner_container: {
        backgroundColor: 'white',
        marginVertical: height * 0.02,
        marginHorizontal: width * 0.04,
        borderRadius: 5,
    },
    icon: {
        fontSize: 20,
        color: 'darkorange'
    },
    upper_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: width * 0.05,
        alignItems: 'center',
        borderBottomWidth: 0.5,
        borderBottomColor: 'gray',
    },
    middle_container: {
        flexDirection: 'row',
        paddingHorizontal: width * 0.05,
        paddingVertical: height * 0.02,
    },
    footer_container: {
        paddingHorizontal: width * 0.05,
    },
    text_date: {
        color: 'black', 
        fontWeight: 'bold', 
        paddingTop: height * 0.02,
        
    },
    image: {
        height: height * 0.12,
        width: width * 0.1,
        marginHorizontal: width * 0.02
    }
})