import React from 'react'
import { View, Text, TouchableWithoutFeedback } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from './AccountOptionsCard.style'
import Divider from '../Divider'

const AccountOptions = ({iconName, title, onSelect}) => {
    return(
        <TouchableWithoutFeedback onPress={onSelect}>
            <View style={styles.continer}>
                <View style={styles.inner_container}>
                    <View style={styles.content_container}>
                        <Icon name={iconName} size={30} style={styles.icon}/>
                        <Text style={styles.title}>{title}</Text>

                    </View>
                    <Icon name="arrow-right-bold-circle-outline" size={20} style={styles.icon} />
                </View>
                <View style={styles.divider}/>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default AccountOptions