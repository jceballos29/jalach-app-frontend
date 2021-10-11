import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT
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
        console.log(result);
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