export const totalCost = (products) => {
    let totalCost = 0;
    products.forEach((product) => {
        totalCost += product.stock * product.cost;
    });

    return totalCost;
};

export const totalSales = (products) => {
    let totalSales = 0;
    products.forEach((product) => {
        totalSales += product.stock * product.price;
    });

    return totalSales;
};

export const budgetsByCategories = (categories, products) => {
    let budgetsCategories = [];
    categories.forEach((category) => {
        const result = products.filter(
            (product) => product.category_code === category.code
        );
        const cost = totalCost(result);
        const sales = totalSales(result);
        budgetsCategories.push({
            category: category.code,
            totalCost: cost,
            sales: sales,
        });
    });

    return budgetsCategories;
};
