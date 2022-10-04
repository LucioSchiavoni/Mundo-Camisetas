import React from 'react'

import CartWidget from '../components/CartWidget';
import { ItemListContainer } from '../components/ItemListContainer'
import Logo from '../components/Logo';
import NavBar from '../components/NavBar';

export const Home = () => {

    return (
        <>
            <div className='content-list'>
                <div className='input-content'>
                    <Logo />
                    <NavBar />

                    <form id='formulario'>
                        <input type="text" id='inputForm' className='input-nav' placeholder='Buscar..' />
                        <span className='span-input'><ion-icon name="search-outline"></ion-icon></span>

                    </form>
                    <div className='cart-nav'>
                        <CartWidget />
                    </div>
                </div>
                <div className='fondo-item-list'>
                    <ItemListContainer />
                </div>
            </div>

        </>
    )
}

export default Home;