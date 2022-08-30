import React, { useContext } from 'react'
import { firebaseApp } from "../../Config/Conexion";
import { CartContext } from '../CartContext'
import styled from "styled-components";

import { collection, doc, setDoc, serverTimestamp, updateDoc, increment, getFirestore} from "firebase/firestore";

const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
`;

    const app = firebaseApp;
    const db = getFirestore(app);

export const Orders = () => {
    const UserOrder = useContext(CartContext);
    const { findAllItems, totalPlusPrice} = useContext(CartContext);

const createOrder = () => {
    const itemsOrder = UserOrder.itemsInCart.map(item => ({
        id: item.id,
        name: item.name,
        price: item.price
    }));


    UserOrder.itemsInCart.forEach(async (item) => {
        const itemOrderRef = doc(db, "products", item.id);
        await updateDoc(itemOrderRef, {
        stock: increment(-item.stock)
        });
    });

    let order = {
        buyer: {
        name: "abril",
        email: "abril@meza",
        phone: "11546890"
    },
        total: UserOrder.totalPlusPrice(),
        items: itemsOrder,
        date: serverTimestamp()
    };

    console.log(order);
    
    const createOrderInFirestore = async () => {
      // Add a new document with a generated id
        const newOrder = doc(collection(db, "orders"));
        await setDoc(newOrder, order);
        return newOrder;
    }
    
    createOrderInFirestore()
        .then(result => alert('Su orden Fue creada con exito! Su numero de orden es:\n\n\n ' + result.id + '\n\n'))
        .catch(err => console.log(err));

    UserOrder.removeList();


    return (
    <>{test.cartList.length > 0 &&
        <Button onClick={createOrder}>CHECKOUT NOW</Button>}
        </>
    );
}
}