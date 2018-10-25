import React from 'react';
import { ItemCart, CartData } from '.';

import '../css/cart.css'

export default props => {
    return <div className="row cart">
        <div className="cart-list card-columns col-12 col-sm-8">
            <ItemCart />
            <ItemCart />
            <ItemCart />
            <ItemCart />
        </div>
        <div className="cart-data  bg-light col-12 col-sm-4">
            <CartData />
        </div>
    </div>
};
