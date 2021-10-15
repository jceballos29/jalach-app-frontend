import axios from "axios";

const API_URL = "http://localhost:9000/api/v1";

const register = async (company) => {
    return await axios({
        method: "POST",
        baseURL: API_URL,
        url: "/register",
        data: company,
    });
};

const login = async (data) => {
    try {
        let response = await axios({
            method: "POST",
            baseURL: API_URL,
            url: "/login",
            data: data,
        });
        if (response.data.business_name) {
            localStorage.setItem("company", JSON.stringify(response.data));
        }
        return response.data;
    } catch (error) {
        throw error;
    }
};

const logout = () => {
    localStorage.removeItem("company");
};

const setBusinessHours = async (rut, data) => {
    try {
        let response = await axios({
            method: "POST",
            baseURL: API_URL,
            url: `/company/${rut}/business_hours`,
            data: data,
        });
        if (response.data.business_name) {
            localStorage.setItem("company", JSON.stringify(response.data));
        }

        return response.data;
    } catch (error) {
        throw error;
    }
};

const setNotFirstTime = async (rut) => {
    try {
        let response = await axios({
            method: "POST",
            baseURL: API_URL,
            url: `/company/${rut}`,
        });
        if (response.data.business_name) {
            localStorage.setItem("company", JSON.stringify(response.data));
        }

        return response.data;
    } catch (error) {
        throw error;
    }
};

const AuthService = {
    register,
    login,
    logout,
    setBusinessHours,
    setNotFirstTime,
};

export default AuthService;
