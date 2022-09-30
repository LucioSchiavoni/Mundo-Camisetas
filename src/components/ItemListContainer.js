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
        <div className='body-container'>
            <div className='item-grid'>
                <ItemList data={data} />

            </div>
        </div>
    )
};

