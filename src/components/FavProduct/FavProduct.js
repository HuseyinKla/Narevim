import React from 'react'
import { Text, View } from 'react-native'


const FavProduct = ({fav}) => {
    return(
        <View>
            <Text>{fav.title}</Text>
            <Text>{fav.price}</Text>
        </View>
    )
}

export default FavProduct