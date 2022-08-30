import React, { useState, useEffect } from 'react';
import './ItemListContainer.css';
import { ItemList } from "../ItemList/ItemList"
import { Item } from "../Item/Item";
import { getProductsByCategory, getProducts } from "../Services/services"
import {useParams} from 'react-router-dom';

export const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    const [title, setTitle] = useState("Brixxi");


    useEffect(() => {

        if (id === "" || id === undefined) {
            getProducts().then(prod => {
                setProducts(prod);
                setTitle("Bienvenidos a Brixxi");

            }).catch(()=> console.log ("error con producto"))
                .finally(() => { setLoading(false) })
        } else {
            getProductsByCategory(id).then(prod => { 
                setProducts(prod);
            }).catch(()=> console.log ("error con producto"))
                .finally(() => { setLoading(false) })
        }
        return () => { setProducts([]) }
        }, [ id]);

    return (
        <ItemList titulo={loading ? <div style={{color:"orangered", fontSize:"2rem"}}>CARGANDO...</div>: title}>
            {products.map((producto) => (
                <Item key={producto.id}{...producto} />
            ))}
        </ItemList>
    );
};