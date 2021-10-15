const initialState = {
    employeesPayroll: null,
    totalPayroll: null,
    expensesRoles: null,
};

const payrollReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case "PAYROLL_EMPLOYESS":
            return {
                ...state,
                employeesPayroll: payload.employeesPayroll,
                totalPayroll: payload.totalPayroll,
            };

        case "EXPENSES_ROLES":
            return {
                ...state,
                expensesRoles: payload.expensesRoles,
            };

        case "LOGOUT":
            return {
                ...state,
                employeesPayroll: null,
            };

        default:
            return state;
    }
};

export default payrollReducer;
