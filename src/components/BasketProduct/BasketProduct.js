import React, { useEffect, useState } from 'react'
import { Dimensions, Image, Text, TouchableWithoutFeedback, View } from 'react-native'
import styles from './BasketProduct.style'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Config from 'react-native-config'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { decrement, increment } from '../../context/counter/counterSlice'


const {height, width} = Dimensions.get('window')


const BasketProduct = ({product}) => {

    const [newCount, setNewCount] = useState(product.qty)
    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(increment()) 
        handleUpdateCart()
    },[])

    const deleteProduct = async() => {
        axios.defaults.headers['X-API-KEY'] = Config.API_KEY
        console.log("SİL: ",product.rowid)
        const responseData = await axios.post(Config.API_POST_REMOVE_CART_URL, {rowID: product.rowid},
        {
            headers: axios.defaults.headers['Content-Type'] = 'multipart/form-data'
        })
        console.log("silme işlem sonucu: ",responseData.data.message)
        //BURADA TEKRAR RENDER EDİLECEK
    }
    
    console.log("ürünün row idsi: ",product.rowid)
    console.log("ürünün adedi : ",product.qty)
    console.log("ürünün idsi : ",product.id)


    const handleUpdateCart = async(type) => {
        if(type){
            setNewCount(newCount+1)
        }else{
            if(newCount > 1){
                setNewCount(newCount-1)
            }else{
                return
            }
        }
        axios.defaults.headers['X-API-KEY'] = Config.API_KEY
        const responseData = await axios.post(Config.API_POST_UPDATE_CART_URL, {product_id: product.rowid, qty: newCount},
        {
            headers: axios.defaults.headers['Content-Type'] = 'multipart/form-data'
        })
        console.log("ürün güncelleme işlem sonucu: ",responseData)
        console.log("result: ",newCount)
    }




    return(
        <View style={styles.container}>
            <View style={styles.inner_container}>
                <View style={styles.header_container}>
                    <Text style={styles.brand}>{ product.brand }</Text>
                    <TouchableWithoutFeedback onPress={deleteProduct}>
                        <Icon name="delete" style={styles.icon}/>
                    </TouchableWithoutFeedback>
                </View>
                <View style={styles.content_container}>
                    <Image source={{uri: product.img_url}} style={styles.image}/>
                    <Text style={styles.title}>{product.title}</Text>
                </View>
                <View style={styles.footer_container}>
                    <View style={styles.count_container}>
                        <View style={{backgroundColor: '#E91E63', width: width * 0.09, height: height * 0.04, borderTopLeftRadius: 5, borderBottomLeftRadius: 5, alignItems: 'center', justifyContent: 'center'}}>
                            <TouchableWithoutFeedback onPress={()=> handleUpdateCart(0)}>
                                <Icon size={20} color="white" name='minus'/>
                            </TouchableWithoutFeedback>
                        </View>
                        <View style={{backgroundColor: '#e0e0e0', width: width * 0.08, justifyContent: 'center', }}>
                            <Text style={styles.count}>{newCount}</Text>
                        </View>
                        <View style={{backgroundColor: '#E91E63', width: width * 0.09, height: height * 0.04, borderTopRightRadius: 5, borderBottomRightRadius: 5, alignItems: 'center', justifyContent: 'center'}}>
                            <TouchableWithoutFeedback onPress={()=> handleUpdateCart(1)}>
                                <Icon size={20} color='white' name='plus'/>
                            </TouchableWithoutFeedback>
                        </View>
                    </View>
                    <Text style={styles.price}>{product.price} TL</Text>
                </View>
            </View>
        </View>
    )
}

export default BasketProduct
