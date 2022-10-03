import React from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from '../Cart/CartContext'
import ItemAwayCart from './ItemAwayCart';
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import './style.css'

export const AwayCart = () => {

    const { cart, totalPrice } = useCartContext();

    const order = {
        buyer: {
            name: "Carlos",
            email: "Carlos33@gmail.com",
            phone: "12345678",
            adress: "Av. Siempre viva"
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
                <Link to='/Home' className='btn btn-light card-product'>Ir a comprar</Link>

            </>
        )
    }
    return (
        <>
            <div className='gird-item-cart'>
                {

                    cart.map(product =>

                        <ItemAwayCart key={product.id} product={product} />
                    )

                }
            </div>
            <p className='item-cart'>
                Total: ${totalPrice()}
                <button className='btn btn-light btn-comprar' onClick={handleClick()}>Comprar</button>
            </p>

        </>
    )
}


export default AwayCart;