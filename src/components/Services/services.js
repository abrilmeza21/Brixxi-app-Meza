import {
    getCategoryById as getCategoryByIdModel
} from '../Utils/Products';

import {
    getProducts as getProductsModel,
    getProductById as getProductByIdModel,
    getProductsByCategory as getProductsByCategoryModel,
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

export const getCategoryById = (id) => {
    return getCategoryByIdModel(id);
}