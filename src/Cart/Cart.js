import React from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from './CartContext'
import ItemCart from './ItemCart';


export const Cart = () => {

    const { cart, totalPrice } = useCartContext();

    if (cart.length === 0) {
        return (
            <>
                <p className='item-cart'>No tiene productos </p>
                <Link to='/' className='btn btn-light card-product'>Ir a comprar</Link>

            </>
        )
    }
    return (
        <>
            {
                cart.map(product => <ItemCart key={product.id} product={product} />)
            }
            <p className='item-cart'>
                total: {totalPrice()}
            </p>
        </>
    )
}


export default Cart;