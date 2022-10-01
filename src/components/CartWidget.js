import React from 'react';
import { Link } from 'react-router-dom';




export const CartWidget = () => {
    return (
        <Link to='/cart'>
            <i className="bi bi-cart item-content"></i>
        </Link>
    );
};

export default CartWidget;