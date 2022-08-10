import React, { useState, useEffect } from 'react';
import './ItemListContainer.css';
import { ItemList } from "../ItemList/ItemList"
import { Item } from "../Item/Item";
import { promiseProductCategory } from "../Utils/Products";
import { useParams } from 'react-router-dom';

export const ItemListContainer = () => {


    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    const [title, setTitle] = useState("Brixxi");

    useEffect(() => {
            promiseProductCategory(id)
            .then((prodItem) => {
                setProducts(prodItem);
                setLoading(false);
                setTitle("Bienvenido a Brixxi")
            }) 
            .catch(()=> console.log ("error con producto"))

        }, [id]);
    return (
        <ItemList titulo={loading ? <div style={{color:"orangered", fontSize:"2rem"}}>CARGANDO...</div>: title}>
            {products.map((producto) => (
                <Item key={producto.id}{...producto} />
            ))}
        </ItemList>
    );
};





