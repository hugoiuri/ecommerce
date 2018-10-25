import React, { Component } from 'react';

import { Menu, Search, Cart } from '../components';

export default class CartPage extends Component {
    render() {
        return (
            <div className="container-fluid border">
                <Menu />
                <Search />
                <Cart />
            </div>
        );
    };
};