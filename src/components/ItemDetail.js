import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../Cart/CartContext'
import ItemCount from './ItemCount'

export const ItemDetail = ({ data }) => {

    const [carrito, setCarrito] = useState(false)
    const { addProduct } = useCartContext();
    const onAdd = (quantity) => {
        setCarrito(true);
        addProduct(data, quantity);
    }


    return (
        <div className='card-item'>
            <img src={data.img} className="item" alt="Imagen kit" />
            <h5 className="item-content">{data.name}</h5>
            <p className="item-content">marca: {data.marca}</p>
            <p className="item-content"> precio: {data.precio} USD$</p>
            <br />
            {
                carrito ? <Link to='/Cart/CartContext' className="btn btn-light">Terminar compra</Link> : <ItemCount initial={1} stock={10} onAdd={onAdd} />
            }
        </div>

    )
}

export default ItemDetail;
