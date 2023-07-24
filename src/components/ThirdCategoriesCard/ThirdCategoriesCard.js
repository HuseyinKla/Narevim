import React from 'react'
import { Image, Text, TouchableWithoutFeedback, View } from 'react-native'
import styles from './ThirdCategoriesCard.style'

const ThirdCategoriesCard = ({category, onSelect, imageUrl}) => {
    return(
        <TouchableWithoutFeedback onPress={onSelect}>
            <View style={styles.continer}>
                <Image style={styles.image} source={{uri: imageUrl+category.img_url}}/>
                <Text style={styles.title}>{category.title}</Text>
            </View>
        </TouchableWithoutFeedback>
     
    )
}

export default ThirdCategoriesCard