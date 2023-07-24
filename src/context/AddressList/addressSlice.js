import { createSlice } from '@reduxjs/toolkit'


export const addressSlice = createSlice({
    name: 'address',
    initialState: {
        addressList: [],
        id: 0
    },
    reducers: {
        addAddress: (state, action) => {
            /*return{
                ...state, addressList: [...state.addressList,action.payload]
            }*/
            const {text1, text2, text3} = action.payload
            console.log("text1: ",text1)
            console.log("text2: ",text2)
            console.log("text3: ",text3)
            state.addressList.push({name: text1, surname: text2, age: text3, id: state.id})
            state.id += 1
            console.log(state.addressList)
        }
    }
})

export const { addAddress } = addressSlice.actions

export default addressSlice.reducer