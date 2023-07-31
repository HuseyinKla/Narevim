import React, { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, Text, View, Image, Button, TextInput, ScrollView, TouchableWithoutFeedback, Alert } from 'react-native'
import Config from 'react-native-config'
import useFetchCategories from '../../hooks/useFetchCategories'
import { SafeAreaView } from 'react-native-safe-area-context'
import MainPageCategoriesCard from '../../components/MainPageCategoriesCard/MainPageCategoriesCard'
import styles from './Home.style'
import Brands from '../../components/Brands/Brands'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import axios from 'axios'
import MainPageProduct from '../../components/MainPageProduct/MainPageProduct'

const Home = ({navigation}) => {


  const {data: brandData, loading: brandLoading, error: brandError} = useFetchCategories(Config.API_GET_BRANDS_URL)
  const {data, loading, error} = useFetchCategories(Config.API_GET_MAIN_CATEGORIES_URL)
  const [searchText, setSearchText] = useState("")
  const [isSearch, setIsSearch] = useState(false)
  const [brandProducts, setBrandProducts] = useState([])
  const [page, setPage] = useState(0)


  const renderMainCategories = ({item}) => <MainPageCategoriesCard category={item} 
  onSelect={() => handleSelectMainCategories(item.button_url)} 
  imageUrl={data.image_path}/>

  const renderBrands = ({item}) => <Brands brand={item} 
  img={brandData.image_path} 
  onSelect={()=> handleSelectBrand(item.id, item.title)}/>

  const renderBrandProduct = ({item}) => <MainPageProduct 
  item={item}
  onSelect={()=> handleBrandProducts(item.id, item.title)}
  img={brandProducts.image_path}/>


  const handleBrandProducts = (id, title) => {
    console.log("seçilen ürünün idsi: ",id)
    console.log("seçilen ürünün adı: ",title)
  }


  const handleSelectMainCategories = (url) => {
    console.log(url)
    navigation.navigate('HomeScreencategories', {url} )
  }

  const handleSelectBrand = (id, title) => {
    console.log("marka bastım: ",id)
    navigation.navigate('BrandsScreen', {id, title})
  }

  const handleSearchBrand = async() => {
    console.log("aradım: ", searchText)
    if(!isSearch)
    {
      const API_KEY = 'SSVa97j7z83nMXDzhmmdHSSLPG9NueDf3J6BgCSS';
      axios.defaults.headers['X-API-KEY'] = API_KEY;
      const responseData = await axios.post(Config.API_POST_SEARCH_BRAND_URL, {keywords: searchText, page: page.toString(), per_page: '10', sorting: 'ASC'},
      {
        headers: axios.defaults.headers['Content-Type'] = 'multipart/form-data'
      })
      console.log("marka arama işlem sonucu: ",responseData.data.message)
      console.log("marka arama işlem sonucu: ",responseData.data)
      if(responseData.data.status === "error"){
        Alert.alert(`Error! ${responseData.data.message}`)
      }else{
        setBrandProducts(responseData.data)
        setIsSearch(!isSearch)
      }
    }
  }

  const closeSearch = () => {
    setIsSearch(false)
    setSearchText("")
  }

  const endReached = () => {
    console.log("sona geldik")
    if(page +1 < 5){
        setPage(page+1) 
        handleSearchBrand()
    }
}

  if(error){
    console.log("işlem hatalı error: ",error)
  }
  if(loading){
    return <ActivityIndicator size={'large'}/>
  }else{
    return(
      <View style={{flex: 1}}>
        <ScrollView>
          <View>
            <Image source = {require('../../assets/narlogo.png')} style={styles.image}/>
            <View style={styles.input}>
              <TextInput placeholder='Aramak istediğiniz ürünü girin' value={searchText} onChangeText={setSearchText}/>
              {
                isSearch
                ? <TouchableWithoutFeedback onPress={closeSearch}>
                    <Icon name="close-circle-outline" style={styles.icon}/>
                  </TouchableWithoutFeedback>
                : <TouchableWithoutFeedback onPress={handleSearchBrand}>
                    <Icon name="magnify" style={styles.icon}/>
                  </TouchableWithoutFeedback>
              }
            </View>
            {
              isSearch
              ? 
                <FlatList data={brandProducts.data} renderItem={renderBrandProduct} numColumns={'2'} onEndReached={endReached}/>
              : 
              <>
                <FlatList data={data.data} renderItem={renderMainCategories}/>
                <Text style={{alignSelf: 'center', justifyContent: 'center', fontSize: 18, color: '#E91E63', borderBottomColor: '#E91E63', borderBottomWidth: 1}}>Markalar</Text>
                <FlatList data={brandData.data} renderItem={renderBrands} horizontal/>
              </>
            }
          </View>
        </ScrollView>
      </View>
    )
  }
}

export default Home

//.JSON.
//
//Json formatına çevirip dene
//flatlisti maple. çıktılara bak
//casual datayı json formatına çevir




/*        <Button title='arttır' onPress={()=> dispatch(increment())}></Button>
        <Button title='azalt' onPress={()=> dispatch(decrement())}></Button>
        <Button title='tam arttır' onPress={()=> dispatch(incrementByAmount(10))}></Button>
        <Text>{count}</Text>
        <TextInput value={text1} onChangeText={setText1} placeholder='type'/>
        <TextInput value={text2} onChangeText={setText2} placeholder='type'/>
        <TextInput value={text3} onChangeText={setText3} placeholder='type'/>
        <Button title='girişi sonlandır' onPress={()=> dispatch(addAddress({text1,text2,text3}))}/>
        <FlatList data={adres} renderAddress={renderAddressitem}/>
        <Text>AYRIK</Text>
        {
          casualData.map((item) => <Text>{item.name}</Text>)
        }*/



/*  const casualData = [
  {
    id: 0,
    name: 'isim1',
    surname: 'soyisim1',
    age: 'yaş1',
  },
  {
    id: 1,
    name: 'isim2',
    surname: 'soyisim2',
    age: 'yaş2',
  },
  {
    id: 2,
    name: 'isim3',
    surname: 'soyisim3',
    age: 'yaş3',
  },
  {
    id: 3,
    name: 'isim4',
    surname: 'soyisim4',
    age: 'yaş4',
  },
]*/



/*  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()
  const adres = useSelector(state => state.address.addressList)


  const [text1, setText1] = useState("")
  const [text2, setText2] = useState("")
  const [text3, setText3] = useState("")*/

/*import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from '../../context/counter/counterSlice'
import { addAddress } from '../../context/AddressList/addressSlice'*/


/*            <View style={styles.input}>
              <TextInput placeholder='Aramak istediğiniz ürünü girin' value={searchText} onChangeText={setSearchText} />
              <TouchableWithoutFeedback onPress={handleSearchBrand}>
                <Icon name="magnify" style={styles.icon}/>
              </TouchableWithoutFeedback>
            </View>
            <FlatList data={data.data} renderItem={renderMainCategories}/>
            <Text style={{alignSelf: 'center', justifyContent: 'center', fontSize: 18, color: '#E91E63', borderBottomColor: '#E91E63', borderBottomWidth: 1}}>Markalar</Text>
            <FlatList data={brandData.data} renderItem={renderBrands} horizontal/>*/