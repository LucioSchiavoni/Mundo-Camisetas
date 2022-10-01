import React from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from './CartContext'
import ItemCart from './ItemCart';
import { addDoc, collection, getFirestore } from 'firebase/firestore'

export const Cart = () => {

    const { cart, totalPrice } = useCartContext();

    const order = {
        comprador: {
            name: "Juan",
            email: "JuanJose@gmail.com",
            numero: "12345678",
            direccion: "Av. Siempre viva"
        },
        items: cart.map(product => ({ id: product.id, Nombre: product.Nombre, Precio: product.Precio, quantity: product.quantity })),
        total: totalPrice(),
    }
    const handleClick = () => {
        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order)
            .then(({ id }) => console.log(id))
    }




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
            <button className='btn btn-light' onClick={handleClick()}>Comprar</button>
        </>
    )
}


export default Cart;