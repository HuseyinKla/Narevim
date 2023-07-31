import React, { useEffect, useState } from 'react'
import { Text, View, FlatList, TouchableWithoutFeedback, ActivityIndicator, Dimensions } from 'react-native'
import useFetchCategories from '../../hooks/useFetchCategories/useFetchCategories'
import Config from 'react-native-config'
import BasketProduct from '../../components/BasketProduct/BasketProduct'
import styles from './Basket.style'
import { useSelector } from 'react-redux'
import axios from 'axios'



const Basket = ({navigation}) => {
  
    const count = useSelector(state => state.counter.value)
    const {width, height} = Dimensions.get('window')
    const [data, setData] = useState([])
 
    const renderBasket = ({item}) => {
        return(
            <BasketProduct product={item}/>
        )
    }

    const handlePayment = () => {
        console.log("alışverişi tamamla")
        navigation.navigate('PaymentScreen')
    }


    const fetchBasket = async() => {
        const API_KEY = 'SSVa97j7z83nMXDzhmmdHSSLPG9NueDf3J6BgCSS';
        axios.defaults.headers['X-API-KEY'] = API_KEY;
        const responseData = await axios.get(Config.API_GET_BASKET_URL)
        console.log("sepet getirildi: ",responseData.status)
        setData(responseData.data.data)
    }


    useEffect(()=> {
        fetchBasket()
    },[])


    return(
        <View style={{flex: 1, backgroundColor: 'white'}}>
            <View style={styles.header}>
                 <Text style={{color: '#E91E63'}}>Sepet : {count} ürün</Text>
            </View>
            <FlatList data={data} renderItem={renderBasket}/>
            <View style={styles.footer_container}>
                <View>
                    <Text style={styles.title}>Sepet Toplam</Text>
                    <Text style={styles.price}>{data.total} TL</Text>
                </View>
                <TouchableWithoutFeedback onPress={handlePayment}>
                    <View style={styles.button}>
                        <Text style={styles.text}>Alışverişi Tamamla</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </View>
    )
}


export default Basket