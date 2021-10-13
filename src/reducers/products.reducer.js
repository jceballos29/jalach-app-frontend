import {
    PRODUCT_SUCCESS,
    PRODUCT_FAIL,
    LOGOUT

} from '../actions/types.js';

const initialState = {products: null}

const productsReducer = (state = initialState, action) => {
    const {type, payload} = action;

    switch (type) {
        case PRODUCT_SUCCESS:
            return {
                ...state,
                products: payload.products
            };
        case PRODUCT_FAIL:
            return {
                ...state
            }
        case LOGOUT:
            return{
                ...state,
                products: null
            }
        default:
            return state;
    }
}

export default productsReducer;