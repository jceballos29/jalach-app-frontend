import axios from 'axios';

const API_URL = "http://localhost:9000/api/v1";

const register = (company) => {
    return axios({
        method: 'POST',
        baseURL: API_URL,
        url: "/register",
        data: company

    });
}

const login = async (data) => {
    try {
        let response = await axios({
            method: 'POST',
            baseURL: API_URL,
            url: "/login",
            data: data
        });
        if(response.data.business_name) {
            localStorage.setItem("company", JSON.stringify(response.data));
        }
        return response.data;
    } catch (error) {
        throw error
    }
}

const logout = () => {
    localStorage.removeItem("company");
};

const AuthService = {
    register,
    login,
    logout
}

export default AuthService;