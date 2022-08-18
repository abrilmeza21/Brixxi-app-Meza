import React, { useEffect, useState} from 'react'
import { FaMinus, FaPlus } from "react-icons/fa";
import "./ItemCount.css";

export const ItemCount = ({stock, initial, onAdd }) => {

    const [counter, setCounter] = useState(Number(initial));
    const [plusCounter, setPlusCounter] = useState(false);
    const [minusCounter, setMinusCounter] = useState(false);



    useEffect(() => {

        if (counter < Number(stock)) {
            setPlusCounter(true);
        } else {
            setPlusCounter(false);
        }
        if (counter > 1) {
            setMinusCounter(true);
        } else {
            setMinusCounter(false);
        }

    }, [counter, stock]);

    const increment = () => {
        if (plusCounter) {
            setCounter(counter + 1);
        }
    }

    const decrement = () => {
        if (counter > 1) {
            setCounter(counter - 1);
        }
    }
    return (
            <div className="item-count-component" >
                <div className="item-count-container">
                    <div className="stock">{`Stock ${stock} unidades`}</div>
                    <div className="inc-dec-disponible">
                        <div className={`inc-dec-stock-sign ${minusCounter ? 'left' : "disable-sign-left"}`} onClick={decrement}><FaMinus /></div>
                        <div className="inc-dec-stock-n">{counter}</div>
                        <div className={`inc-dec-stock-sign  ${plusCounter ? 'right' : "disable-sign-right"}`} onClick={increment}><FaPlus /></div>
                    </div>
                </div>
                <div className='button' onClick={() => {
                    onAdd(counter);
                }}>Agregar a carrito</div>
            </div>
        )
    }
