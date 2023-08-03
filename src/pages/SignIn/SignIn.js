import React, { useState } from 'react'
import { Alert, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native'
import styles from './SignIn.style'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Config from 'react-native-config'
import axios from 'axios'
import { Formik } from 'formik'

const SignIn = ({navigation}) => {

    const fetchDataPost =  async (values) => {
        axios.defaults.headers['X-API-KEY'] = Config.API_KEY
        try {
            const responseData = await axios.post(Config.API_POST_REGISTER_URL, values,
                {
                    headers: axios.defaults.headers['Content-Type'] = 'multipart/form-data'
                })
                console.log("Sign in işlem sonucu: ",responseData.data.status)
                if(responseData.data.status === "error"){
                    Alert.alert('Giriş Hatası!',responseData.data.message,[
                        {text: 'Tamam', onPress: () => console.log('Tamam tıklandı')},
                    ])
                }else{
                    Alert.alert('Başarılı Giriş',responseData.data.message,[
                        {text: 'Giriş Sayfasına Git', onPress: () => navigation.navigate('LogInScreen')},
                    ])
                }
         } catch (error) {
            console.log(error)
        }
    }

    return(
        <View style={styles.container} >
            <Formik
            initialValues={{name: '', surname: '', telephone: '', email: '', password: ''}}
            onSubmit={(values)=> fetchDataPost(values)}>
                {({handleSubmit, handleChange, values}) => (
                <>
                <View style={styles.inner_container}>
                        <View style={styles.title_container}>
                            <Text style={styles.title}>İletişim Bilgileri</Text>
                        </View> 
                        <View style={{borderWidth: 0.5, borderColor: 'gray'}}></View>
                        <View style={styles.input_container}>
                            <Icon name="account-circle" style={styles.icon}/>
                            <TextInput style={styles.input} 
                            placeholder='Ad'
                            onChangeText={handleChange('name')}
                            placeholderTextColor={'gray'}
                            cursorColor={'#E91E63'}
                            value={values.name}
                            />
                        </View>
                        <View style={styles.iconless}>
                            <TextInput style={styles.input} 
                            placeholderTextColor={'gray'} 
                            placeholder='Soyad' 
                            onChangeText={handleChange('surname')} 
                            value={values.surname}
                            />
                        </View>
                        <View style={styles.input_container}>
                            <Icon name="phone" style={styles.icon}/>
                            <TextInput style={styles.input} 
                            placeholder='Telefon'
                            placeholderTextColor={'gray'}
                            cursorColor={'#E91E63'}
                            onChangeText={handleChange('telephone')}
                            keyboardType='number-pad'
                            value={values.telephone}/>
                        </View>
                </View>
                <View style={styles.inner_container}>
                    <View style={styles.title_container}>
                        <Icon name="email-lock" style={styles.icon}/>
                        <Text style={styles.title_icon}>E-Posta & Şifre</Text>
                    </View> 
                    <View style={{borderWidth: 0.5, borderColor: 'gray'}}></View>
                    <View style={styles.input_container}>
                        <Icon name="email" style={styles.icon}/>
                        <TextInput style={styles.input} 
                        placeholder='E-Posta'
                        cursorColor={'#E91E63'}
                        onChangeText={handleChange('email')}
                        placeholderTextColor={'gray'}
                        keyboardType='email-address'
                        value={values.email}/>
                    </View>
                    <View style={styles.input_container}>
                        <Icon name="shield-key" style={styles.icon}/>
                        <TextInput style={styles.input} 
                        placeholder='Şifre'
                        cursorColor={'#E91E63'}
                        placeholderTextColor={'gray'}
                        onChangeText={handleChange('password')}
                        value={values.password}/>
                    </View>

                    <View style={styles.button_container}>
                        <TouchableWithoutFeedback onPress={handleSubmit} style={styles.button}>
                            <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold', textAlign: 'center'}}>Kaydet</Text>
                        </TouchableWithoutFeedback>
                    </View>
                </View>
                </>
            )}
            </Formik>
        </View>
    )
}

export default SignIn