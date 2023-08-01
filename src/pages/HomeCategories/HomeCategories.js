import React, { useCallback, useEffect, useState } from 'react'
import { Alert, FlatList, Image, Text, TouchableWithoutFeedback, View } from 'react-native'
import useFetchCategories from '../../hooks/useFetchCategories'
import Config from 'react-native-config'
import HomeCategoriesCard from '../../components/HomeCategoriesCard/HomeCategoriesCard'
import axios from 'axios'
import styles from './HomeCategories.style'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import MainPageProduct from '../../components/MainPageProduct'


const HomeCategories = ({route, navigation}) => {

    const {url} = route.params
    const [page, setPage] = useState(0)
    const [data, setData] = useState([])
    const [img, setImg] = useState("")

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
                setImg(responseData.data.image_path)
                //console.log("fotolar: ",responseData.data.image_path)
        } catch (error) {
            console.log("hata var: ",error)
        }
    }

    useEffect(()=> {
        fetchHomeProducts()
    },[])


    const handleSelectedProduct = (id, title) => {
        console.log(id)
        navigation.navigate('ProductScreen', {id, title})
    }

    const renderProducts = ({item}) => <MainPageProduct 
    item={item} 
    img={img} 
    onSelect={()=> handleSelectedProduct(item.id, item.title)}
    />

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
                onEndReached={endReached}
                numColumns={2}
                
                />
            </View>
        )
    }else{
        return (
            <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
                <Text style={{color: '#E91E63', fontWeight: 'bold', fontSize: 18}}>Ürün Bulunamadı!</Text>
            </View>
        )
    }
}

export default HomeCategories


/*{"brand": "VİP AHMET", "discountRatio": 0, "discount_price": "71.155", "id": "60738", "img_url": "vip-ahmet-cok-amacli-katli-raf-192.jpg", "isDiscount": "0", "point": 5, "price": "74.9", "review": "3", "title": "VİP AHMET ÇOK AMAÇLI KATLI RAF VP-993"}*/

//renderHomeCategories = ({item}) => <HomeCategoriesCard homeProduct={item}/>
//


/*        return(
            <View style={styles.container}>
                <View style={styles.inner_container}>
                    <Image source={{uri: img + item.img_url}} style={styles.image}/>
                    <Text style={styles.brand}>{item.brand}</Text>
                    <Text style={styles.title}>{item.title}</Text>
                    <View style={styles.star_container}>
                        <Icon name="star" style={styles.star}/>
                        <Icon name="star" style={styles.star}/>
                        <Icon name="star" style={styles.star}/>
                        <Icon name="star" style={styles.star}/>
                        <Icon name="star" style={styles.star}/>
                        <Text style={{fontSize: 10, alignSelf: 'center', paddingLeft: 5,}}>(3)</Text>
                    </View>
                    <Text style={styles.price}>{item.price} TL</Text>
                    <TouchableWithoutFeedback onPress={handle(item.id)}>
                        <View style={styles.button}>
                            <Text style={{color: 'black'}}>Ürün Detayı</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </View>
        )*/