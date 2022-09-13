import './Cart.css';

import React, { useContext } from 'react'
import { collection, doc, increment, serverTimestamp, setDoc, updateDoc } from "firebase/firestore";

import { CartContext } from './CartContext'
import { ItemCart } from './ItemCart/ItemCart';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import db from '../Config/Conexion';
import styled from "styled-components";

const ButtonCont = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;

`;
export const Button = styled.button`
    color: #F00758;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20rem;
    height: 3rem;
    font-size: 1.5rem;
    font-weight: 600;
    font-family: 'Bebas Neue', cursive;
    border: 0.01rem solid var(--maincolor);
    border-radius: 5px;
    background-color: #eee;
    box-shadow: 2px 2px 2px #ec4881;
    user-select: none;
    margin: 10px;


`;




export const Cart = () => {
    const check  = useContext(CartContext);

        const createOrder = () => {
        const itemsDb = check.itemsInCart.map(item => ({
            id: item.id,
            title: item.name,
            price: item.price
        }));
    
        check.itemsInCart.forEach(async (item) => {
            const itemRef = doc(db, "Products", item.id);
            await updateDoc(itemRef, {
            stock: increment(-item.itemquantity)
            });
        });
    
        let orders = {
            buyer: {
                name: "abril meza",
                email: "abril@meza.com",
                phone: "789564728"
            },
            total: check.totalPlusPrice(),
            items: itemsDb,
            date: serverTimestamp()
        }
        
        console.log(orders);
        
        const createOrderInFirestore = async () => {
            const newOrderRef = doc(collection(db, "orders"));
            await setDoc(newOrderRef, orders);
            return newOrderRef;
        }
        
        createOrderInFirestore()
            .then((result) =>  {
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
        
        check.clear();
        
        }
    



    

        return (<>
        {check.itemsInCart.length > 0 ?
        <div>
            {
            check.itemsInCart.length > 0 &&
            <div>                  
                {
                    check.itemsInCart.map(itemCant => (
                        <ItemCart key={itemCant.item.id} itemCant={itemCant} />
                    ))
    
                } 
                <div>
                <p className='cart-total'>Total <span className='cart-total-price'>${check.totalPlusPrice()}</span></p>
                    <ButtonCont>
                        <Button><Link to='/'>Ir a home</Link></Button>
                        <Button type="filled" onClick={() => check.clear()}>DELETE ALL PRODUCTS</Button>
                        <Button onClick={createOrder}>Generar orden</Button>
                    </ButtonCont>
                </div>
            </div>
            }
        </div>
            :
                <div className='cart-cerolink-container'>
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


