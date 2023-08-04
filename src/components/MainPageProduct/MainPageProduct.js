import React from 'react'
import { View, Image, Text, TouchableWithoutFeedback } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from './MainPageProductstyle'

const MainPageProduct = ({item, img, onSelect}) => {
    const five = () => {
        return(
            <>
            <Icon name="star" style={styles.star}/>
            <Icon name="star" style={styles.star}/>
            <Icon name="star" style={styles.star}/>
            <Icon name="star" style={styles.star}/>
            <Icon name="star" style={styles.star}/>
            </>
        )    
    }

    const four = () => {
        return(
            <>
            <Icon name="star" style={styles.star}/>
            <Icon name="star" style={styles.star}/>
            <Icon name="star" style={styles.star}/>
            <Icon name="star" style={styles.star}/>
            <Icon name="star" style={styles.empty_star}/>
            </>
        )    
    }

    const three = () => {
        return(
            <>
            <Icon name="star" style={styles.star}/>
            <Icon name="star" style={styles.star}/>
            <Icon name="star" style={styles.star}/>
            <Icon name="star" style={styles.empty_star}/>
            <Icon name="star" style={styles.empty_star}/>
            </>
        )    
    }
    const two = () => {
        return(
            <>
            <Icon name="star" style={styles.star}/>
            <Icon name="star" style={styles.star}/>
            <Icon name="star" style={styles.empty_star}/>
            <Icon name="star" style={styles.empty_star}/>
            <Icon name="star" style={styles.empty_star}/>
            </>
        )    
    }
    const one = () => {
        return(
            <>
            <Icon name="star" style={styles.star}/>
            <Icon name="star" style={styles.empty_star}/>
            <Icon name="star" style={styles.empty_star}/>
            <Icon name="star" style={styles.empty_star}/>
            </>
        )
    }
    const zero = () => {
        return(
            <>
            <Icon name="star" style={styles.empty_star}/>
            <Icon name="star" style={styles.empty_star}/>
            <Icon name="star" style={styles.empty_star}/>
            <Icon name="star" style={styles.empty_star}/>
            <Icon name="star" style={styles.empty_star}/>
            </>
        )
    }
    return(
        <View style={styles.container}>
        <TouchableWithoutFeedback onPress={onSelect}>
        <View style={styles.inner_container}>
            <Image source={{uri: img + item.img_url}} style={styles.image}/>
            <Text style={styles.brand}>{item.brand}</Text>
            <Text style={styles.title} numberOfLines={2}>{item.title}</Text>
            <View style={styles.star_container}>
                {
                    item.point === 1 ? one():
                    item.point === 2 ? two():
                    item.point === 3 ? three():
                    item.point === 4 ? four(): 
                    item.point === 5 ? five(): zero()
                }
                <Text style={{fontSize: 10, alignSelf: 'center', paddingLeft: 5, color: 'black'}}>({item.review ? item.review : 0})</Text>
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