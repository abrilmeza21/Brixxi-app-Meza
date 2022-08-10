const Products = [ 
    {
        id: "1",
        category: "1",
        name: "producto 1",
        price: 80 ,
        detail:"Detalle del producto",
        pictureUrl: "https://loremflickr.com/350/350",
        stock: 5 ,
    },
    {
        id: "2",
        category: "3",
        name: "producto 2",
        price: 97 ,
        detail :"Detalle del producto",
        pictureUrl: "https://loremflickr.com/350/350",
        stock: 35 ,
    },
    {
        id: "3",
        category: "2",
        name: "producto 3",
        price: 150 ,
        detail :"Detalle del producto",
        pictureUrl: "https://loremflickr.com/350/350",
        stock: 87 ,
    },
    {
        id: "4",
        category: "2",
        name: "producto 4",
        price: 360 ,
        detail :"Detalle del producto",
        pictureUrl: "https://loremflickr.com/350/350",
        stock: 65 ,
    },
    {
        id: "5",
        category: "1",
        name: "producto 5",
        price: 80 ,
        detail :"Detalle del producto",
        pictureUrl:"https://loremflickr.com/350/350",
        stock: 5 ,
    },
    {
        id: "6",
        category: "2",
        name: "producto 6",
        price: 97 ,
        detail :"Detalle del producto",
        pictureUrl: "https://loremflickr.com/350/350",
        stock: 35 ,
    },
    {
        id: "7",
        category: "1",
        name: "producto 7",
        price: 150 ,
        detail :"Detalle del producto",
        pictureUrl: "https://loremflickr.com/350/350",
        stock: 87 ,
    },
    {
        id: "8",
        category: "3",
        name: "producto 8",
        price: 360 ,
        detail :"Detalle del producto",
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
