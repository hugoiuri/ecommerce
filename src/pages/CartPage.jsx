import React, { Component } from 'react';

import Search from '../components/Search';

export default class CartPage extends Component {
    render() {
        return (
            <div className="container-fluid border">
                <Search />
            </div>
        );
    };
};