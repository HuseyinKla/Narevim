import React, { useState } from 'react'
import { Text, View, Image, TextInput,TouchableWithoutFeedback,  } from 'react-native'
import {Formik} from 'formik'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from './Login.style'
import useFetchCategories from '../../hooks/useFetchCategories'
import Config from 'react-native-config'
import axios from 'axios'

const Login = ({navigation}) => {

    const [data, setData] = useState([])

    /*const handleLogin = (values) => {
        console.log(values)
        navigation.navigate('AccountScreen')
        //navigation.navigate('AccountStack', {screen: 'AccountScreen'})
        const {data, loading, error} = useFetchCategories(Config.API_POST_LOGIN, {values})
        console.log("login çıktısı ",data)
    }*/

    const handleLogin = async(values) =>{
        const API_KEY = 'SSVa97j7z83nMXDzhmmdHSSLPG9NueDf3J6BgCSS';
        axios.defaults.headers['X-API-KEY'] = API_KEY;
        console.log("login verileri: ",values)
        try {
            const responseData = await axios.post(Config.API_POST_LOGIN,values,
                {
                    headers: axios.defaults.headers['Content-Type'] = 'multipart/form-data'
                })
            setData(responseData)
            console.log("LOGİN LANN KOGİİNBBBBB işlemi sonucu: ",responseData.status)
        } catch (error) {
            console.log(error)
        }

        navigation.navigate('AccountScreen')

    }

    const signinPress = () => {
        navigation.navigate('SignInScreen')
    }

    const textPress = () => {
        console.log("text Press fonk")
    }

    return(
        <View style={styles.container}>
                <Image source = {require('../../assets/narlogo.png')} style={styles.image}/>
                <Formik
                initialValues={{email: '', password: ''}}
                onSubmit={(values)=> handleLogin(values)}>
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
}


export default Login