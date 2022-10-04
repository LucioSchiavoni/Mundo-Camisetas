import React from 'react'
import NavBar from '../components/NavBar';

import './style.css'

export const Inicio = () => {
    return (
        <>
            <div className='container-video'>
                <video autoPlay muted loop playsInline preload='none'>
                    <source src="https://www.qatar2022.qa/sites/default/files/2022-08/NIA_WorldCup%20TVC_30sec_MASTER_16x9_Website_V2_0.mp4" type='video/mp4' />
                </video>
                <div>
                    <NavBar />

                    <p className='titulo-qatar'>Bienvenido a...</p>
                    <h1 className='sub-title'>Mundo camisetas</h1>
                </div>
            </div>
        </>
    )
}

export default Inicio;