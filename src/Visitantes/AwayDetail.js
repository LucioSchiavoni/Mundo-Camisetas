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
            <div className='body-detail'>
                <NavBar />
                <div className='card-detail'>
                    <img src={data.image2} className='img-detail' alt='kit' />
                    <div>
                        <p className='text-detail'><b>Kit:</b> {data.Nombre}</p>
                        <p className='text-detail'><b>Marca:</b> {data.Marca}</p>
                        <p className='text-detail'> <b>Precio:</b> ${data.Precio}</p>
                    </div>
                </div>
                <div>
                    {
                        carrito ? <Link to='/cartAway' className="btn btn-color btn-ir-carrito">Ir al carrito</Link> : <ItemCount initial={1} stock={10} onAdd={onAdd} />
                    }
                </div>
            </div>
        </>

    )
}

export default AwayDetail;