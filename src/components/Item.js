import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';


const Item = ({ info }) => {

    return (

        <div className='card-item'>
            <img className='item' src={info.img} alt="" />
            <hr />
            <h5 className="item-content">{info.name}</h5>
            <Link to={`/detalle/${info.id}`} className='btn btn-light'> Detalles</Link>
        </div>


    );
};


export default Item;