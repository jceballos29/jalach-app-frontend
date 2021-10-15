import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    SET_BUSINESS_HOURS_SUCCESS,
    SET_BUSINESS_HOURS_FAIL,
    NOT_FIRST_TIME_SUCCESS,
    NOT_FIRST_TIME_FAIL,
} from "../actions/types.js";

const company = JSON.parse(localStorage.getItem("company"));

const initialState = company
    ? { isLoggedIn: true, company }
    : { isLoggedIn: false, company: null };

const authReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case REGISTER_SUCCESS:
            return {
                ...state,
                isLoggedIn: false,
            };

        case REGISTER_FAIL:
            return {
                ...state,
                isLoggedIn: false,
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
        case SET_BUSINESS_HOURS_SUCCESS:
            return {
                ...state,
                company: payload.company,
            };
        case SET_BUSINESS_HOURS_FAIL:
            return {
                ...state,
            };
        case NOT_FIRST_TIME_SUCCESS:
            return {
                ...state,
                company: payload.company,
            };
        case NOT_FIRST_TIME_FAIL:
            return {
                ...state,
            };
        default:
            return state;
    }
};

export default authReducer;
