import {
    Cart_Data
} from "../actionType"

export const add_Cart = (data) => async (dispatch) => {
        dispatch({
            type: Cart_Data,
            payload: data
        });
};