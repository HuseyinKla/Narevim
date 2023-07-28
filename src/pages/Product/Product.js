import React, { useState } from 'react'
import { View, Text, Image, TouchableWithoutFeedback, ActivityIndicator, ScrollView } from 'react-native'
import styles from './Product.style'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import useFetchCategories from '../../hooks/useFetchCategories'
import Config from 'react-native-config'
import axios from 'axios'

const Product = ({route, navigation}) => {
    const {id} = route.params

    const {data, loading, error} = useFetchCategories(Config.API_POST_PRODUCT_DETAIL_URL, {product_id: id})
    console.log("product detail",data.data)
    const product = data.data
    console.log("isFavoritte değeri: ",data.isFavoritte)

    const addChart = async() => {
        const API_KEY = 'SSVa97j7z83nMXDzhmmdHSSLPG9NueDf3J6BgCSS';
        axios.defaults.headers['X-API-KEY'] = API_KEY;
        console.log("sepete ekle id: ",product.id)
        const responseData = await axios.post(Config.API_POST_ADD_BASKET_URL, {product_id: product.id, qty: '1'},
            {
                headers: axios.defaults.headers['Content-Type'] = 'multipart/form-data'
            })
            console.log("ürün ekleme işlem sonucu: ",responseData.data.message)
    }
    //FAVA EKLENDİKTEN SONRA İCON GÜNCELLENMİYOR UNUTMA !!!!
    const addFav = async() => {
        const API_KEY = 'SSVa97j7z83nMXDzhmmdHSSLPG9NueDf3J6BgCSS';
        axios.defaults.headers['X-API-KEY'] = API_KEY;
        const responseData = await axios.post(Config.API_POST_TOGGLE_FAV_URL, {product_id: product.id},
        {
            headers: axios.defaults.headers['Content-Type'] = 'multipart/form-data'
        })
        if(responseData.data.status === "error"){
            navigation.navigate('AccountStack', {screen: 'LogInScreen'})
        }
        console.log(responseData.data.message)
    }

    if(loading){
        return(
            <ActivityIndicator size={'large'}/>
        )
    }else{
    return(
    <View style={styles.container}>
        <ScrollView >
            <View style={styles.inner_container}>
                <Image source={{uri: data.images[0]}} style={styles.image}/>
                <Text style={styles.title}>{product.title}</Text>
                <Text style={styles.text}>Ürün hakkında bilgiler:</Text>
                <Text style={styles.description}>{product.description}</Text>
            </View>
            <View style={{height: 60 }}/>
        </ScrollView>
        <View style={styles.bottom_container}>
            <Text style={styles.price}>{product.price} TL</Text>
            <TouchableWithoutFeedback onPress={addFav}>
                {
                    data.isFavoritte === 1
                    ?   <Icon name="heart" style={{color: 'red', fontSize: 30}}/>
                    :   <Icon name="heart-outline" style={styles.icon}/>
                }
            </TouchableWithoutFeedback>
            <View style={styles.buton}>
                <TouchableWithoutFeedback onPress={addChart}>
                    <Text style={{color: 'white'}}>Sepete Ekle</Text>
                </TouchableWithoutFeedback>
            </View>
        </View>
    </View>
    )}
}

export default Product