import React from 'react';

import '../css/item-list.css'
import Product from './Product'

export default props => {
    return <div className="card-columns">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
    </div>
};