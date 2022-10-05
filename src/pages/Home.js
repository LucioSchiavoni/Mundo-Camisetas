import React from 'react'

import CartWidget from '../components/CartWidget';
import { ItemListContainer } from '../components/ItemListContainer'
import Logo from '../components/Logo';
import NavBar from '../components/NavBar';

export const Home = () => {



    return (
        <>
            <div >
                <Logo />
                <NavBar />
                <CartWidget />
            </div>
            <div className='fondo-item-list'>
                <ItemListContainer />
            </div>


        </>
    )
}

export default Home;