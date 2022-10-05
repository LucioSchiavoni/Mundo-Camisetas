import React from 'react';
import { useState, useEffect } from 'react';
import { getItems } from '../api';
import { AwayList } from './AwayList';
import './style.css';;





export const AwayContainer = () => {
    const [data, setData] = useState();
    useEffect(() => {
        getItems().then(res => setData(res))
    }, [])

    return (
        <div className='body-container'>
            <div className='item-grid'>
                <AwayList data={data} />

            </div>
        </div>
    )
};


export default AwayContainer;