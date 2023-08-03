import React from 'react'
import { Image, View, ActivityIndicator, } from 'react-native'
import useFetchCategories from '../../hooks/useFetchCategories'
import Config from 'react-native-config'
import styles from './Account.style'
import AccountOptions from '../../components/AccountOptionsCard/AccountOptionsCard'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'


const Account = ({navigation}) => {

    const handleSelectOptions = async (name) => {
        if(name === "Logout"){
            axios.defaults.headers['X-API-KEY'] = Config.API_KEY
            try {
                const responseData = await axios.get(Config.API_GET_LOGOUT_URL)
                console.log("logout işlemi sonucu: ",responseData.status)
                if(responseData.status === 200){
                    AsyncStorage.removeItem('USER')
                    navigation.navigate('LogInScreen')
                }
            } catch (error) {
                console.log(error)
            }
        }else if( name === "UserDataScreen"){
            console.log("user data")

            navigation.navigate('UserDataScreen', {name: data.data.name, telephone: data.data.telephone, mail: data.data.email })
        }else if ( name === "AddressScreen"){
            navigation.navigate(name, {type: false})
        }else{
            navigation.navigate(name)
        }
    }

    const {data, loading, error} =  useFetchCategories(Config.API_GET_MEMBER_INFO_URL)
    

    if(loading){
        return(
            <ActivityIndicator size={'large'}/>
        )
    }else{
        return(
            <View>
                <Image source = {require('../../assets/narlogo.png')} style={styles.image}/>
                <AccountOptions iconName='history' title='Siparişlerim' onSelect={()=> handleSelectOptions('OrderScreen')} />
                <AccountOptions iconName='heart' title='Favorilerim' onSelect={()=> handleSelectOptions('FavoritesScreen')} />
                <AccountOptions iconName='map-marker-radius' title='Adreslerim' onSelect={()=> handleSelectOptions('AddressScreen')} />
                <AccountOptions iconName='account-alert-outline' title='Kullanıcı Bilgileri' onSelect={()=> handleSelectOptions('UserDataScreen')} />
                <AccountOptions iconName='key-change' title='Şifre Değiştir' onSelect={()=> handleSelectOptions('ChangePasswordScreen')} />
                <AccountOptions iconName='logout' title='Çıkış yap' onSelect={()=> handleSelectOptions('Logout')} />
            </View>
            )
    }

}

export default Account