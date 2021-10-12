import axios from 'axios';

const API_URL = "http://localhost:9000/api/v1";

const getCategoryOfCompany = async(rut) => {
    const response = await axios({
        method: 'GET',
        baseURL: API_URL,
        url: `/category/${rut}`
    });

    localStorage.setItem("categories", JSON.stringify(response.data));

    return response.data;
}

const addCategory = async (data) => {
    return await axios({
        method: 'POST',
        baseURL: API_URL,
        url: "/category",
        data: data
    })
}

const deleteCategory = async(id) => {
    return await axios({
        method: 'DELETE',
        baseURL: API_URL,
        url: `/category/${id}`
    })
}

const logout = () => {
    localStorage.removeItem("categories");
};

const CategoryService = {
    getCategoryOfCompany,
    addCategory,
    deleteCategory,
    logout
}

export default CategoryService;