import {
    CATEGORY_SUCCESS,
    CATEGORY_FAIL,
    LOGOUT
} from '../actions/types.js';

const categories = JSON.parse(localStorage.getItem("categories"));

const initialState = categories 
    ? {categories}
    : {categories: null};

const categoriesReducer = (state = initialState, action) => {
    const {type, payload} = action;

    switch (type) {
        case CATEGORY_SUCCESS:
            return {
                ...state,
                categories: payload.categories
            };
        case CATEGORY_FAIL:
            return {
                ...state
            }
        case LOGOUT:
            return{
                ...state,
                roles: null
            }
        default:
            return state;
    }
}

export default categoriesReducer;