import { EMPLOYEE_SUCCESS, EMPLOYEE_FAIL, LOGOUT } from "./types";

import EmployeeService from "../services/employee.service";

export const getEmployeesOfCompany = (rut) => async (dispatch) => {
    try {
        let result = await EmployeeService.getEmployeesOfCompany(rut);

        dispatch({
            type: EMPLOYEE_SUCCESS,
            payload: { employees: result },
        });
        return Promise.resolve();
    } catch (error) {
        dispatch({
            type: EMPLOYEE_FAIL,
        });
        return Promise.reject();
    }
};

export const hireEmployee = (rut, data) => async (dispatch) => {
    try {
        await EmployeeService.hireEmployee(data);
        let result = await EmployeeService.getEmployeesOfCompany(rut);
        dispatch({
            type: EMPLOYEE_SUCCESS,
            payload: { employees: result },
        });
        return Promise.resolve();
    } catch (error) {
        dispatch({
            type: EMPLOYEE_FAIL,
        });
        return Promise.reject();
    }
};

export const updateEmployee = (rut, id, data) => async (dispatch) => {
    try {
        await EmployeeService.updateEmployee(id, data);
        let result = await EmployeeService.getEmployeesOfCompany(rut);

        dispatch({
            type: EMPLOYEE_SUCCESS,
            payload: { employees: result },
        });
        return Promise.resolve();
    } catch (error) {
        dispatch({
            type: EMPLOYEE_FAIL,
        });
        return Promise.reject();
    }
};

export const dismissEmployee = (rut, id) => async (dispatch) => {
    try {
        await EmployeeService.dismissEmployee(id);
        let result = await EmployeeService.getEmployeesOfCompany(rut);

        dispatch({
            type: EMPLOYEE_SUCCESS,
            payload: { employees: result },
        });
        return Promise.resolve();
    } catch (error) {
        dispatch({
            type: EMPLOYEE_FAIL,
        });
        return Promise.reject();
    }
};

export const logoutEmployees = () => (dispatch) => {
    dispatch({
        type: LOGOUT,
    });
};
