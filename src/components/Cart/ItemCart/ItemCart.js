import './ItemCart.css';

import React, { useContext } from 'react';

import { CartContext } from "../CartContext";
import { Count } from '../Count/Count';

export const ItemCart = ({ itemCant }) => {
    const { item, quantity } = itemCant;
    const { removeItem} = useContext(CartContext);

    return (
        <section className="container">
            <div className="imagen-container">
                <img className= "imagen" src={item.pictureUrl} alt="foto producto" />
            </div>
            <div className="titulo-btn">
                <div className="titulo-btn-name">{item.name}</div>
                <button className='button' onClick={() => removeItem(item.id)}>Eliminar item</button>
            </div>

            <div className='item-cart-count'>
                <Count itemCant={itemCant} />
            </div>
            <div className='item-cart-precio'>
                ${item.price * quantity}
            </div>
        </section>
    )
}