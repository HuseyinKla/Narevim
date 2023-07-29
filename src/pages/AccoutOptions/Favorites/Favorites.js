import React from 'react'
import { FlatList, Text, View } from 'react-native'
import useFetchCategories from '../../../hooks/useFetchCategories/useFetchCategories'
import Config from 'react-native-config'
import FavProduct from '../../../components/FavProduct'
import MainPageProduct from '../../../components/MainPageProduct'


const Favorites = ({navigation}) => {
    const {data, loading, error} = useFetchCategories(Config.API_GET_FAV_URL)

    const handleSelect = (id, title) => {
        navigation.navigate('ProductScreen',{id, title})
    }

    const renderFav = ({item}) => <MainPageProduct item={item} img={data.image_path} onSelect={()=> handleSelect(item.id, item.title)}/>

    return(
        <View>
            <FlatList data={data.data} renderItem={renderFav} numColumns={'2'}/>
        </View>
    )
}

export default Favorites