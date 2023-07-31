import React, { useState } from 'react'
import { Button, Text, TextInput, Touchable, TouchableWithoutFeedback, View } from 'react-native'
import styles from './SignIn.style'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Formik } from 'formik'
import useFetchCategories from '../../hooks/useFetchCategories'
import Config from 'react-native-config'
import axios from 'axios'


const SignIn = ({navigation}) => {

    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [phone, setPhone] = useState("")
    const [mail, setMail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)


    const [data, setData] = useState([])
    /*const fetchDataPost =  async () => {
        const API_KEY = 'SSVa97j7z83nMXDzhmmdHSSLPG9NueDf3J6BgCSS';
        axios.defaults.headers['X-API-KEY'] = API_KEY;
        try {
            const responseData = await axios.post(Config.API_POST_REGISTER_URL, {email: mail, password: password, telephone: phone, name: name},
                {
                    headers: axios.defaults.headers['Content-Type'] = 'multipart/form-data'
                })
                setData(responseData.data)
                setLoading(false)
                console.log("post işlem sonucu: ",responseData.status)
         } catch (error) {
            setLoading(false)
            setError(error)
        }
    }*/

    const fetchDataPost =  async () => {
        const API_KEY = 'SSVa97j7z83nMXDzhmmdHSSLPG9NueDf3J6BgCSS';
        axios.defaults.headers['X-API-KEY'] = API_KEY;
        try {
            const responseData = await axios.post(Config.API_POST_REGISTER_URL, {email: mail, password: password, telephone: phone, name: name},
                {
                    headers: axios.defaults.headers['Content-Type'] = 'multipart/form-data'
                })
                setData(responseData.data)
                //setLoading(false)
                console.log("Sign in işlem sonucu: ",responseData.status)
                navigation.navigate('LogInScreen')
         } catch (error) {
            //setLoading(false)
            //setError(error)
            console.log(error)
        }

        
    }

    


    return(
        <View style={styles.container} >
                    <View style={styles.inner_container}>
                            <View style={styles.title_container}>
                                <Text style={styles.title}>İletişim Bilgileri</Text>
                            </View> 
                            <View style={{borderWidth: 0.5, borderColor: 'gray'}}></View>
                            <View style={styles.input_container}>
                                <Icon name="account-circle" style={styles.icon}/>
                                <TextInput style={styles.input} 
                                placeholder='Ad'
                                onChangeText={setName}
                                value={name}
                                />
                            </View>
                            <View style={styles.input_container}>
                                <TextInput style={styles.input} placeholder='Soyad' onChangeText={setSurname} value={surname}/>
                            </View>
                            <View style={styles.input_container}>
                                <Icon name="phone" style={styles.icon}/>
                                <TextInput style={styles.input} 
                                placeholder='Telefon'
                                onChangeText={setPhone}
                                value={phone}/>
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
                            onChangeText={setMail}
                            value={mail}/>
                        </View>
                        <View style={styles.input_container}>
                            <Icon name="shield-key" style={styles.icon}/>
                            <TextInput style={styles.input} 
                            placeholder='Şifre'
                            onChangeText={setPassword}
                            value={password}/>
                        </View>

                        <View style={styles.button_container}>
                            <TouchableWithoutFeedback onPress={fetchDataPost} style={styles.button}>
                                <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold', textAlign: 'center'}}>Kaydet</Text>
                            </TouchableWithoutFeedback>
                        </View>
                    </View>
        </View>
    )
}

export default SignIn


/*            <Formik
            initialValues={{email: '', password: '', telephone: '', name: ''}}
            onSubmit={register}>
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
                                value={values.name}
                                onChangeText={handleChange('name')}
                                />
                            </View>
                            <View style={styles.input_container}>
                                <TextInput style={styles.input} placeholder='Soyad'/>
                            </View>
                            <View style={styles.input_container}>
                                <Icon name="phone" style={styles.icon}/>
                                <TextInput style={styles.input} 
                                placeholder='Telefon'
                                value={values.telephone}
                                onChangeText={handleChange('telephone')}/>
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
                            value={values.email}
                            onChangeText={handleChange('email')}/>
                        </View>
                        <View style={styles.input_container}>
                            <Icon name="shield-key" style={styles.icon}/>
                            <TextInput style={styles.input} 
                            placeholder='Şifre'
                            value={values.password}
                            onChangeText={handleChange('password')}/>
                        </View>

                        <View style={styles.button_container}>
                            <TouchableWithoutFeedback onPress={handleSubmit} style={styles.button}>
                                <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold', textAlign: 'center'}}>Kaydet</Text>
                            </TouchableWithoutFeedback>
                        </View>
                    </View>
                </>
            )}
            </Formik>*/