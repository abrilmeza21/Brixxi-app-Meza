import { addDoc, collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore';

import db from '../Config/Conexion';

const Products = "Products";




export const saveProduct = (product) => {


    addDoc(collection(db, Products), product)
        .then(dato => console.log(dato))
        .catch(err => console.log(err));
}
export const getProducts = () => {


    const itemsCollection = collection(db, Products);
    const promesa = new Promise((resolve, reject) => {
        getDocs(itemsCollection)
            .then((snapshot) => {
                if (snapshot.size === 0) {
                    resolve([]);
                } else {
                    resolve(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
                }
            })
            .catch(err => reject(err));
    });
    return promesa;
}
export const getProductById = (id) => {

    const biciRef = doc(db, Products, id);
    const promesa = new Promise((resolve, reject) => {

        getDoc(biciRef).then((snapshop) => {
            if (snapshop.exists()) {
                resolve({ id: snapshop.id, ...snapshop.data() })
            }
        }).catch(err => reject(err));
    })
    return promesa;
}

export const getProductsByCategory = (category) => {

    const q = query(collection(db, Products), where("category", "==", category));
    const promesa = new Promise((resolve, reject) => {
        getDocs(q).then((snapshot) => {
            if (snapshot.size === 0) {
                resolve([]);
            } else {
                resolve(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
            }
        }).catch(err => reject(err));
    })
    return promesa;
}

