import React, { useEffect, useState } from 'react'
import { FlatList, View } from 'react-native'
import Config from 'react-native-config'
import AddressCard from '../../../components/AddressCard/AddressCard'
import axios from 'axios'

const Address = ({route, navigation}) => {

    const [addressData, setAddressData] = useState(null)

    const {type} = route.params


    const fetchAddress = async() => {
        const responseData = await axios.get(Config.API_GET_ADDRESS)
        setAddressData(responseData.data.data)
    }

    useEffect(()=> {
        axios.defaults.headers['X-API-KEY'] = Config.API_KEY
        fetchAddress()
    },[addressData])


    const selectAddress = async(id) => {
        console.log('buton türü: ',type)
        if(type){
            console.log("adresin idsi: ", id)
            try {
                const responseData = await axios.post(Config.API_POST_SELECT_ADDRESS_URL, {address_id: id},
                {
                    headers: axios.defaults.headers['Content-Type'] = 'multipart/form-data'
                })
                console.log("adres seçme işlem sonucu: ",responseData.data.status)
                if(responseData.data.status === "success"){
                    navigation.navigate('BasketStack', {screen: 'PaymentScreen'})
                }
            } catch (error) {
                console.log("hata: ",error)
            }
        }else{
            console.log("hesabımdan girdin kardeş")
        }
    }



    const renderAddress = ({item}) => <AddressCard address={item} onSelect={()=> selectAddress(item.id)}/>

    return(
        <View>
            <FlatList data={addressData} renderItem={renderAddress}/>
        </View>
    )
}

export default Address

