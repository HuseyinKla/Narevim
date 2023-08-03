import React from 'react'
import { NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import useFetchCategories from './hooks/useFetchCategories'
import Config from 'react-native-config'
import { ActivityIndicator, Text, TouchableWithoutFeedback } from 'react-native'
import store from './context/store'
import {Provider} from 'react-redux'

import Account from './pages/Account'
import Basket from './pages/Basket'
import Categories from './pages/Categories'
import Home from './pages/Home'
import FirstCategoryLayer from './pages/FirstCategoryLayer'
import SecondCategoryLayer from './pages/SecondCategoryLayer'
import ThirdCategoryLayer from './pages/ThirdCategoryLayer'
import HomeCategories from './pages/HomeCategories'
import SignIn from './pages/SignIn'
import Login from './pages/Login'
import Addres from './pages/AccoutOptions/Address'
import ChangePassword from './pages/AccoutOptions/ChangePassword'
import Favorites from './pages/AccoutOptions/Favorites'
import Orders from './pages/AccoutOptions/Orders'
import UserData from './pages/AccoutOptions/UserData'
import NewAddress from './pages/AccoutOptions/NewAddress'
import Product from './pages/Product'
import Payment from './pages/Payment'
import BrandsPage from './pages/BrandsPage'
import ForgotPassword from './pages/ForgotPassword'


const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()








const CategoriesPageStruct = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen name='CategoriesScreen' component={Categories} 
      options={({route}) => ({
        headerTitle: 'Kategoriler',
        headerTitleAlign: 'center',
        headerTitleStyle: {fontSize: 18, fontFamily: 'italic', color: '#E91E63'},
      })}/>
      <Stack.Screen name='FirstCategoryLayer' component={FirstCategoryLayer}
      options={({route}) => ({
        headerTitle: route.params.title,
        headerTitleStyle: {fontSize: 18, fontFamily: 'italic', color: '#E91E63'},
        headerTintColor: '#E91E63',
      })} />
      <Stack.Screen name='SecondCategoryLayer' component={SecondCategoryLayer}
      options={({route}) => ({
        headerTitle: route.params.title,
        headerTitleStyle: {fontSize: 18, fontFamily: 'italic', color: '#E91E63'},
        headerTintColor: '#E91E63',
      })} />
      <Stack.Screen name='ThirdCategoryLayer' component={ThirdCategoryLayer}
      options={({route}) => ({
        headerTitle: route.params.title,
        headerTitleStyle: {fontSize: 18, fontFamily: 'italic', color: '#E91E63'},
        headerTintColor: '#E91E63',
      })} />
    </Stack.Navigator>
  )
}

const HomePageStruct = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen name='HomeScreen' component={Home} options={{headerShown: false}}/>
      <Stack.Screen name='HomeScreencategories' component={HomeCategories} options={{
        headerTitle: 'Kampanyalı Ürünler',
        headerTitleStyle: {fontSize: 18, fontFamily: 'italic', color: '#E91E63'},
        headerTintColor: '#E91E63',
      }}/>
      <Stack.Screen name='ProductScreen' component={Product}
      options={({route}) => ({
        headerTitle: route.params.title,
        headerTitleStyle: {fontSize: 18, fontFamily: 'italic', color: '#E91E63'},
        headerTintColor: '#E91E63',
      })}
      />
      <Stack.Screen name='BrandsScreen' component={BrandsPage}
      options={({route}) => ({
        headerTitle: route.params.title,
        headerTitleStyle: {fontSize: 18, fontFamily: 'italic', color: '#E91E63'},
        headerTintColor: '#E91E63',
      })}
      />
    </Stack.Navigator>
  )
}

