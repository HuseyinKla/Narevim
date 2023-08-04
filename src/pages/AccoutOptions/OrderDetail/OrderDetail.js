import React from 'react'
import { Dimensions, FlatList, Image, ScrollView, Text, View } from 'react-native'
import styles from './OrderDetail.style'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


const OrderDetail = ({route}) => {




    const {item, img, detail} = route.params
    let count = 0
    item.order_detail.map((item) => ++count)
    const {width, height} = Dimensions.get('window')


    const renderOrderDetail = ({item}) => {
        return(
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image source={{uri: img + item.img_url}} style={{height: 100, width: 100}} />
                <View >
                    <Text numberOfLines={2} style={{width: width * 0.6, color: 'black'}}>{item.title}</Text>
                    <Text style={{color: 'black'}}>Adet: {item.qty}</Text>
                    <Text style={{color: '#E91E63'}}>{item.subtotal} TL</Text>
                </View>
            </View>
        )
    }



    return(
        <View style={styles.container}>
            <ScrollView>
            <View style={styles.inner_container}>
                <View style={{flexDirection: 'row'}}>
                    <Text style={{color: 'black'}}>Sipariş No:  </Text>
                    <Text style={{color: 'black', fontWeight: 'bold'}}>{item.order_number}</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Text style={{color: 'black'}}>Sipariş Tarihi:  </Text>
                    <Text style={{color: 'black', fontWeight: 'bold'}}>{item.order_date}</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Text style={{color: 'black'}}>Sipariş Özeti:   </Text>
                    <Text style={{color: 'black', fontWeight: 'bold'}}>{count} Ürün</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Text style={{color: 'black'}}>Toplam:  </Text>
                    <Text style={{color: '#E91E63'}}>{item.total_amount} TL</Text>
                </View>
            </View>
            <View style={styles.inner_container}>
                <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: width * 0.05 }}>
                    <Icon name="vanish" size={30} style={styles.icon}/>
                    <Text style={{color: 'darkorange'}}>   Kargo Bekleniyor</Text>
                </View>
                <FlatList data={item.order_detail} renderItem={renderOrderDetail}/>
            </View>
            <View style={[styles.inner_container, {flexDirection: 'row', height: height * 0.2}]}>
                <Icon name="map-marker-radius" size={30} style={[styles.icon, {color: '#E91E63'}]}/>
                <Text style={{color: 'black', fontWeight: 'bold'}}>   Teslimat Adresi</Text>
            </View>
            </ScrollView>
        </View>
    )
}

export default OrderDetail