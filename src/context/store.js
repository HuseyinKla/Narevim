import { configureStore } from "@reduxjs/toolkit"
import counterReducer from './counter/counterSlice'
import addressReducer from './AddressList/addressSlice'

export default configureStore({
    reducer: {
        counter: counterReducer,
        address: addressReducer
    }
})