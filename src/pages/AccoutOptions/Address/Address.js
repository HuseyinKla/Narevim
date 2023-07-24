import React, { useEffect, useState } from 'react'
import { FlatList, Text, View } from 'react-native'
import useFetchCategories from '../../../hooks/useFetchCategories/useFetchCategories'
import Config from 'react-native-config'
import AddressCard from '../../../components/AddressCard/AddressCard'
import axios from 'axios'

const Address = () => {

    const [addressData, setAddressData] = useState(null)

    const fetchAddress = async() => {
        const responseData = await axios.get(Config.API_GET_ADDRESS)
        setAddressData(responseData.data.data)
    }

    useEffect(()=> {
        const API_KEY = 'SSVa97j7z83nMXDzhmmdHSSLPG9NueDf3J6BgCSS';
        axios.defaults.headers['X-API-KEY'] = API_KEY;
        fetchAddress()
    },[addressData])



    const renderAddress = ({item}) => <AddressCard address={item}/>

    return(
        <View>
            <FlatList data={addressData} renderItem={renderAddress}/>
        </View>
    )
}

export default Address

