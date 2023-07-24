export default function(state, action){
    switch (action.type) {
        case 'ADD_ADDRESS':
            const {name, surname, telephone, clear_address, city, town} = action.payload
            const newAddress = [...state.addressList, name, surname, telephone, clear_address, city, town]
            return {...state, addressList: newAddress}
    
        default:
            break;
    }
}