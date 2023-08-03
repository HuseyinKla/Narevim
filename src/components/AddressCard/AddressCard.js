import React from 'react'
import { Text, TouchableWithoutFeedback, View } from 'react-native'
import styles from './AddressCard.style'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Config from 'react-native-config'
import axios from 'axios'

const AddressCard = ({address, onSelect}) => {

    const handleAddressDelete = async() => {
        console.log('deleted: ',address.id)
        axios.defaults.headers['X-API-KEY'] = Config.API_KEY
        const responseData = await axios.post(Config.API_POST_DELETE_ADDRESS, {address_id: address.id},
        {
            headers: axios.defaults.headers['Content-Type'] = 'multipart/form-data'
        })
    }    



    return(
        <TouchableWithoutFeedback onPress={onSelect} >
        <View style={styles.container}>
            <View style={styles.icon_container}>
                <Icon name={"map-marker"} size={35} style={styles.icon}/>
            </View>
            <View style={styles.title_container}>
                <View style={{flexDirection: 'row', paddingTop: 8,}}>
                    <Text style={{color: 'black'}}>{address.city} - </Text>
                    <Text style={{color: 'black'}}>{address.town}</Text>
                </View>
                <View style={{marginVertical: 10,}}>
                    <Text style={{color: 'gray'}}>{address.clear_address}</Text>
                    <Text style={{color: 'gray'}}>{address.telephone}</Text>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{color: 'gray'}}>{address.name}</Text>
                        <Text style={{color: 'gray'}}>{address.surname}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.delete_container}>
                <TouchableWithoutFeedback onPress={handleAddressDelete}>
                    <Icon name={"delete"} size={35} style={styles.icon}/>
                </TouchableWithoutFeedback>
            </View>
        </View>
        </TouchableWithoutFeedback>

    )
}

export default AddressCard