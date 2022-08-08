import React from "react";
import Products from "../Utils/Products";
import { ItemName } from "../Item/Item";
import { ItemPrice } from "../Item/Item"; 
import styled from "styled-components";
import ItemCount from "../ItemCount/ItemCount";

export const ItemDetailCont = styled.div`
    width: 60%;
    background-color: #FF9158;
    height: 40rem;
    margin:45px 15px;
    border-radius:10px;
    justify-content: center;
`;

export const ImageCont = styled.div`
display: flex;
width: 100%;
justify-content: center;
justify-items: baseline;
margin-top: 1em;
`;

const ItemDetail = () => {
    const foundItem = Products.find(obj => {
        return obj.Id === 1;
    });
    return (
        <ItemDetailCont>
            {foundItem && (
            <>
                <ImageCont>
                <img src={foundItem.PictureUrl} alt="imagen producto" style={{ borderRadius:"20px"}}/>
                </ImageCont>
                <ItemName>{foundItem.Name}</ItemName>
                <ItemPrice>${foundItem.Price}</ItemPrice>
                <ItemCount Stock={foundItem.Stock} initial="1"/>
            </>
            )}
        </ItemDetailCont>
    );
};

export default ItemDetail;