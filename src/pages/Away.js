import React from 'react'
import CartWidget from '../components/CartWidget'
import NavBar from '../components/NavBar'
import AwayContainer from '../Visitantes/AwayContainer'
import Logo from '../components/Logo'

export const Away = () => {
    return (<>

        <Logo />
        <NavBar />
        {/* <div className='input-content'>
                <form id='formulario'>
                    <input type="text" id='inputForm' className='input-nav' placeholder='Buscar..' />
                    <span className='span-input'><ion-icon name="search-outline"></ion-icon></span>

                </form> */}
        <div className='cart-nav'>
            <CartWidget />
        </div>



        <div className='fondo-item-list'>
            <AwayContainer />
        </div>
    </>
    )
}
