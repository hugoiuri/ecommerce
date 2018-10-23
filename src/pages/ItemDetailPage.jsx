import React, { Component } from 'react';

import { Menu, Search, Categories, ItemDetail } from '../components';

export default class ItemDetailPage extends Component {
    render() {
        return (
            <div className="container-fluid border">
                <Menu />
                <Search />
                <Categories />
                <ItemDetail />
            </div>
        );
    };
};