import React, { useEffect } from 'react'
import { ActivityIndicator, FlatList, View } from 'react-native'
import useFetchCategories from '../../../hooks/useFetchCategories'
import Config from 'react-native-config'
import OrderCard from '../../../components/OrderCard'


const Orders = ({navigation}) => {

    const {data, loading, error} = useFetchCategories(Config.API_GET_ORDERS_URL)
    console.log(data.data)

    const selectOrder = (item) => {
        console.log("ürün idsi: ", item.id)
        //navigation.navigate('HomeStack', {screen: 'ProductScreen', params: {id: item.id, title: item.title}})
        //burdan ürünün idsini ürün ekranına gönderdiğimde hata çıkıyor hocam. sebebini anlayamadım ve çözemedim
    }

    const selectDetail = (item, img) => {
        console.log("detaylar: ",item)
        console.log("detaylar: ",img)
        const detail = item.order_detail
        navigation.navigate('OrderDetailScreen', {item, img, detail})
    }

    useEffect(()=> {

    },[data])

    const renderOrders = ({item}) => <OrderCard order={item} img={data.image_path} selectOrder={selectOrder} selectDetail={selectDetail}/>

    if(loading){
        return(
            <ActivityIndicator size={'large'} color={'#E91E63'}/>
        )
    }
    return(
        <View style={{backgroundColor: '#e0e0e0', flex: 1}}>
            <FlatList data={data.data} renderItem={renderOrders}/>
        </View>
    )
}

export default Orders