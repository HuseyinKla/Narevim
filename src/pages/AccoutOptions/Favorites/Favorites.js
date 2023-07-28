import React from 'react'
import { FlatList, Text, View } from 'react-native'
import useFetchCategories from '../../../hooks/useFetchCategories/useFetchCategories'
import Config from 'react-native-config'


const Favorites = () => {


    const {data, loading, error} = useFetchCategories(Config.API_GET_FAV_URL)
    console.log("favoriler: ",data)

    const renderFav = ({item}) => <Text>{item.value}</Text>


    return(
        <View>
            <FlatList data={data.data} renderItem={renderFav}/>
        </View>
    )
}

export default Favorites