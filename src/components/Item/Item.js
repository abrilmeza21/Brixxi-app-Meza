import './Item.css';

import { Link } from 'react-router-dom';
import React from "react";

export const Item = ({ id, pictureUrl, name, detail}) => {


    return (
        <Link to={`/item/${id}`} className='card-product'>
            <div className= "card-container-image">
                <img className= "card-product-image" src={pictureUrl} alt='imagen ' />
            </div>
            <div className='card-product-detail-container'>
                <p className="card-product-detail-container-name">{name}</p>
                <p className="card-product-detail-container-detail">{detail}</p>  
            </div>           
        </Link>

    );
}