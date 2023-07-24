import React from 'react'
import { ActivityIndicator, FlatList } from 'react-native'
import Config from 'react-native-config'
import { SafeAreaView } from 'react-native-safe-area-context'
import MainCategoriesCard from '../../components/MainCategoriesCard/MainCategoriesCard'
import useFetchCategories from '../../hooks/useFetchCategories'
import FlatListItemSeparator from '../../components/Divider'


const Categories = ({navigation}) => {

    const {data, loading, error} = useFetchCategories(Config.API_GET_CATEGORIES_URL)


    const handleSelectCategory = (id, title) => {
        navigation.navigate('FirstCategoryLayer', {id, title})
    }

    const renderCategories = ({item}) => <MainCategoriesCard category={item}
    onSelect={()=> handleSelectCategory(item.id, item.title)} 
    imageUrl={data.image_path}/>

    if(error){
        console.log("işlem sonucu hatalıdır error: ",error)
    }
    if(loading){
        return <ActivityIndicator size={'large'}/>
    }else{
        return(
            <SafeAreaView>
                <FlatList data={data.data} renderItem={renderCategories} ItemSeparatorComponent={FlatListItemSeparator}/>
            </SafeAreaView>
        ) 
    }

}

export default Categories