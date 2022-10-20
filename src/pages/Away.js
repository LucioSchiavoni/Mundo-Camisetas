import React from 'react'
import CartWidget from '../components/CartWidget'
import NavBar from '../components/NavBar'
import AwayContainer from '../Visitantes/AwayContainer'
import Logo from '../components/Logo'

export const Away = () => {
    return (<>

        <Logo />
        <NavBar />

        <div className='cart-nav'>
            <CartWidget />
        </div>



        <div className='fondo-item-list'>
            <AwayContainer />
        </div>
    </>
    )
}
