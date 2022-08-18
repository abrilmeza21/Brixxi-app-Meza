import React, { useState, useContext, useEffect } from 'react'
import  {ItemCount} from "../ItemCount/ItemCount"
import "./ItemDetail.css"
import { useNavigate } from 'react-router-dom'
import { CartContext } from "../CartWidget/CartContext"

export const ItemDetail = ({ item, loading }) => {
    const [bought, setBought] = useState(false);
    const { addItem, itemSize } = useContext(CartContext);
    const [stock, setStock] = useState(0)


    const onAdd = (counter) => {
        setBought(true)
        addItem(item, counter);
        setStock((prevStock) => prevStock - counter);
    }
    const navigate = useNavigate();
    useEffect(() => {
        if (!loading) {
            setStock(item.stock - itemSize(item.id));
        }
    }, [stock, loading]);

    return (
        <section className="item-detail-section">
            <div className="detail-image-description">
                <div className="image-container">
                    <img className="detail-image" src={item.pictureUrl} alt={item.name} />
                </div>
                <div className="detail-description">
                    <p className= "description">Descripción</p>
                    <p>{item.detail}</p>
                </div>
            </div>
            <div className="resume">  
                <div className="information">
                    <div className="detail-name">{item.name}</div>
                    <div className= "detail-price">{`$ ${item.price}`}</div>
                </div>
            { bought ?
                <button className='btn-terminar-compra' onClick={() => navigate('/cart')} >
                    Terminar mi compra </button>
                    : stock === 0 ?
                    <p className='item-detail-producto-agotado'>Producto agotado</p>
                    :
                    <ItemCount stock={stock} onAdd={onAdd} initial='1' />
                }
            </div>
        </section>
    )
}