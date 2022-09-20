import React from 'react';
import './style.css';
import Portada from '../assets/img/logo.png'
export const Logo = () => {
    return (
        <img className='logo' src={Portada} width={100} />
    );
};

export default Logo;