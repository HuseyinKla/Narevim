import React from 'react'
import { TextInput, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from './Input.style'

const Input = ({iconName, text, handleChange}) => {


    return(
        <View style={styles.container}>
            <View style={styles.inner_container}>
                <Icon name={iconName} style={styles.icon} size={30}/>
                <TextInput placeholder={text} onChangeText={handleChange}/>
            </View>
        </View>
    )
}
export default Input