import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import ItemDetail from "./ItemDetail";
import getItems from "./GetItems";

export const CardContainer = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 100%;
`;

export function ItemDetailContainer () {
    const [ItemObj, setItemObj] = useState({});
    const [Cargando,setCargando] = useState(false);

    useEffect(() => {
        setCargando(true)
        getItems (3000, ItemDetail)
        .then (resultado => {
            setItemObj(resultado)
            setCargando(false)
        })
        .catch (()=> console.log ("error con producto"))
        }, [])

    return(
        <CardContainer>
            {
                Cargando? <h1 style={{color:"orangered", fontSize:"2rem"}}>CARGANDO...</h1> : <ItemDetail foundItem={ItemObj}/>
            }
        </CardContainer>
    );
}