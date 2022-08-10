import React from "react";
import { Link } from 'react-router-dom';
import './Item.css';


export const Item = ({ id, pictureUrl, name, price, detail}) => {


    return (
        <Link to={`/item/${id}`} className='card-product'>
            <div className= "card-container-image">
                <img className= "card-product-image" src={pictureUrl} alt='imagen ' />
            </div>
            <div className='card-product-detail-container'>
                <p className="card-product-detail-container-name">{name}</p>
                <p className="card-product-detail-container-detail">{detail}</p>
                <p className="card-product-detail-container-price">${price}</p>
            </div>           
        </Link>

    );
}