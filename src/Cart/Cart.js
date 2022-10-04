import React from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from './CartContext'
import ItemCart from './ItemCart';
import { addDoc, collection, getFirestore, getDoc, updateItem } from 'firebase/firestore'
import './itemCart.css'
import { useState } from 'react';
import firebaseApp from '../firebase/config'

const db = getFirestore(firebaseApp)


export const Cart = () => {

    const { cart, totalPrice } = useCartContext();
    const valorInicial = {
        name: '',
        email: '',
        number: '',
        adress: '',
        items: cart.map(product => ({ id: product.id, Nombre: product.Nombre, Precio: product.Precio, quantity: product.quantity })),
        total$: totalPrice()

    }

    const [user, setUser] = useState(valorInicial)

    const capturarInputs = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value })

    }


    const guardarDatos = async (e) => {
        e.preventDefault();
        // console.log(user);
        try {
            await addDoc(collection(db, "orders"), {
                ...user
            })
        } catch (error) {
            console.log(error)
        }
        setUser({ ...valorInicial })
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
            <div className='card-product'>
                {


                    cart.map(product =>

                        <ItemCart key={product.id} product={product} />

                    )

                }
            </div>
            <div className='form-content'>
                <form onSubmit={guardarDatos}>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Nombre</label>
                        <input type="text" className="form-control" name='name' id="exampleInputPassword1" required onChange={capturarInputs} value={user.name} />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" name='email' id="exampleInputEmail1" aria-describedby="emailHelp" required onChange={capturarInputs} value={user.email} />
                        <div id="emailHelp" className="form-text">No compartiremos tus datos con nadie.</div>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Numero</label>
                        <input type="number" className="form-control" name='number' id="exampleInputPassword1" required onChange={capturarInputs} value={user.number} />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Direccion</label>
                        <input type="text" className="form-control" name='adress' id="exampleInputPassword1" required onChange={capturarInputs} value={user.adress} />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" for="exampleCheck1">Aceptar condiciones</label>
                    </div>
                    <p className='item-cart'>
                        Total: ${totalPrice()}
                        {/* <button className='btn btn-light btn-comprar' >Comprar</button> */}
                    </p>
                    <button type="submit" className="btn  btn-color">Comprar</button>
                </form>
            </div>



        </>
    )
}


export default Cart;