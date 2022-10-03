import React from 'react'
import AwayItem from './AwayItem'



export const AwayList = ({ data = [] }) => {

    return (

        data.map(productos =>
            <div className='grid-card'>
                <AwayItem key={productos.id} info={productos} />
            </div>)
    )
}

export default AwayList;