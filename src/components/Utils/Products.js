import { firebaseApp } from '../Config/Conexion';
import { doc, getDoc, getFirestore, collection, getDocs, query, where, addDoc } from 'firebase/firestore';
const Products = "Products";
const app = firebaseApp;
const Category = "categories"

export const saveProduct = (product) => {
    const db = getFirestore(app);

    addDoc(collection(db, Products), product)
        .then(dato => console.log(dato))
        .catch(err => console.log(err));
}
export const getProducts = () => {

    const db = getFirestore(app);
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
    const db = getFirestore(app);
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
    const db = getFirestore(app);
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
export const getCategoryById = (id) => {
    const db = getFirestore(app);
    return new Promise((resolve, reject) => {
        const biciRef = doc(db, Category, id);

        getDoc(biciRef).then((snapshop) => {
            if (snapshop.exists()) {
                resolve({ id: snapshop.id, ...snapshop.data() })
            } else {
                reject({ message: 'La categoría no existe' })
            }
        }).catch(err => reject({ message: err }));

    });
}
