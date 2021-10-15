import { CATEGORY_SUCCESS, CATEGORY_FAIL, LOGOUT } from "./types";

import CategoryService from "../services/category.service";

export const getCategories = (rut) => async (dispatch) => {
    try {
        let result = await CategoryService.getCategoryOfCompany(rut);
        dispatch({
            type: CATEGORY_SUCCESS,
            payload: { categories: result },
        });
        return Promise.resolve();
    } catch (error) {
        dispatch({
            type: CATEGORY_FAIL,
        });
        return Promise.reject();
    }
};

export const addCategory = (rut, data) => async (dispatch) => {
    try {
        await CategoryService.addCategory(data);
        let result = await CategoryService.getCategoryOfCompany(rut);
        dispatch({
            type: CATEGORY_SUCCESS,
            payload: { categories: result },
        });
        return Promise.resolve();
    } catch (error) {
        dispatch({
            type: CATEGORY_FAIL,
        });
        return Promise.reject();
    }
};

export const deleteCategory = (rut, id) => async (dispatch) => {
    try {
        await CategoryService.deleteCategory(id);
        let result = await CategoryService.getCategoryOfCompany(rut);
        dispatch({
            type: CATEGORY_SUCCESS,
            payload: { categories: result },
        });
        return Promise.resolve();
    } catch (error) {
        dispatch({
            type: CATEGORY_FAIL,
        });
        return Promise.reject();
    }
};

export const logoutCategories = () => (dispatch) => {
    dispatch({
        type: LOGOUT,
    });
};
