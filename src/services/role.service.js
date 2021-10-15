import axios from "axios";

const API_URL = "http://localhost:9000/api/v1";

const getRolesofCompany = async (rut) => {
    const response = await axios({
        method: "GET",
        baseURL: API_URL,
        url: `/roles/${rut}`,
    });

    return response.data;
};

const addRole = async (data) => {
    return await axios({
        method: "POST",
        baseURL: API_URL,
        url: "/roles",
        data: data,
    });
};

const deleteRole = async (id) => {
    return await axios({
        method: "DELETE",
        baseURL: API_URL,
        url: `/roles/${id}`,
    });
};

const RoleService = {
    getRolesofCompany,
    addRole,
    deleteRole,
};

export default RoleService;
