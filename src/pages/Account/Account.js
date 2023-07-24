import React from 'react'
import { Image, View, ActivityIndicator, } from 'react-native'
import useFetchCategories from '../../hooks/useFetchCategories'
import Config from 'react-native-config'
import styles from './Account.style'
import AccountOptions from '../../components/AccountOptionsCard/AccountOptionsCard'
import axios from 'axios'

const Account = ({navigation}) => {

    const handleSelectOptions = async (name) => {
        if(name === "Logout"){
            const API_KEY = 'SSVa97j7z83nMXDzhmmdHSSLPG9NueDf3J6BgCSS';
            axios.defaults.headers['X-API-KEY'] = API_KEY;
            try {
                const responseData = await axios.get(Config.API_GET_MEMBER_INFO_URL)
                console.log("logout işlemi sonucu: ",responseData.status)
                responseData.status === 200 ? navigation.navigate('LogInScreen') : console.log("error")
            } catch (error) {
                console.log(error)
            }
        }else if( name === "UserDataScreen"){
            console.log("user data")

            navigation.navigate('UserDataScreen', {name: data.data.name, telephone: data.data.telephone, mail: data.data.email })
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










    /*const {data, loading, error} =  useFetchCategories(Config.API_GET_MEMBER_INFO_URL)
    console.log(data.status)


   



    const [varData, setVarData] = useState([])


    const signinPress = () => {
        navigation.navigate('SignInScreen')
    }
    const textPress = () => {
        console.log("text bastım")
    }

    function handleLogin(values){
        console.log(values)
    }

    const cikisyap = async() => {
        const API_KEY = 'SSVa97j7z83nMXDzhmmdHSSLPG9NueDf3J6BgCSS';
        axios.defaults.headers['X-API-KEY'] = API_KEY;
        try {
            const responseData = await axios.get(API_GET_LOGOUT_URL)
            setVarData(responseData.data)
            console.log("get işlem sonucu: ",responseData.status)
        } catch (error) {
            console.log(error)
        }

        console.log(varData)
    }

    const bilgigetir = async() => {
        const API_KEY = 'SSVa97j7z83nMXDzhmmdHSSLPG9NueDf3J6BgCSS';
        axios.defaults.headers['X-API-KEY'] = API_KEY;
        try {
            const responseData = await axios.get(Config.API_GET_MEMBER_INFO_URL)
            setVarData(responseData.data)
            console.log("get işlem sonucu: ",responseData.status)
        } catch (error) {
            console.log(error)
        }

        console.log(varData)

    }


    if(data.status === "error"){
        return(
            <View style={styles.container}>
                <Image source = {require('../../assets/narlogo.png')} style={styles.image}/>
                <Formik
                initialValues={{email: '', password: ''}}
                onSubmit={handleLogin}>
                {({handleSubmit, handleChange, values}) => (
                    <View>
                        <View style={styles.inner_container}>
                            <Icon name="account" size={30} style={styles.icon}/>
                            <TextInput style={styles.input} 
                            placeholder='E-Posta' 
                            value={values.email} 
                            onChangeText={handleChange('email')}/>
                        </View>
                        <View style={styles.inner_container}>
                            <Icon name="key-variant" size={30} style={styles.icon}/>
                            <TextInput style={styles.input} 
                            placeholder='Şifre' 
                            value={values.password}
                            onChangeText={handleChange('password')}/>
                        </View>
                        <TouchableWithoutFeedback onPress={handleSubmit}>
                            <View style={styles.button_login}>
                            <Text style={styles.login_title}>Giriş Yap</Text>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                )}
                </Formik>
                <TouchableWithoutFeedback onPress={signinPress}>
                    <View style={styles.button_signin}>
                        <Text style={styles.signin_title}>Kayıt Ol</Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={textPress}>
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>Şifremi unuttum</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        )
    }else{
        return(
            <View>
                <Button title='Bilgileri getir' onPress={bilgigetir}></Button>
                <Button title='Çıkış yap' onPress={cikisyap}></Button>
            </View>
        )
    }*/