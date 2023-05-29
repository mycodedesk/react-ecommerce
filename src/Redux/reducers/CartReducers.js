import {
    Cart_Data
} from "../actionType"

const initialState = {
    cartData:[]
}

const CartReducers = (state = initialState, action) => {
    switch (action.type) {
       
        case Cart_Data:
            return {
                ...state,
                cartData: action.payload
            }
        
        default:
            return state
    }
}

export default CartReducers