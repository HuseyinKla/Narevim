import React, { useState } from 'react'
import { Modal, Text, TouchableWithoutFeedback, View } from 'react-native'
import styles from './SortProduct.style'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const SortProduct = ({onSelectASC, onSelectDESC}) => {

    const [isVisible, SetIsVisible] = useState(false)


    const selectAsc = () => {
        onSelectASC()
        SetIsVisible(false)
    }

    const selectDesc = () => {
        onSelectDESC()
        SetIsVisible(false)
    }

    return(
        <View>
            <TouchableWithoutFeedback onPress={()=> SetIsVisible(true)}>
                <View style={styles.sort_button}>
                    <Icon name="format-list-bulleted" style={styles.button_icon}/>
                    <Text style={{marginLeft: 10, color: '#E91E63', fontSize: 16}}>Sırala</Text>
                </View>
            </TouchableWithoutFeedback>
            <Modal 
            visible={isVisible} 
            onRequestClose={()=> SetIsVisible(false)} 
            animationType='slide'
            transparent>
                <View style={styles.container}>
                    <View style={styles.inner_container}>
                        <View style={styles.upper_container}>
                            <Text style={{color: '#E91E63', fontSize: 16}}>Ürünleri Sırala</Text>
                            <TouchableWithoutFeedback onPress={()=> SetIsVisible(false)}>
                                <Icon name="close" style={styles.icon}/>
                            </TouchableWithoutFeedback>
                        </View>
                        <View style={styles.lower_container}>
                            <View style={{flexDirection: 'row', alignItems: 'center',}}>
                                <Icon name="arrow-up-bold" style={styles.button_icon}/>
                                <TouchableWithoutFeedback onPress={selectAsc}>
                                    <Text style={styles.text}>Fiyata göre artan</Text>
                                </TouchableWithoutFeedback>
                            </View>
                            <View style={{flexDirection: 'row', alignItems: 'center',}}>
                                <Icon name="arrow-down-bold" style={styles.button_icon}/>
                                <TouchableWithoutFeedback onPress={selectDesc}>
                                    <Text style={styles.text}>Fiyata göre azalan</Text>
                                </TouchableWithoutFeedback>
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}


export default SortProduct