import React from 'react'
import NavBar from '../components/NavBar';

export const Contacto = () => {
    return (
        <>
            <NavBar />
            <div class="mb-3 contacto-item">

                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Deje su opinion...'></textarea>
            </div>
        </>
    )
}


export default Contacto;