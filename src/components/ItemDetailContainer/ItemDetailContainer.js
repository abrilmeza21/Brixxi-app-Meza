import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import {promiseProductId } from "../Utils/Products";
import { ItemDetail } from "./ItemDetail";

export const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        promiseProductId(id)
            .then(prod => {
                setProduct(prod)
                setLoading(false)
            })
            .catch (()=> console.log ("error con producto"))
    }, [id])


    return (
        <>
        {
            loading ? <div style={{display:"flex", justifyContent:"center",color:"orangered", fontSize:"2rem"}}>CARGANDO...</div> : <ItemDetail item={product}/>
        }
        </>
    )
}