const AccountStruct = ({navigation}) => {

    const handleAddAddress = () => {
      navigation.navigate('NewAddressScreen')
    }
  
    const {data, loading, error} =  useFetchCategories(Config.API_GET_MEMBER_INFO_URL)
    console.log("kullanıcının değerleri bu şekilde",data.status)
    if(loading){
      return(
        <ActivityIndicator size={'large'}/>
      )
    }else{
      return(
        <Stack.Navigator initialRouteName={data.status === " error" ? 'AccountScreen' : 'LogInScreen'}>
          <Stack.Screen name='LogInScreen' component={Login} options={{headerShown: false}}/>
          <Stack.Screen name='SignInScreen' component={SignIn} options={{headerShown: false}}/>
          <Stack.Screen name='AccountScreen' component={Account} options={{headerShown: false}} />
          <Stack.Screen name='AddressScreen' component={Addres} options={{
            headerTitle: 'Adreslerim',
            headerTitleStyle: {fontSize: 18, color: '#E91E63'},
            headerTintColor: '#E91E63',
            headerRight: () => (
              <TouchableWithoutFeedback onPress={handleAddAddress} >
                <Text style={{color: '#E91E63'}}>Adres Ekle</Text>
              </TouchableWithoutFeedback>
            )
          }} />
          <Stack.Screen name='NewAddressScreen' component={NewAddress} options={{
            headerTitle: 'Adres Ekle',
            headerTitleStyle: {fontSize: 18, color: '#E91E63'},
            headerTintColor: '#E91E63',
          }} />
          <Stack.Screen name='ChangePasswordScreen' component={ChangePassword} options={{
            headerTitle: 'Şifremi Unuttum',
            headerTitleStyle: {fontSize: 18, color: '#E91E63'},
            headerTintColor: '#E91E63'}} />
          <Stack.Screen name='FavoritesScreen' component={Favorites} options={{
            headerTitle: 'Favori Ürünlerim',
            headerTitleStyle: {fontSize: 18, color: '#E91E63'},
            headerTintColor: '#E91E63',}}
            />
          <Stack.Screen name='OrderScreen' component={Orders} options={{
            headerTitle: 'Siparişlerim',
            headerTitleStyle: {fontSize: 18, color: '#E91E63'},
            headerTintColor: '#E91E63',
            }} />
          <Stack.Screen name='UserDataScreen' component={UserData} options={{
            headerTitle: 'Kullanıcı Bilgileri',
            headerTitleStyle: {fontSize: 18, color: '#E91E63'},
            headerTintColor: '#E91E63',}} />
          <Stack.Screen name='ForgotPasswordScreen' component={ForgotPassword} options={{
            headerTitle: 'Şifremi Unuttum',
            headerTitleStyle: {fontSize: 18, color: '#E91E63'},
            headerTintColor: '#E91E63'}} />
        </Stack.Navigator>
      )
    }

}

const BasketStruct = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen name='BasketScreen' component={Basket} options={{headerShown: false}}/>
      <Stack.Screen name='PaymentScreen' component={Payment} options={{
        headerTitle: 'Ödeme Yöntemi - Kargo',
        headerTitleStyle: {fontSize: 18, fontFamily: 'italic', color: '#E91E63'},
        headerTintColor: '#E91E63'    
        }}/>
    </Stack.Navigator>
  )
}


function App(){
  return(
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName

            if(route.name === "HomeStack"){
              iconName = focused
              ? 'home'
              : 'home-outline'
            }else if ( route.name === "CategoriesStack"){
              iconName = focused ? 'border-all' : 'border-none'
            }else if ( route.name === "BasketStack"){
              iconName = focused ? 'cart' : 'cart-outline'
            }else if (route.name === "AccountStack"){
              iconName = focused ? 'account-circle' : 'account-circle-outline'
            }


            return <Icon name={iconName} size={size} color={color}/>
          },
          tabBarActiveTintColor: '#E91E63',
          tabBarInactiveTintColor: 'gray',
        })}
        >
          <Tab.Screen name='HomeStack' component={HomePageStruct} options={{headerShown: false, title: 'Anasayfa'}}/>
          <Tab.Screen name='CategoriesStack' component={CategoriesPageStruct} options={{headerShown: false, title: 'Kategoriler'}}/>
          <Tab.Screen name='BasketStack' component={BasketStruct} options={{headerShown: false, title: 'Sepetim'}}/>
          <Tab.Screen name='AccountStack' component={AccountStruct} options={{headerShown: false, title: 'Hesabım' }}/>
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>

  )
}

export default App