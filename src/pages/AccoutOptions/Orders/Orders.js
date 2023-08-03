import React from 'react'
import { ActivityIndicator, FlatList, View } from 'react-native'
import useFetchCategories from '../../../hooks/useFetchCategories'
import Config from 'react-native-config'
import OrderCard from '../../../components/OrderCard'


const Orders = () => {

    const {data, loading, error} = useFetchCategories(Config.API_GET_ORDERS_URL)
    console.log(data.data)

    const renderOrders = ({item}) => <OrderCard order={item}/>

    if(loading){
        return(
            <ActivityIndicator size={'large'} color={'#E91E63'}/>
        )
    }
    return(
        <View>
            <FlatList data={data.data} renderItem={renderOrders}/>
        </View>
    )
}

export default Orders