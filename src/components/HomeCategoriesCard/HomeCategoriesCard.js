import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './HomeCategoriesCard.style'


const HomeCategoriesCard = ({homeProduct}) => {
    return(
        <View style={styles.container}>
            <View style={styles.inner_container}>
                <Image source={{uri: homeProduct.img_url}} style={styles.image}/>
                <Text style={styles.title}>{homeProduct.title}</Text>
            </View>
        </View>
    )
}

export default HomeCategoriesCard

/*{"brand": "VİP AHMET", "discountRatio": 0, "discount_price": "71.155", "id": "60738", "img_url": "vip-ahmet-cok-amacli-katli-raf-192.jpg", "isDiscount": "0", "point": 5, "price": "74.9", "review": "3", "title": "VİP AHMET ÇOK AMAÇLI KATLI RAF VP-993"}*/