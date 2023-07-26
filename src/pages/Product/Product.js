import React from 'react'
import { View, Text, Image, TouchableWithoutFeedback, ActivityIndicator, ScrollView } from 'react-native'
import styles from './Product.style'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import useFetchCategories from '../../hooks/useFetchCategories/useFetchCategories'
import Config from 'react-native-config'


const Product = ({route}) => {
    const {id} = route.params
    console.log(id)

    const {data, loading, error} = useFetchCategories(Config.API_POST_PRODUCT_DETAIL_URL, {product_id: id})
    console.log("product detail",data.data)
    const product = data.data

    const zort = () => {
        console.log(data.images[0])
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
        </ScrollView>
        <View style={styles.bottom_container}>
            <Text style={styles.price}>{product.price} TL</Text>
            <Icon name="heart-outline" style={styles.icon}/>
            <View style={styles.buton}>
                <TouchableWithoutFeedback onPress={zort}>
                    <Text style={{color: 'white'}}>buton</Text>
                </TouchableWithoutFeedback>
            </View>
        </View>
    </View>
    )}
}

export default Product


//<Image source={{uri: data.images[0]}} style={styles.image}/>
/**/