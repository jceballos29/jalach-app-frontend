import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT
} from '../actions/types.js'

const company = JSON.parse(localStorage.getItem("company"));

const initialState = company 
    ? {isLoggedIn: true, company} 
    : {isLoggedIn: false, company: null};

const authReducer = (state = initialState, action) => {
    const {type, payload} = action;

    switch (type) {
        case REGISTER_SUCCESS:
            return {
                ...state,
                isLoggedIn: false
            };

        case REGISTER_FAIL:
            return {
                ...state,
                isLoggedIn: false
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                company: payload.company,
            };
        case LOGIN_FAIL:
            return {
                ...state,
                isLoggedIn: false,
                company: null,
            };
        case LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
                company: null,
            };
    
        default:
            return state
    }
}

export default authReducer