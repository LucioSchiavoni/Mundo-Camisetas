import React, { useState, useEffect } from 'react';
import './style.css';
import { ItemList } from './ItemList';
import { getItems } from '../api';




export const ItemListContainer = () => {
    const [data, setData] = useState();

    useEffect(() => {
        getItems().then(res => setData(res))
    }, [])



    return (
        <>
            {/* <input type="text" className='input-nav' placeholder='Buscar..' />
            <span className='span-input'><ion-icon name="search-outline"></ion-icon></span> */}
            <div className='body-container'>
                <div className='item-grid'>
                    <ItemList data={data} />

                </div>
            </div>
        </>
    )
};


export default ItemListContainer;