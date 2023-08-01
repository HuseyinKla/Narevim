import { StyleSheet, Dimensions } from "react-native";

const {width, height} = Dimensions.get('screen')

export default StyleSheet.create({
    container: {
        backgroundColor: '#eceff0'
    },
    inner_container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor:'#e0e0e0',
        borderRadius: 5,
        marginTop: 5,
        marginLeft: 5,
        marginRight: 10,
        color: 'black',
    },
    title_container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 20,
    },
    title_address: {
        paddingTop: 40,
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 10,
    },
    title: {
        marginLeft: 5,
        paddingBottom: 5,
        color: 'black'
    },
    icon: {
        color: '#E91E63'
    },
    dropdown_container: {
        padding: 16,
    },
    dropdown: {
        height: 50,
        borderColor: '#e0e0e0',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
        marginBottom: 15,
    },
    placeholderStyle: {
        fontSize: 14,
        color: 'gray',
    },
    selectedTextStyle: {
        fontSize: 16,
        color: 'black',

    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
        color: 'black',

    },
    bill_container:{
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 20,
        paddingTop: 15,
    },
    save: {
        backgroundColor: '#E91E63',
        alignItems: 'center',
        height: 30,
        width: width * 0.9,
        alignSelf: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        marginTop: 10,
    },
    save_text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15
    },
    fatura_container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    bill_title: {
        fontSize: 20,
        color: 'black',
        borderBottomColor: '#E91E63',
        borderWidth: 1,
        borderColor: '#eceff0',
    }
})