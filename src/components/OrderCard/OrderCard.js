import React from 'react'
import { FlatList, Image, Text, TouchableWithoutFeedback, View } from 'react-native'
import styles from './OrderCard.style'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const OrderCard = ({order, img, selectOrder, selectDetail}) => {

    const renderOrder = ({item}) => {
        return(
            <TouchableWithoutFeedback onPress={()=> selectOrder(item)}>
                <Image source={{uri: img + item.img_url}} style={styles.image}/>            
            </TouchableWithoutFeedback>
        )
    }


    return(
        <View style={styles.container}>
            <View style={styles.inner_container}>
                <View style={styles.upper_container}>
                    <View style={{}}>
                        <Text style={styles.text_date}>{order.order_date}</Text>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={{color: 'black'}}>Toplam:  </Text>
                            <Text style={{color: '#E91E63'}}>{order.total_amount} TL</Text>
                        </View>
                    </View>
                    <TouchableWithoutFeedback onPress={()=> selectDetail(order, img)}>
                        <Text style={{color: '#E91E63'}}>Detaylar</Text>
                    </TouchableWithoutFeedback>
                </View>
                <View style={styles.middle_container}>
                    <Icon name="vanish" size={30} style={styles.icon}/>
                    <Text style={{color: 'darkorange'}}>   Kargo Bekleniyor</Text>
                </View>
                <View style={styles.footer_container}>
                    <FlatList data={order.order_detail} renderItem={renderOrder} horizontal/>
                </View>
            </View>
        </View>
    )
}

export default OrderCard