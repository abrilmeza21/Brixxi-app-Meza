import React from "react";
import styled from "styled-components";
import ItemCount from "../ItemCount/ItemCount";


export const ItemName = styled.h1`
    display: flex;
    font-size: 3rem;
    width: 100%;
    height: 4rem;
    margin: 3px;
    color: pink;
    text-shadow: 2px 2px 2px #F00758 ;
    justify-content: center
`;

export const ItemPrice = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    color: #F00758 ;
    font-size:2rem;
`;


function Item ({Name, Price, Stock, PictureUrl}){
    return(
        <>
        <img src={PictureUrl} alt="imagen producto" style={{display:"Flex", justifyContent:"center", margin:"10px ", borderRadius:"10px", alignContent:"center"}}/>
        <ItemName>{Name}</ItemName>
        <ItemPrice>${Price}</ItemPrice>
        <ItemCount Stock={Stock} initial="1"/>
        </>
    )
}

export default Item