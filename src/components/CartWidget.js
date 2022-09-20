import React from 'react';
import { Link } from 'react-router-dom';




export const CartWidget = () => {

    return (
        <Link to='../Cart/CartContext'>
            <i className="bi bi-cart item-content"></i>
        </Link>
    );
};

export default CartWidget;