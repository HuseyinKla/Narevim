import React from 'react'
import { Image, TouchableWithoutFeedback, View } from 'react-native'
import styles from './Brands.style'

const Brands = ({brand, img, onSelect}) => {
    return(
        <TouchableWithoutFeedback onPress={onSelect}>
            <View style={styles.container}>
                <Image source={{uri: img + brand.img_url}} style={styles.image}/>
            </View>
        </TouchableWithoutFeedback>
    )
}
export default Brands