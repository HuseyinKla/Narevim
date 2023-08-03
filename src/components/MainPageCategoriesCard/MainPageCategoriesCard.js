import React from 'react'
import { Image, TouchableWithoutFeedback, View } from 'react-native'
import styles from './MainPageCategoriesCard.style'


const MainPageCategoriesCard = ({category, onSelect, imageUrl}) => {
    return(
        <TouchableWithoutFeedback onPress={onSelect}>
            <View style={styles.container}>
                <Image style={styles.image} source={{uri: imageUrl+category.img_url}}/>
            </View>
        </TouchableWithoutFeedback>

    )
}

export default MainPageCategoriesCard