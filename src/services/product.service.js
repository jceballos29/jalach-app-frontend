import axios from 'axios';

const API_URL = "http://localhost:9000/api/v1";

const getProducts = async (rut) => {
    const response = await axios({
        method: 'GET',
        baseURL: API_URL,
        url: `/products/company/${rut}`
    });

    return response.data;
} 

const getProductsByCode = async (code) => {
    const response = await axios({
        method: 'GET',
        baseURL: API_URL,
        url: `/products/category/${code}`
    });

    return response.data;
}

const registerProduct = async (data) => {
    return await axios({
        method: 'POST',
        baseURL: API_URL,
        url: "/products",
        data: data
    });
}
    

const deleteProduct = async (code) => {
    return await axios({
        method: 'DELETE',
        baseURL: API_URL,
        url: `/products/${code}`
    });
}

const updateProduct = async (code, data) => {
    return await axios({
        method: 'PUT',
        baseURL: API_URL,
        url: `/products/${code}`,
        data: data
    });
}


const ProductService = {
    getProducts,
    getProductsByCode,
    registerProduct,
    deleteProduct,
    updateProduct
}

export default ProductService;