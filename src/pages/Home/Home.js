import React, { useState } from 'react'
import { ActivityIndicator, FlatList, Text, View, Image, TextInput, ScrollView, TouchableWithoutFeedback, Alert } from 'react-native'
import Config from 'react-native-config'
import useFetchCategories from '../../hooks/useFetchCategories'
import MainPageCategoriesCard from '../../components/MainPageCategoriesCard/MainPageCategoriesCard'
import styles from './Home.style'
import Brands from '../../components/Brands/Brands'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import axios from 'axios'
import MainPageProduct from '../../components/MainPageProduct/MainPageProduct'
import SortProduct from '../../components/SortProduct/SortProduct'

const Home = ({navigation}) => {


  const {data: brandData, loading: brandLoading, error: brandError} = useFetchCategories(Config.API_GET_BRANDS_URL)
  const {data, loading, error} = useFetchCategories(Config.API_GET_MAIN_CATEGORIES_URL)
  const [searchText, setSearchText] = useState("")
  const [isSearch, setIsSearch] = useState(false)
  const [brandProducts, setBrandProducts] = useState([])
  const [page, setPage] = useState(0)
  const [sortType, setSortType] = useState('')

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
    navigation.navigate('ProductScreen', {id, title})
  }


  const handleSelectMainCategories = (url) => {
    //console.log(url)
    navigation.navigate('HomeScreencategories', {url} )
  }

  const handleSelectBrand = (id, title) => {
    //console.log("marka bastım: ",id)
    navigation.navigate('BrandsScreen', {id, title})
  }

  const handleSearchBrand = async() => {
    //console.log("aradım: ", searchText)
    if(!isSearch)
    {
      axios.defaults.headers['X-API-KEY'] = Config.API_KEY
      const responseData = await axios.post(Config.API_POST_SEARCH_BRAND_URL, {keywords: searchText, page: page.toString(), per_page: '30', sorting: sortType},
      {
        headers: axios.defaults.headers['Content-Type'] = 'multipart/form-data'
      })
      //console.log("marka arama işlem sonucu: ",responseData.data.message)
      //console.log("marka arama işlem sonucu: ",responseData.data)
      if(responseData.data.status === "error"){
        Alert.alert("Hatalı arama","Aradığınız ürün bulunamadı!", [
          {text: 'Tamam', onPress: () => closeSearch()},
      ])
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
    console.log("aranan ürünlerde sona geldik")
    setPage(page+1)
    handleSearchBrand()
  }

  const selectSortASC = () => {
    console.log("artan sıraya göre sıraladım")
    setSortType('ASC')
    handleSearchBrand()
}

const selectSortDESC = () => {
    console.log("azalan sıraya göre sıraladım")
    setSortType('DESC')
    handleSearchBrand()
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
              <TextInput placeholder='Aramak istediğiniz ürünü girin' value={searchText} onChangeText={setSearchText} placeholderTextColor={'gray'} style={{color: 'black'}} cursorColor={'#E91E63'}/>
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
              <>
                <SortProduct onSelectASC={selectSortASC} onSelectDESC={selectSortDESC}/>
                <FlatList data={brandProducts.data} renderItem={renderBrandProduct} numColumns={'2'} onEndReached={endReached}/>
              </>
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