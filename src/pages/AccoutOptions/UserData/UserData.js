import React from 'react'
import { View } from 'react-native'
import UserDataCard from '../../../components/UserDataCard/UserDataCard'

const UserData = ({route}) => {


    const {name, telephone, mail} = route.params

    return(
        <View>
            <UserDataCard iconName={'account-circle-outline'} title={'İsim Soyisim : '} data={name}/>
            <UserDataCard iconName={'email'} title={'E-Posta Adresi :'} data={mail}/>
            <UserDataCard iconName={'phone'} title={'Telefon Numarası : '} data={telephone}/>
        </View>
    )

}

export default UserData