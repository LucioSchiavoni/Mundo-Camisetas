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

                <NavBar />






                <div data-aos="fade-up"
                    data-aos-duration="3000" className='titulo-qatar'>Bienvenido a...</div>

                <div data-aos="fade-up"
                    data-aos-duration="3000" className='sub-title'>Mundo camisetas</div>

                <ul className='footer'>

                    <li className='footer-item'> <a href='https://www.youtube.com/fifa/featured' ><ion-icon name="logo-youtube"></ion-icon></a> </li>

                    <li className='footer-item'><a href='https://www.instagram.com/fifaworldcup/' >   <ion-icon name="logo-instagram"></ion-icon>
                    </a></li>
                    <li className='footer-item'><a href='https://www.twitch.tv/easportsfifa' >   <ion-icon name="logo-twitch"></ion-icon>
                    </a></li>
                    <li className='footer-item'><a href='https://twitter.com/fifaworldcup_es' >     <ion-icon name="logo-twitter"></ion-icon>
                    </a></li>
                </ul>
            </div>

        </>
    )
}

export default Inicio;