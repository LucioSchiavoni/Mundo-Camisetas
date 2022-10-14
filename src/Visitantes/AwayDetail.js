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
            <div className='container-video-detail'>
                <video autoPlay muted loop playsInline preload='none'>
                    <source src='https://www.qatar2022.qa/sites/default/files/2022-10/FIFA_LIGHT%20THE%20SKY_SAVE%20THE%20DATE_HD.mp4' type='video/mp4' />
                </video>

                <div className='body-detail'>
                    <NavBar />
                    <div className='card-detail'>
                        <img src={data.image2} className='img-detail' alt='kit' />
                        <div>
                            <p className='text-detail'><b>Kit:</b> {data.Nombre}</p>
                            <p className='text-detail'><b>Marca:</b> {data.Marca}</p>
                            <p className='text-detail'> <b>Precio:</b> ${data.Precio}</p>
                            <select className="form-select select-btn" aria-label="Default select example">
                                <option defaultValue>Talle</option>

                                <option value="1">XS</option>
                                <option value="2">S</option>
                                <option value="3">M</option>
                                <option value="4">L</option>
                                <option value="5">XL</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        {
                            carrito ? <Link to='/cartAway' className="btn btn-color btn-ir-carrito">Ir al carrito</Link> : <ItemCount initial={1} stock={10} onAdd={onAdd} />
                        }
                    </div>
                </div>
            </div>
        </>

    )
}

export default AwayDetail;