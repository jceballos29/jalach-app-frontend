export const employeeWeeklySalary = (roles, employees) => {
    let payroll = [];
    employees.forEach((employee) => {
        let salary = {};
        const role = roles.find((role) => role.id === employee.role_id);
        salary.employee = employee.username;
        salary.hours = employee.weekly_hours;
        salary.hourly = role.hourly;
        salary.role_id = role.id;
        salary.weeklySalary = employee.weekly_hours * role.hourly;
        payroll.push(salary);
    });
    return payroll;
};

export const expensesRoles = (roles, employees) => {
    const expenses = [];
    roles.forEach((role) => {
        const roleEmployees = employees.filter(
            (employee) => employee.role_id === role.id
        );
        const total = roleEmployees.reduce(
            (sum, e) => sum + e.weekly_hours * role.hourly,
            0
        );
        expenses.push({
            role: role.role,
            expense: total,
        });
    });

    return expenses;
};
