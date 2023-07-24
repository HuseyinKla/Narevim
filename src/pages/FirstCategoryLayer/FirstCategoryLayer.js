import React from 'react'
import { View, ActivityIndicator, SafeAreaView, FlatList } from 'react-native'
import Config from 'react-native-config'
import useFetchCategories from '../../hooks/useFetchCategories'
import SecondCategoriesCard from '../../components/SecondCategoriesCard/SecondCategoriesCard'
import FlatListItemSeparator from '../../components/Divider'

const FirstCategoryLayer = ({navigation,route}) => {

    const {data, loading, error} = useFetchCategories(Config.API_POST_FIRST_CATEGORIES_URL, {first_category_id: route.params.id})

    const renderDetailCategory = ({item}) => <SecondCategoriesCard category={item}
    imageUrl={data.image_path}
    onSelect={()=> handleSelectedCategory(item.id, item.title)}/>

    const handleSelectedCategory = (id, title) => {
        navigation.navigate('SecondCategoryLayer', {id, title})
    }

    if(error){
        console.log("işlem sonucu hatalıdır error: ",error)
    }
    if(loading){
        return <ActivityIndicator size={'large'}/>
    }else{
        return(
        <SafeAreaView>
            <FlatList data={data.data} renderItem={renderDetailCategory} ItemSeparatorComponent={FlatListItemSeparator}/>
        </SafeAreaView>
        )  
    }

}

export default FirstCategoryLayer