import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ItemList from "./ItemList";
import CustomFetch from "../Utils/CustomFetch";
import Products from "../Utils/Products";

export const CardContainer = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;


function ItemListContainer () {
    const [Item, setItem] = useState([])
    useEffect(() => {
        CustomFetch (2000, Products)
        .then (resultado => setItem(resultado))
        }, [])
    return(
        <CardContainer>
            {
                Item?.length <= 0 ? <h1 style={{color:"orangered", fontSize:"2rem"}}>CARGANDO...</h1> : <ItemList Products={Item}/>
            }
        </CardContainer>
    );
}




export default ItemListContainer






