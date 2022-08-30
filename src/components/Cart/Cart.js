import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext'
import { ItemCart } from './ItemCart/ItemCart';
import './Cart.css';





export const Cart = () => {
    const { findAllItems, totalPlusPrice } = useContext(CartContext);
    const arreglo = findAllItems();


    return (<>

        {arreglo.length > 0 ?
            <div>

                {
                    findAllItems().map(itemCant => (
                        <ItemCart key={itemCant.item.id} itemCant={itemCant} />
                    ))

                }
                <>
                <p className='cart-total'>Total <span className='cart-total-price'>${totalPlusPrice()}</span></p>
                <Link className='cart-link-to-Finalizar' to='/Finalizarcompra'>Finalizar compra</Link>
                </>
            </div>
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

