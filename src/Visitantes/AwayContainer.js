import React, { useState, useEffect } from 'react';
import './style.css';;
import { getItems } from '../api';
import { AwayList } from './AwayList';



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