import * as React from 'react';
import './style.css';
import { useState, useEffect } from 'react';




const ItemCount = ({ stock, initial, onAdd }) => {
    const [count, setCount] = useState(initial);

    useEffect(() => {
        setCount(parseInt(initial))
    }, [initial])
    return (
        <div className='box-count'>

            <button className='btn-color btn-count' disabled={count <= 1} onClick={() => {
                setCount(count - 1);
            }}>-</button>
            <p className='count-text'>{count}</p>
            <button className='btn-color btn-count' disabled={count >= stock} onClick={() => {
                setCount(count + 1);
            }}>+</button>

            <button className=' btn-color btn-count-cart' disabled={stock <= 0} onClick={() => onAdd(count)}>Añadir al carrito</button>
        </div>
    );

};




export default ItemCount;