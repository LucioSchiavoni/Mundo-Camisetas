import React from 'react'
import './itemCart.css'
import { useCartContext } from './CartContext'


export const ItemCart = ({ product }) => {
    const { removeProduct } = useCartContext();
    return (
        <div className='card-product'>
            <img src={product.image} alt="producto" className='img-cart' />
            <div>
                <p className='item-cart'>Kit: {product.Nombre}</p>
                <p className='item-cart'>Cantidad: {product.quantity}</p>
                <p className='item-cart'>Precio: {product.Precio}</p>
                <p className='item-cart'>Subtotal:${product.quantity * product.Precio}</p>
                <button className='card-product btn btn-light' onClick={() => removeProduct(product.id)}>Eliminar</button>
            </div>
        </div>
    )
}

export default ItemCart;
