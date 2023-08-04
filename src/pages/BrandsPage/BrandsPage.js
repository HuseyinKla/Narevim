import React, { useEffect, useState } from 'react'
import { FlatList, Text, View } from 'react-native'
import Config from 'react-native-config'
import MainPageProduct from '../../components/MainPageProduct'
import axios from 'axios'
import SortProduct from '../../components/SortProduct'

const BrandsPage = ({route, navigation}) => {

    const [page, setPage] = useState(0)
    const [data, setData] = useState([])
    const [product, setProduct] = useState(null)
    const [sortType, setSortType] = useState('') 

    const {id} = route.params
    console.log("gelen id: ",id)

    const fetchBrandProduct = async() => {
        axios.defaults.headers['X-API-KEY'] = Config.API_KEY
        const responseData = await axios.post(Config.API_POST_BRAND_PRODUCT_URL, {page: page.toString(), per_page: '10', brand_id: id, sorting: sortType},
        {
           headers: axios.defaults.headers['Content-Type'] = 'multipart/form-data'
        })
        console.log("post işlem sonucu: ",responseData.data)
        setProduct(responseData.data)
        setData([...data, ...responseData.data.data])
    }


    const renderBrandProduct = ({item}) => <MainPageProduct item={item} 
    img={product.image_path}
    onSelect={()=> handleSelectedBrandProduct(item.id, item.title)} 
    />

    const handleSelectedBrandProduct = (id, title) => {
        console.log("seçilen ürünün adı: ",title)
        console.log("seçilen ürünün idsi: ",id)
        navigation.navigate('ProductScreen', {id, title})
    }


    const endReached = () => {
        setPage(page+1)
    }

    useEffect(()=> {
        fetchBrandProduct()
    },[page, sortType])


    const selectSortASC = () => {
        console.log("artan sıraya göre sıraladım")
        setSortType('ASC')
        fetchBrandProduct()
    }

    const selectSortDESC = () => {
        console.log("azalan sıraya göre sıraladım")
        setSortType('DESC')
        fetchBrandProduct()
    }


    if(data.length === 0){
        return(
            <View style={{alignItems: 'center',flex: 1, justifyContent: 'center'}}>
                <Text style={{color: '#E91E63', fontWeight: 'bold', }}>Ürün Bulunamadı!</Text>
            </View>
        )
    }else{
        return(
            <View>
                <SortProduct onSelectASC={selectSortASC} onSelectDESC={selectSortDESC}/>
                <FlatList data={data} renderItem={renderBrandProduct} onEndReached={endReached} numColumns={'2'}/>
            </View>
        )
    }
}
export default BrandsPage