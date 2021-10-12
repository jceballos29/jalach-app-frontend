import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    SET_BUSINESS_HOURS_SUCCESS,
    SET_BUSINESS_HOURS_FAIL,
    NOT_FIRST_TIME_SUCCESS,
    NOT_FIRST_TIME_FAIL
} from '../actions/types.js'

import AuthService from '../services/auth.service.js'

export const registerCompany = (company) => async (dispatch) => {
    try {
        
        await AuthService.register(company)
        dispatch({
            type: REGISTER_SUCCESS,
        })
        return Promise.resolve();
    } catch (error) {
        dispatch({
            type: REGISTER_FAIL
        })
        return Promise.reject();
    }
} 

export const loginCompany = (data) => async (dispatch) => {
    try {
        let result = await AuthService.login(data);
        
        dispatch({
            type: LOGIN_SUCCESS,
            payload: {company: result}
        });

        return Promise.resolve();

    } catch (error) {
        dispatch({
            type: LOGIN_FAIL,
        });

        return Promise.reject();
    }
}

export const logoutCompany = () => (dispatch) => {
    AuthService.logout();

    dispatch({
        type: LOGOUT,
    });
}

export const businessHours = (rut, data) => async (dispatch) => {
    try {
        let result = await AuthService.setBusinessHours(rut, data);
        dispatch({
            type: SET_BUSINESS_HOURS_SUCCESS,
            payload: {company: result}
        });
        return Promise.resolve();
    } catch (error) {
        dispatch({
            type: SET_BUSINESS_HOURS_FAIL
        });
        return Promise.reject();
    }
}

export const notFirstTime = (rut) => async (dispatch) => {
    try {
        let result = await AuthService.setNotFirstTime(rut);
        dispatch({
            type: NOT_FIRST_TIME_SUCCESS,
            payload: {company: result}
        });
        return Promise.resolve();
        
    } catch (error) {
        dispatch({
            type: NOT_FIRST_TIME_FAIL
        });
        return Promise.reject();
    }
}