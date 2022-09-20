import React from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from './CartContext'
import ItemCart from './ItemCart';

export const Cart = () => {

    const { cart, totalPrice } = useCartContext();

    if (cart.length === 0) {
        return (
            <>
                <p>No tiene productos </p>
                <Link to='/' className='btn btn-light'>Ir a comprar</Link>

            </>
        )
    }
    return (
        <>
            {
                cart.map(product => <ItemCart key={product.id} product={product} />)
            }
            <p>
                total: {totalPrice()}
            </p>
        </>
    )
}


export default Cart;