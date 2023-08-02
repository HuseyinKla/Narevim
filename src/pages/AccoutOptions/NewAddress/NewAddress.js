import React, {useState, useEffect} from 'react'
import { Text, TextInput, View, TouchableOpacity, ScrollView, TouchableWithoutFeedback} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from './NewAddress.style'
import Divider from '../../../components/Divider/Divider'
import { Dropdown } from 'react-native-element-dropdown'
import Config from 'react-native-config'
import axios from 'axios'
import { Formik } from 'formik'
import useFetchCategories from '../../../hooks/useFetchCategories/useFetchCategories'

const NewAddress = ({navigation}) => {

  const {data, loading, error} = useFetchCategories(Config.API_GET_MEMBER_INFO_URL)
  //console.log("kullanıcının bilgileri: ",data.data.email)

  const [id, setId] = useState(null);  //her bir şehirin plaka numarası
  const [isFocus, setIsFocus] = useState(false)
  const [cityNameList, setCityNameList] = useState([])
  const [cityName, setCityName] = useState("")

  const [townNameList, setTownNameList] = useState([])
  const [isFocusTown, setIsFocusTown] = useState(false)
  const [townName, setTownName] = useState("")
  const [townId, setTownId] = useState(null)

  const [billType, setBillType] = useState(true)

  const getCityName = async() => {
    const responseData = await axios.get(Config.API_GET_CITY_URL)
    setCityNameList(responseData.data.data)
  }

  const getTownName = async(id) => {
    const responseTown = await axios.post(Config.API_POST_TOWN_URL, {city_id: id},
    {
      headers: axios.defaults.headers['Content-Type'] = 'multipart/form-data'
    })
    setTownNameList(responseTown.data.data)
}

  useEffect(()=> {
    const API_KEY = 'SSVa97j7z83nMXDzhmmdHSSLPG9NueDf3J6BgCSS';
    axios.defaults.headers['X-API-KEY'] = API_KEY;
    getCityName()
  },[])

  //BUTONU KONTROL ET TİK DEĞİŞTİĞİNDE HATA VERİYOR MU
  const changeBillType = () => {
    setBillType(!billType)
  }

  const saveAddress = async(values) => {
    const API_KEY = 'SSVa97j7z83nMXDzhmmdHSSLPG9NueDf3J6BgCSS';
    axios.defaults.headers['X-API-KEY'] = API_KEY;
    /*console.log('save address name: ', values.name)
    console.log('save address surname: ', values.surname)
    console.log('save address telephone: ', values.telephone)
    console.log('save address email: ', data.data.email)
    console.log('save address: ', cityName)
    console.log('save address: ', townName)
    const {data: responseAddress, loading: loadingAddress, error: errorAddress} = useFetchCategories(Config.API_POST_SAVE_ADDRESS_URL,{
      name: values.name, surname: values.surname, email: data.data.email, telephone: values.telephone, city: id, town: townId, clear_address: values.clear_address,
      billing_name: values.name, billing_surname: values.surname, billing_email: data.data.email, billing_telephone: values.telephone, billing_city: id, billing_town: townId, billing_clear_address: values.clear_address}
    )*/
    try {
      const responseAddress = await axios.post(Config.API_POST_SAVE_ADDRESS_URL, {
        name: values.name, surname: values.surname, email: data.data.email, telephone: values.telephone, city: id, town: townId, clear_address: values.clear_address,
        billing_name: values.name, billing_surname: values.surname, billing_email: data.data.email, billing_telephone: values.telephone, billing_city: id, billing_town: townId, billing_clear_address: values.clear_address
      },
      {
        headers: axios.defaults.headers['Content-Type'] = 'multipart/form-data'
      })
      console.log("adres kaydetme işlemi: ",responseAddress.data.status)
      navigation.navigate('AddressScreen')
      } catch (error) {
        console.log("adres kaydetme hatası: ", error)
      }
}

    return(
      <ScrollView>
        <Formik
          initialValues={{name:'', surname: '', telephone: '', city: '', town: '', clear_address: ''}}
          onSubmit={values => saveAddress(values)}
        >
          {({handleChange, handleBlur, handleSubmit, values}) => (
          <View style={styles.container}>
              <View style={styles.title_container}>
                  <Icon name={"account-box"} size={35} style={styles.icon}/>
                  <Text style={styles.title}>İletişim Bilgileri</Text>
              </View>
              <Divider/>
              <View style={styles.inner_container}>
                  <Icon name={"account-circle"} size={35} style={styles.icon}/>
                  <TextInput placeholder='Ad' style={styles.input} onChangeText={handleChange('name')} value={values.name} placeholderTextColor={'gray'} cursorColor={'#E91E63'}/>
              </View>
              <View style={styles.inner_container}>
                  <Icon name={"account-circle"} size={35} style={styles.icon}/>
                  <TextInput placeholder='Soyad' style={styles.input} onChangeText={handleChange('surname')} value={values.surname} placeholderTextColor={'gray'} cursorColor={'#E91E63'}/>
              </View>
              <View style={styles.inner_container}>
                  <Icon name={"phone"} size={35} style={styles.icon}/>
                  <TextInput placeholder='Telefon' style={styles.input} onChangeText={handleChange('telephone')} value={values.telephone} placeholderTextColor={'gray'} cursorColor={'#E91E63'} keyboardType='number-pad'/>
              </View>

              <View style={styles.title_address}>
                  <Icon name={"map-marker-radius"} size={35} style={styles.icon}/>
                  <Text style={{color: 'black'}}>Adres Bilgileri</Text>
              </View>
              <Divider/>
              <View style={styles.dropdown_container}>
                <Dropdown
                  style={[styles.dropdown, isFocus && { borderColor: '#E91E63' }]}
                  placeholderStyle={styles.placeholderStyle}
                  selectedTextStyle={styles.selectedTextStyle}
                  inputSearchStyle={styles.inputSearchStyle}
                  itemTextStyle={{color: 'black'}}
                  data={cityNameList}
                  search
                  maxHeight={300}
                  labelField="title"
                  valueField="id"
                  placeholder={!isFocus ? 'Şehir Seçin' : '...'}
                  searchPlaceholder="Ara..."
                  value={id}
                  onFocus={() => setIsFocus(true)}
                  onBlur={() => setIsFocus(false)}
                  onChange={item => {
                    setId(item.id);
                    setIsFocus(false);
                    getTownName(item.id)
                    setCityName(item.title)
                  }}
                />
                <Dropdown
                  style={[styles.dropdown, isFocusTown && { borderColor: '#E91E63' }]}
                  placeholderStyle={styles.placeholderStyle}
                  selectedTextStyle={styles.selectedTextStyle}
                  inputSearchStyle={styles.inputSearchStyle}
                  itemTextStyle={{color: 'black'}}
                  data={townNameList}
                  search
                  maxHeight={300}
                  labelField="title"
                  valueField="id"
                  placeholder={!isFocusTown ? 'İlçe Seçin' : '...'}
                  searchPlaceholder="Ara..."
                  onFocus={() => setIsFocusTown(true)}
                  onBlur={() => setIsFocusTown(false)}
                  onChange={item => {
                    setTownName(item.title)
                    setTownId(item.id)
                  }}
                />
            </View>
            <View style={styles.inner_container}>
                  <Icon name={"office-building"} size={35} style={styles.icon}/>
                  <TextInput placeholder='Adres' style={styles.input} onChangeText={handleChange('clear_address')} value={values.clear_address} placeholderTextColor={'gray'} cursorColor={'#E91E63'}/>
            </View>
                  
            {
              !billType
              ? <View>
                  <View style={{height: 30}}/>
                  <Divider/>
                  <View style={styles.fatura_container}>
                    <Icon name={"credit-card"} size={45} style={styles.icon}/>
                    <Text style={styles.bill_title}>Fatura Bilgileri</Text>
                  </View>

                  <View style={styles.title_container}>
                    <Icon name={"account-box"} size={35} style={styles.icon}/>
                    <Text style={styles.title}>İletişim Bilgileri</Text>
                  </View>
                  <Divider/>
                  <View style={styles.inner_container}>
                    <Icon name={"account-circle"} size={35} style={styles.icon}/>
                    <TextInput placeholder='Ad' style={styles.input} placeholderTextColor={'gray'} cursorColor={'#E91E63'}/>
                  </View>
                  <View style={styles.inner_container}>
                    <Icon name={"account-circle"} size={35} style={styles.icon}/>
                    <TextInput placeholder='Soyad' style={styles.input} placeholderTextColor={'gray'} cursorColor={'#E91E63'}/>
                  </View>
                  <View style={styles.inner_container}>
                    <Icon name={"phone"} size={35} style={styles.icon}/>
                    <TextInput placeholder='Telefon' style={styles.input} placeholderTextColor={'gray'} cursorColor={'#E91E63'}/>
                  </View>
                  <View style={styles.title_address}>
                    <Icon name={"map-marker-radius"} size={35} style={styles.icon}/>
                    <Text style={{color: 'black'}}>Adres Bilgileri</Text>
                  </View>
                  <Divider/>
                  <View style={styles.dropdown_container}>
                  <Dropdown
                    style={[styles.dropdown, isFocus && { borderColor: '#E91E63' }]}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={styles.iconStyle}
                    itemTextStyle={{color: 'black'}}
                    data={cityName}
                    search
                    maxHeight={300}
                    labelField="title"
                    valueField="id"
                    placeholder={!isFocus ? 'Şehir Seçin' : '...'}
                    searchPlaceholder="Ara..."
                    value={id}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    onChange={item => {
                      setId(item.id);
                      setIsFocus(false);
                      getTownName(item.id)
                    }}
                  />
                  <Dropdown
                    style={[styles.dropdown, isFocusTown && { borderColor: '#E91E63' }]}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={styles.iconStyle}
                    itemTextStyle={{color: 'black'}}
                    data={townName}
                    search
                    maxHeight={300}
                    labelField="title"
                    valueField="id"
                    placeholder={!isFocusTown ? 'İlçe Seçin' : '...'}
                    searchPlaceholder="Ara..."
                    onFocus={() => setIsFocusTown(true)}
                    onBlur={() => setIsFocusTown(false)}
                    onChange={item => {
                      console.log(item.title)
                      
                    }}
                  />
                  </View>
                  <View style={styles.inner_container}>
                    <Icon name={"office-building"} size={35} style={styles.icon}/>
                    <TextInput placeholder='Adres' style={styles.input} placeholderTextColor={'gray'} cursorColor={'#E91E63'}/>
                  </View>
                </View>
              : null
            }
            <View style={styles.bill_container}>
              <TouchableOpacity onPress={changeBillType}>
                { 
                  billType 
                  ? <Icon name={"checkbox-marked-circle"} size={25} style={styles.icon}/>
                  : <Icon name={"checkbox-blank-circle-outline"} size={25} style={styles.icon}/>
                }
              </TouchableOpacity>
              <Text style={{paddingLeft: 10, color: 'black'}}>Faturam aynı adrese gönderilsin</Text>
            </View>
            <TouchableWithoutFeedback onPress={handleSubmit}>
              <View style={styles.save}>
                <Text style={styles.save_text}>Kaydet</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        )}
        </Formik>
      </ScrollView>

    )
}

export default NewAddress