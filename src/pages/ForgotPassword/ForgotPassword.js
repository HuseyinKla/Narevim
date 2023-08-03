import React, { useState } from 'react'
import { Text, View, Image, TextInput, TouchableWithoutFeedback, Alert } from 'react-native'
import styles from './ForgotPassword.style'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


const ForgotPassword = ({navigation}) => {

    const [mail, setMail] = useState("")

    const forgotPassword = () => {
        console.log(mail)
        //normalde burda şifre değiştirme hooku olması gerekirdi lakin 
        //sms aboneliği bittiği için bu hooku yazmadım
        Alert.alert('Şifre Değişimi','Malesef bu işlemi şu anda yapamıyoruz',[
            {text: 'Tamam', onPress: () => navigation.navigate('LogInScreen')},
        ])
    }

    return(
        <View style={styles.container}>
            <Image source = {require('../../assets/narlogo.png')} style={styles.image}/>
            <View style={styles.inner_container}>
                <Icon name={'account'} style={styles.icon}/>
                <TextInput placeholder='E-Posta' onChangeText={setMail} value={mail} style={styles.input} placeholderTextColor={'gray'} cursorColor={'#E91E63'} keyboardType='email-address'/>
            </View>
            <TouchableWithoutFeedback onPress={forgotPassword} >
                <View style={styles.button}>
                    <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>Şifreyi Sıfırla</Text>
                </View>
            </TouchableWithoutFeedback>
        </View>
    )
}

export default ForgotPassword