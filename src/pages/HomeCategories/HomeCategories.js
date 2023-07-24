import React, { useCallback, useEffect, useState } from 'react'
import { Alert, FlatList, Image, Text, View } from 'react-native'
import useFetchCategories from '../../hooks/useFetchCategories'
import Config from 'react-native-config'
import HomeCategoriesCard from '../../components/HomeCategoriesCard/HomeCategoriesCard'
import axios from 'axios'


let image_path = ""

const HomeCategories = ({route}) => {

    const {url} = route.params
    const [page, setPage] = useState(0)
    const [data, setData] = useState([])

    console.log("sayfa sayısı: ",page)

    const fetchHomeProducts = async() => {
        const API_KEY = 'SSVa97j7z83nMXDzhmmdHSSLPG9NueDf3J6BgCSS';
        axios.defaults.headers['X-API-KEY'] = API_KEY;
        try {
            const responseData = await axios.post(Config.API_POST_HOME_CATEGORIES_URL, 
                {url_string: url, per_page: '10', page:  page.toString(), sorting: 'ASC'},
                {
                    headers: axios.defaults.headers['Content-Type'] = 'multipart/form-data'
                })
                console.log("post işlem sonucu: ",responseData.data.data)
                setData([...data,...responseData.data.data])
                image_path = responseData.data.image_path
                //console.log("fotolar: ",responseData.data.image_path)
        } catch (error) {
            console.log("hata var: ",error)
        }
    }

    useEffect(()=> {
        fetchHomeProducts()
    },[])



    renderHomeCategories = ({item}) => <HomeCategoriesCard homeProduct={item}/>

    const renderProducts = ({item}) => {
        return(
        <View>
            <Image source={{uri: image_path + item.img_url}} style={{width: 100, height: 100}}/>
            <Text>{item.title}</Text>
            <Text>{item.price}</Text>
        </View>
        )
    }
    const endReached = () => {
        if(page +1 < 5){
            setPage(page+1) 
            fetchHomeProducts()
        }
    }

    if(route.params.url){
        return(
            <View>
                <FlatList 
                data={data}
                renderItem={renderProducts}
                onEndReached={endReached}/>
            </View>
//60743
        )
    }else{
        return <Text style={{alignSelf: 'center'}}>Ürün Bulunamadı</Text>
    }

}


export default HomeCategories


/*{"brand": "VİP AHMET", "discountRatio": 0, "discount_price": "71.155", "id": "60738", "img_url": "vip-ahmet-cok-amacli-katli-raf-192.jpg", "isDiscount": "0", "point": 5, "price": "74.9", "review": "3", "title": "VİP AHMET ÇOK AMAÇLI KATLI RAF VP-993"}*/