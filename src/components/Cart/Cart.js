import React, { useContext } from 'react'
import { ItemCart } from './ItemCart/ItemCart';
import { Link } from 'react-router-dom';
import { firebaseApp } from "../Config/Conexion";
import { CartContext } from './CartContext'
import styled from "styled-components";
import { collection, doc, setDoc, serverTimestamp, updateDoc, increment, getFirestore} from "firebase/firestore";

import './Cart.css';
import Swal from 'sweetalert2';


const ButtonCont = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
`;
const Button = styled.button`
    display: flex;
    justify-content:center;
    align-items: center;
    width: 20%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
`;
const app = firebaseApp;


export const Cart = () => {
    const { findAllItems, totalPlusPrice, removeList } = useContext(CartContext);
    const arreglo = findAllItems();
    const UserOrder = useContext(CartContext);

    const createOrder = () => {
        const itemsOrder = UserOrder.itemsInCart.map(item => ({
        id: item.id,
        name: item.name,
        price: item.price
    }));
    
        UserOrder.itemsInCart.forEach(async (item) => {
        const db = getFirestore(app);
        const itemRef = doc(db, "Products", item.id);
        await updateDoc(itemRef, {
        stock: increment(-item.stock)
        });
    });

        let order = {
        buyer: {
            name: "abril meza",
            email: "abril@meza.com",
            phone: "789564728"
        },
        total: UserOrder.totalPlusPrice(),
        items: itemsOrder,
        date: serverTimestamp()
        };

        console.log(order);
        const db = getFirestore(app);
        const createOrderInFirestore = async () => {
        const newOrderRef = doc(collection(db, "orders"));
        await setDoc(newOrderRef, order);
        return newOrderRef;
    }

    createOrderInFirestore()
    .then((result) => {
        Swal.fire({
            title: 'Gracias por tu compra!!!!',
            text: `Tu código de seguimiento es ${result.id}`,
            icon: 'success',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: <Link className='cart-link-to-home' to='/'>ir a home</Link>
        })
    })
        .catch(err => console.log(err));



    }


    return (<>
        {
        UserOrder.itemsInCart.length > 0 &&
        <div>                  
            {
                findAllItems().map(itemCant => (
                    <ItemCart key={itemCant.item.id} itemCant={itemCant} />
                ))

            } 
            <div>
            <p className='cart-total'>Total <span className='cart-total-price'>${totalPlusPrice()}</span></p>
                <ButtonCont>
                <Button type="filled" onClick={() => removeList()}>DELETE ALL PRODUCTS</Button>
                </ButtonCont>
            </div>
        </div>
    }
    {
        (arreglo.length > 0)
        ? <ButtonCont>
            <Button onClick={createOrder}>Generar orden</Button>
        </ButtonCont>
        : <div className='cart-cerolink-container'>
        <div className='cart-image-container'>
            <div className='cart-text-container'>
                <p className='cart-cero-items'>No hay items</p>
            </div>
        </div>

        <Link className='cart-link-to-home' to='/'>ir a home</Link>
    </div> 
    }
    
    </>
)
}

