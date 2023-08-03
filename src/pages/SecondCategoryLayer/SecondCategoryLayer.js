import React from 'react'
import { ActivityIndicator, FlatList } from 'react-native'
import useFetchCategories from '../../hooks/useFetchCategories'
import Config from 'react-native-config'
import { SafeAreaView } from 'react-native-safe-area-context'
import FlatListItemSeparator from '../../components/Divider'
import ThirdCategoriesCard from '../../components/ThirdCategoriesCard'


const SecondCategoryLayer = ({navigation, route}) => {

    const {data, loading, error} = useFetchCategories(Config.API_POST_SECOND_CATEGORIES_URL, {second_category_id: route.params.id})


    const renderLastCategories = ({item}) => <ThirdCategoriesCard category={item} 
    onSelect={() => handleSelectCategory(item.id, item.title)} 
    imageUrl={data.image_path}/>


    const handleSelectCategory = (id, title) => {
        navigation.navigate('ThirdCategoryLayer', {id, title})
    }

    if(error){
        console.log("işlem hatalıdır error: ",error)
    }
    if(loading){
        return <ActivityIndicator size={'large'}/>
    }else{
        return(
            <SafeAreaView>
                <FlatList data={data.data} renderItem={renderLastCategories} ItemSeparatorComponent={FlatListItemSeparator}/>
            </SafeAreaView>
        )
    }



}

export default SecondCategoryLayer