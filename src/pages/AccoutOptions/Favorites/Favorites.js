import React, { useEffect } from 'react'
import { ActivityIndicator, FlatList, View } from 'react-native'
import useFetchCategories from '../../../hooks/useFetchCategories/useFetchCategories'
import Config from 'react-native-config'
import MainPageProduct from '../../../components/MainPageProduct'


const Favorites = ({navigation}) => {
    const {data, loading, error} = useFetchCategories(Config.API_GET_FAV_URL)

    const handleSelect = (id, title) => {
        navigation.navigate('ProductScreen',{id, title})
    }


    const renderFav = ({item}) => <MainPageProduct item={item} img={data.image_path} onSelect={()=> handleSelect(item.id, item.title)}/>

    if(loading){
        return(
            <ActivityIndicator size={'large'} color={'#E91E63'}/>
        )
    }else{
        return(
            <View>
                <FlatList data={data.data} renderItem={renderFav} numColumns={'2'}/>
            </View>
        )
    }
}

export default Favorites