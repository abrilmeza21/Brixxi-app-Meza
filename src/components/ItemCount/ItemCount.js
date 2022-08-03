import React, { useEffect, useState } from 'react';
import "./ItemCount.css";




const ItemCount = ({Stock, initial, onAdd }) => {

    const [count, setCount] = useState(Number(initial));
    const [plusCount, setPlusCount] = useState(false);
    const [minusCount, setMinusCount] = useState(false);



    useEffect(() => {

        if (count < Number(Stock)) {
            setPlusCount(true);
        } else {
            setPlusCount(false);
        }
        if (count > 1) {
            setMinusCount(true);
        } else {
            setMinusCount(false);
        }

    }, [count, Stock]);

    const add = () => {
        if (plusCount) {
            setCount(count + 1);
        }
    }

    const subs = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    }

    return (
        <div className="count-component-container" >
            <div className="count-container">
                <div className="stock-count">{`Stock ${Stock} unidades`}</div>
                <div className="subs-add-stock">
                    <div className={`subs-add-stock-btn  ${minusCount ? "left" : "disable-btn-left"}`} onClick={subs}>-</div>
                    <div className="subs-add-stock-number">{count}</div>
                    <div className={`subs-add-stock-btn  ${plusCount ? "right" : "disable-btn-right"}`} onClick={add}>+</div>
                </div>
            </div>
            <div className="button" onClick={() => {
                onAdd(count);
            }}>Agregar a carrito</div>
        </div>
    )
}

export default ItemCount