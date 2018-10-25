import React, { Component } from 'react';

import { ProductForm, ProductActions } from '../components'


export default class ProductPage extends Component {
    render() {
        return (
            <div className="container-fluid border">
                <ProductActions />
                <ProductForm/>
            </div>
        );
    };
};