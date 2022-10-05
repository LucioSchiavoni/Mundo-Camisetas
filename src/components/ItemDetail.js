import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../Cart/CartContext'
import ItemCount from './ItemCount'
import NavBar from './NavBar'
import './style.css'
import CartWidget from './CartWidget'

export const ItemDetail = ({ data }) => {

    const [carrito, setCarrito] = useState(false)
    const { addProduct } = useCartContext();

    const onAdd = (quantity) => {
        setCarrito(true);
        addProduct(data, quantity);
        console.log(`Compraste ${quantity} unidades `)
    }


    return (
        <>

            <NavBar />

            <CartWidget />
            <div className='body-detail' style={{ position: "absolute", height: "100%", top: "0" }}>
                <div className='card-detail'>
                    <img src={data.image} className='img-detail' alt='kit' />
                    <div>
                        <p className='text-detail'><b>Kit:</b> {data.Nombre}</p>
                        <p className='text-detail'><b>Marca:</b> {data.Marca}</p>
                        <p className='text-detail'> <b>Precio:</b> ${data.Precio}</p>
                        <select className="form-select select-btn" aria-label="Default select example">
                            <option selected>Talle</option>

                            <option value="1">XS</option>
                            <option value="2">S</option>
                            <option value="3">M</option>
                            <option value="4">L</option>
                            <option value="5">XL</option>
                        </select>
                    </div>
                </div>
                <div >
                    {
                        carrito ? <Link to='/cart' className="btn btn-color btn-ir-carrito">Ir al carrito</Link> : <ItemCount initial={1} stock={10} onAdd={onAdd} />
                    }
                </div>

            </div>
        </>
    )
}

export default ItemDetail;
