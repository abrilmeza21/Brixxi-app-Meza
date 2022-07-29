import React from "react";
import styled from "styled-components";
import ItemCount from "../ItemCount/ItemCount";

export const CardContainer = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;


function ItemListContainer () {
    return(
        <CardContainer>
        <ItemCount stock="8" initial="1"/>
        </CardContainer>
    );
}




export default ItemListContainer


