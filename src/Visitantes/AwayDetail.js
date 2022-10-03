import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../Cart/CartContext'
import ItemCount from '../components/ItemCount'
import NavBar from '../components/NavBar'



export const AwayDetail = ({ data }) => {

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
            <div className='card-item'>
                <img src={data.image2} className="item" alt="Imagen kit" />
                <h5 className="item-content">{data.Nombre}</h5>
                <p className="item-content">Marca: {data.Marca}</p>
                <p className="item-content"> Precio: ${data.Precio}</p>
                <br />
                {
                    carrito ? <Link to='/cartAway' className="btn btn-light">Terminar compra</Link> : <ItemCount initial={1} stock={10} onAdd={onAdd} />
                }
            </div>
        </>

    )
}

export default AwayDetail;