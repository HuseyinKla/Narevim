import React, { useEffect, useState } from 'react'
import { Text, View, FlatList, TouchableWithoutFeedback, Alert } from 'react-native'
import Config from 'react-native-config'
import BasketProduct from '../../components/BasketProduct/BasketProduct'
import styles from './Basket.style'
import { useSelector } from 'react-redux'
import axios from 'axios'



const Basket = ({navigation}) => {
  
    const count = useSelector(state => state.counter.value)
    const [data, setData] = useState([])
 
    const renderBasket = ({item}) => {
        return(
            <BasketProduct product={item}/>
        )
    }

    const handlePayment = async() => {
        console.log("alışverişi tamamla")
        axios.defaults.headers['X-API-KEY'] = Config.API_KEY
        const isLogin = await axios.get(Config.API_GET_MEMBER_INFO_URL)
        console.log("basketten login ekranına giderken: ",isLogin.data)
        if(isLogin.data.status === "error"){
            navigation.navigate('AccountStack', {screen: 'LogInScreen'})
        }else{
            //navigation.navigate('PaymentScreen')
            if(count === 0){
                Alert.alert('Sepet Boş', 'Lütfen ödeme ekranına geçmeden önce sepete ürün ekleyiniz',[
                    {text: 'Tamam', onPress: () => null},
                ])
            }else{
                navigation.navigate('AddressScreen', {type: true})
            }
        }
    }


    const fetchBasket = async() => {
        axios.defaults.headers['X-API-KEY'] = Config.API_KEY
        const responseData = await axios.get(Config.API_GET_BASKET_URL)
        //console.log("sepet getirildi: ",responseData.status)
        //console.log("spetin toplamı: ",responseData.data.total)
        setData(responseData.data)
    }


    useEffect(()=> {
        fetchBasket()
    },[data])


    return(
        <View style={{flex: 1, backgroundColor: 'white'}}>
            <View style={styles.header}>
                 <Text style={{color: '#E91E63'}}>Sepet : {count} ürün</Text>
            </View>
            <FlatList data={data.data} renderItem={renderBasket}/>
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