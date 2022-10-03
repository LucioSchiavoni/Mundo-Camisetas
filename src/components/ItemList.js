import React from 'react'

import Item from './Item'

export const ItemList = ({ data = [] }) => {

    return (

        data.map(productos =>
            <div className='grid-card'>
                <Item key={productos.id} info={productos} />
            </div>)
    )
}
