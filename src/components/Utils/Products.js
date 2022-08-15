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



export const promiseProductId = (id) => {
    const promise = new Promise((resolve, reject) => {
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
    return promise;
}
export const promiseProductCategory = (Categoria) => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Categoria) {
                resolve (Products.filter((producto) => producto.category === Categoria));
                } else if (Categoria === undefined) {
                    resolve(Products);
                } else {
                    reject("La categoría no existe");
                }
            }, 1000);
    });
    return promise;
}
