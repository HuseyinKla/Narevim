import React, { useEffect, useState } from 'react'
import { View, Text, Image, TouchableWithoutFeedback, ActivityIndicator, ScrollView } from 'react-native'
import styles from './Product.style'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import useFetchCategories from '../../hooks/useFetchCategories'
import Config from 'react-native-config'
import axios from 'axios'

const Product = ({route, navigation}) => {
    const {id, title} = route.params

    const {data, loading, error} = useFetchCategories(Config.API_POST_PRODUCT_DETAIL_URL, {product_id: id})
    console.log("product detail",data.data)
    const product = data.data
    console.log("isFavoritte değeri: ",data.isFavoritte)

    const [fav, setFav] = useState(data.isFavoritte)
    const [imgActive, setImgActive] = useState(0)

    const addCart = async() => {
        axios.defaults.headers['X-API-KEY'] = Config.API_KEY
        console.log("sepete ekle id: ",product.id)
        const responseData = await axios.post(Config.API_POST_ADD_BASKET_URL, {product_id: product.id, qty: '1'},
            {
                headers: axios.defaults.headers['Content-Type'] = 'multipart/form-data'
            })
            console.log("ürün ekleme işlem sonucu: ",responseData.data.status)
            if(responseData.data.status === "success"){
                navigation.navigate('BasketStack', {screen: 'BasketScreen'})
            }
    }

    const addFav = () => {
        axios.defaults.headers['X-API-KEY'] = Config.API_KEY
        axios.post(Config.API_POST_TOGGLE_FAV_URL, {product_id: product.id},
            {
                headers: axios.defaults.headers['Content-Type'] = 'multipart/form-data'
            })
        .then(res=> {
            console.log(res.data.operation_status)
            res.data.operation_status
            ? setFav(1)
            : setFav(0)
        })
    }

    const onChange = (swipe) => {
        if(swipe){
            const slide = Math.ceil(swipe.contentOffset.x / swipe.layoutMeasurement.width)
            if(slide != imgActive){
                setImgActive(slide)
            }
        }
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
                    <ScrollView
                    onScroll={({nativeEvent}) => onChange(nativeEvent)}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    horizontal
                    style={styles.scroll}
                    >
                        {
                            data.images.map((e, index) => 
                                <Image source={{uri: e}} style={styles.image} key={e}/>
                            
                            )
                        }
                    </ScrollView>
                    <View style={styles.wrapDot}>
                        {
                            data.images.map((e, index) => 
                            <Text 
                                key={e} 
                                style={imgActive == index ? styles.dotActive : styles.dot}>●</Text>
                            )
                        }
                    </View>
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
                        fav === 1
                        ?   <Icon name="heart" style={{color: 'red', fontSize: 30}}/>
                        :   <Icon name="heart-outline" style={styles.icon}/>
                    }
                </TouchableWithoutFeedback>
                <View style={styles.buton}>
                    <TouchableWithoutFeedback onPress={addCart}>
                        <Text style={{color: 'white'}}>Sepete Ekle</Text>
                    </TouchableWithoutFeedback>
                </View>
            </View>
        </View>
    )}
}

export default Product