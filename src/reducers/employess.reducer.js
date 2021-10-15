import { EMPLOYEE_SUCCESS, EMPLOYEE_FAIL, LOGOUT } from "../actions/types.js";

const initialState = { employees: null };

const productsReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case EMPLOYEE_SUCCESS:
            return {
                ...state,
                employees: payload.employees,
            };
        case EMPLOYEE_FAIL:
            return {
                ...state,
            };
        case LOGOUT:
            return {
                ...state,
                employees: null,
            };
        default:
            return state;
    }
};

export default productsReducer;
