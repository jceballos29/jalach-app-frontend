import { ROLES_SUCCESS, ROLES_FAIL, LOGOUT } from "../actions/types.js";

const initialState = { roles: null };

const rolesReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case ROLES_SUCCESS:
            return {
                ...state,
                roles: payload.roles,
            };
        case ROLES_FAIL:
            return {
                ...state,
            };
        case LOGOUT:
            return {
                ...state,
                roles: null,
            };
        default:
            return state;
    }
};

export default rolesReducer;
