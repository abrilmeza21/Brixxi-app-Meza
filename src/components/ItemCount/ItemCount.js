import React from 'react'
import { useState } from 'react';
import './ItemCount.css'

function ItemCount({stock}) {

    const [count, setCount] = useState(0);

    function Adding () {
        if(count < stock) {
            setCount(count + 1);
        }
    }

    function Subs () {
        if (count > 0) {
            setCount(count - 1);
        }
    }


    return (
        <div>
            <button onClick={Subs} className="button Subs">-</button>
            <span>{count}</span>
            <button onClick={Adding} className="button Add">+</button>
        </div>
    )
}

export default ItemCount