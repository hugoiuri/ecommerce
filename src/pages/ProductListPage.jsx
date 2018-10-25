import React, { Component } from 'react';

import { ProductActions, ProductList } from '../components';

export default class ProductListPage extends Component {
    render() {
        return (
            <div className="container-fluid border">
                <ProductActions />
                <ProductList />
            </div>
        );
    };
}