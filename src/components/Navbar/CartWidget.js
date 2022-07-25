import React from "react";
import styled from "styled-components";
import {FaCartPlus} from "react-icons/fa";




export const CartIconElement = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    display: flex;
    justify-content: center;
    align-items: center;
    
    svg {
        fill: #f37e34;
    }

    h3{
        display: none;
        font-size: 1.8rem;
    }


@media screen and (max-width: 1024px) {
    width: 30%;
    justify-content: left;
        h3{
            display: flex;
            width: 100%;
        }
        svg {
        display: flex;
        }
    }


@media screen and (max-width: 880px) {
        h3{
            display: flex;
            font-size: 2.4rem;
        }
        svg {
        display: flex;
        }
    }

@media screen and (max-width: 500px) {

        h3{
            font-size: 2rem;
        }
        
        svg {
            display: flex;
        }
    }

@media screen and (max-width: 260px) {
        h3{
            font-size: 1.5rem;
        }
        svg {
        display: flex;
        }
    }

`;

const CartIcon = () => {
    return(
        
        <CartIconElement>
            <FaCartPlus/>
            <h3>MI CARRITO</h3>
        </CartIconElement>
        
    )
}



export default CartIcon