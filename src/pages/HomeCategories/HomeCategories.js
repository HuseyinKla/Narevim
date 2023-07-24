import React, { useCallback, useEffect, useState } from 'react'
import { Alert, FlatList, Image, Text, View } from 'react-native'
import useFetchCategories from '../../hooks/useFetchCategories'
import Config from 'react-native-config'
import HomeCategoriesCard from '../../components/HomeCategoriesCard/HomeCategoriesCard'
import axios from 'axios'


let limit = 10
let loadmore = true 


const HomeCategories = ({route}) => {

    const {url} = route.params
    const [veri, setVeri] = useState([])
    const [skip, setSkip] = useState(0)
    const [page, setPage] = useState(0)

    const fetchHomeProduct = () => {
        const API_KEY = 'SSVa97j7z83nMXDzhmmdHSSLPG9NueDf3J6BgCSS';
        axios.defaults.headers['X-API-KEY'] = API_KEY;
        console.log("homecategories: ",url)
        axios.post(Config.API_POST_HOME_CATEGORIES_URL, {url_string: url, per_page: '10', page: page, sorting: 'ASC'},
        {
            headers: axios.defaults.headers['Content-Type'] = 'multipart/form-data'
        })
        .then(res=> {
            if(res.data.data.length == 0){
                loadmore = false
            }
            setVeri([...veri, ...res.data.data])
            setSkip(skip+10)
            setPage(page+1)
        })
        .catch(err=> console.log("hata var: ",err))
    }

    useEffect(()=> {
        fetchHomeProduct()
    },[])

    console.log("ekrandaki bilgiler: ",veri)

    renderProduct = useCallback(({item})=> {
        return(
            <View style={{marginHorizontal: 20}}>
                <Image source = {require('../../assets/narlogo.png')} style={{width: 100, height: 100}}/>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text>{item.title}</Text>
                    <Text>{item.price}</Text>
                </View>

            </View>
        )
    },[veri])

    const endReached = () => {
        if(loadmore){
            fetchHomeProduct()
        }
    }
    let key =0
    const keyExtractor = useCallback(() => {
        key+=1
    })

    renderHomeCategories = ({item}) => <HomeCategoriesCard homeProduct={item}/>

    if(route.params.url){
        return(
            <View>
                <FlatList 
                data={veri} 
                renderItem={renderProduct}
                onEndReached={endReached}
                keyExtractor={(item) => item.id}
                />
                <Text>zoret</Text>
            </View>
//60743
        )
    }else{
        return <Text style={{alignSelf: 'center'}}>Ürün Bulunamadı</Text>
    }

}


export default HomeCategories


/*{"brand": "VİP AHMET", "discountRatio": 0, "discount_price": "71.155", "id": "60738", "img_url": "vip-ahmet-cok-amacli-katli-raf-192.jpg", "isDiscount": "0", "point": 5, "price": "74.9", "review": "3", "title": "VİP AHMET ÇOK AMAÇLI KATLI RAF VP-993"}*/