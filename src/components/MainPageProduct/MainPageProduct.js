import React from 'react'
import { View, Image, Text, TouchableWithoutFeedback } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from './MainPageProductstyle'

const MainPageProduct = ({item, img, onSelect}) => {
    return(
        <View style={styles.container}>
        <TouchableWithoutFeedback onPress={onSelect}>
        <View style={styles.inner_container}>
            <Image source={{uri: img + item.img_url}} style={styles.image}/>
            <Text style={styles.brand}>{item.brand}</Text>
            <Text style={styles.title} numberOfLines={2}>{item.title}</Text>
            <View style={styles.star_container}>
                <Icon name="star" style={styles.star}/>
                <Icon name="star" style={styles.star}/>
                <Icon name="star" style={styles.star}/>
                <Icon name="star" style={styles.star}/>
                <Icon name="star" style={styles.star}/>
                <Text style={{fontSize: 10, alignSelf: 'center', paddingLeft: 5,}}>(3)</Text>
            </View>
            <Text style={styles.price}>{item.price} TL</Text>
                <View style={styles.button}>
                    <Text style={{color: 'black'}}>Ürün Detayı</Text>
                </View>
        </View>
        </TouchableWithoutFeedback>
    
    </View>
    )
}

export default MainPageProduct