import {
    budgetsByCategories,
    totalCost,
    totalSales,
} from "../utils/inventoryFunctions";

export const calculateTotalCost = (products) => (dispatch) => {
    const result = totalCost(products);

    dispatch({
        type: "TOTAL_COST",
        payload: { cost: result },
    });
};

export const calculateSales = (products) => (dispatch) => {
    const result = totalSales(products);
    dispatch({
        type: "TOTAL_SALES",
        payload: { sales: result },
    });
};

export const calculateBudgestCategories =
    (categories, products) => (dispatch) => {
        const result = budgetsByCategories(categories, products);

        dispatch({
            type: "BUDGETS_CATEGORIES",
            payload: { budgetsCategories: result },
        });
    };

export const logoutBudgets = (dispatch) => {
    dispatch({
        type: "LOGOUT",
    });
};
