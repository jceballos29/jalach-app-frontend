
const initialState = {
    totalCost: 0,
    sales: 0,
    budgetsCategories: null
}

const budgetsReducer = (state = initialState, action) => {
    const {type, payload} = action;

    switch (type) {
        case 'TOTAL_COST':
            return {
                ...state,
                totalCost: payload.cost
            }
    
        case 'TOTAL_SALES': 
            return {
                ...state,
                sales: payload.sales
            }

        case 'BUDGETS_CATEGORIES':
            return {
                ...state,
                budgetsCategories: payload.budgetsCategories
            }

        default:
            return state;
    }
}

export default budgetsReducer;