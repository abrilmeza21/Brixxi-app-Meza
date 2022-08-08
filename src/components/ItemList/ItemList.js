import React from "react";
import styled from "styled-components";
import Item from "../Item/Item";

export const ItemListCont = styled.div`
    width: 100;
    background-color: #FF9158;
    height: 30rem;
    margin:45px 15px;
    border-radius:10px;
    justify-content: center;
`;



function ItemList({Products}){
    return(
        Products.map( p =>
            <ItemListCont>
                <Item
                key={p.Id}
                {...p}
            />
            </ItemListCont>
        )
    )
}

export default ItemList