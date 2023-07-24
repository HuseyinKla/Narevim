import React from 'react'
import { Text, TouchableWithoutFeedback, View, Image } from 'react-native'
import styles from './SecondCategoriesCard.style'


const SecondCategoriesCard = ({category, onSelect, imageUrl}) => {
    return(
        <TouchableWithoutFeedback onPress={onSelect}>
            <View style={styles.container}>
                <Image source={{uri: imageUrl+category.img_url}} style={styles.image} />
                <Text style={styles.title}>{category.title}</Text>
            </View>
        </TouchableWithoutFeedback>

    )
}

export default SecondCategoriesCard