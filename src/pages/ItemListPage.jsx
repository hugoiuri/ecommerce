import React, { Component } from 'react';

import { Menu, Search, Categories, ItemList } from '../components';

export default class ItemListPage extends Component {
    render() {
        return (
            <div className="container-fluid border">
                <Menu />
                <Search />
                <Categories />
                <ItemList />
            </div>
        );
    };
};