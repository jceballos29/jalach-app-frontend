import { ROLES_SUCCESS, ROLES_FAIL, LOGOUT } from "./types";

import RoleService from "../services/role.service";

export const getRoles = (rut) => async (dispatch) => {
    try {
        let result = await RoleService.getRolesofCompany(rut);
        dispatch({
            type: ROLES_SUCCESS,
            payload: { roles: result },
        });
        return Promise.resolve();
    } catch (error) {
        dispatch({
            type: ROLES_FAIL,
        });
        return Promise.reject();
    }
};

export const addRole = (rut, data) => async (dispatch) => {
    try {
        await RoleService.addRole(data);
        let result = await RoleService.getRolesofCompany(rut);
        dispatch({
            type: ROLES_SUCCESS,
            payload: { roles: result },
        });
        return Promise.resolve();
    } catch (error) {
        dispatch({
            type: ROLES_FAIL,
        });
        return Promise.reject();
    }
};

export const deleteRole = (rut, id) => async (dispatch) => {
    try {
        await RoleService.deleteRole(id);
        let result = await RoleService.getRolesofCompany(rut);
        dispatch({
            type: ROLES_SUCCESS,
            payload: { roles: result },
        });
        return Promise.resolve();
    } catch (error) {
        dispatch({
            type: ROLES_FAIL,
        });
        return Promise.reject();
    }
};

export const logoutRoles = () => (dispatch) => {
    dispatch({
        type: LOGOUT,
    });
};
