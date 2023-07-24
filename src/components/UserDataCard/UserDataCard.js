import React from 'react'
import { Text, View } from 'react-native'
import styles from './UserDataCard.style'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const UserDataCard = ({iconName, title, data}) => {
    return(
        <View style={styles.container}>
            <View style={styles.inner_container}>
                <Icon name={iconName} size={30} style={styles.icon}/>
                <View style={styles.content_container}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.data}>{data}</Text>
                </View>
            </View>
        </View>
    )
}

export default UserDataCard