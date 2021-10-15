import { PRODUCT_SUCCESS, PRODUCT_FAIL, LOGOUT } from "./types.js";

import ProductService from "../services/product.service.js";

export const getCompanyProducts = (rut) => async (dispatch) => {
    try {
        let result = await ProductService.getProducts(rut);

        dispatch({
            type: PRODUCT_SUCCESS,
            payload: { products: result },
        });
        return Promise.resolve();
    } catch (error) {
        dispatch({
            type: PRODUCT_FAIL,
        });

        return Promise.reject();
    }
};

export const registerProduct = (rut, data) => async (dispatch) => {
    try {
        await ProductService.registerProduct(data);
        let result = await ProductService.getProducts(rut);
        dispatch({
            type: PRODUCT_SUCCESS,
            payload: { products: result },
        });
        return Promise.resolve();
    } catch (error) {
        dispatch({
            type: PRODUCT_FAIL,
        });

        return Promise.reject();
    }
};

export const updateProduct = (rut, data) => async (dispatch) => {
    try {
        const { code } = data;
        await ProductService.updateProduct(code, data);
        let result = await ProductService.getProducts(rut);
        dispatch({
            type: PRODUCT_SUCCESS,
            payload: { products: result },
        });
        return Promise.resolve();
    } catch (error) {
        dispatch({
            type: PRODUCT_FAIL,
        });

        return Promise.reject();
    }
};

export const deleteProduct = (rut, code) => async (dispatch) => {
    try {
        await ProductService.deleteProduct(code);
        let result = await ProductService.getProducts(rut);
        dispatch({
            type: PRODUCT_SUCCESS,
            payload: { products: result },
        });
        return Promise.resolve();
    } catch (error) {
        dispatch({
            type: PRODUCT_FAIL,
        });

        return Promise.reject();
    }
};

export const logoutProducts = () => (dispatch) => {
    dispatch({
        type: LOGOUT,
    });
};
