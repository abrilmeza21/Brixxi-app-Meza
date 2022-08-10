import React, { useState } from 'react'
import  {ItemCount} from "../ItemCount/ItemCount"
import './ItemDetail.css'



export const ItemDetail = ({ item }) => {
    const [bought, setBought] = useState(false);

    const onAdd = () => {
        setBought(true)
    }


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
                <button className='btn-terminar-compra' >
                    Terminar mi compra </button>
                    :
                    <ItemCount stock={item.stock} onAdd={onAdd} initial='1' />
                }
            </div>
        </section>
    )
}