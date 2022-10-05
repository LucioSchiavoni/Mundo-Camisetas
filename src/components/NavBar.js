import React from 'react';

import './style.css';

import { NavLink } from 'react-router-dom';


export const NavBar = () => {
    return (
        <header  >



            <ul className='list'>
                <li ><NavLink to='/Home' className='list-item'><span><ion-icon name="shirt-outline"></ion-icon></span><span>Locales</span></NavLink></li>
                <li ><NavLink to='/Away' className='list-item'><span><ion-icon name="shirt"></ion-icon></span><span>Visitantes</span></NavLink></li>
                <li ><NavLink to='/Contacto' className='list-item'> <span><ion-icon name="call-outline"></ion-icon></span><span>Contacto</span></NavLink></li>

            </ul>

        </header >
    );



};



export default NavBar;