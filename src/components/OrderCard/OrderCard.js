import React from 'react'
import { Text, View } from 'react-native'
import styles from './OrderCard.style'

const OrderCard = ({order}) => {
    return(
        <View style={styles.container}>
            <View style={styles.inner_container}>
                <Text style={styles.text}>Siparişinizin Numarası:  {order.order_id}</Text>
                <Text style={styles.text}>Sipariş Verilme Tarihi:   {order.order_date}</Text>
                <Text style={styles.text}>Siparişin Toplam Fiyatı: {order.total_amount} TL</Text>
            </View>
        </View>
    )
}

export default OrderCard