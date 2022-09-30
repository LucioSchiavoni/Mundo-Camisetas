import React from 'react';
import Logo from './Logo';
import './style.css';
import CartWidget from './CartWidget';
import { NavLink } from 'react-router-dom';


export const NavBar = () => {
    return (
        <header >
            <div className="logo-item"><Logo /></div>
            <ul className='list'>

                <li ><NavLink to='/' className='list-item'>Inicio</NavLink></li>
                <li ><NavLink to='/' className='list-item'>Alternativas</NavLink></li>
                <li ><NavLink to='/' className='list-item'> Contacto</NavLink></li>


                <input type="text" id='inputId' className='input-nav' placeholder='Buscar productos..' />
                <CartWidget />
            </ul>


        </header>
    );



};



export default NavBar;