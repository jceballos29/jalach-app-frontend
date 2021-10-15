import axios from "axios";

const API_URL = "http://localhost:9000/api/v1";

const getEmployeesOfCompany = async (rut) => {
    const response = await axios({
        method: "GET",
        baseURL: API_URL,
        url: `/employees/company/${rut}`,
    });

    return response.data;
};

const getEmployeesByRole = async (role) => {
    const response = await axios({
        method: "GET",
        baseURL: API_URL,
        url: `/employees/roles/${role}`,
    });

    return response.data;
};

const getEmployeeById = async (id) => {
    const response = await axios({
        method: "GET",
        baseURL: API_URL,
        url: `/employees/${id}`,
    });

    return response.data;
};

const hireEmployee = async (data) => {
    return await axios({
        method: "POST",
        baseURL: API_URL,
        url: `/employees`,
        data: data,
    });
};

const updateEmployee = async (id, data) => {
    return await axios({
        method: "PUT",
        baseURL: API_URL,
        url: `/employees/${id}`,
        data: data,
    });
};

const dismissEmployee = async (id) => {
    return await axios({
        method: "DELETE",
        baseURL: API_URL,
        url: `/employees/${id}`,
    });
};

const EmployeeService = {
    getEmployeeById,
    getEmployeesByRole,
    getEmployeesOfCompany,
    hireEmployee,
    updateEmployee,
    dismissEmployee,
};

export default EmployeeService;
