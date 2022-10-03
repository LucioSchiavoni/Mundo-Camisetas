import React from 'react';
import './style.css';
import Portada from '../assets/img/cup.png'
import { Link } from 'react-router-dom';

export const Logo = () => {
    return (
        <Link to='/' >
            <img className='logo' alt='logo' src={Portada} />
        </Link>

    );
};

export default Logo;