import React from 'react'
import { Text, TouchableWithoutFeedback, View } from 'react-native'
import styles from './AddressCard.style'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Config from 'react-native-config'
import useFetchCategories from '../../hooks/useFetchCategories/useFetchCategories'
import axios from 'axios'

const AddressCard = ({address}) => {

    const handleAddressDelete = async() => {
        console.log('deleted: ',address.id)
        const responseData = await axios.post(Config.API_POST_DELETE_ADDRESS, {address_id: address.id},
            {
                headers: axios.defaults.headers['Content-Type'] = 'multipart/form-data'
            })
    }    



    return(
        <View style={styles.container}>
            <View style={styles.icon_container}>
                <Icon name={"map-marker"} size={35} style={styles.icon}/>
            </View>
            <View style={styles.title_container}>
                <View style={{flexDirection: 'row', paddingTop: 8,}}>
                    <Text style={{color: 'black'}}>{address.city} - </Text>
                    <Text style={{color: 'black'}}>{address.town}</Text>
                    <Text style={{color: 'black'}}>   {address.id}</Text>
                </View>
                <View style={{marginVertical: 10,}}>
                    <Text>{address.clear_address}</Text>
                    <Text>{address.telephone}</Text>
                    <View style={{flexDirection: 'row'}}>
                        <Text>{address.name}</Text>
                        <Text>{address.surname}</Text>
                    </View>
                </View>

            </View>
            <View style={styles.delete_container}>
                <TouchableWithoutFeedback onPress={handleAddressDelete}>
                    <Icon name={"delete"} size={35} style={styles.icon}/>
                </TouchableWithoutFeedback>
            </View>

        </View>
    )
}

export default AddressCard