import { employeeWeeklySalary, expensesRoles } from "../utils/payrollFunctions";

export const calculateEmployeesSalary = (roles, employees) => (dispatch) => {
    const result = employeeWeeklySalary(roles, employees);
    const totalPayroll = result.reduce((total, e) => total + e.weeklySalary, 0);
    dispatch({
        type: "PAYROLL_EMPLOYESS",
        payload: {
            employeesPayroll: result,
            totalPayroll,
        },
    });
};

export const payrollExpensesByRoles = (roles, employees) => (dispatch) => {
    const result = expensesRoles(roles, employees);

    dispatch({
        type: "EXPENSES_ROLES",
        payload: { expensesRoles: result },
    });
};

export const logoutPayroll = () => (dispatch) => {
    dispatch({
        type: "LOGOUT",
    });
};
