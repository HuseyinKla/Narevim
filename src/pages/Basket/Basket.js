import React, { useState } from 'react'
import { Text, View, FlatList, TouchableWithoutFeedback } from 'react-native'
import useFetchCategories from '../../hooks/useFetchCategories/useFetchCategories'
import Config from 'react-native-config'
import BasketProduct from '../../components/BasketProduct/BasketProduct'
import styles from './Basket.style'


const Basket = () => {
  
    const {data, loading, error} = useFetchCategories(Config.API_GET_BASKET_URL)
    console.log("tüm para: ",data.total)

    const renderBasket = ({item}) => <BasketProduct product={item}/>

    return(
        <View style={{flex: 1, backgroundColor: 'white'}}>
            <FlatList data={data.data} renderItem={renderBasket}/>
            <View style={styles.footer_container}>
                <View>
                    <Text style={styles.title}>Sepet Toplam</Text>
                    <Text style={styles.price}>{data.total} TL</Text>
                </View>
                <TouchableWithoutFeedback>
                    <View style={styles.button}>
                        <Text style={styles.text}>Alışverişi Tamamla</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </View>
    )
}

export default Basket