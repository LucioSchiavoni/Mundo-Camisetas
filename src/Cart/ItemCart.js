import React from 'react'
import './itemCart.css'
import { useCartContext } from './CartContext'
import NavBar from '../components/NavBar';


export const ItemCart = ({ product }) => {
    const { removeProduct } = useCartContext();
    return (
        <>
            <NavBar />

            <div className="card" style={{ "width": "18rem" }}>
                <img src={product.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Kit: {product.Nombre}</h5>
                    <p className="card-text">Cantidad: {product.quantity}</p>
                    <p className="card-text">Precio: ${product.Precio}</p>
                    <p className="card-text">Subtotal: ${product.quantity * product.Precio}</p>
                    <button className='btn btn-light' onClick={() => removeProduct(product.id)}>Eliminar</button>
                </div>
            </div>


        </>
    )
}

export default ItemCart;
