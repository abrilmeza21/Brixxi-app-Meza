import {
    getProductById as getProductByIdModel,
    getProductsByCategory as getProductsByCategoryModel,
    getProducts as getProductsModel,
} from '../Utils/Products';

export const getProducts = () => {
    return getProductsModel();
}

export const getProductById = (id) => {
    return getProductByIdModel(id);
}

export const getProductsByCategory = (category) => {
    return getProductsByCategoryModel(category);
}

