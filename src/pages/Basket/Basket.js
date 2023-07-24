import React from 'react'
import { Text, View, FlatList } from 'react-native'


import { useSelector } from 'react-redux'

const Basket = () => {
    
    const casualData = [
        {
          id: 0,
          name: 'isim1',
          surname: 'soyisim1',
          age: 'yaş1',
        },
        {
          id: 1,
          name: 'isim2',
          surname: 'soyisim2',
          age: 'yaş2',
        },
        {
          id: 2,
          name: 'isim3',
          surname: 'soyisim3',
          age: 'yaş3',
        },
        {
          id: 3,
          name: 'isim4',
          surname: 'soyisim4',
          age: 'yaş4',
        },
      ]

      const renderAddressitem = ({item}) => console.log(item)

    const counter = useSelector(state => state.counter.value)
    return(
        <View>
            <Text>Burası Basket Sayfası</Text>
            <Text>{counter}</Text>
            <FlatList data={casualData} keyExtractor={(item) => item.id.toString()} renderAddress={renderAddressitem}/>

        </View>
    )
}

export default Basket