import './CartWidget.css';

import React, { useContext }from "react";

import { CartContext } from '../CartContext';
import {FaCartPlus} from "react-icons/fa";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Cartwidjet = styled.div`

`;
export const Icon = styled.div`

`;

export const CartWidjet = () => {
    const { totalPlus } = useContext(CartContext);

    const active = {
        color: 'red',
    }

    const disactive = {
        default: {
            color: "#eee"
        },
        Hovered: {
            color: 'red'
        }


    }


    return (

        <Cartwidjet >
            <Icon as={Link} to='/cart' className='cart-widjet-btn' style={({ isActive }) => (isActive ? active : disactive)}>
            <FaCartPlus/>

            {totalPlus() > 0 &&
                <div className='cart-widjet-count' >{totalPlus()}</div>
            }
            </Icon>
        </Cartwidjet>


    );
}