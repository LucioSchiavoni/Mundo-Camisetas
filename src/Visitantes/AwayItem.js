import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';


const AwayItem = ({ info }) => {

    return (

        <div className="card img-card">
            <img src={info.image2} className="image" alt="image2" />
            <div className="card-body">
                <p className="card-text card-name"><b>{info.Nombre}</b></p>
                <Link to={`/detalleAway/${info.id}`} className='btn btn-dark' > Detalles</Link>
            </div>
        </div>


    );
};


export default AwayItem;