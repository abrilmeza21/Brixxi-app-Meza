import React, { useEffect, useState } from 'react'

import { ItemDetail } from "./ItemDetail";
import { getProductById } from "../Services/services";
import { useParams } from 'react-router-dom';

export const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        getProductById(id)
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