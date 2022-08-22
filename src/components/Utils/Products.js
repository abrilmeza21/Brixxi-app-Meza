const Products = [ 
    {
        id: "1",
        category: "1",
        name: "Hidratante de Frambuesa",
        price: 80 ,
        detail:"Hidratante Facial",
        pictureUrl: "https://loremflickr.com/350/350",
        stock: 5 ,
    },
    {
        id: "2",
        category: "3",
        name: "Manteca Nutritiva de Coco",
        price: 97 ,
        detail :"Body Butter",
        pictureUrl: "https://loremflickr.com/350/350",
        stock: 35 ,
    },
    {
        id: "3",
        category: "2",
        name: "Jabon de Coco y Lavanda",
        price: 150 ,
        detail :"Jabon para pieles sensibles",
        pictureUrl: "https://loremflickr.com/350/350",
        stock: 87 ,
    },
    {
        id: "4",
        category: "2",
        name: "Jabon de Arcilla Negra",
        price: 360 ,
        detail :"Jabon para pieles grasas",
        pictureUrl: "https://loremflickr.com/350/350",
        stock: 65 ,
    },
    {
        id: "5",
        category: "1",
        name: "Crema Nutritiva de Avena",
        price: 80 ,
        detail :"Crema Nutritiva Facial",
        pictureUrl:"https://loremflickr.com/350/350",
        stock: 5 ,
    },
    {
        id: "6",
        category: "2",
        name: "Crema Para pieles con acne",
        price: 97 ,
        detail :"Crema facial con tea tree",
        pictureUrl: "https://loremflickr.com/350/350",
        stock: 35 ,
    },
    {
        id: "7",
        category: "1",
        name: "Crema Antioxidante",
        price: 150 ,
        detail :"Crema facial con extracto de arandanos",
        pictureUrl: "https://loremflickr.com/350/350",
        stock: 87 ,
    },
    {
        id: "8",
        category: "3",
        name: "Jabon de Avena",
        price: 360 ,
        detail :"jabon corporal para todo tipo de pieles",
        pictureUrl: "https://loremflickr.com/350/350",
        stock: 65 ,
    }
]
export default Products

let categories = [
    { id: "1", name: "Cremas" },
    { id: "2", name: "Jabones" },
    { id: "3", name: "Promociones" },
]


export const getProducts = () => {
    const promesa = new Promise((resolve, reject) => {
        setTimeout(
            () => {
                resolve(Products);
                reject("Error de conexion");
            }, 3000)
    });
    return promesa;
}
export const getProductById = (id) => {
    const promesa = new Promise((resolve, reject) => {
        setTimeout(
            () => {
                const product = Products.find(producto => producto.id === id);
                if (product) {
                    resolve(product);
                } else {
                    reject("El producto no existe");
                }

            }, 1000)
    });
    return promesa;
}
export const getProductsByCategory = (category) => {
    const promesa = new Promise((resolve, reject) => {
        setTimeout(
            () => {
                const filteredProducts = Products.filter(producto => producto.category === category);
                if (filteredProducts) {
                    resolve(filteredProducts);
                } else {
                    reject("La categoría no existe");
                }

            }, 1000)
    });
    return promesa;
}

export const getCategoryById = (id) => {
    const promesa = new Promise((resolve, reject) => {
        setTimeout(
            () => {

                const filteredProducts = categories.find(category => category.id === id);


                if (filteredProducts) {
                    resolve(filteredProducts);
                } else {
                    reject("La categoría no existe");
                }

            }, 1000)
    });
    return promesa;
}